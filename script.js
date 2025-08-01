function handlePinInput(value) {
  const correctCode = "1234";

  // Fill the boxes with dots or blank
  for (let i = 0; i < 4; i++) {
    const box = document.getElementById(`box${i + 1}`);
    box.textContent = value[i] ? "•" : "";
  }

  // Check for full input
  if (value.length === 4) {
    if (value === correctCode) {
      document.getElementById("screen1").classList.add("hidden");
      document.getElementById("screen2").classList.remove("hidden");
    } else {
      alert("Incorrect code");
      document.getElementById("passwordInput").value = "";
      handlePinInput("");
    }
  }
}

function goToThirdImage(event) {
  // Optional: add tap region logic if needed
  document.getElementById("screen2").classList.add("hidden");
  document.getElementById("screen3").classList.remove("hidden");
}
