$(function(){
  $('.button-more').on('mouseover', function(){
    $(this).animate({
      opacity:0.5,
      marginLeft:20,
    }, 100);
  });
  $('.button-more').on('mouseout', function(){
    $(this).animate({
      opacity:1.0,
      marginLeft:0
    }, 100);
  });

  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    aoutoplaySpeed: 5000,
    arrows: false,
  });

  // 送信ボタンクリック時の処理
  $('#submit').on('click', function(event){
    event.preventDefault();
      
    let result=inputCheck();
  });

  $('#name').blur(function(){
    inputCheck();
  });
  $('#furigana').blur(function(){
    inputCheck();
  });
  $('#email').blur(function(){
    inputCheck();
  });
  $('#tel').blur(function(){
    inputCheck();
  });
  $('#message').blur(function(){
    inputCheck();
  });
  $('#agree').blur(function(){
    inputCheck();
  });
  function inputCheck(){
    let result;
    let message="";
    let error=false;

    // 名前のチェック
    if($('#name').val()==''){
      $('#name').css('background-color','#f79999');
      error=true;
      message+='お名前を入力してください。\n';
    }else{
      $('#name').css('background-color', '#fafafa');
    }

    // フリガナのチェック
    if($('#furigana').val()==''){
      $('#furigana').css('background-color','#f79999');
      error=true;
      message+='フリガナを入力してください。\n';
    }else{
      $('#furigana').css('background-color', '#fafafa');
    }

    // お問い合わせのチェック
    if($('#message').val()==''){
      $('#message').css('background-color','#f79999');
      error=true;
      message+='お問い合わせ内容を入力してください。\n';
    }else{
      $('#message').css('background-color', '#fafafa');
    }

    // メールアドレスのチェック
    if($('#email').val()==''||$('#email').val().indexOf('@')==-1||$('#email').val().indexOf('.')==-1){
      $('#email').css('background-color','#f79999');
      error=true;
      message+='メールアドレスが未記入、または「@」「.」が含まれていません。\n';
    }else{
      $('#email').css('background-color', '#fafafa');
    }

    // 電話番号のチェック（未入力はOK、未入力でない場合は-が必要）
    if($('#tel').val()!=''&&$('#tel').val().indexOf('-')==-1){
      $('#tel').css('background-color','#f79999');
      error=true;
      message+='電話番号に「-」が含まれていません。\n';
    }else{
      $('#tel').css('background-color', '#fafafa');
    }

    if($('#agree').prop('checked')==false){
      error=true;
      message+='個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\n';
    }
  }
});