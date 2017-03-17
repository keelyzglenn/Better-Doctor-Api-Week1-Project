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

// function displayDoctor(doctorArray) {
//   $('#doctor-list').append("<li" + doctorArray + "</li>");
//   console.log(doctorArray);
// }



// $(document).ready(function(){
//   var newPatient = new Patient();
//   $('#find-doctor').submit(function(event) {
//     event.preventDefault();
//     var medicalIssue = $('#issue').val();
//     newPatient.getDoctors(medicalIssue);
//   });
// });

//
var displayDoctor = function(doctorData) {
  $("#doctor-list").append('<li>' + doctorData.practices[0].name + '</li>');
  console.log(doctorData);
};

$(document).ready(function() {
  var patient = new Patient();
  $('#find-doctor').submit(function(event) {
    event.preventDefault();
    $("#issue").val("");
    var issue = $("#issue").val();
    patient.getDoctors(issue, displayDoctor);
  });
});
