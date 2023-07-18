var activeContentNumber = null;

function showContent(contentNumber) {
  if (activeContentNumber !== null) {
    hideContent(activeContentNumber);
  }

  var content = document.getElementById("content" + contentNumber);
  content.classList.add("active");  
  activeContentNumber = contentNumber;
  var icon = document.getElementById("icon" + contentNumber);
  icon.classList.add("active");
}

function hideContent(contentNumber) {
  var content = document.getElementById("content" + contentNumber);
  content.classList.remove("active");
  var icon = document.getElementById("icon" + contentNumber);
  icon.classList.remove("active");
}

