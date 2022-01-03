var dropdown = document.getElementsByClassName("dropdown_content")[0]
var seta = document.getElementsByClassName("fa-caret-up")[0]
var bttdropdown = document.getElementsByClassName("btt_dropdown")[0]
var menu = document.getElementsByClassName("menu")[0]

function show_menu() {
    let menu = document.getElementById("my_menu")
    if (menu.className == "menu notappear") {
        menu.className += "menu responsive"
    } else {
        menu.className = "menu notappear"
    }
}

function mouseenter() {
    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
        show_dropdown()
    }
}

function show_dropdown() {
    dropdown.style.display = "block"
    seta.style.transform = "rotate(180deg)"
    seta.style.transition = "0.2s"
    bttdropdown.style.color = "#e8b4bc"
}

function hide_dropdown() {
    dropdown.style.display = "none"
    seta.style.transform = "rotate(360deg)"
    bttdropdown.style.color = "#F5E3E0"
}

function show_hide() {
    if (dropdown.style.display == "block"
    ) {
        hide_dropdown()
    }
    else {
        show_dropdown()
    }
}