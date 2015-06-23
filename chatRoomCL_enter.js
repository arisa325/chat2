// // 入室
$(function () {
    // socket.ioの処理開始
    var socket = io.connect();

    // CLからSVへ送信
    socket.emit('enter', $("#userName").val());

    // SVから受信
    socket.on('enter', function (data) {
        $("#thread").prepend(data + 'さんが入室しました。<br />');
    });

});