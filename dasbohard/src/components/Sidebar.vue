<template>
  <div class="sidebar">
    <!-- Logo -->
    <div class="sidebar-logo">
      <div class="logo-box">
        <span class="logo-text">W</span>
      </div>
      <span class="logo-name">Wise</span>
    </div>

    <!-- User Profile -->
    <div class="sidebar-user">
      <div class="user-avatar">
        <span class="user-initials">LC</span>
      </div>
      <div>
        <div class="user-name">Louis Carter</div>
        <div class="user-role">CEO</div>
      </div>
    </div>

    <!-- Navigation Menu -->
    <nav class="sidebar-nav">
      <ul class="nav-list">
        <li>
          <a href="#" class="nav-link active">
            <svg class="nav-icon" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" class="nav-link">
            <svg class="nav-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            Activity
          </a>
        </li>
        <li>
          <a href="#" class="nav-link">
            <svg class="nav-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
            </svg>
            Schedule
          </a>
        </li>
        <li>
          <a href="#" class="nav-link">
            <svg class="nav-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
            </svg>
            Settings
          </a>
        </li>
      </ul>
    </nav>

    <!-- 📌 Logout Button -->
    <button @click="signOut" class="logout-btn">Cerrar sesión</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { supabase } from '../supabase'

const router = useRouter()

const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) {
    console.error('Error signing out:', error.message)
  } else {
    router.push('/login')
  }
}
</script>

<style scoped>
/* 📌 Sidebar */
.sidebar {
  width: 17.5rem; /* w-70, aumentado */
  background-color: #1f2937; /* bg-gray-800 */
  border-radius: 1rem; /* rounded-2xl */
  padding: 2rem; /* p-8, aumentado */
  display: flex;
  flex-direction: column;
}

/* 📌 Logo */
.sidebar-logo {
  display: flex;
  align-items: center;
  margin-bottom: 2rem; /* mb-8 */
}

.logo-box {
  width: 2rem;
  height: 2rem;
  background-color: #facc15; /* bg-yellow-400 */
  border-radius: 0.5rem; /* rounded-lg */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem; /* mr-3 */
}

.logo-text {
  color: #000;
  font-weight: 700;
  font-size: 0.875rem;
}

.logo-name {
  color: #fff;
  font-weight: 600;
  font-size: 1.125rem;
}

/* 📌 User */
.sidebar-user {
  display: flex;
  align-items: center;
  margin-bottom: 2rem; /* mb-8 */
  padding-bottom: 1.5rem; /* pb-6 */
  border-bottom: 1px solid #374151; /* border-gray-700 */
}

.user-avatar {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(to bottom right, #fb923c, #ec4899); /* from-orange-400 to-pink-500 */
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
}

.user-initials {
  color: #fff;
  font-weight: 600;
}

.user-name {
  color: #fff;
  font-weight: 500;
}

.user-role {
  color: #9ca3af;
  font-size: 0.875rem;
}

/* 📌 Navigation */
.sidebar-nav {
  flex: 1;
}

.nav-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* space-y-2 */
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 1rem; /* espaciado aumentado */
  color: #9ca3af; /* text-gray-400 */
  border-radius: 0.75rem;
  transition: all 0.3s ease; /* Transición mejorada */
  text-decoration: none;
}

.nav-link:hover {
  background-color: #374151; /* hover:bg-gray-700 */
  color: #fff;
}

.nav-link.active {
  background-color: #374151; /* bg-gray-700 */
  color: #fff;
}

.nav-icon {
  width: 1.25rem; /* w-5 */
  height: 1.25rem; /* h-5 */
  margin-right: 1rem; /* espaciado aumentado */
}

/* 📌 Logout Button */
.logout-btn {
  margin-top: 1.5rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  background-color: #ef4444; /* rojo */
  color: white;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s;
}

.logout-btn:hover {
  background-color: #dc2626; /* rojo más oscuro */
}
</style>