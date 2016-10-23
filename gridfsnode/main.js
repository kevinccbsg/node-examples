var fecha = $('#fecha');
$.ajax({
    type: "GET",
    url: 'http://localhost:3000/api/1.0/upload?system=system&subsystem=subsistema&lifnr=testeopdf&filename=Desert.jpg',
    error: function (error) {
    	console.log('error');
    },
    success: function(data) {
    	fecha.html("img");
        fecha.attr('src', data);
        console.log(typeof(data));
    }
});