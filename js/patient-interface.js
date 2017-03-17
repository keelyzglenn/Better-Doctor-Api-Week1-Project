var Patient = require('./../js/patient.js').patientModule;

function displayDoctor(doctor) {
  $('#doctor-list').append("<li" + doctor.name + "</li>");
  console.log(doctor.name);
}


$(document).ready(function(){
  var newPatient = new Patient();
  $('#find-doctor').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#issue').val();
    newPatient.getDoctors(medicalIssue);
  });
});
