<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100/50 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo and Brand -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-3 group">
            <div class="relative">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <img src="/apple-touch-icon.png" class=" rounded-xl" alt="NFT Hub from SolanaM"/>
              </div>
             </div>
            <div class="hidden sm:block">
              <div class="text-xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                NFT Learn
              </div>
              <div class="text-xs text-gray-500 font-medium -mt-1">
                by SolanaM
              </div>
            </div>
          </NuxtLink>
        </div>
         

        <!-- CTA Button -->
        <div class="hidden md:flex items-center space-x-4">
          <a href="https://solanam.com" target="_blank" title="View SolanaM Primary Ecosystem" aria-label="NFT God Platform" class="cta-button"> 
            <strong>SolanaM</strong>
          </a>
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