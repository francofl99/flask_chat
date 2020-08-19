const socket = io();

$('#send').on('click', () => {

    socket.send([$('#myMessage').val(), $('#user').val()]);
    $('#myMessage').val(' ');
    $('#user').val(' ');
});

socket.on('message', (msg) => {
    $('#messages').append('<div class="card bg-light mb-3"><div class="card-header">' + msg[1] + '</div><div class="card-body"><p class="card-text">' + msg[0] + '</p></div></div>');
})