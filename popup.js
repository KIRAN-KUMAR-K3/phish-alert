document.getElementById("checkUrl").addEventListener("click", () => {
  const url = document.getElementById("urlInput").value;
  
  chrome.runtime.sendMessage({ action: "checkPhishing", url }, (response) => {
    document.getElementById("result").innerText = response.message;
    document.getElementById("result").style.color = response.color;
  });
});
s
