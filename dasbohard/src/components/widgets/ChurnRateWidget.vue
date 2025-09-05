<template>
  <div class="card-container">
    <h3 class="title">Customer Churn Rate</h3>
    <div class="badge-container">
      <span class="badge">+8.7%</span>
    </div>
    
    <!-- 📊 Bar Chart -->
    <div class="chart">
      <div class="bar-col">
        <div class="bar"></div>
        <span class="label">Jan 21</span>
      </div>
      <div class="bar-col">
        <div class="bar" style="height: 80px;"></div>
        <span class="label">Feb 21</span>
      </div>
      <div class="bar-col">
        <div class="bar" style="height: 45px;"></div>
        <span class="label">Mar 21</span>
      </div>
      <div class="bar-col">
        <div class="bar highlight" style="height: 120px;"></div>
        <span class="label active">Apr 21</span>
      </div>
      <div class="bar-col">
        <div class="bar" style="height: 70px;"></div>
        <span class="label">May 21</span>
      </div>
      <div class="bar-col">
        <div class="bar" style="height: 55px;"></div>
        <span class="label">Jun 21</span>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* 📌 Contenedor principal */
.card-container {
  background-color: #1f2937; /* bg-gray-800 */
  border-radius: 1rem;       /* rounded-2xl */
  padding: 1.5rem;           /* p-6 */
  height: 100%;
}

/* 📌 Título */
.title {
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

/* 📌 Badge */
.badge-container {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.badge {
  color: #facc15;            /* text-yellow-400 */
  font-size: 0.875rem;       /* text-sm */
  background-color: rgba(250, 204, 21, 0.2); /* bg-yellow-400/20 */
  padding: 0.25rem 0.5rem;   /* px-2 py-1 */
  border-radius: 0.25rem;    /* rounded */
}

/* 📌 Gráfico de barras */
.chart {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 8rem; /* h-32 */
  margin-bottom: 1rem;
}

.bar-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bar {
  width: 1.5rem;             /* w-6 */
  background-color: #4b5563; /* bg-gray-600 */
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  height: 60px; /* valor por defecto (Jan) */
}

.bar.highlight {
  background-color: #facc15; /* bg-yellow-400 */
}

.label {
  margin-top: 0.5rem;
  font-size: 0.75rem;        /* text-xs */
  color: #9ca3af;            /* text-gray-400 */
}

.label.active {
  color: #ffffff;
}
</style>