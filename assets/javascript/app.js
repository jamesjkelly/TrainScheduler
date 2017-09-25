//app code here
$(document).ready(function() {

    $("#getTrain").click(function(event) {
        event.preventDefault();
        console.log('you clicked me');
        var tTable = $("#trainTable");
        var tForm = $("#trainForm");
        var tName = $("#trainName").val();
        var dest = $("#destination").val();
        var tTime = $("#trainTime").val();
        var freq = $("#frequency").val();
        var today = new Date();

        $("#trainTable").append('<tr><td>' + tName + '</td><td>' + dest + '</td><td>' + tTime + '</td><td>' + freq + '</td><td>' + today + '</td></tr>');
    });

});
