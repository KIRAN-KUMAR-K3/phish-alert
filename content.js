function isPhishing(url) {
  const suspiciousPatterns = [/\.xyz$/, /free-/, /login-/];
  return suspiciousPatterns.some((pattern) => pattern.test(url));
}

document.querySelectorAll("a").forEach((link) => {
  if (isPhishing(link.href)) {
    link.style.color = "red";
    link.style.fontWeight = "bold";
    link.setAttribute("title", "⚠ Potential Phishing Link");
  }
});

