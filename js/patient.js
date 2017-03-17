var apiKey = require('./../.env').apiKey;

function Patient(){
}
//
// Patient.prototype.getDoctors = function(medicalIssue) {
//   $.get("https://api.betterdoctor.com/2016-03-01/doctors?query=toothache&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=" + apiKey)
//    .then(function(result) {
//       console.log(result);
//     })
//    .fail(function(error){
//       console.log("fail");
//     });
// };

Patient.prototype.getDoctors = function(medicalIssue) {
  $.get("https://api.betterdoctor.com/2016-03-01/doctors?query=" + medicalIssue + "&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=" + apiKey)
    .then(function(response) {
        response.data.forEach(function(data){
        console.log(data.profile.first_name);
      });
      })
     .fail(function(error){
        console.log("fail");
      });
  };


// function displayDoctor(doctor) {
//   $('#doctor-list').append("<li" + doctor.name + "</li>");
//   console.log(doctor.name);
// }

exports.patientModule = Patient;
