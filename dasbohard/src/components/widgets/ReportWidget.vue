<template>
  <div class="card-container">
    <!-- Background Image Placeholder -->
    <div class="background-overlay">
      <div class="background-gradient"></div>
    </div>

    <div class="content">
      <div class="header">
        <h3 class="title">Full Report</h3>
        <span class="subtitle">/ 2023</span>
      </div>

      <div class="download-section">
        <button class="download-btn">
          <span class="download-text">Download Report</span>
          <div class="download-icon">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              />
            </svg>
          </div>
        </button>
      </div>

      <!-- Person with VR Headset Placeholder -->
      <div class="circle-decoration"></div>

      <!-- Yellow Badge -->
      <div class="badge-container">
        <span class="badge">Web Score with AI</span>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* 📌 Contenedor principal */
.card-container {
  background-color: #374151; /* bg-gray-700 */
  border-radius: 1rem; /* rounded-2xl */
  padding: 1.5rem; /* p-6 */
  position: relative;
  overflow: hidden;
  height: 100%;
}

/* 📌 Fondo degradado */
.background-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.2;
}

.background-gradient {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background: linear-gradient(to bottom right, #a855f7, #ec4899); /* from-purple-500 to-pink-500 */
}

/* 📌 Contenido */
.content {
  position: relative;
  z-index: 10;
}

/* 📌 Encabezado */
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

.subtitle {
  color: #9ca3af; /* text-gray-400 */
  font-size: 0.875rem;
}

/* 📌 Botón de descarga */
.download-section {
  margin-bottom: 1.5rem;
}

.download-btn {
  display: flex;
  align-items: center;
  color: #ffffff;
  transition: color 0.2s;
}

.download-btn:hover {
  color: #facc15; /* text-yellow-400 */
}

.download-text {
  margin-right: 0.5rem;
}

.download-icon {
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
}

/* 📌 Círculo decorativo */
.circle-decoration {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 8rem;
  height: 8rem;
  border-radius: 9999px;
  opacity: 0.6;
  background: linear-gradient(to bottom right, #fb923c, #ec4899); /* from-orange-400 to-pink-500 */
}

/* 📌 Insignia amarilla */
.badge-container {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
}

.badge {
  background-color: #facc15; /* bg-yellow-400 */
  color: #000000;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
}
</style>