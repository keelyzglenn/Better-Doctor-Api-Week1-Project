(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "530874ce9cb46271d4fc78a89c3ebb34";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Patient(){
}

// Patient.prototype.getDoctors = function(medicalIssue) {
//   $.get("https://api.betterdoctor.com/2016-03-01/doctors?query=" + medicalIssue + "&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=" + apiKey)
//     .then(function(response) {
//       for(var i=0; i< response.data.length; i ++)
//       console.log(response.data[i].practices[0].name);
//     })
//      .fail(function(error){
//         console.log("fail");
//       });
//   };

  Patient.prototype.getDoctors = function(medicalIssue, displayDoctor) {
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=20&user_key=' + apiKey)
    .then(function(response) {
      response.data.forEach(function(doctor) {
        displayDoctor(doctor);
      });
    })
    .fail(function(error){
      console.log("fail");
    });
  };



function displayDoctor(doctor) {
  $('#doctor-list').append("<li" + data.profile.first_name + "</li>");
  console.log(data.profile.first_name);
}

exports.patientModule = Patient;

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/patient.js":2}]},{},[3]);
