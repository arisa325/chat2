module.exports = function(socket) {
    socket.on('exit', function (data) {
        console.log("ok");
        // 他ユーザに退室情報を送信
        socket.broadcast.emit('exit', data);
    });
};
