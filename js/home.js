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


document.addEventListener("DOMContentLoaded", function () {
  
  setTimeout(() => {
    var headingContent = document.querySelectorAll('.skinreborn__map .heading__content');
    var textContent = document.querySelector('.skinreborn__map .skinreborn_text_replace');
    headingContent.forEach(function (element) {
        var hiddenContent = element.querySelector('.hidden__content');
        
        element.addEventListener("mouseenter", function () {
            setTimeout(() => {
              textContent.classList.remove("active");
            }, 500);
            var textHtml = hiddenContent.innerHTML;
            console.log(textHtml);
            textContent.classList.add("active");
            textContent.innerHTML = textHtml; // Show the hidden content in text__content
        });

       

        
    });
  }, 1000);
});
