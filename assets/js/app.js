"use strict";

let header = $(`
<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="navbar">
<a class="navbar-brand" href="assets/img/logo.png" target="_blank"><img src="assets/img/logo.png" alt="logo" width="80" height="80" /></a>
<div class="hamburger_wrapper navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

  <div id="js-hamburger" class="hamburger">
    <span class="first"></span>
    <span class="second"></span>
    <span class="third"></span>
  </div>

</div>

<div class="collapse navbar-collapse " id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto" id = "navbar-content">
   <li class="nav-item nav-item-hover"><a class="nav-link" href="./index">Home</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="./aboutus">About Us</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="./staff">Staff</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="./servers">Servers</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="./discord">Discord</a></li>
   <li class="nav-item">
   <input type="checkbox" class="dark_toggler" aria-label="Toggle Light Mode" onclick="toggle_light_mode()">
   </li>
  </ul>
</div>
</nav>`);

// Footer

let footer = $(`
<footer class="footer sticky-bottom"  style="background-color:#2b2a2a;">
  <div class="p-4">
    <div class="container-fluid quote-container">
      <div class="quotes"    style="text-align:center;">
      <!--SVG code for quote-left icon-->
      <!--<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1.5em" height="1.5em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M7 21a4 4 0 0 1-4-4c0-1.473 1.333-6.14 4-14h2L7 13a4 4 0 1 1 0 8zm10 0a4 4 0 0 1-4-4c0-1.473 1.333-6.14 4-14h2l-2 10a4 4 0 1 1 0 8z" fill="#fff" fill-rule="evenodd"/></svg>-->
      </div>
    </div>

    <div class="rounded-social-buttons tag">
    <a class="social-button instagram" href="https://discord.gg/9kGbdNNyUt" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
      <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
    </svg>
    </a>

    <a class="social-button instagram" href="https://www.instagram.com/neb_1803/" target="_blank" >
    <!-- svg code for instagram icon -->
      <svg class="instagram-icon-footer" x="0px" y="0px" viewBox="0 0 202.5 202.5"
        style="enable-background:new 0 0 202.5 202.5;">
        <circle id="littleCircle" class="st0" cx="101" cy="101.5" r="18.9" />
        <circle id="shutter" class="st0" cx="101" cy="101.5" r="8" />
        <circle id="lens" class="st0" cx="125.5" cy="78.6" r="2.9" />
        <path id="camera" class="st0" d="M79,60.5h44c10.5,0,19,8.5,19,19v44c0,10.5-8.5,19-19,19H79c-10.5,0-19-8.5-19-19v-44                                                                            C60,69,68.5,60.5,79,60.5z" />
      </svg>
    </a>

    <a class="social-button github" href="https://github.com/NEB1803/" target="_blank">
    <!-- SVG code for Github icon -->
    <svg class="github-icon-footer" width="45px" height="45px" viewBox="0 0 300 300">
        <!-- body -->
        <path id="body" d="M112.5,234.4v43.1c24.5,7.5,50.5,7.5,75,0V225c-0.4-11.1-4.9-21.6-12.7-29.6c30-3.4,59.5-23.5,59.5-64.1
                                    c0.9-13.9-3.3-27.7-11.8-38.7c4.1-11.6,3.7-24.4-1.3-35.7c0,0-11.2-3.7-37.5,13.8c-22.1-6.1-45.3-6.1-67.4,0
                                    C90.6,53.3,78.9,56.8,78.9,56.8c-5,11.3-5.4,24.1-1.3,35.7c-8.5,11.1-12.7,24.8-11.9,38.7c0.2,33.8,26.4,61.8,60.2,64.1
                                    c-5,4.7-8.1,11.1-8.6,18" />
        <!-- arm                             -->
        <path id="arm" d="M125.2,213.4c-13.9,7.8-31.5,2.8-39.3-11.2c-4.3-7.7-12-12.8-20.7-13.8c-11.2,0-4.6,6.4,0,9.4
                                    c6,5.1,10.8,11.5,13.8,18.8c2.9,7.4,7.7,24.1,41.5,17.8" />
    </svg>
    </a>
      <div>
        <li><basefont><a href="https://discord.ursidae.ga/ target="_blank">Copyright © URSIDAE 2021</a>                    created by <a href="https://neb1803.tk/" target="_blank">NEB1803</a></basefont></li>
      </div>
    </div>
    </div>
</footer>
`);

