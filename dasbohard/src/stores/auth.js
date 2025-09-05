import { defineStore } from 'pinia'
import { supabase } from '../supabase'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    session: null,
    user: null
  }),

  actions: {
    async fetchSession() {
      const { data, error } = await supabase.auth.getSession()
      if (error) {
        console.error('Error fetching session:', error.message)
      } else {
        this.session = data.session
        if (this.session) {
          const { data: userData } = await supabase.auth.getUser()
          this.user = userData.user
        }
      }
    },
    async login(email, password) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) {
        throw error
      }
      this.session = data.session
      this.user = data.user
      return data
    },
    async logout() {
      const { error } = await supabase.auth.signOut()
      if (error) {
        throw error
      }
      this.session = null
      this.user = null
    },
    async signUp(email, password) {
        const { data, error } = await supabase.auth.signUp({
            email,
            password
        })
        if (error) {
            throw error
        }
        return data
    }
  },
  persist: true,
})