import $ from 'jquery';
import whatInput from 'what-input';

// // npm install slick-carousel
import 'slick-carousel'

// npm install gsap@npm:@gsap/shockingly
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// npm install @barba/core
import barba from '@barba/core';

// npm install jquery-lazy
import 'jquery-lazy';

// npm install scrollreveal
import ScrollReveal from 'scrollreveal'

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, ScrollSmoother, SplitText, ScrollToPlugin);

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

$(document).ready(function(){


  //////////////////////////////////////////////////////////////
  /////////////////      Global Inits  /////////////////////////
  //////////////////////////////////////////////////////////////

  window.sr = ScrollReveal({ reset: false });  

  $(function($) {
      $(".lazy").Lazy();
  });


  //////////////////////////////////////////////////////////////
  /////////////////      Navigation  ///////////////////////////
  //////////////////////////////////////////////////////////////

  $(document).on("click",".fire-navigation",function() {
    $('.nav-overlay').toggleClass('open');
    $('body').toggleClass('nav-open');
    if($('.nav-overlay').hasClass('open')){
      gsap.from('.nav-overlay .nav-menu li', .5,{
        opacity: 0,
        x: 50,
        delay: .3,
        stagger: .2,
      });

    } else{

    }
  });

});


barba.hooks.before(() => {
document.querySelector('html').classList.add('is-transitioning');
barba.wrapper.classList.add('is-animating');
});

barba.hooks.leave(() => {

});

barba.hooks.afterLeave(() => {
ScrollTrigger.getAll().forEach(t => t.kill());
});

barba.hooks.after(() => {
document.querySelector('html').classList.remove('is-transitioning');
barba.wrapper.classList.remove('is-animating');
window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'instant'
});
initAnim();
});

function pageTransition() {
var tl = gsap.timeline();
tl.to(".transition li", {
  duration: 1,
  scaleX: 1,
  transformOrigin: "bottom left",
  stagger: 0.2,
  ease: "power2.inOut"
});

$('#transitionAnimation svg').remove();
var transitionUrl = $('#transitionAnimation').data('animation');
const transition = document.getElementById('transitionAnimation');
const transitionAnimation = bodymovin.loadAnimation({
  container: transition,
  path: transitionUrl,
  renderer: 'svg', 
  loop: false, 
  delay: 1,
  autoplay: true,
});

setTimeout(function() {
  $('.nav-overlay').removeClass('open');
  $('body').removeClass('nav-open');
}, 1000);



tl.to(".transition li", {
  duration: 1,
  scaleX: 0,
  transformOrigin: "top right",
  delay: 0.1,
  ease: "power2.inOut",
});
}


function delay(n) {
n = n || 1000;
return new Promise((done) => {
  setTimeout(() => {
    done();
  }, n);
});
}

function initBarba(){
barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();
        pageTransition();
        await delay(1000);
        done();
      },
      async enter(data) {

      },

      async once(data) {
    
      },
    },
  ],
});
}

function initAnim(){

  window.sr = ScrollReveal({ reset: false });

  gsap.from('#fade-wrap', {ease:"linear", autoAlpha:0})

  $('.gfield').addClass('reveal-up');
  $('.gfield').addClass('load-hidden');
  $('.gform_footer').addClass('reveal-up');
  $('.gform_footer').addClass('load-hidden');

  // Reveal Classes
  sr.reveal('.reveal-right', { 
      origin: 'right', 
      distance: '75px',
      duration: 1000,
      delay: .6
  });
  sr.reveal('.reveal-up', {  
      origin: 'bottom', 
      distance: '75px',
      duration: 1000,
      delay: .6
  });
  sr.reveal('.reveal-left', { 
      origin: 'left', 
      distance: '75px',
      duration: 1000,
      delay: .6
  });
  sr.reveal('.reveal-down', {  
      origin: 'top', 
      distance: '75px',
      duration: 1000,
      delay: .6
  });
  sr.reveal('.reveal-fade', {  
      duration: 1000,
      delay: .6
  });

}


$(window).on("load", function() {
  initBarba();
  initAnim();

});