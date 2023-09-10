const curlInput = doccument.getElementById("curl");
const classInput = document.getElementsByClassName("input-label");

classInput.addEventListener("click", event => {
    if (event.target.tagName === "DIV") {
      curlInput.value = event.target.textContent;
      classInput.innerHTML = "";
    }
});