<script>
import {store} from '../store.js';
import axios from 'axios';
	export default {
		name: 'Homepage',
		data(){
			return {
				title : 'Superheroes API',
				store,
			}
		},
		methods:{
			search() {
				let url = this.store.api_url + this.store.token + '/search/' + this.store.supe_name;  
				axios.get(url).then((res) => {
					this.store.results = res.data.results;
					console.log(this.store.results[0]);
				}).catch((error) => {
					this.store.error = error.response.status;
				});
			}
		},
		created(){
			console.log(this.store.token);
		}
	}
</script>
<template>
	<div id="container">
		<main>
			<div class="title">
				<h1>{{title}}</h1>
			</div>
			<div class="content">
				<h2>Cerca il tuo supereroe</h2>
				<input type="search" v-model="this.store.supe_name">
				<button @click="search()">Search</button>
				<div class="results">
					<div v-if="this.store.results.length > 0" class="name">Name: {{ this.store.results[0].name }}</div>
					<img v-if="this.store.results.length > 0" :src=this.store.results[0].image.url class="image">
				</div>
			</div>
		</main>
	</div>
</template>
<style lang='scss' scoped>
	#container {
		max-width: 1400px;
		margin: 0 auto;
		main {
			.title {
				margin: 2em 0;
				text-align: center;
			}
			.content {
				.results {
					margin: 2em 0;
				}
			}
		}
	}
</style>