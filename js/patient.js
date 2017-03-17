var apiKey = require('./../.env').apiKey;

function Patient(){
}

Patient.prototype.getDoctors = function(medicalIssue, displayDoctor) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=20&user_key=' + apiKey)
  .then(function(response) {
    response.data.forEach(function(doctor) {
      displayDoctor(doctor);
    });
  })
  .fail(function(error){
    $('#doctor-list').text(error.responseJSON.message);
  });
};

exports.patientModule = Patient;
