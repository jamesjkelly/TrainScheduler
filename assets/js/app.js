 
$(document).ready(function() {
  var $table = $("#trainTable");
  var $form = $("#trainForm");
  var $name = $("#trainName");
  var $dest = $("#destination");
  var $time = $("#trainTime");
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
      $name.val('');
      $dest.val('');
      $time.val('');
  });

database.ref().on("child_added", function(snapshot) {
    var current = snapshot.val();
    var now = moment();
    var tStart = moment(current.time, "HH:mm");
    var nextTrain = moment(tStart.add((Math.ceil((now.diff(tStart, "minutes")/current.freq)) * current.freq), "minutes"));
    var minAway = nextTrain.diff(now, "minutes");
    var timediff = moment().diff(moment(current.time, "HH:mm"), "minutes");
    $table.append(`<tr><td>${
      current.name
    }</td><td>${
      current.dest
    }</td><td>${
      current.freq
    }</td><td>${
      nextTrain.format("HH:mm")
    }</td><td>${
      minAway
    }</td></tr>`);

  
  });
   })
