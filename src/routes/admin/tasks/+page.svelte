<script>
  import { onMount } from 'svelte';

  // Password
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

  // State variables
  let tasks = [];
  let newTask = { title: '', description: '' };
  let editingTask = null;
  let editForm = { title: '', description: '' };
  let mounted = false;

  // Reactive computed values
  $: totalTasks = tasks.length;
  $: completedTasks = tasks.filter(task => task.status === 'completed').length;
  $: doingTasks = tasks.filter(task => task.status === 'doing').length;

  // Initialize with sample data
  onMount(() => {
    try {
      // Check if we're in the browser environment
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = localStorage.getItem('tasks');
        if (saved) {
          tasks = JSON.parse(saved);
        } else {
          initializeSampleTasks();
        }
      } else {
        initializeSampleTasks();
      }
    } catch (error) {
      console.warn('localStorage not available, using sample data:', error);
      initializeSampleTasks();
    }
    mounted = true;
  });

  function initializeSampleTasks() {
    tasks = [
      {
        id: 1,
        title: "Welcome to Tasks Manager! 🎉",
        description: "This is your first sample task. You can edit, complete, or delete it.",
        status: "pending",
        createdAt: new Date().toISOString()
      },
      {
        id: 2,
        title: "Learn Svelte Framework",
        description: "Study Svelte documentation and build amazing reactive applications.",
        status: "doing",
        createdAt: new Date().toISOString()
      }
    ];
  }

  // Save tasks to localStorage whenever tasks change (but only after mounting)
  $: if (mounted && tasks.length >= 0) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    } catch (error) {
      console.warn('Could not save to localStorage:', error);
    }
  }

  function addTask() {
    if (!newTask.title.trim()) return;

    const task = {
      id: Date.now(),
      title: newTask.title.trim(),
      description: newTask.description.trim(),
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    tasks = [...tasks, task];
    newTask = { title: '', description: '' };
  }

  function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
  }

  function toggleComplete(taskId) {
    tasks = tasks.map(task => 
      task.id === taskId 
        ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' }
        : task
    );
  }

  function startEditing(task) {
    editingTask = task.id;
    editForm = {
      title: task.title,
      description: task.description
    };
  }

  function saveEdit() {
    tasks = tasks.map(task => 
      task.id === editingTask 
        ? { ...task, title: editForm.title.trim(), description: editForm.description.trim() }
        : task
    );
    editingTask = null;
  }

  function cancelEdit() {
    editingTask = null;
    editForm = { title: '', description: '' };
  }

  function setDoingNow(taskId) {
    tasks = tasks.map(task => ({
      ...task,
      status: task.id === taskId ? 'doing' : (task.status === 'doing' ? 'pending' : task.status)
    }));
  }

  function handleKeydown(event) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      addTask();
    }
  }
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
<div class="app">
  <div class="header">
    <h1 class="title">✨ Tasks Manager</h1>
    <p class="subtitle">Organize your life with style</p>
  </div>

  <div class="stats">
    <div class="stat-card total">
      <div class="stat-number">{totalTasks}</div>
      <div class="stat-label">📋 Total Tasks</div>
    </div>
    <div class="stat-card completed">
      <div class="stat-number">{completedTasks}</div>
      <div class="stat-label">✅ Completed</div>
    </div>
    <div class="stat-card doing">
      <div class="stat-number">{doingTasks}</div>
      <div class="stat-label">🔥 Doing Now</div>
    </div>
  </div>

  <div class="task-input">
    <div class="input-group">
      <input 
        type="text" 
        class="input-field" 
        placeholder="🎯 Enter task title..."
        bind:value={newTask.title}
        on:keydown={handleKeydown}
      />
      <button class="btn" on:click={addTask}>
        ➕ Add Task
      </button>
    </div>
    <input 
      type="text" 
      class="input-field" 
      placeholder="📝 Enter task description (optional)..."
      bind:value={newTask.description}
      on:keydown={handleKeydown}
    />
  </div>

  <div class="tasks-container">
    {#if tasks.length === 0}
      <div class="empty-state">
        <div class="icon">🎯</div>
        <h3>No tasks yet!</h3>
        <p>Add your first task to get started on your productivity journey.</p>
      </div>
    {:else}
      {#each tasks as task (task.id)}
        <div class="task-card {task.status}">
          <div class="task-header">
            <div>
              <h3 class="task-title">{task.title}</h3>
              {#if task.description}
                <p class="task-description">{task.description}</p>
              {/if}
            </div>
            <div class="task-status {task.status}">
              {#if task.status === 'pending'}
                ⏳ Pending
              {:else if task.status === 'doing'}
                🔥 Doing Now
              {:else}
                ✅ Completed
              {/if}
            </div>
          </div>

          {#if editingTask === task.id}
            <div class="edit-form">
              <input 
                type="text" 
                class="input-field" 
                placeholder="Task title"
                bind:value={editForm.title}
              />
              <input 
                type="text" 
                class="input-field" 
                placeholder="Task description"
                bind:value={editForm.description}
              />
              <div class="edit-actions">
                <button class="btn success small" on:click={saveEdit}>
                  💾 Save
                </button>
                <button class="btn secondary small" on:click={cancelEdit}>
                  ❌ Cancel
                </button>
              </div>
            </div>
          {:else}
            <div class="task-actions">
              <button 
                class="btn success small" 
                on:click={() => toggleComplete(task.id)}
              >
                {task.status === 'completed' ? '↩️ Undo' : '✅ Complete'}
              </button>
              
              {#if task.status !== 'doing'}
                <button 
                  class="btn secondary small" 
                  on:click={() => setDoingNow(task.id)}
                >
                  🔥 Doing Now
                </button>
              {/if}
              
              <button 
                class="btn small" 
                on:click={() => startEditing(task)}
              >
                ✏️ Edit
              </button>
              
              <button 
                class="btn danger small" 
                on:click={() => deleteTask(task.id)}
              >
                🗑️ Delete
              </button>
            </div>
          {/if}
        </div>
      {/each}
    {/if}
  </div>
</div>
{/if}

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }

  :global(body::before) {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 0;
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

  .app {
    position: relative;
    z-index: 1;
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
    min-height: 100vh;
  }

  .header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .title {
    font-size: 2.5rem;
    font-weight: 800;
    background: black;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
  }

  .subtitle {
    font-size: 1.2rem;
    color: black;
    font-weight: 300;
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .stat-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 2rem;
    padding: 1.5rem;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .stat-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  .stat-card:hover::before {
    opacity: 1;
  }

  .stat-card.total {
    background: var(--orange-light);
  }

  .stat-card.completed {
      background: var(--orange-light);
  }

  .stat-card.doing {
    background: var(--orange-light);
  }

  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: black;
    margin-bottom: 0.5rem;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }

  .stat-label {
    font-size: 1rem;
    color: black;
    font-weight: 500;
  }

  .task-input {
    background: var(--orange-light);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 2rem;
    padding: 2rem;
    margin-bottom: 2rem;
    transition: all 0.3s ease;
    color: black;
  }

  .task-input:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }

  .input-group {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .input-field {
    flex: 1;
    background: rgba(255, 154, 4, 0.1);
    border: 1px solid rgba(255, 157, 0, 0.931);
    border-radius: 1rem;
    padding: 1rem 1.5rem;
    color: black;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .input-field::placeholder {
    color: var(--green-dark);
  }

  .input-field:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  }

  .btn {
    background: var(--green-button);
    border: none;
    border-radius: 1rem;
    padding: 1rem 2rem;
    color: var(--green-dark);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .btn:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
  }

  .btn:active {
    transform: scale(0.95);
  }

  .btn.secondary {
    background: var(--orange-light);
  }

  .btn.secondary:hover {
    box-shadow: 0 10px 25px rgba(240, 147, 251, 0.3);
  }

  .btn.success {
    background: var(--green-button);
  }

  .btn.success:hover {
    box-shadow: 0 10px 25px rgba(34, 197, 94, 0.3);
  }

  .btn.danger {
    background: var(--orange-dark);
  }

  .btn.danger:hover {
    box-shadow: 0 10px 25px rgba(239, 68, 68, 0.3);
  }

  .btn.small {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }

  .tasks-container {
    display: grid;
    gap: 1.5rem;
  }

  .task-card {
    background: var(--orange);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 2rem;
    padding: 2rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .task-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.05), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .task-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  .task-card:hover::before {
    opacity: 1;
  }

  .task-card.completed {
    background: var(--green-button);
    border-color: rgba(34, 197, 94, 0.3);
  }

  .task-card.doing {
    background: red;
    border-color: rgba(245, 87, 108, 0.3);
    position: relative;
  }

  .task-card.doing::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: red;
    border-radius: 2rem;
    z-index: -1;
    animation: pulse 2s infinite;
    pointer-events: none;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
  }

  .task-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .task-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.5rem;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  }

  .task-description {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .task-status {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .task-status.pending {
    background: var(--orange-light);
    color: #fbbf24;
  }

  .task-status.completed {
    background: linear-gradient(45deg, rgba(34, 197, 94, 0.2), rgba(59, 130, 246, 0.2));
    color: #22c55e;
  }

  .task-status.doing {
    background: linear-gradient(45deg, rgba(245, 87, 108, 0.2), rgba(240, 147, 251, 0.2));
    color: #f093fb;
    animation: pulse 2s infinite;
  }

  .task-actions {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
    flex-wrap: wrap;
    position: relative;
    z-index: 10;
  }

  .edit-form {
    margin-top: 1rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .edit-form .input-field {
    margin-bottom: 1rem;
  }

  .edit-actions {
    display: flex;
    gap: 1rem;
  }

  .empty-state {
    text-align: center;
    padding: 2rem;
    color: black;
    background: var(--orange-light);
    border-radius: 2rem;
  }

  .empty-state .icon {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  .empty-state h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: black;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 2.5rem;
    }
    
    .input-group {
      flex-direction: column;
    }
    
    .task-actions {
      flex-direction: column;
    }
    
    .edit-actions {
      flex-direction: column;
    }
  }
</style>