import axios from 'axios';

export default axios.create({
	baseURL: 'https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/', //YOUR_API_URL HERE
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
		'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
		
		//'Content-Type': 'application/x-www-form-urlencoded'
	}
});
