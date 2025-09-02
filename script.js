const startBtn = document.getElementById("startBtn");
const output = document.getElementById("output");

// Check if browser supports speech recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = true; // Keep listening
recognition.interimResults = true; // Show live results
recognition.lang = "en-US"; // Language

// Start recognition on button click
startBtn.addEventListener("click", () => {
  recognition.start();
  output.innerHTML = "Listening...";
});

// Capture results
recognition.onresult = (event) => {
  let transcript = "";
  for (let i = event.resultIndex; i < event.results.length; i++) {
    transcript += event.results[i][0].transcript;
  }
  output.innerHTML = transcript;
};

// Error handling
recognition.onerror = (event) => {
  output.innerHTML = "Error: " + event.error;
};
