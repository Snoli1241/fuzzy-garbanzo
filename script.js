function checkPassword(value) {
  const correctPassword = "1234";
  if (value.length === 4) {
    if (value === correctPassword) {
      document.getElementById("screen1").classList.add("hidden");
      document.getElementById("screen2").classList.remove("hidden");
    } else {
      alert("Incorrect code");
      document.getElementById("passwordInput").value = "";
    }
  }
}

function goToThirdImage(event) {
  // Optional: only allow tapping in a specific area
  // e.g., check event.offsetX / event.offsetY
  document.getElementById("screen2").classList.add("hidden");
  document.getElementById("screen3").classList.remove("hidden");
}
