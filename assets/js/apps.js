
$(document).ready(function() {
  var $table = $("#train-table");
  var $form = $("#train-form");
  var $name = $("#train-name");
  var $dest = $("#destination");
  var $time = $("#train-time");
  var $freq = $("#frequency");
  var database = firebase.database();

  $form.submit(function(event) {
    event.preventDefault();
    database.ref().push({
      name: $name.val(),
      dest: $dest.val(),
      time: $time.val(),
      freq: $freq.val()
    })
  });

  database.ref().on("child_added", function(snapshot) {
    var current = snapshot.val();
    var now = moment();
  
    var minAway = nextTrain.diff(now, "minutes");

    var timediff = moment().diff(moment(current.time, "HH:mm"), "minutes");
    $table.append(`<tr><td>${
      current.name
    }</td><td>${
      current.dest
    }</td><td>${
      current.freq
    }</td><td>${
    
    }</td><td>${
      minAway
    }</td></tr>`);
  });
});
