<script>
	import { supabaseClient } from '$lib/supabase';

	async function handleGoogleSignIn() {
		try {
			const { error } = await supabaseClient.auth.signInWithOAuth({ provider: 'google' });

			if (error) {
				// Handle Google login failure
				console.error('Google Sign-In Error:', error);
			} else {
				// Handle successful Google login
				console.log('Google Sign-In Successful');
			}
		} catch (error) {
			// Handle Google login failure
			console.error('Google Sign-In Error:', error);
		}
	}
</script>

<main>
	<h1>Login</h1>
	<form action="?/login" method="POST" class="auth-form">
		<label for=""> Email </label>
		<input type="text" name="email" />
		<label for=""> Password </label>
		<input type="password" name="password" />
		<button type="submit" class="btn btn-primary">Login</button>
		<br>
		<p>OR</p>
		<br>
		<button type="button" on:click={handleGoogleSignIn} class="btn btn-google">
			Sign in with Google
		</button>
	</form>
</main>
