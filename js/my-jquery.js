jQuery(function() {  //トップへ戻るボタン
  var pagetop = $('#page_top');   
  pagetop.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 400) {  //100pxスクロールしたら表示
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
    });
  pagetop.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500); //0.5秒かけてトップへ移動
      return false;
    });
    
  $(window).scroll(function (){  //フェードイン
      $('.fadein').each(function(){
          var targetElement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetElement - windowHeight + 200){
              $(this).css('opacity','1');
              $(this).css('transform','translateY(0)');
          }
      });
  });
  });

  //ドロワーメニュー
  $(function() {
  $('.sp-nav-navbar_toggle').on('click', function () {
    $(this).toggleClass('open');
    $('.sp-nav-menu').toggleClass('open');
  });

  
  //スムーススクロール
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 400; // ミリ秒で記述
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});
