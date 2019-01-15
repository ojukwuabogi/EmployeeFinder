// POST ROUTES / LOAD DATA //

var employeeList = require('../data/employee.js');

module.exports = function(app){

  app.get('/api/employee', function(req,res){
    res.json(employeeList);
  });

  app.post('/api/employee', function(req,res){

  	var newemployee = req.body.scores;
  	var scoresList = [];
  	var employeeCount = 0;
  	var topMatch = 0;

// CHECK LIST //

	for(var l=0; l<employeeList.length; l++) {
		var scoresDiffer = 0;
	for(var p=0; p<newemployee.length; p++){
		scoresDiffer += (Math.abs(parseInt(employeeList[l].scores[p]) - parseInt(newemployee[p])));
	}

	scoresList.push(scoresDiffer);
	}

	for(var l=0; l<scoresList.length; l++){
		if(scoresList[l] <= scoresList[topMatch]){
		topMatch = l;
	}
}

// MATCH DATA  Best EMPLOYEE //

var baf = employeeList[topMatch];
res.json(baf);

// EMPLOYEE LIST ARRAY //

    employeeList.push(req.body);
  });
};