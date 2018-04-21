(function($) {
  $(window).load(function() {
    // Store our modal trigger DOM element.
    const clientModalTriggers = document.querySelectorAll(".clients-link");
    vex.defaultOptions.closeAllOnPopState = false;

    // On click, fire the modal.
    clientModalTriggers.forEach(trigger => {
      trigger.addEventListener("click", () => {
        triggerVex();
      }); // trigger.click()
    }); // Triggers.forEach()

    function triggerVex() {
      vex.dialog.prompt({
        className: "vex-theme-default",
        unsafeMessage: `
        <span id="close-vex" onClick="vex.closeAll()">X</span>
        <h6>client login</h6>
        <p>For personal privacy, client galleries are password protected. To login, the password is "YYYYMMDDlastname," where the date is the day of the shoot (wedding day or engagement session) and last name can be either last name. Passwords are case-sensitive, and names are always lowercase.</p>
        <p>For example, the password for a July 3, 2018 wedding between John Smith and Sarah Kline would be either <strong>20180703smith</strong> or <strong>20180703kline</strong>.</p>`,
        placeholder: "20180703kline",
        buttons: [$.extend({}, vex.dialog.buttons.YES, { text: "Submit" })],
        callback: function(value) {
          if (value) {
            location.href =
              "http://www.wasabiphotography.com/galleries/" +
              document.querySelector(".vex-dialog-prompt-input").value;
          }
          return false;
        } // callback
      }); // vex.dialog.prompt
    }
  });
})(jQuery);
