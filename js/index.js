$(document).ready(function () {
  /*con4 모달박스*/
  let i = 0;
  $(".poster_img li").click(function () {
    $(this).index();
    $(".modal").eq(index).addClass("on");
  });
  $(".x").click(function () {
    $(".modal").removeClass("on");
  });

  /*con4 가로 슬라이드*/
  let co4 = document.querySelector("#con4");
  co4.addEventListener("wheel", function (e) {

  });
});
window.onload = function () {
  var elm = ".con";
  $(elm).each(function (index) {
    // 개별적으로 Wheel 이벤트 적용
    $(this).on("mousewheel DOMMouseScroll", function (e) {
      e.preventDefault();
      var delta = 0;
      if (!event) event = window.event;
      if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
      } else if (event.detail) delta = -event.detail / 3;
      var moveTop = $(window).scrollTop();
      var elmSelecter = $(elm).eq(index);
      // 마우스휠을 위에서 아래로
      if (delta < 0) {
        if ($(elmSelecter).next() != undefined) {
          try {
            moveTop = $(elmSelecter).next().offset().top;
          } catch (e) {}
        }
        // 마우스휠을 아래에서 위로
      } else {
        if ($(elmSelecter).prev() != undefined) {
          try {
            moveTop = $(elmSelecter).prev().offset().top;
          } catch (e) {}
        }
      }

      // 화면 이동 0.8초(800)
      $("html,body")
        .stop()
        .animate(
          {
            scrollTop: moveTop + "px",
          },
          {
            duration: 800,
            complete: function () {},
          }
        );
    });
  });
};

$(function(){
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.matchMedia({
    "(min-width: 1024px)": function() {
      //가로스크롤
      let list = gsap.utils.toArray(".poster_img>li");
      let scrollTween = gsap.to(list, {
        xPercent: -50 * ( list.length - 1 ), //원래 리스트의 갯수보다 1을 뺴서 길이를 구한 후 가로로 이동
        ease:'none',
        scrollTrigger:{
          trigger:'.con4_design',
          pin:true,
          scrub:1,
          start:'center center',
          end:'300%', //  숫자가 클수록 느려짐
          makers:true
        }
      });
      }
  });
})