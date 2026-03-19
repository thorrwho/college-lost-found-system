const BASE_URL = "http://localhost:5000";

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  window.location.href = "login.html";
}

function requireAuth() {
  if (!localStorage.getItem("token")) {
    window.location.href = "login.html";
  }
}