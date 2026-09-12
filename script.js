
// For closing ad
var adBar = document.querySelector(".ad_container")

document.getElementById("ad_close").addEventListener("click",

    function () {
        adBar.style.display = "none"
    }
)

// For side navbar opening and closing
var sideNavMenu = document.getElementById("side_navbar_menu")
var sidenavbar = document.querySelector(".side_navbar")

sideNavMenu.addEventListener("click", function () {
    sidenavbar.style.marginLeft = "0%"
})

document.getElementById("side_navbar_close").addEventListener("click", () => {
    document.querySelector(".side_navbar").style.marginLeft = "-60%"
})

// Slide img

var slideleftbutton = document.getElementById("slide_left")
var sliderightbutton = document.getElementById("slide_right")
var slideimage = document.querySelector(".slide_image_container")
var slidemargin = 0

sliderightbutton.addEventListener("click", function () {

    slidemargin = slidemargin + 100

    slideimage.style.marginLeft = "-" + slidemargin + "vw";
    slideleftbutton.style.color = "#ffffff"
    if (slidemargin == 200) {
        sliderightbutton.style.display = "none"
    }
})

slideleftbutton.addEventListener("click", function () {

    if (slidemargin == 0) {
        slideleftbutton.style.color = "#808080"
        setTimeout(function () {
            slideleftbutton.style.color = "#ffffff"
        }, 2000)
    }
    else {
        slidemargin = slidemargin - 100
        slideimage.style.marginLeft = "-" + slidemargin + "vw";
        sliderightbutton.style.display = "block"
        if (slidemargin == 0) {
            slideleftbutton.style.color = "#808080"
            setTimeout(function () {
                slideleftbutton.style.color = "#ffffff"
            }, 2000)
        }
    }
})

var likebuttons = document.querySelectorAll(".like_button")

likebuttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {

        if (e.target.src.indexOf("blackheart") > 0) {
            e.target.src = "images/icons/redheart.png"
        }
        else {
            e.target.src = "images/icons/blackheart.png"
        }
    })
})

window.addEventListener("scroll", function () {
    var elements = this.document.querySelectorAll(".scroll_animation")
    elements.forEach((el) => {
        windowHeight = window.innerHeight
        var elbound = el.getBoundingClientRect()
        if (windowHeight > elbound.top - 100) {
            el.classList.remove("remove_scroll_animation")
        }
    })
})