// ===============================
// Select Required Elements
// ===============================

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const submitBtn = document.getElementById("submitBtn");
const bottomText = document.getElementById("bottomText");
const toggleForm = document.getElementById("toggleForm");
const form = document.getElementById("loginForm");

// ===============================
// Current Form State
// ===============================

let isLogin = true;

// ===============================
// Toggle Login <-> Register
// ===============================

toggleForm.addEventListener("click", function (event) {
  // Prevent page refresh
  event.preventDefault();

  if (isLogin) {
    // Change to Register Form
    title.textContent = "Create Account";
    subtitle.textContent = "Join FinTrack Pro";

    submitBtn.textContent = "Register";
    submitBtn.style.backgroundColor = "#28a745";

    bottomText.textContent = "Already have an account?";
    toggleForm.textContent = "Login here";

    isLogin = false;
  } else {
    // Change back to Login Form
    title.textContent = "Welcome Back";
    subtitle.textContent = "Login to FinTrack Pro";

    submitBtn.textContent = "Login";
    submitBtn.style.backgroundColor = "#1565c0";

    bottomText.textContent = "Don't have an account?";
    toggleForm.textContent = "Register here";

    isLogin = true;
  }
});

// ===============================
// Handle Form Submit
// ===============================

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    alert("Please fill all fields.");
    return;
  }

  if (isLogin) {
    alert("Logging in...");
  } else {
    alert("Registering account...");
  }
});
