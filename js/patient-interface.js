var Patient = require('./../js/patient.js').patientModule;

$(document).ready(function(){
  var newPatient = new Patient();
  $('#find-doctor').submit(function(event) {
    event.preventDefualt();
    var medicalIssue = $('#issue').val();
    newPatient.getDoctors(medicalIssue);
  });
});
