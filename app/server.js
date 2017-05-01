
import express from 'express';
import path from 'path';
import  converter  from '../app/converter';

const app = express();
let temperature = 0;

app.get('/', (req, res)=>{
	 res.sendFile(path.join(__dirname+'/static/index.html'));
});
app.get('/toCelsius', (req,res)=>{
	temperature = req.query.temperature;
	res.status(200).json({"temp": converter.toCelsius(temperature)});
});

app.get('/toFahrenheit', (req, res)=>{
	temperature = req.query.temperature;
	res.status(200).json({"temp": converter.toFahrenheit(temperature)});
});

app.listen(3000, ()=> {
  console.log('API listening on port 3000!');
});