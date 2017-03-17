var Patient = require('./../js/patient.js').patientModule;

var displayDoctor = function(doctorData) {
  $("#doctor-list").append('<p>' + doctorData.practices[0].name + "||" + doctorData.profile.first_name + doctorData.profile.last_name + '</p>');
  console.log(doctorData);
};

$(document).ready(function() {
  var patient = new Patient();
  $('#find-doctor').submit(function(event) {
    event.preventDefault();
    $("#issue").val("");
    var medicalIssue = $("#issue").val();
    patient.getDoctors(medicalIssue, displayDoctor);
  });
});
