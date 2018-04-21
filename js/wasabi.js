jQuery(document).ready(function($) {
  // Store our modal trigger DOM element.
  const clientModalTrigger = document.querySelector("#client-modal");

  // On click, fire the modal.
  clientModalTrigger.addEventListener("click", () => {
    // This delay prevents the click from auto-closing the modal.
    setTimeout(() => {
      vex.dialog.prompt({
        className: "vex-theme-default",
        unsafeMessage: `<h6>client login</h6>
        <p>For personal privacy, client galleries are password protected. To login, the password is "YYYYMMDDlastname," where the date is the day of the shoot (wedding day or engagement session) and last name can be either last name. Passwords are case-sensitive, and names are always lowercase.</p>
        <p>For example, the password for a July 3, 2018 wedding between John Smith and Sarah Kline would be either <strong>20180703smith</strong> or <strong>20180703kline</strong>.</p>`,
        placeholder: "20180703kline",
        buttons: [$.extend({}, vex.dialog.buttons.YES, { text: "Submit" })],
        callback: function(value) {
          location.href =
            "http://www.wasabiphotography.com/galleries/" +
            document.querySelector(".vex-dialog-prompt-input").value;
          return false;
        }
      });
    }, 250);
  });
});