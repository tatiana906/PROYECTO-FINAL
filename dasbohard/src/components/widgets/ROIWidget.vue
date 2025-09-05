<template>
  <div class="card-container">
    <!-- Header -->
    <div class="header">
      <div class="header-left">
        <svg class="icon-yellow" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        <h3 class="title">ROI</h3>
      </div>
      <span class="subtitle">Returns</span>
    </div>
    
    <!-- KPI -->
    <div class="kpi">
      <div class="kpi-value">283%</div>
      <div class="kpi-text">Return On Investment</div>
    </div>
    
    <!-- Chart -->
    <div class="chart">
      <svg viewBox="0 0 300 80">
        <path
          d="M0 60 Q50 40 100 45 T200 35 T300 25"
          fill="none"
          stroke="#FDE047"
          stroke-width="2"
          stroke-linecap="round"
        />
        <circle cx="250" cy="30" r="4" fill="#FDE047"/>
      </svg>
    </div>
    
    <!-- Toggle -->
    <div class="toggle">
      <span class="label-light">Light</span>
      <div class="toggle-track">
        <div class="toggle-knob"></div>
      </div>
      <span class="label-dark">Dark</span>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* 📌 Card */
.card-container {
  background-color: #1f2937; /* bg-gray-800 */
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

.header-left {
  display: flex;
  align-items: center;
}

.icon-yellow {
  width: 1.25rem; /* w-5 */
  height: 1.25rem; /* h-5 */
  color: #facc15; /* text-yellow-400 */
  margin-right: 0.5rem; /* mr-2 */
}

.title {
  color: #ffffff;
  font-weight: 600;
}

.subtitle {
  color: #9ca3af; /* text-gray-400 */
  font-size: 0.875rem;
}

/* 📌 KPI */
.kpi {
  margin-bottom: 1.5rem;
}

.kpi-value {
  color: #ffffff;
  font-size: 2.25rem; /* text-4xl */
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.kpi-text {
  color: #9ca3af; /* text-gray-400 */
  font-size: 0.875rem;
}

/* 📌 Chart */
.chart {
  position: relative;
  height: 5rem; /* h-20 */
  margin-bottom: 1rem;
}

.chart svg {
  width: 100%;
  height: 100%;
}

/* 📌 Toggle */
.toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.label-light {
  color: #9ca3af;
  font-size: 0.875rem;
}

.label-dark {
  color: #ffffff;
  font-size: 0.875rem;
}

.toggle-track {
  width: 2rem;   /* w-8 */
  height: 1rem;  /* h-4 */
  background-color: #4b5563; /* bg-gray-600 */
  border-radius: 9999px;
  position: relative;
  display: flex;
  align-items: center;
}

.toggle-knob {
  width: 0.75rem;  /* w-3 */
  height: 0.75rem; /* h-3 */
  background-color: #facc15; /* bg-yellow-400 */
  border-radius: 9999px;
  position: absolute;
  top: 0.125rem;  /* top-0.5 */
  left: 0.125rem; /* left-0.5 */
  transition: transform 0.2s;
}
</style>