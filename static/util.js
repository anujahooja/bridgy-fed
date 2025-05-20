// Handles state of login buttons and input fields on the settings page.
var openedId;


 // Clear the auth_entity query param on /settings.
window.onload = function () {
  url = new URL(window.document.documentURI)
  if (url.pathname == '/settings' && url.searchParams.has('auth_entity')) {
    window.history.replaceState(null, '', '/settings')
  }
}

// Handles login buttons and input fields on the settings page.
function toggleInput(button_id) {
  var button = document.getElementById(button_id);
  var input = document.getElementById(button_id + "-input");
  var submit = document.getElementById(button_id + "-submit");
  
  if (openedId && openedId != button_id) {
    document.getElementById(openedId).classList.remove("slide-up");

    document.getElementById(openedId + "-submit").classList.remove("visible");
    document.getElementById(openedId + "-input").classList.remove("visible");

    openedId = null;
  }

  if(input.classList.contains("visible")){
    submit.classList.remove("visible");
    input.classList.remove("visible");

    button.classList.remove("slide-up");

    openedId = null;
  } else {
    openedId = button_id;

    button.classList.add("slide-up");

    submit.classList.add("visible");
    input.classList.add("visible");
    input.focus();
  }
}

// Used on setting page to change an account's bridging state.
function bridgingSwitch(event) {
  const checkbox = event.currentTarget;
  event.currentTarget.closest('form').submit()
}
