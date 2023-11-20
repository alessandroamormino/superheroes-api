import {reactive} from 'vue';
export const store = reactive ({
	supe_name : '',
	api_url : 'https://superheroapi.com/api.php/',
	token : import.meta.env.VITE_API_TOKEN,
	results : [],
});