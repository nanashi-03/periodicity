<script lang="ts">
	// import { enhance, type SubmitFunction } from '$app/forms';
	import { supabaseClient } from '$lib/supabase';
	import type { PageData } from './$types';

	export let data: PageData;
	// let email = data.session?.user.email;
	// let username:String;

	// async function getUser() {
	// 	// const { data, error } = await supabaseClient.from('users').select('name').eq('email', email)
	// 	const { data, error } = await supabaseClient.from('users').select('*')
	// 	console.log(data)
	// }

	// getUser();

	// if(email) {
		
	// } else {

	// }

	// const submitLogout: SubmitFunction = async ({ cancel }) => {
	// 	const { error } = await supabaseClient.auth.signOut();
	// 	if (error) {
	// 		console.log(error);
	// 	}
	// 	cancel();
	// };
</script>

<div class="home-welcome">
	{#if data.session}
		<h2>Welcome, {data.session.user.email}</h2>
		<p>Input your period data to predict your next period either with the help of your known period cycle or with a prediction algorithm</p>
		<!-- <form action="/logout" method="POST" use:enhance={submitLogout}>
			<button type="submit" class="btn btn-primary">Logout</button>
		</form> -->
	{:else}
		<p>Register/Login to access the interface</p>
	{/if}
</div>
