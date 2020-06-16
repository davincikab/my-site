// toggle navigation bar
var toggleButton = document.getElementById('toggle-nav');
var menu = document.getElementById('nav-list');
var nav = document.getElementById('navbar');
var navIsopen = false;
var dataUrl = 'projects.json';

// spinners

// add Event listener
toggleButton.addEventListener('click', function(e){
    // console.log(menu.offsetHeight);
    menu.classList.toggle('isOpen');
    navIsopen = !navIsopen;
   
    // update the icon
    this.textContent = navIsopen ? '\u{2715}' : '\u{2630}';
  
});

// scroll event
window.onscroll = function(e) {
    let height = window.pageYOffset;
    
    height > 150 ? nav.classList.add('navbar-white') : nav.classList.remove('navbar-white');
}

// Animated scroll
var scroll = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 1000/60)};

var scrollElements = document.querySelectorAll('.media');

// function loop(){
//     scrollElements.forEach(el => {
//         if(isElementInViewPort(el)){
//             el.classList.add('media-animate')
//         }else {
//             el.classList.remove('media-animate');
//         }
//     });

//     scroll(loop);
// }

// loop();

// // determine if the element is within viewport
// function isElementInViewPort(el){
//     // check if jqeury is defined
//     if( typeof jQuery === 'function' && el instanceof jQuery){
//         el = el[0];
//     }

//     var rect = el.getBoundingClientRect();
//     return (
//         (
//             rect.top <= 0 &&
//             rect.bottom >= 0) ||
//         (
//             rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
//             rect.top <= (window.innerHeight || document.documentElement.clientHeight)
//         ) ||
//         (
//             rect.top >= 0 &&
//             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//         )
//     )
// }

// Using Intersect Observer
const callback = function(entries){
    entries.forEach(entry => {
        entry.target.classList.add("media-animate");
    });
}

const observer = new IntersectionObserver(callback);
scrollElements.forEach(element => {
    observer.observe(element);
});

// load the data
// fetch(dataUrl)
//     .then(res => res.json())
//     .then(data => {
//         updateProject(data);
//     });

function updateProject(data){

}

//  create a leaflet map
function createMap(){

}