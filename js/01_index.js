// TODO : 메뉴(.fab) 클릭하면 메뉴(.menu) 보이기/숨기기
$(function () {
  $(".fab").click(function () {
    // TODO : 메뉴(.fab) 클릭하면
    $(".menu").toggle();
  });
});
// TODO : Swiper.js 플러그인
var swiper = new Swiper(".mySwiper", {
  // TODO : 여기 옵션 넣기
  autoplay: { delay: 3000 },
});
// TODO : isotope 플러그인
$(function () {
  $(".product-box").isotope({
    itemSelector: ".product",
    layoutMode: "fitRows",
  });

  $(".product-list li").click(function () {
    $(".product-box").isotope({
      filter: $(this).attr("data-filter"),
    });
  });
});
