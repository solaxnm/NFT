<template>
  <nav class="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-lg">
    <div class="max-w-md mx-auto px-4 py-2">
      <div class="flex justify-between items-center">
        <NuxtLink 
          v-for="item in navItems" 
          :key="item.id"
          :to="item.to" 
          class="nav-item group"
          :class="{ 'active': isActive(item) }"
        >
          <div class="nav-icon-container">
            <Icon :name="item.icon" class="nav-icon" />
            <div class="nav-indicator"></div>
          </div>
          <span class="nav-label">{{ item.label }}</span>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
const route = useRoute()

const navItems = [
  { id: 'home', label: 'Home', icon: 'heroicons:home', to: '/', section: 'home' }, 
  { id: 'courses', label: 'Courses', icon: 'heroicons:academic-cap', to: '/courses' },
  { id: 'tutorials', label: 'Code', icon: 'heroicons:code-bracket', to: '/tutorials' },
  { id: 'blockchains', label: 'Chains', icon: 'heroicons:link', to: '/blockchains' },
  { id: 'wallets', label: 'Wallets', icon: 'heroicons:wallet', to: '/wallets' },
  { id: 'exchanges', label: 'Trade', icon: 'heroicons:building-storefront', to: '/exchanges' }
]

const isActive = (item) => {
  // For page routes
  if (item.to.startsWith('/') && !item.to.includes('#')) {
    return route.path === item.to
  }
  
  // For section anchors on home page
  if (item.section && route.path === '/') {
    // This would need intersection observer logic for sections
    return false
  }
  
  return false
}

// Auto-detect active section based on scroll position for home page
const activeSection = ref('home')

onMounted(() => {
  if (process.client && route.path === '/') {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id
            const navItem = navItems.find(item => item.section === sectionId)
            if (navItem) {
              activeSection.value = sectionId
            }
          }
        })
      },
      { threshold: 0.3 }
    )

    navItems.forEach(item => {
      if (item.section) {
        const element = document.getElementById(item.section)
        if (element) observer.observe(element)
      }
    })
  }
})
</script>

<style scoped>
.nav-item {
  @apply flex flex-col items-center justify-center p-1 rounded-xl transition-all duration-300 relative;
  min-width: 50px;
}

.nav-icon-container {
  @apply relative mb-1;
}

.nav-icon {
  @apply w-5 h-5 text-gray-400 transition-all duration-300;
}

.nav-indicator {
  @apply absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full opacity-0 scale-0 transition-all duration-300;
}

.nav-label {
  @apply text-xs font-medium text-gray-400 transition-all duration-300;
}

.nav-item:hover .nav-icon {
  @apply text-blue-500 scale-110;
}

.nav-item:hover .nav-label {
  @apply text-blue-500;
}

.nav-item.active .nav-icon {
  @apply text-blue-600 scale-110;
}

.nav-item.active .nav-label {
  @apply text-blue-600 font-semibold;
}

.nav-item.active .nav-indicator {
  @apply opacity-100 scale-100;
}

.nav-item.active {
  @apply bg-blue-50;
}
</style>