chrome.runtime.onInstalled.addListener(() => {
  console.log("Phishing Link Detector Installed");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "checkPhishing") {
    const suspiciousPatterns = [/\.xyz$/, /free-/, /login-/];
    const isPhishing = suspiciousPatterns.some((pattern) => pattern.test(request.url));
    sendResponse({
      message: isPhishing ? "⚠ This might be a phishing link!" : "✅ This link seems safe.",
      color: isPhishing ? "red" : "green"
    });
  }
});

