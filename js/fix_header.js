window.onscroll=function () { myFunction(); };

function myFunction() {
    let navbar=document.getElementById("site-navbar");
    if (window.pageYOffset>0) {
        navbar.classList.add("sticky");
        document.getElementById("sidebarMenu").style.marginTop="39px";
    } else {
        navbar.classList.remove("sticky");
        document.getElementById("sidebarMenu").style.marginTop="54px";
    }
}