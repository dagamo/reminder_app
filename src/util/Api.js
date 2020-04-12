import axios from 'axios';

export const getToken = ()=> localStorage.getItem('token');

export default axios.create({
	baseURL: 'https://latam-backend-master-si7zlr5qeq-uc.a.run.app/', //YOUR_API_URL HERE
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		
		//'Content-Type': 'application/x-www-form-urlencoded'
	}
});
