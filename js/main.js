'use strict'; // ======= Слайдер в блоке меню about-me ОТКРЫТИЕ ЗАКРЫТИЕ блоков START =======//

$(document).ready(function () {
  $('.personal').click(function () {
    $(this).addClass('active-icons');
    $('.professional').removeClass('active-icons');
    $('.hobbies').removeClass('active-icons');
    $('.menu-wrapper-professional').slideUp(300);
    $('.menu-wrapper-hobbies').slideUp(300);
    $('.menu-wrapper-personal').slideDown(300);
  });
});
$(document).ready(function () {
  $('.professional').click(function () {
    $(this).addClass('active-icons');
    $('.personal').removeClass('active-icons');
    $('.hobbies').removeClass('active-icons');
    $('.bio').removeClass('active-text-color');
    $('.personal-text-active').slideUp(100);
    $('.personal-info').slideUp(300);
    $('.menu-wrapper-personal').slideUp(300);
    $('.menu-wrapper-hobbies').slideUp(300);
    $('.menu-wrapper-professional').slideDown(300);
  });
}); // ======= Слайдер в блоке меню about-me ОТКРЫТИЕ ЗАКРЫТИЕ блоков END =======//
// ======= Слайдер в блоке меню about-me personal-info START =======//

$(document).ready(function () {
  $('.menu-personal-info__title').click(function () {
    $(this).toggleClass('active');
    $('.menu-personal-info__item').slideToggle(300);
  });
});
$(document).ready(function () {
  $('.info-subtitle-bio').click(function () {
    $(this).toggleClass('active');
    $(this).toggleClass('white-text');
    $('.bio').slideToggle(300);
  });
});
$(document).ready(function () {
  $('.menu-contacts__title').click(function () {
    $(this).toggleClass('active');
    $('.about-menu-contacts').slideToggle(300);
  });
}); // ======= Слайдер в блоке меню about-me personal-info END =======//
// ======= Слайдер в блоке меню about-me professional-info START =======//

$(document).ready(function () {
  $('.menu-professional-info__title').click(function () {
    $(this).toggleClass('active');
    $('.menu-professional-info__item').slideToggle(300);
  });
});
$(document).ready(function () {
  $('.info-subtitle-career').click(function () {
    $(this).toggleClass('active');
    $(this).toggleClass('white-text');
    $('.resume').slideToggle(300);
  });
});
$(document).ready(function () {
  $('.info-subtitle-education').click(function () {
    $(this).toggleClass('active');
    $(this).toggleClass('white-text');
    $('.education').slideToggle(300);
  });
});
$(document).ready(function () {
  $('.resume').click(function () {
    $(this).addClass('active-text-color');
    $('.education').removeClass('active-text-color');
  });
});
$(document).ready(function () {
  $('.education').click(function () {
    $(this).addClass('active-text-color');
    $('.resume').removeClass('active-text-color');
  });
}); // ======= Слайдер в блоке меню about-me professional-info END =======//
// ======= Слайдер в блоке меню about-me hobbies-info START =======//

$(document).ready(function () {
  $('.info-subtitle-interests').click(function () {
    $(this).toggleClass('active');
    $(this).toggleClass('white-text');
    $('.interests').slideToggle(300);
  });
}); // ======= Слайдер в блоке меню about-me hobbies-info END =======//

/** ======= Смена цвета подменю при активной ссылке START ==========**/

$(document).ready(function () {
  $('.bio').click(function () {
    $(this).addClass('active-text-color');
    $('.personal-text-active').slideDown(300);
    $('.personal-info').slideDown(300); // $('.interests').removeClass('active-text-color')
    // $('.education').removeClass('active-text-color')
  });
}); // $(document).ready(function() {
//    $('.education').click(function() {
//       $(this).addClass('active-text-color')
//       $('.bio').removeClass('active-text-color')
//       $('.interests').removeClass('active-text-color')
//    })
// })
// $(document).ready(function() {
//    $('.interests').click(function() {
//       $(this).addClass('active-text-color')
//       $('.bio').removeClass('active-text-color')
//       $('.education').removeClass('active-text-color')
//    })
// })

