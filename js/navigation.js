let burger = document.querySelector(".burger-navbar");
let navigation = document.querySelector(".toggle-navbar");
let navbar_overlay = document.querySelector(".navbar-overlay");
let search_menu = document.querySelector(".search-menu");
let search_button = document.querySelector(".search-navbar");
let body = document.querySelector("body");
let active = 0;

//navbar
burger.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("inactive");
  navigation.style.width = "200px";
  navigation.style.height = "100%";
  navigation.style.left = 0;
  navbar_overlay.style.width = "100%";
  navbar_overlay.style.height = "100%";

  active ^= 1;
});

//overlay
navbar_overlay.addEventListener("click", (e) => {
  e.preventDefault();
  // alert("clicked");
  navigation.style.width = "0";
  navigation.style.left = "-300px";
  navbar_overlay.style.width = "0";

  active ^= 1;
  // navigation.style.display = "none";
});

//search bar
search_button.addEventListener("click", (e) => {
  e.preventDefault();
  search_menu.style.width = "100%";
  search_menu.style.height = "3rem";
  search_menu.style.top = "20px";
});

//later for navigation with phone
// body.addEventListener("touchstart",e=>{
//     if(active){
//         navigation.style.width = "0";
//     }
// })
