$(function() {   /*для загрузки файлов эта запись*/
    $("[data-scroll]").on("click", function(event){   /*указание условия действия по клику, при клике функция*/
        event.preventDefault();  /*отменение стандартного поведения ссылок*/
        blockId = $(this).data('scroll'); /*переменная с обращением через this, затем получаем дата атрибут и в () его название*/      
        blockOffset = $(blockId).offset().top; /* смещение блока, переменная выше, метод, и откуда мерить (топ)*/
        $("html, body").animate({  /* анимация для html and body*/
            scrollTop: blockOffset - 50   /*откуда скрол и отступ сверху 50 пискелей*/
        }, 1000);    /*время прокрутки*/  
    });
});
// /* не забыть айдишники в документе связать*/









    

  AOS.init({
  // Global settings:
  disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 0, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 500, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


/* https://github.com/michalsnik/aos  гитхаб страница*/
/* https://michalsnik.github.io/aos/  страница плагина, подключаем через cdn */
/* https://www.youtube.com/watch?v=8I_38RwqIVY&t=576s помощник видео*/