/** ======= Смена цвета подменю при активной ссылке END ==========**/

/**================= Появление скрытие блоков details START ========== */

$(document).ready(function () {
  $('.details-top').click(function () {
    $('.details-one').slideToggle(300);
    $('.details-two').slideUp(300);
  });
});
$(document).ready(function () {
  $('.details-bottom').click(function () {
    $('.details-two').slideToggle(300);
    $('.details-one').slideUp(300);
  });
});
/**================= Появление скрытие блоков details END ========== */

/**=========== Ajax запрос для активных ссылок START ============ */

$(function () {
  $('.nav [href]').each(function () {
    if (this.href == window.location.href) {
      $(this).addClass('header-active');
    }
  });
});
$(function () {
  $('nav [href]').each(function () {
    if (this.href == window.location.href) {
      $(this).addClass('header-active');
    }
  });
});
/**=========== Ajax запрос для активных ссылок END ============ */

/**===== Текст в виде печатной машинки */
// document.addEventListener("DOMContentLoaded", function () {
//    new TypeIt("#element", {
//       strings: ["This is my string!"],
//    }).go();
// });
// const instance = new TypeIt('#replaceStrings', {
//    strings: ["Hello", "How are your"],
//    speed: 200,
//    breakLines: true,
//    waitUntilVisible: true,
//    nextStringDelay: 1000
// }).go();
// new TypeIt("#myElement")
//   .type("This is my first string!")
//   .pause(1000)
//   .type("Plus a little more.")
//   .go();
// const instance = new TypeIt('#hi', {
//    strings: [],
//    speed: 200,
//    breakLines: true,
//    waitUntilVisible: true,
//    cursor: true,
//    html: true
//    // nextStringDelay: 1000 
// }).go();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiY2xpY2siLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwic2xpZGVVcCIsInNsaWRlRG93biIsInRvZ2dsZUNsYXNzIiwic2xpZGVUb2dnbGUiLCJlYWNoIiwiaHJlZiIsIndpbmRvdyIsImxvY2F0aW9uIl0sInNvdXJjZXMiOlsibWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbi8vID09PT09PT0g0KHQu9Cw0LnQtNC10YAg0LIg0LHQu9C+0LrQtSDQvNC10L3RjiBhYm91dC1tZSDQntCi0JrQoNCr0KLQmNCVINCX0JDQmtCg0KvQotCY0JUg0LHQu9C+0LrQvtCyIFNUQVJUID09PT09PT0vL1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5wZXJzb25hbCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtaWNvbnMnKVxyXG4gICAgICAkKCcucHJvZmVzc2lvbmFsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1pY29ucycpXHJcbiAgICAgICQoJy5ob2JiaWVzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1pY29ucycpXHJcbiAgICAgICQoJy5tZW51LXdyYXBwZXItcHJvZmVzc2lvbmFsJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5tZW51LXdyYXBwZXItaG9iYmllcycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcubWVudS13cmFwcGVyLXBlcnNvbmFsJykuc2xpZGVEb3duKDMwMClcclxuICAgfSlcclxufSlcclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLnByb2Zlc3Npb25hbCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtaWNvbnMnKVxyXG4gICAgICAkKCcucGVyc29uYWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlLWljb25zJylcclxuICAgICAgJCgnLmhvYmJpZXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlLWljb25zJylcclxuICAgICAgJCgnLmJpbycpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgICAgICQoJy5wZXJzb25hbC10ZXh0LWFjdGl2ZScpLnNsaWRlVXAoMTAwKVxyXG4gICAgICAkKCcucGVyc29uYWwtaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcubWVudS13cmFwcGVyLXBlcnNvbmFsJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5tZW51LXdyYXBwZXItaG9iYmllcycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcubWVudS13cmFwcGVyLXByb2Zlc3Npb25hbCcpLnNsaWRlRG93bigzMDApXHJcbiAgIH0pXHJcbn0pXHJcblxyXG4vLyA9PT09PT09INCh0LvQsNC50LTQtdGAINCyINCx0LvQvtC60LUg0LzQtdC90Y4gYWJvdXQtbWUg0J7QotCa0KDQq9Ci0JjQlSDQl9CQ0JrQoNCr0KLQmNCVINCx0LvQvtC60L7QsiBFTkQgPT09PT09PS8vXHJcblxyXG5cclxuXHJcbi8vID09PT09PT0g0KHQu9Cw0LnQtNC10YAg0LIg0LHQu9C+0LrQtSDQvNC10L3RjiBhYm91dC1tZSBwZXJzb25hbC1pbmZvIFNUQVJUID09PT09PT0vL1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLm1lbnUtcGVyc29uYWwtaW5mb19fdGl0bGUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuICAgICAgJCgnLm1lbnUtcGVyc29uYWwtaW5mb19faXRlbScpLnNsaWRlVG9nZ2xlKDMwMClcclxuICAgfSlcclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcuaW5mby1zdWJ0aXRsZS1iaW8nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnd2hpdGUtdGV4dCcpXHJcbiAgICAgICQoJy5iaW8nKS5zbGlkZVRvZ2dsZSgzMDApXHJcbiAgIH0pXHJcbn0pXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLm1lbnUtY29udGFjdHNfX3RpdGxlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICQoJy5hYm91dC1tZW51LWNvbnRhY3RzJykuc2xpZGVUb2dnbGUoMzAwKVxyXG4gICB9KVxyXG59KVxyXG5cclxuLy8gPT09PT09PSDQodC70LDQudC00LXRgCDQsiDQsdC70L7QutC1INC80LXQvdGOIGFib3V0LW1lIHBlcnNvbmFsLWluZm8gRU5EID09PT09PT0vL1xyXG5cclxuXHJcbi8vID09PT09PT0g0KHQu9Cw0LnQtNC10YAg0LIg0LHQu9C+0LrQtSDQvNC10L3RjiBhYm91dC1tZSBwcm9mZXNzaW9uYWwtaW5mbyBTVEFSVCA9PT09PT09Ly9cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5tZW51LXByb2Zlc3Npb25hbC1pbmZvX190aXRsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAkKCcubWVudS1wcm9mZXNzaW9uYWwtaW5mb19faXRlbScpLnNsaWRlVG9nZ2xlKDMwMClcclxuICAgfSlcclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcuaW5mby1zdWJ0aXRsZS1jYXJlZXInKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnd2hpdGUtdGV4dCcpXHJcbiAgICAgICQoJy5yZXN1bWUnKS5zbGlkZVRvZ2dsZSgzMDApXHJcbiAgIH0pXHJcbn0pXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLmluZm8tc3VidGl0bGUtZWR1Y2F0aW9uJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ3doaXRlLXRleHQnKVxyXG4gICAgICAkKCcuZWR1Y2F0aW9uJykuc2xpZGVUb2dnbGUoMzAwKVxyXG4gICB9KVxyXG59KVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5yZXN1bWUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAkKCcuZWR1Y2F0aW9uJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgfSlcclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcuZWR1Y2F0aW9uJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgICAgJCgnLnJlc3VtZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgIH0pXHJcbn0pXHJcbi8vID09PT09PT0g0KHQu9Cw0LnQtNC10YAg0LIg0LHQu9C+0LrQtSDQvNC10L3RjiBhYm91dC1tZSBwcm9mZXNzaW9uYWwtaW5mbyBFTkQgPT09PT09PS8vXHJcblxyXG5cclxuXHJcbi8vID09PT09PT0g0KHQu9Cw0LnQtNC10YAg0LIg0LHQu9C+0LrQtSDQvNC10L3RjiBhYm91dC1tZSBob2JiaWVzLWluZm8gU1RBUlQgPT09PT09PS8vXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcuaW5mby1zdWJ0aXRsZS1pbnRlcmVzdHMnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnd2hpdGUtdGV4dCcpXHJcbiAgICAgICQoJy5pbnRlcmVzdHMnKS5zbGlkZVRvZ2dsZSgzMDApXHJcbiAgIH0pXHJcbn0pXHJcbi8vID09PT09PT0g0KHQu9Cw0LnQtNC10YAg0LIg0LHQu9C+0LrQtSDQvNC10L3RjiBhYm91dC1tZSBob2JiaWVzLWluZm8gRU5EID09PT09PT0vL1xyXG5cclxuXHJcblxyXG4vKiogPT09PT09PSDQodC80LXQvdCwINGG0LLQtdGC0LAg0L/QvtC00LzQtdC90Y4g0L/RgNC4INCw0LrRgtC40LLQvdC+0Lkg0YHRgdGL0LvQutC1IFNUQVJUID09PT09PT09PT0qKi9cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5iaW8nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAkKCcucGVyc29uYWwtdGV4dC1hY3RpdmUnKS5zbGlkZURvd24oMzAwKVxyXG4gICAgICAkKCcucGVyc29uYWwtaW5mbycpLnNsaWRlRG93bigzMDApXHJcbiAgICAgIC8vICQoJy5pbnRlcmVzdHMnKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAvLyAkKCcuZWR1Y2F0aW9uJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgfSlcclxufSlcclxuXHJcbi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4vLyAgICAkKCcuZWR1Y2F0aW9uJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuLy8gICAgICAgJCgnLmJpbycpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbi8vICAgICAgICQoJy5pbnRlcmVzdHMnKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4vLyAgICB9KVxyXG4vLyB9KVxyXG5cclxuLy8gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbi8vICAgICQoJy5pbnRlcmVzdHMnKS5jbGljayhmdW5jdGlvbigpIHtcclxuLy8gICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4vLyAgICAgICAkKCcuYmlvJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuLy8gICAgICAgJCgnLmVkdWNhdGlvbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbi8vICAgIH0pXHJcbi8vIH0pXHJcbi8qKiA9PT09PT09INCh0LzQtdC90LAg0YbQstC10YLQsCDQv9C+0LTQvNC10L3RjiDQv9GA0Lgg0LDQutGC0LjQstC90L7QuSDRgdGB0YvQu9C60LUgRU5EID09PT09PT09PT0qKi9cclxuXHJcblxyXG5cclxuLyoqPT09PT09PT09PT09PT09PT0g0J/QvtGP0LLQu9C10L3QuNC1INGB0LrRgNGL0YLQuNC1INCx0LvQvtC60L7QsiBkZXRhaWxzIFNUQVJUID09PT09PT09PT0gKi9cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5kZXRhaWxzLXRvcCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKCcuZGV0YWlscy1vbmUnKS5zbGlkZVRvZ2dsZSgzMDApXHJcbiAgICAgICQoJy5kZXRhaWxzLXR3bycpLnNsaWRlVXAoMzAwKVxyXG4gICB9KVxyXG59KVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5kZXRhaWxzLWJvdHRvbScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKCcuZGV0YWlscy10d28nKS5zbGlkZVRvZ2dsZSgzMDApXHJcbiAgICAgICQoJy5kZXRhaWxzLW9uZScpLnNsaWRlVXAoMzAwKVxyXG4gICB9KVxyXG59KVxyXG4vKio9PT09PT09PT09PT09PT09PSDQn9C+0Y/QstC70LXQvdC40LUg0YHQutGA0YvRgtC40LUg0LHQu9C+0LrQvtCyIGRldGFpbHMgRU5EID09PT09PT09PT0gKi9cclxuXHJcblxyXG5cclxuLyoqPT09PT09PT09PT0gQWpheCDQt9Cw0L/RgNC+0YEg0LTQu9GPINCw0LrRgtC40LLQvdGL0YUg0YHRgdGL0LvQvtC6IFNUQVJUID09PT09PT09PT09PSAqL1xyXG4kKGZ1bmN0aW9uKCkge1xyXG4gICAkKCcubmF2IFtocmVmXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLmhyZWYgPT0gd2luZG93LmxvY2F0aW9uLmhyZWYpIHtcclxuICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaGVhZGVyLWFjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgIH0pO1xyXG59KTtcclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgICQoJ25hdiBbaHJlZl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5ocmVmID09IHdpbmRvdy5sb2NhdGlvbi5ocmVmKSB7XHJcbiAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2hlYWRlci1hY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICB9KTtcclxufSk7XHJcbi8qKj09PT09PT09PT09IEFqYXgg0LfQsNC/0YDQvtGBINC00LvRjyDQsNC60YLQuNCy0L3Ri9GFINGB0YHRi9C70L7QuiBFTkQgPT09PT09PT09PT09ICovXHJcblxyXG5cclxuXHJcblxyXG4vKio9PT09PSDQotC10LrRgdGCINCyINCy0LjQtNC1INC/0LXRh9Cw0YLQvdC+0Lkg0LzQsNGI0LjQvdC60LggKi9cclxuXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgbmV3IFR5cGVJdChcIiNlbGVtZW50XCIsIHtcclxuLy8gICAgICAgc3RyaW5nczogW1wiVGhpcyBpcyBteSBzdHJpbmchXCJdLFxyXG4vLyAgICB9KS5nbygpO1xyXG4vLyB9KTtcclxuXHJcbi8vIGNvbnN0IGluc3RhbmNlID0gbmV3IFR5cGVJdCgnI3JlcGxhY2VTdHJpbmdzJywge1xyXG4vLyAgICBzdHJpbmdzOiBbXCJIZWxsb1wiLCBcIkhvdyBhcmUgeW91clwiXSxcclxuLy8gICAgc3BlZWQ6IDIwMCxcclxuLy8gICAgYnJlYWtMaW5lczogdHJ1ZSxcclxuLy8gICAgd2FpdFVudGlsVmlzaWJsZTogdHJ1ZSxcclxuLy8gICAgbmV4dFN0cmluZ0RlbGF5OiAxMDAwXHJcbi8vIH0pLmdvKCk7XHJcblxyXG4vLyBuZXcgVHlwZUl0KFwiI215RWxlbWVudFwiKVxyXG4vLyAgIC50eXBlKFwiVGhpcyBpcyBteSBmaXJzdCBzdHJpbmchXCIpXHJcbi8vICAgLnBhdXNlKDEwMDApXHJcbi8vICAgLnR5cGUoXCJQbHVzIGEgbGl0dGxlIG1vcmUuXCIpXHJcbi8vICAgLmdvKCk7XHJcblxyXG4vLyBjb25zdCBpbnN0YW5jZSA9IG5ldyBUeXBlSXQoJyNoaScsIHtcclxuLy8gICAgc3RyaW5nczogW10sXHJcbi8vICAgIHNwZWVkOiAyMDAsXHJcbi8vICAgIGJyZWFrTGluZXM6IHRydWUsXHJcbi8vICAgIHdhaXRVbnRpbFZpc2libGU6IHRydWUsXHJcbi8vICAgIGN1cnNvcjogdHJ1ZSxcclxuLy8gICAgaHRtbDogdHJ1ZVxyXG4vLyAgICAvLyBuZXh0U3RyaW5nRGVsYXk6IDEwMDAgXHJcbi8vIH0pLmdvKCk7Il0sIm1hcHBpbmdzIjoiQUFBQSxhLENBRUE7O0FBRUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVztFQUMxQkYsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlRyxLQUFmLENBQXFCLFlB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