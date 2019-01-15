// DEPENDENCIES //

var path = require('path');

// ROUTING //

module.exports = function(app){

  app.get('../survey', function (req, res) {
 //   res.sendFile(path.join(__dirname + '/..public/survey.html'));
 res.sendFile(path.join(__dirname + '/Desktop/repos/gtech/GTATL201810FSF-Enterprise-GEDigital/11-unit/00-homework/instructions/employeeFinder/app/public/survey.html'));
  });

  app.use(function (req, res) {
   //res.sendFile(path.join(__dirname + '/..public/home.html'));
   res.sendFile(path.join(__dirname + '/Desktop/repos/gtech/GTATL201810FSF-Enterprise-GEDigital/11-unit/00-homework/instructions/employeeFinder/app/public/home.html'));
  });
};