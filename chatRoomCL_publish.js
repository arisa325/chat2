$(function () {

  // 投稿ボタン押下
  $('#write').on('click', function() {
    socket.emit('publish', $('#userName').val() + 'さん：' + $('#msg').val());
    $('#msg').val('');
    return false;
  });

  // socket.ioの処理開始
  var socket = io.connect();
  // 投稿
  socket.on('publish', function (data) {
    $('#thread').prepend(data + '<br>');
  });
});