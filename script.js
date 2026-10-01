/* AnthroSpec Advisory LLC — site interactions (Tailwind build) */

(function () {
  "use strict";

  /* ---------- Mobile nav ---------- */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("mobileMenu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("hidden");
      menu.classList.toggle("flex");
    });
  }

  /* ---------- Footer year ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Contractor portal gate ----------
     Lightweight passcode gate for a static site.
     CHANGE THIS to your own passcode before publishing.
     Note: this is obfuscation, not real authentication —
     see the security note on portal.html. */
  var GATE_CODE = "anthrospec";

  var gateCard = document.getElementById("gateCard");
  var gateForm = document.getElementById("gateForm");
  var gateInput = document.getElementById("gateInput");
  var gateError = document.getElementById("gateError");
  var portalContent = document.getElementById("portalContent");

  function unlock() {
    if (gateCard) gateCard.classList.add("hidden");
    if (portalContent) portalContent.classList.remove("hidden");
    try { sessionStorage.setItem("anthrospec_portal", "1"); } catch (e) {}
  }

  if (gateForm && portalContent) {
    var alreadyIn = false;
    try { alreadyIn = sessionStorage.getItem("anthrospec_portal") === "1"; } catch (e) {}
    if (alreadyIn) {
      unlock();
    } else {
      gateForm.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var val = (gateInput.value || "").trim().toLowerCase();
        if (val === GATE_CODE) {
          unlock();
        } else {
          gateError.textContent = "Incorrect passcode. Please try again.";
          gateInput.value = "";
          gateInput.focus();
        }
      });
    }
  }
})();
