var sel = document.getElementById("program-list")
function getSelectedOption() {
  var opt;
  for ( var i = 0, len = sel.options.length; i < len; i++ ) {
  opt = sel.options[i];
  if ( opt.selected === true ) {
      break;
  }
}
return opt;
}
function sendMessage() {
  var opt = getSelectedOption()

  info = "None sent";
  let theinfo = document.getElementById("email").value;
  if (theinfo) {
    info = theinfo;
  } else {
    info = "No email sent";
  }

  email = "None sent";
  let theEmail = document.getElementById("email").value;
  if (theEmail) {
    email = theEmail;
  } else {
    email = "No email sent";
  }

  let themsg = document.getElementById("msg").value;
  if (themsg) {
    text = themsg;
  } else {
    text = "No message set";
  }
  const request = new XMLHttpRequest();
  request.open("POST", "");

  request.setRequestHeader("Content-type", "application/json");

  const params = {
    username: "Client",
    avatar_url: "",
    content:
      "<@285942521832407040> you have a client!, this is the msg: " +
      text +
      "  email is: " +
      email +
      " There contact info is: " +
      info +
      ". They want a: " +
      opt.text,
    discriminator: "7479",
  };

  request.send(JSON.stringify(params));
}
