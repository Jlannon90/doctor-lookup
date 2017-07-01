//FRONT END//
var User = require('./../js/doctor-lookup.js').userModule;

var displayDoctors = function(array) {
  array.forEach(function(data) {
    $("#doctors").append('<li>' + data.firstName + ' ' + data.lastName + ' ' + data.title + '<br>' + data.bio + '</li>');
  });
};

$(document).ready(function() {
  $('#user-form').submit(function(event) {
    event.preventDefault();
    var symptom = $('#symptom').val();
    var currentUser = new User();

    currentUser.getDoctors(symptom, displayDoctors);

    console.log(currentUser.getDoctors(symptom));
  });
});
