module.exports = function(socket) {
    // CLから受信
    socket.on('enter', function(data) {
        // CLへ送信
        socket.broadcast.emit('enter', data);
    });
};
