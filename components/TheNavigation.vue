<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100/50 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo and Brand -->
        <div class="flex flex-col items-center">
          <NuxtLink to="/" class="flex items-center space-x-3 group">
              <div class="text-xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Learn NFT
              </div>
          </NuxtLink>
          <a href="https://solanam.com" target="_blank" class="text-xs text-gray-500 font-medium -mt-1">
            by <b>SolanaM</b>
          </a>
        </div>

        <div class="hidden lg:flex items-center space-x-1">
          <NuxtLink to="/" class="nav-link">
            <Icon name="heroicons:home" class="nav-icon" />
            <span>Home</span>
          </NuxtLink>
          <NuxtLink to="/courses" class="nav-link">
            <Icon name="heroicons:academic-cap" class="nav-icon" />
            <span>Courses</span>
          </NuxtLink>
          <NuxtLink to="/tutorials" class="nav-link">
            <Icon name="heroicons:code-bracket" class="nav-icon" />
            <span>Tutorials</span>
          </NuxtLink>
          <NuxtLink to="/blockchains" class="nav-link">
            <Icon name="heroicons:link" class="nav-icon" />
            <span>Blockchains</span>
          </NuxtLink>
          <NuxtLink to="/wallets" class="nav-link">
            <Icon name="heroicons:wallet" class="nav-icon" />
            <span>Wallets</span>
          </NuxtLink>
          <NuxtLink to="/exchanges" class="nav-link">
            <Icon name="heroicons:building-storefront" class="nav-icon" />
            <span>Markets</span>
          </NuxtLink>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:flex items-center space-x-4">
          <NuxtLink to="/getting-started" class="cta-button">
            <Icon name="heroicons:rocket-launch" class="w-4 h-4" />
            <span>Get Started</span>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <div class="lg:hidden">
          <button @click="toggleMobileMenu" class="mobile-menu-button">
            <Icon :name="mobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="lg:hidden mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink to="/" @click="closeMobileMenu" class="mobile-nav-link">
            <Icon name="heroicons:home" class="w-5 h-5" />
            <span>Home</span>
          </NuxtLink>
          <NuxtLink to="/courses" @click="closeMobileMenu" class="mobile-nav-link">
            <Icon name="heroicons:academic-cap" class="w-5 h-5" />
            <span>Courses</span>
          </NuxtLink>
          <NuxtLink to="/tutorials" @click="closeMobileMenu" class="mobile-nav-link">
            <Icon name="heroicons:code-bracket" class="w-5 h-5" />
            <span>Tutorials</span>
          </NuxtLink>
          <NuxtLink to="/blockchains" @click="closeMobileMenu" class="mobile-nav-link">
            <Icon name="heroicons:link" class="w-5 h-5" />
            <span>Blockchains</span>
          </NuxtLink>
          <NuxtLink to="/wallets" @click="closeMobileMenu" class="mobile-nav-link">
            <Icon name="heroicons:wallet" class="w-5 h-5" />
            <span>Wallets</span>
          </NuxtLink>
          <NuxtLink to="/exchanges" @click="closeMobileMenu" class="mobile-nav-link">
            <Icon name="heroicons:building-storefront" class="w-5 h-5" />
            <span>Markets</span>
          </NuxtLink>
          <div class="pt-4 border-t border-gray-200">
            <NuxtLink to="/getting-started" @click="closeMobileMenu" class="mobile-cta-button">
              <Icon name="heroicons:rocket-launch" class="w-5 h-5" />
              <span>Get Started</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Close mobile menu when clicking outside
onMounted(() => {
  if (process.client) {
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.mobile-menu') && !e.target.closest('.mobile-menu-button')) {
        mobileMenuOpen.value = false
      }
    })
  }
})
</script>

<style scoped>
.nav-link {
  @apply flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-600 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-300 text-sm relative overflow-hidden;
}

.nav-link::before {
  @apply absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300;
  content: '';
}

.nav-link.router-link-active {
  @apply text-purple-600 bg-purple-50 shadow-sm;
}

.nav-link.router-link-active::before {
  @apply scale-100;
}

.nav-icon {
  @apply w-4 h-4 transition-transform duration-300 group-hover:scale-110;
}

.cta-button {
  @apply inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm;
}

.mobile-menu-button {
  @apply p-2 rounded-xl text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300;
}

.mobile-menu {
  @apply bg-white/95 backdrop-blur-xl border-t border-gray-100/50 shadow-lg;
}

.mobile-nav-link {
  @apply flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-300;
}

.mobile-nav-link.router-link-active {
  @apply text-purple-600 bg-purple-50;
}

.mobile-cta-button {
  @apply flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-4 py-3 rounded-xl transition-all duration-300 w-full;
}
</style>