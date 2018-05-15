var chai = require('chai');
var chaiHttp = require('chai-http');
var htmlRoutes = ('/routes/html-routes');
var should = require('chai').should;

it('should list ALL characters on /character_selector', function (done) {
	chai.chaistatic.request(htmlRoutes)
		.get('/character_selector')
		.end(function (err, res) {
			res.should.have.status(200);
			done();
		});
});

