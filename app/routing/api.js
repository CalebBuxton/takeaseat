var reserved = require("../data/reserved");
var waiting = require("../data/waiting");

module.exports = function(app) {
	app.get("/api/reserved", function(req, res) {
		res.json(reserved);
	});

	app.get("/api/waiting", function(req, res) {
		res.json(waiting);
	})

	app.post("/api/reserved", function(req, res) {
		if (reserved.length < 5) {
			reserved.push(req.body);
			res.json(true);
		}
		else {
			waiting.push(req.body);
			res.json(false);
		}
	});

	app.post("/api/clear", function(req, res) {
		reserved = [];
		waiting = [];

		console.log(reserved)
	})
}