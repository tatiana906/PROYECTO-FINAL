<template>
  <div class="app-container">
    <div class="app-content">
      <div class="dashboard-layout">
        <!-- Sidebar -->
        <div class="sidebar">
          <div class="logo">
            <div class="logo-icon">W</div>
            <span class="logo-text">Wise</span>
          </div>

          <div class="user-profile">
            <div class="user-avatar">LC</div>
            <div>
              <div class="user-name">Louis Carter</div>
              <div class="user-role">CEO</div>
            </div>
          </div>

          <nav class="nav-menu">
            <ul>
              <li>
                <a href="#" class="nav-item active">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" class="nav-item">
                  Activity
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Main -->
        <div class="main-content">
          <div class="header">
            <h1 class="header-title">Statistics</h1>
          </div>

          <div class="dashboard-grid">
            <!-- Website Traffic Widget -->
            <div class="card-traffic">
              <div class="card-yellow">
                <div class="card-header">
                  <h3 class="card-title">Website traffic</h3>
                  <span class="card-more">More</span>
                </div>

                <div class="progress-wrapper">
                  <div class="progress-circle">
                    <svg class="progress-svg" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        class="progress-bg"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        class="progress-bar"
                      />
                    </svg>
                    <div class="progress-value">12k</div>
                  </div>
                </div>

                <div class="stats">
                  <div class="stats-item">
                    <div class="stats-label">
                      <div class="dot-black"></div>
                      <span>Social Media</span>
                    </div>
                    <span class="stats-value">78%</span>
                  </div>
                  <div class="stats-item">
                    <div class="stats-label">
                      <div class="dot-gray"></div>
                      <span>Organic Search</span>
                    </div>
                    <span class="stats-value">22%</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Aquí puedes seguir metiendo más widgets -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: "Dashboard" };
</script>

<style scoped>
/* Layout */
.app-container {
  min-height: 100vh;
  background: #111827; /* gray-900 */
  padding: 1.5rem;
}
.app-content {
  max-width: 1280px;
  margin: 0 auto;
}
.dashboard-layout {
  display: flex;
  gap: 1.5rem;
}

/* Sidebar */
.sidebar {
  width: 16rem;
  background: #1f2937; /* gray-800 */
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}
.logo {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}
.logo-icon {
  width: 2rem;
  height: 2rem;
  background: #facc15; /* yellow-400 */
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
  font-weight: bold;
  color: black;
}
.logo-text {
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
}
.user-profile {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #374151; /* gray-700 */
}
.user-avatar {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(to bottom right, #fb923c, #ec4899);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
  color: white;
  font-weight: 600;
}
.user-name {
  color: white;
  font-weight: 500;
}
.user-role {
  color: #9ca3af; /* gray-400 */
  font-size: 0.875rem;
}
.nav-menu {
  flex: 1;
}
.nav-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  color: #9ca3af;
  text-decoration: none;
}
.nav-item:hover {
  background: #374151;
  color: white;
}
.nav-item.active {
  background: #374151;
  color: white;
}

/* Main */
.main-content {
  flex: 1;
}
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}
.header-title {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
}

/* Grid */
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

/* Website Traffic Card */
.card-traffic {
  grid-column: span 2;
}
.card-yellow {
  background: #facc15;
  border-radius: 1rem;
  padding: 1.5rem;
  color: black;
}
.card-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.card-title {
  font-weight: 600;
}
.card-more {
  font-size: 0.875rem;
  opacity: 0.7;
}
.progress-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}
.progress-circle {
  position: relative;
  width: 8rem;
  height: 8rem;
}
.progress-svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}
.progress-bg {
  fill: none;
  stroke: rgba(0, 0, 0, 0.1);
  stroke-width: 2;
}
.progress-bar {
  fill: none;
  stroke: rgba(0, 0, 0, 0.8);
  stroke-width: 2;
  stroke-dasharray: 75, 100;
  stroke-linecap: round;
}
.progress-value {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.875rem;
  font-weight: bold;
}
.stats {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.stats-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.stats-label {
  display: flex;
  align-items: center;
}
.stats-value {
  font-size: 0.875rem;
  font-weight: 500;
}
.dot-black {
  width: 0.75rem;
  height: 0.75rem;
  background: black;
  border-radius: 50%;
  margin-right: 0.5rem;
}
.dot-gray {
  width: 0.75rem;
  height: 0.75rem;
  background: #4b5563; /* gray-600 */
  border-radius: 50%;
  margin-right: 0.5rem;
}
</style>
