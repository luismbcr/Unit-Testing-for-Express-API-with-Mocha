/*MODULE Dependecies */
var expect = require('chai').expect; //Compare values within conveter.
var converter = require('../app/converter');

describe('Temperature Conversor', function(){
	describe('Celsius to Fahrenheit conversion', function(){
		it('Converts 100c to Fahrenheit', function(){

			var fh = converter.toFahrenheit(100);
			expect(fh).to.equal(212);
		})
	})

	describe('Fahrenheit to Celsius conversion', function(){

		it('Converts 212F Fahrenheit to Celsius',function(){
			var cs = converter.toCelsius(212);
			expect(cs).to.equal(100);
		});
	});
})