var Patient = require('./../js/patient.js').patientModule;


$(document).ready(function() {
  var patient = new Patient();
  $('#find-doctor').submit(function(event) {
    event.preventDefault();
    $("#issue").val("");
    var medicalIssue = $("#issue").val();
    patient.getDoctors(medicalIssue, this.displayDoctor);
  });
});
