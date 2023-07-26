

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
        
        var navLink = document.querySelector('.checkbox__input');
        const navInputBox = document.getElementById('searchbox-input');
        console.log(navInputBox)
        if (navLink.classList.contains('show')) {
            console.log(navLink.classList.contains('show'))
            navInputBox.checked = true
        }
    }, 1000);
});