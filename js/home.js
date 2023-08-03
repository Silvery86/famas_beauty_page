// Mouse over text replace

// Philosophy section
document.addEventListener("DOMContentLoaded", function () {  
  setTimeout(() => {
    var headingContent = document.querySelectorAll('.philosophy__content .philosophy__image .image__icon');
    var textContent = document.querySelector('.philosophy__content .philosophy__detail .image__content-replace');
   
    headingContent.forEach(function (element) {
        var hiddenContent = element.querySelector('.image__content');
        
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

// Skinreborn section
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

// News section

document.addEventListener("DOMContentLoaded", function () {  
  setTimeout(() => {
    var headingContent = document.querySelectorAll('.news__body .body__title');
    var textContent = document.querySelector('.news__body .body__detail');
    headingContent.forEach(function (element) {
        var hiddenContent = element.querySelector('.body__detail-replace');
        
        element.addEventListener("click", function () {
            setTimeout(() => {
              textContent.classList.remove("focus");
            }, 500);
            var textHtml = hiddenContent.innerHTML;
            console.log(textHtml);
            textContent.classList.add("focus");
            textContent.innerHTML = textHtml; // Show the hidden content in text__content
        });
    });
  }, 1000);
});

// Fixed navbar when scroll down

document.addEventListener('DOMContentLoaded', function () {
  var shrinkHeader = 199;
  window.addEventListener('scroll', function () {
      var scroll = getCurrentScroll();
     
      if (scroll > shrinkHeader) {
          document.getElementById('navigation').classList.add('fixed');
         
      } else {
          document.getElementById('navigation').classList.remove('fixed');
          
      }
  });

  function getCurrentScroll() {
      return window.scrollY || document.documentElement.scrollTop;
  }
});