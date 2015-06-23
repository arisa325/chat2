var server = require.main.exports.server;
var io = require('socket.io').listen(server);

// io.socketsの接続
io.on('connection', function (socket) {
	// 入室モジュールの呼出
	require('./chatSV_enter')(socket);
	
	// 投稿モジュールの呼出
	require('./chatSV_publish')(socket, io);
	
	// 退出モジュールの呼出
	require('./chatSV_exit')(socket);

	// メモ処理に関しては、クライアントサイドで完結する
	// 事ができます。ただし、ソケット通信使ってやる事も
	// 出来るので、その場合は、上記を参考にしてメモ処理
	// を作る事もできます（どちらでも良いです）
});
