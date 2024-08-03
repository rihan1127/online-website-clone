searchForm=document.querySelector('.search-form');

document.querySelector("#search-btn").onclick=()=>{
    searchForm.classList.toggle('show');
}

loginForm=document.getElementById("login-container");
document.getElementById("login-btn").onclick=()=>{

    loginForm.classList.toggle('active');
}
document.getElementById("close-login-btn").onclick=()=>{

    loginForm.classList.remove('active');
}

account=document.getElementById("createaccount-container");
document.getElementById("createaccount").onclick=()=>{

    account.classList.toggle('active');
}
document.getElementById("close-account-btn").onclick=()=>{

    account.classList.remove('active');
}


window.onscroll =function(){

    searchForm.classList.toggle('show');
    if(window.scroll >80){
        document.querySelector(".header-2").classList.add('show');
        
    }
    else{
        document.querySelector(".header-2").classList.remove('show');
    }
}
window.onload =function(){

    if(window.scroll > 80){
        document.querySelector(".header-2").classList.add('show');
        
    }
    else{
        document.querySelector(".header-2").classList.remove('show');
    }
}


// swiper code in js-----------------------------------------------------------------------------

var swiper = new Swiper(".book-slider", {
    
    loop:true,
    centeredSlider:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });
//swipper code end--------------------------------------------------------------------------------

// featured swipr
var swiper = new Swiper(".featured-slider", {
    
    loop:true,
    centeredSlider:true,
    autoplay:{
        delay:8500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
        
      },
    },
  });

//   featured swiper end----------------------------------------------------------

// arrivals section swiper------------------------------------------------------
var swiper = new Swiper(".arrivals-slider", {
    
    loop:true,
    centeredSlider:true,
    autoplay:{
        delay:8500,
        disableOnInteraction: false,
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });
//   arrivals swiper end------------------------------------------------------------------

// reviews start -------------------------------------------------------------

var swiper = new Swiper(".review-slider", {
    
    loop:true,
    centeredSlider:true,
    autoplay:{
        delay:8500,
        disableOnInteraction: false,
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });



//   b;ogs section start
var swiper = new Swiper(".blog-slider", {
    
    loop:true,
    centeredSlider:true,
    autoplay:{
        delay:8500,
        disableOnInteraction: false,
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });