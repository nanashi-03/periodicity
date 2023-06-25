<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { supabaseClient } from '$lib/supabase';
	import { enhance, type SubmitFunction } from '$app/forms';
	import { onMount } from 'svelte';
	import '../app.postcss';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			console.log('Auth state change detected');
			invalidateAll();
		});

		return () => {
			subscription.unsubscribe();
		};
	});

	const submitLogout: SubmitFunction = async ({ cancel }) => {
		const { error } = await supabaseClient.auth.signOut();
		if (error) {
			console.log(error);
		}
		cancel();
	};
</script>

<div class="area" />
<nav class="main-menu">
	<ul>
		<li>
			<a href="#0">
				<i class="fa fa-home fa-2x" />
				<span class="nav-text"> Home </span>
			</a>
		</li>
		<li>
			<a href="#0">
				<i class="fa fa-book fa-2x" />
				<span class="nav-text"> Input </span>
			</a>
		</li>
		<li>
			<a href="#0">
				<i class="fa fa-cogs fa-2x" />
				<span class="nav-text"> Predict </span>
			</a>
		</li>
		<li>
			<a href="#0">
				<i class="fa fa-info fa-2x" />
				<span class="nav-text"> Calculate </span>
			</a>
		</li>
	</ul>
	{#if data.session}
		<form action="/logout" method="POST" use:enhance={submitLogout}>
			<button id="logout" type="submit">
				<ul>
					<li>
						<i class="fa fa-power-off fa-2x" />
						<span class="nav-text"> Logout </span>
					</li>
				</ul>
			</button>
		</form>
	{:else}
		<div id="auth-buttons">
			<ul>
				<li>
					<a href="/login">
						<i class="fa fa-solid fa-right-to-bracket fa-2x" />
						<span class="nav-text"> Login </span>
					</a>
				</li>
				<li>
					<a href="/register">
						<i class="fa fa-solid fa-id-card fa-2x" />
						<span class="nav-text"> Register </span>
					</a>
				</li>
			</ul>
		</div>
		<!-- class="btn btn-primary" -->
	{/if}
</nav>
<main>
	<h1 class="logo">Periodicity</h1>
	<slot />
</main>
