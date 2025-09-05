<template>
  <div class="header-container">
    <h1 class="header-title">Statistics</h1>
    
    <div class="header-actions">
      <!-- Search Bar -->
      <div class="search-wrapper">
        <div class="search-icon">
          <svg class="search-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search something..."
          class="search-input"
        />
      </div>
      
      <!-- Upgrade Button -->
      <button class="upgrade-btn">Upgrade</button>
      
      <!-- Notifications -->
      <button class="notif-btn">
        <svg class="notif-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM12 17.5a.5.5 0 01-.5-.5V9a.5.5 0 011 0v8a.5.5 0 01-.5.5z"/>
        </svg>
        <span class="notif-dot"></span>
      </button>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #1e293b;
  border-bottom: 1px solid #334155;
}

.header-title {
  font-size: 1.75rem;
  font-weight: bold;
  color: #cbd5e1;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.search-wrapper {
  position: relative;
}

.search-icon {
  position: absolute;
  inset-y: 0;
  left: 0;
  padding-left: 0.75rem;
  display: flex;
  align-items: center;
  pointer-events: none;
}

.search-svg {
  height: 1.25rem;
  width: 1.25rem;
  color: #9ca3af;
}

.search-input {
  width: 20rem;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: 0.5rem;
  border: 1px solid #334155;
  background-color: #0f172a;
  color: #cbd5e1;
  transition: all 0.3s ease;
  outline: none;
}

.search-input::placeholder {
  color: #9ca3af;
}

.search-input:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.5);
}

.upgrade-btn,
.notif-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  background-color: #334155;
  color: #cbd5e1;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.upgrade-btn:hover,
.notif-btn:hover {
  background-color: #475569;
  transform: translateY(-2px);
}

.upgrade-btn {
  padding: 0.75rem 1.5rem;
}

.notif-btn {
  position: relative;
  padding: 0.75rem;
}

.notif-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.notif-dot {
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background-color: #f87171;
}
</style>