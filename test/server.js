// Module dependecies
var expect = require('chai').expect;
var axios = require('axios');

describe('Temperature conversor API', function(){
	describe('Celsius to Fahrenheit conversion', function(){
		it('return status 200', function(done){
			axios
				.get('http://localhost:8080/toFahrenheit?temperature=100')
				.then(function(res){
					expect(res.status).to.equal(200);
					done();
				})
		})

		it('return  100c in Fahrenheit', function(done){
			axios
				.get('http://localhost:8080/toFahrenheit?temperature=100')
				.then(function(res){
					expect(res.data).to.equal(212);
					done();
				})
		})

	})

	describe('Fahrenheit to Celsius conversion', function(){
		it('return status 200', function(done){
			axios
				.get('http://localhost:8080/toCelsius?temperature=212')
				.then(function(res){
					expect(res.status).to.equal(200);
					done();
				})
		})

		it('return  100c in Celsius', function(done){
			axios
				.get('http://localhost:8080/toCelsius?temperature=212')
				.then(function(res){
					expect(res.data).to.equal(100);
					done();
				})
		})

	})


})