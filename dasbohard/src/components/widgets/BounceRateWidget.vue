<template>
  <div class="card-container">
    <!-- Header -->
    <div class="header">
      <h3 class="title">Bounce Rate</h3>
      <button class="icon-btn">
        <svg class="icon white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
    
    <!-- Date Navigation -->
    <div class="date-nav">
      <button class="nav-btn">
        <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      <div class="date-list">
        <span class="date-item">2</span>
        <span class="date-item active">3</span>
        <span class="date-item">4</span>
      </div>
      <button class="nav-btn">
        <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
    
    <!-- Bounce Rate -->
    <div class="rate">
      <div class="rate-value">23%</div>
      <div class="rate-change">-10% last day</div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* 📌 Contenedor */
.card-container {
  background-color: #374151; /* bg-gray-700 */
  border-radius: 1rem;       /* rounded-2xl */
  padding: 1.5rem;           /* p-6 */
  height: 100%;
}

/* 📌 Header */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.title {
  color: #ffffff;
  font-weight: 600;
}

.icon-btn {
  width: 2rem;
  height: 2rem;
  background-color: #4b5563; /* bg-gray-600 */
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 1rem;
  height: 1rem;
  stroke: currentColor;
}

.icon.white {
  color: #ffffff;
}

/* 📌 Navegación de fechas */
.date-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.nav-btn {
  color: #9ca3af; /* text-gray-400 */
  transition: color 0.2s;
}

.nav-btn:hover {
  color: #ffffff;
}

.date-list {
  display: flex;
  gap: 0.5rem; /* space-x-2 */
}

.date-item {
  width: 2rem;
  height: 2rem;
  background-color: #4b5563; /* bg-gray-600 */
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 0.875rem; /* text-sm */
}

.date-item.active {
  background-color: #facc15; /* bg-yellow-400 */
  color: #000000;
  font-weight: 500;
}

/* 📌 Bounce Rate */
.rate {
  text-align: center;
}

.rate-value {
  color: #ffffff;
  font-size: 2.25rem; /* text-4xl */
  font-weight: 700;   /* font-bold */
  margin-bottom: 0.25rem;
}

.rate-change {
  color: #f87171; /* text-red-400 */
  font-size: 0.875rem; /* text-sm */
}
</style>