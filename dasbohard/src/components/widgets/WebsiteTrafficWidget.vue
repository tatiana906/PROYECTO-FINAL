<template>
  <div class="card-traffic">
    <!-- Header -->
    <div class="header">
      <h3 class="title">Website traffic</h3>
      <span class="subtitle">More</span>
    </div>
    
    <!-- Circular Progress -->
    <div class="progress-wrapper">
      <div class="progress-circle">
        <svg class="progress-svg" viewBox="0 0 36 36">
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="rgba(0,0,0,0.1)"
            stroke-width="2"
          />
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="rgba(0,0,0,0.8)"
            stroke-width="2"
            stroke-dasharray="75, 100"
            stroke-linecap="round"
          />
        </svg>
        <div class="progress-value">
          <span>12k</span>
        </div>
      </div>
    </div>
    
    <!-- Stats -->
    <div class="stats">
      <div class="stat-row">
        <div class="stat-label">
          <div class="dot-black"></div>
          <span>Social Media</span>
        </div>
        <span class="stat-value">78%</span>
      </div>
      <div class="stat-row">
        <div class="stat-label">
          <div class="dot-gray"></div>
          <span>Organic Search</span>
        </div>
        <span class="stat-value">22%</span>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* 📌 Card */
.card-traffic {
  background-color: #facc15; /* bg-yellow-400 */
  border-radius: 1rem;       /* rounded-2xl */
  padding: 1.5rem;           /* p-6 */
  color: #000000;            /* text-black */
}

/* 📌 Header */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.title {
  font-weight: 600;
}

.subtitle {
  font-size: 0.875rem; /* text-sm */
  opacity: 0.7;
}

/* 📌 Progress */
.progress-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.progress-circle {
  position: relative;
  width: 8rem;  /* w-32 */
  height: 8rem; /* h-32 */
}

.progress-svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.progress-value {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.progress-value span {
  font-size: 1.875rem; /* text-3xl */
  font-weight: 700;
}

/* 📌 Stats */
.stats {
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* space-y-2 */
}

.stat-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.stat-label {
  display: flex;
  align-items: center;
}

.dot-black {
  width: 0.75rem;  /* w-3 */
  height: 0.75rem; /* h-3 */
  background-color: #000;
  border-radius: 9999px;
  margin-right: 0.5rem;
}

.dot-gray {
  width: 0.75rem;
  height: 0.75rem;
  background-color: #4b5563; /* gray-600 */
  border-radius: 9999px;
  margin-right: 0.5rem;
}

.stat-value {
  font-size: 0.875rem; /* text-sm */
  font-weight: 500;
}
</style>
