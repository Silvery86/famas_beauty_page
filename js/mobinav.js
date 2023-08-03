

document.addEventListener("DOMContentLoaded", function () {  
    setTimeout(() => {
        const mainContent = document.getElementById('main-content');
        const navInput = document.getElementById('nav-mobile-input');
        
        navInput.onclick = function(){
            mainContent.classList.toggle("slide")
        }
    }, 1000);
});

document.addEventListener("DOMContentLoaded", function () {  
    setTimeout(() => {
        var overlayPage = document.getElementById('overlay');
        var searchBox = document.querySelector('.mobinav__searchbox');
        
        var searchBoxContent = document.querySelector(".mobinav__searchbox .searchbox__content");
        
        searchBox.addEventListener("click", function (event) {
            searchBoxContent.classList.add("show");
            overlayPage.style.display = 'block';
            event.preventDefault();
            
        });
        var langBtn = document.querySelector('.mobinav__language .language__btn i')
        var langMenu = document.querySelector(".mobinav__language .language__menu")
        langBtn.addEventListener('click', function (event) {
                langMenu.classList.add("show");
                overlayPage.style.display = 'block';
                event.preventDefault();
            });
            
            overlayPage.addEventListener('click', function () {
                searchBoxContent.classList.remove("show");
                langMenu.classList.remove("show");
                overlayPage.style.display = 'none';
            });
    }, 1000);
});

