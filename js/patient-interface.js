var Patient = require('./../js/patient.js').patientModule;

// function displayDoctor(doctor) {
//   $('#doctor-list').append("<li" + data.profile.first_name + "</li>");
//   console.log(data.profile.first_name);
// }

// function displayDoctor(data) {
//   // $('#doctor-list').append("<li>" + data.profile.first_name + "</li>");
//   console.log(data.profile.first_name);
// }
//


$(document).ready(function(){
  var newPatient = new Patient();
  $('#find-doctor').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#issue').val();
    newPatient.getDoctors(medicalIssue);
  });
});
