module.exports = function (socket,io) {
    // CLから受信
    socket.on('publish', function(data) {
        // CLへ送信
        io.sockets.emit('publish', data);
    });
}
