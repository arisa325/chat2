// 退室
$(function () {

  // 退室ボタン押下
  $('#exit').on('click', function() {
    // CLからSVへ送信
    socket.emit('exit', $('#userName').val());
    location.href = '/';
  });

    // SVから受信
    // socket.ioの処理開始
    var socket = io.connect();
    socket.on('exit', function (data) {
        $("#thread").prepend(data + 'さんが退室しました。<br />');
    });

});