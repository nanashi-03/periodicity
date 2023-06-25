<script lang="ts">
	// import { enhance, type SubmitFunction } from '$app/forms';
	// import { supabaseClient } from '$lib/supabase';
	import type { PageData } from './$types';

	export let data: PageData;

	// const submitLogout: SubmitFunction = async ({ cancel }) => {
	// 	const { error } = await supabaseClient.auth.signOut();
	// 	if (error) {
	// 		console.log(error);
	// 	}
	// 	cancel();
	// };
</script>

<main>
	{#if data.session}
		<p>Welcome, {data.session.user.email}</p>
		<p>Input your period data to predict your next period either with the help of your known period cycle or with a prediction algorithm</p>
		<!-- <form action="/logout" method="POST" use:enhance={submitLogout}>
			<button type="submit" class="btn btn-primary">Logout</button>
		</form> -->
	{:else}
		<p>Register/Login to access the interface</p>
	{/if}
</main>
