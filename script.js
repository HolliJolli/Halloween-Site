window.onload = function () {
  // Simulate device information extraction
  document.getElementById("os").innerText = "Operating System: " + getOS();
  document.getElementById("browser").innerText = "Browser: " + getBrowser();
  document.getElementById("resolution").innerText =
    "Screen Resolution: " + window.screen.width + "x" + window.screen.height;

  // Fake IP Address (You can't access real IPs directly with JS)
  document.getElementById("ip").innerText = "IP Address: 192.168.0.1"; // Mock IP

  // After a delay, show the phishing message
  setTimeout(() => {
    document.getElementById("info").style.display = "none";
    document.getElementById("message").classList.remove("hidden");
  }, 5000);
};

// Mock function to get OS information
function getOS() {
  let userAgent = window.navigator.userAgent;
  if (userAgent.indexOf("Win") !== -1) return "Windows";
  if (userAgent.indexOf("Mac") !== -1) return "MacOS";
  if (userAgent.indexOf("Linux") !== -1) return "Linux";
  return "Unknown OS";
}

// Mock function to get Browser information
function getBrowser() {
  let userAgent = window.navigator.userAgent;
  if (userAgent.indexOf("Chrome") !== -1) return "Google Chrome";
  if (userAgent.indexOf("Firefox") !== -1) return "Mozilla Firefox";
  if (userAgent.indexOf("Safari") !== -1 && userAgent.indexOf("Chrome") === -1)
    return "Safari";
  return "Unknown Browser";
}
