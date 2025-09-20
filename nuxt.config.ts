// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/content'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'NFT Learn by SolanaM - Complete NFT Education Hub',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Master NFTs with SolanaM\'s comprehensive education hub. Learn blockchain development, smart contracts, trading, and create NFTs on high-performance, low-cost networks.' },
        { name: 'keywords', content: 'NFT education, blockchain learning, Solana NFTs, smart contracts, NFT development, cryptocurrency, digital assets, Web3, DeFi, NFT marketplace, low gas fees' },
        { name: 'author', content: 'SolanaM Platform' },
        { name: 'robots', content: 'index, follow' },
        { name: 'language', content: 'en' },
        { name: 'revisit-after', content: '1 days' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://nft.solanam.com' },
        { property: 'og:title', content: 'NFT Learn by SolanaM - Complete NFT Education Hub' },
        { property: 'og:description', content: 'Master NFTs with comprehensive courses, tutorials, and guides. Learn blockchain development, smart contracts, and create NFTs on high-performance networks.' },
        { property: 'og:image', content: 'https://nft.solanam.com/og-image.jpg' },
        { property: 'og:site_name', content: 'NFT Learn by SolanaM' },
        { property: 'og:locale', content: 'en_US' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://nft.solanam.com' },
        { name: 'twitter:title', content: 'NFT Learn by SolanaM - Complete NFT Education Hub' },
        { name: 'twitter:description', content: 'Master NFTs with comprehensive courses, tutorials, and guides. Learn blockchain development, smart contracts, and create NFTs on high-performance networks.' },
        { name: 'twitter:image', content: 'https://nft.solanam.com/twitter-image.jpg' },
        { name: 'twitter:creator', content: '@SolanaM' },
        
        // Additional SEO
        { name: 'theme-color', content: '#8B5CF6' },
        { name: 'msapplication-TileColor', content: '#8B5CF6' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'NFT Learn' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'canonical', href: 'https://nft.solanam.com' }
      ]
    }
  },
  content: {
    highlight: {
      theme: 'github-dark'
    }
  }
})