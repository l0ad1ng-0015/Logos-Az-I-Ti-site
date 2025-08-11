<script>
	import { onMount } from 'svelte';

	let isLoggedIn = false;
	let username = '';
	let password = '';
	let rememberMe = false;

	const ADMIN_USERNAME = 'Logosaziti';
	const ADMIN_PASSWORD = 'Logosaziti123';

	// Логика за вход
	function handleLogin() {
		if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
			isLoggedIn = true;

			// Запазване на данни за вход в localStorage, ако е избрано "Запомни ме"
			if (rememberMe) {
				localStorage.setItem('isLoggedIn', 'true');
			}
		} else {
			alert('Грешно потребителско име или парола!');
		}
	}

	// Проверка дали потребителят вече е логнат
	onMount(() => {
		if (localStorage.getItem('isLoggedIn') === 'true') {
			isLoggedIn = true;
		}
	});

	let commits = [];
	const MAX_COMMITS = 20;

	async function fetchCommits() {
		const response = await fetch('https://api.github.com/repos/l0ad1ng-0015/Logos-Az-I-Ti-site/commits');
		const data = await response.json();
		commits = data.slice(0, MAX_COMMITS).map((commit) => ({
			message: commit.commit.message,
			date: new Date(commit.commit.author.date).toLocaleString()
		}));
	}

	onMount(fetchCommits);

	onMount(() => {
		if (isLoggedIn) fetchCommits();
	});
</script>

{#if !isLoggedIn}
	<div class="login-form">
		<h2 style="margin-bottom: 20px">Админ страница</h2>
		<input type="text" placeholder="Потребителско име" bind:value={username} />
		<input type="password" placeholder="Парола" bind:value={password} />
		<label>
			<input type="checkbox" bind:checked={rememberMe} />
			Запомни ме
		</label>
		<button on:click={handleLogin}>Вход</button>
	</div>
{:else}
	<div class="container">
		<h1>Лист ъпдейти</h1>
		<p class="info">Лист с последните ъпдейти направени по сайта.</p>
		<table>
			<thead>
				<tr>
					<th>Дата</th>
					<th>Съобщение</th>
				</tr>
			</thead>
			<tbody>
				{#each commits as commit}
					<tr>
						<td data-label="Date">{commit.date}</td>
						<td data-label="Message">{commit.message}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}

<style>
	.container {
		width: 90%;
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
	}

	.login-form {
		width: 300px;
		margin: 50px auto;
		padding: 20px;
		border: 1px solid #ddd;
		border-radius: 8px;
		background-color: var(--orange-light);
		text-align: center;
	}

    input[type='text'], 
    input[type='password'] {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        background-color: #fff;
        color: #000;
        font-size: 16px;
    }

    button {
        width: 100%;
        padding: 10px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }

    button:hover {
        background-color: #45a049;
    }

    .info {
        margin: 20px 0;
        font-size: 16px;
        color: #555;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        font-size: 16px;
        background-color: #f9f9f9;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        table-layout: fixed;
        word-wrap: break-word;
        border: 1px solid #ddd;
    }

    th, td {
        padding: 12px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    th {
        background-color: #f2f2f2;
        font-weight: bold;
    }

    tr:nth-child(even) {
        background-color: #f9f9f9;
    }

    tr:hover {
        background-color: #f1f1f1;
    }
</style>