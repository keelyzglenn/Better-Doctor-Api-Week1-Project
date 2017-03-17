var apiKey = require('./../.env').apiKey;

function Patient(){
  this.displayDoctor = function(doctorData) {
    $("#doctor-list").append('<p>' + doctorData.practices[0].name + " || " + doctorData.profile.first_name + doctorData.profile.last_name + '</p>');
    console.log(doctorData);
  }
}



Patient.prototype.getDoctors = function(medicalIssue, displayDoctor) {
  var call = this;
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=30&user_key=' + apiKey)
  .then(function(response) {
    response.data.forEach(function(doctor) {
      call.displayDoctor(doctor);
    });
  })
  .fail(function(error){
    $('#doctor-list').text(error.responseJSON.message);
  });
};


exports.patientModule = Patient;
