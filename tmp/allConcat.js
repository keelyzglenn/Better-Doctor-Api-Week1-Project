var Patient = require('./../js/patient.js').patientModule;

$(function(){
    $('.carousel').carousel();

    $('a.left').click(function(){
        $('#photo-carousel').carousel('prev');
    });

    $('a.right').click(function(){
        $('#photo-carousel').carousel('next');
    });
  });



$(document).ready(function() {
  var patient = new Patient();
  $('#find-doctor').submit(function(event) {
    event.preventDefault();
    $("#issue").val("");
    var medicalIssue = $("#issue").val();
    patient.getDoctors(medicalIssue, this.displayDoctor);
  });
});
