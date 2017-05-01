
import express from 'express';
import  converter  from '../app/converter';

const app = express();
let temperature = 0;

app.get('/', ()=>{
	console.log('main');
});
app.get('/toCelsius', (req,res)=>{
	temperature = req.query.temperature;
	res.status(200).json({"temp": converter.toCelsius(temperature)});
});

app.get('/toFahrenheit', (req, res)=>{
	temperature = req.query.temperature;
	res.status(200).json({"temp": converter.toCelsius(temperature)});
});

app.listen(3000, ()=> {
  console.log('APP listening on port 3000!');
});