let menu = document.getElementById("menu");
    let menuBtn = document.getElementById("menuBtn");
    let menuIcon = document.getElementById("menuIcon");

    menuBtn.addEventListener("click", function() {
    if (menu.style.display === "block") {
        menu.style.display = "none";         // اخفي القايمة
        menuIcon.src = "../images/icon-hamburger.svg";           // رجّع صورة المنيو
    } else {
        menu.style.display = "block";        // اظهر القايمة
        menuIcon.src = "../images/icon-close.svg";          // بدّل لصورة الإكس
    }
});