import jwtDecode from "jwt-decode";

function checkUser() {
  return localStorage.getItem("token") ? true : false;
}

function getLoggedInUser() {
  try {
    let token = localStorage.getItem("token");
    return jwtDecode(token);
  } catch (ex) {
    return null;
  }
}
function checkAdmin() {
  if (checkUser()) {
    if (getLoggedInUser().role == "admin") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

export { checkUser, getLoggedInUser, checkAdmin };