//"Scroll to top" button
let upArrow = $(`
  <button id="btnScrollToTop" onclick="scrollToTop()"><i class="fas fa-2x fa-angle-up"></i></button>
  <link rel="stylesheet" type="text/css" href="./css/style.css" />
  })
`);

//function for the "Scroll To Top" button to detect the footer
$(document).ready(function () {
  $(window).scroll(function () {
    //The button will be hidden until we scroll more than the window's height
    if ($(window).scrollTop() < $(window).height()) {
      $("#btnScrollToTop").css("visibility", "hidden");
    } else {
      $("#btnScrollToTop").css("visibility", "visible");
      //The button will change it's color when it hits the footer
      if (
        $(window).scrollTop() + $(window).height() >
        $(document).height() - 838
      ) {
        // 838 should be changed if footer's height is changed so that the button changes it's color exactly when it hits the footer (preferably 14 less than the computer height of the footer)
        $("#btnScrollToTop").css("background-color", "#6a00bb");
      } else {
        $("#btnScrollToTop").css("background-color", "#6a00bb");
      }
    }
  });
});

//function to scroll to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// Window Loads
$(function () {
  let bodyElement = $(`body`);
  bodyElement.prepend(header);
  bodyElement.append(footer);
  bodyElement.append(upArrow);
  $("#btnScrollToTop").css("visibility", "hidden");

  //toggler hamburger functions
  const menuBtn = document.querySelector(".navbar-toggler");
  let menuOpen = false;
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
    }
  });
});

// function for toggling hamburger is-active class

$(function () {
  $("#js-hamburger").on("click", function () {
    $(this).toggleClass("is-active");
  });
});

// Navbar current page highlight

let loader = document.querySelector(".loader-container");

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disappear");
}
$(function () {
  $("a.nav-link").each(function () {
    if ($(this).prop("href") == window.location.href) {
      $(this).addClass("current-link");
    }
  });
});

//function to remove underline on hover

$(document).ready(function () {
  $("a.nav-link").hover(
    function () {
      $(this).removeClass("current-link");
    },
    function () {
      if ($(this).prop("href") == window.location.href) {
        $(this).addClass("current-link");
      }
    }
  );
});

//consistent dark mode for page change
if (localStorage.getItem("lightMode") == "dark") {
  var app = document.getElementsByTagName("HTML")[0];
  app.setAttribute("light-mode", "dark");

  //to add dark theme to nav bar after its been loaded
  window.addEventListener("load", function () {
    var nav = document.getElementById("navbar");
    nav.classList.add("dark-theme");
  });

  var sc = document.getElementsByClassName("socialicon");
  for (var i = 0; i < sc.length; i++) {
    sc[i].classList.add("dsc");
  }
} else {
  localStorage.setItem("lightMode", "light");
}

function toggle_light_mode() {
  console.log(localStorage.getItem("lightMode"));
  var app = document.getElementsByTagName("HTML")[0];
  var nav = document.getElementById("navbar");
  if (localStorage.lightMode == "dark") {
    localStorage.lightMode = "light";
    app.setAttribute("light-mode", "light");
    nav.classList.remove("dark-theme");
    var sc = document.getElementsByClassName("socialicon");
    for (var i = 0; i < sc.length; i++) {
      sc[i].classList.remove("dsc");
    }
  } else {
    nav.classList.add("dark-theme");
    localStorage.lightMode = "dark";
    app.setAttribute("light-mode", "dark");
    var sc = document.getElementsByClassName("socialicon");
    for (var i = 0; i < sc.length; i++) {
      sc[i].classList.add("dsc");
    }
  }
}

window.addEventListener("storage", function () {
  if (localStorage.lightMode == "dark") {
    app.setAttribute("light-mode", "dark");
  } else {
    app.setAttribute("light-mode", "light");
  }
});

// Function to remove scroll bar during preload
$(window).on("load", function () {
  setTimeout(function () {
    $(".no-scroll-preload").css("overflow", "visible");
  }, 1000);
  $(".loader-container").fadeOut(2500);
});
