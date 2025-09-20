<template>
  <div class="pt-16 pb-8">
    <!-- Header -->
    <section :class="`bg-gradient-to-br ${data.hero.gradient} py-16`">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <div :class="`w-16 h-16 bg-gradient-to-br ${data.hero.iconGradient} rounded-2xl flex items-center justify-center mx-auto mb-6`">
          <Icon :name="data.hero.icon" class="h-8 w-8 text-white" />
        </div>
        <h1 class="text-4xl md:text-5xl font-bold gradient-text mb-4">{{ data.hero.title }}</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          {{ data.hero.subtitle }}
        </p>
      </div>
    </section>

    <!-- Popular Wallets -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ data.popularWallets.title }}</h2>
          <p class="text-gray-600">{{ data.popularWallets.subtitle }}</p>
        </div>

        <div class="space-y-8">
          <div v-for="wallet in data.popularWallets.wallets" :key="wallet.name" :class="`bg-gradient-to-r ${wallet.gradient} rounded-2xl p-6 md:p-8 border border-${wallet.iconColor}-100`">
            <div class="flex items-start space-x-4">
              <div :class="`w-16 h-16 bg-${wallet.iconColor}-100 rounded-2xl flex items-center justify-center flex-shrink-0`">
                <Icon :name="wallet.icon" :class="`h-8 w-8 text-${wallet.iconColor}-600`" />
              </div>
              <div class="flex-1">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 class="text-2xl font-bold text-gray-900">{{ wallet.name }}</h3>
                  <div class="flex items-center space-x-2 mt-2 md:mt-0">
                    <span v-for="badge in wallet.badges" :key="badge.text" :class="`bg-${badge.color}-100 text-${badge.color}-800 text-xs px-2 py-1 rounded-full`">{{ badge.text }}</span>
                  </div>
                </div>
                <p class="text-gray-700 mb-4">
                  {{ wallet.description }}
                </p>
                
                <!-- Technical Specifications -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                  <div>
                    <span class="font-semibold text-gray-900">Platforms:</span>
                    <p class="text-gray-600">{{ wallet.features.platforms }}</p>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-900">Chains:</span>
                    <p class="text-gray-600">{{ wallet.features.chains }}</p>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-900">Features:</span>
                    <p class="text-gray-600">{{ wallet.features.features }}</p>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-900">Best For:</span>
                    <p class="text-gray-600">{{ wallet.features.bestFor }}</p>
                  </div>
                </div>

                <!-- Technical Deep Dive -->
                <div class="mb-4">
                  <h4 class="font-semibold text-gray-900 mb-2">Technical Specifications:</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span class="font-medium text-gray-900">Security:</span>
                      <p class="text-gray-600">{{ wallet.technicalSpecs.security }}</p>
                    </div>
                    <div>
                      <span class="font-medium text-gray-900">NFT Support:</span>
                      <p class="text-gray-600">{{ wallet.technicalSpecs.nftSupport }}</p>
                    </div>
                    <div>
                      <span class="font-medium text-gray-900">Gas Management:</span>
                      <p class="text-gray-600">{{ wallet.technicalSpecs.gasManagement }}</p>
                    </div>
                    <div>
                      <span class="font-medium text-gray-900">Developer Tools:</span>
                      <p class="text-gray-600">{{ wallet.technicalSpecs.developerTools }}</p>
                    </div>
                  </div>
                </div>

                <!-- Pros and Cons -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div class="bg-green-50 rounded-lg p-4">
                    <h4 class="font-semibold text-gray-900 mb-2 text-green-800">✅ Advantages:</h4>
                    <ul class="text-sm text-gray-700 space-y-1">
                      <li v-for="advantage in wallet.pros" :key="advantage" class="flex items-start">
                        <span class="w-1 h-1 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {{ advantage }}
                      </li>
                    </ul>
                  </div>
                  
                  <div class="bg-red-50 rounded-lg p-4">
                    <h4 class="font-semibold text-gray-900 mb-2 text-red-800">❌ Disadvantages:</h4>
                    <ul class="text-sm text-gray-700 space-y-1">
                      <li v-for="disadvantage in wallet.cons" :key="disadvantage" class="flex items-start">
                        <span class="w-1 h-1 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {{ disadvantage }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Specialized Wallets -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ data.specializedWallets.title }}</h2>
          <p class="text-gray-600">{{ data.specializedWallets.subtitle }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="wallet in data.specializedWallets.wallets" :key="wallet.name" class="bg-white rounded-xl p-6 border border-gray-200">
            <div :class="`w-12 h-12 bg-${wallet.iconColor}-100 rounded-xl flex items-center justify-center mb-4`">
              <Icon :name="wallet.icon" :class="`h-6 w-6 text-${wallet.iconColor}-600`" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ wallet.name }}</h3>
            <p class="text-gray-600 mb-3">{{ wallet.description }}</p>
            
            <div class="mb-3">
              <h4 class="font-semibold text-gray-900 mb-2 text-sm">Features:</h4>
              <div class="text-sm text-gray-600 space-y-1">
                <div><strong>Platforms:</strong> {{ wallet.features.platforms }}</div>
                <div><strong>Chains:</strong> {{ wallet.features.chains }}</div>
                <div><strong>Specialties:</strong> {{ wallet.features.specialties }}</div>
              </div>
            </div>
            
            <div class="flex flex-wrap gap-2">
              <span v-for="badge in wallet.badges" :key="badge.text" :class="`bg-${badge.color}-100 text-${badge.color}-800 text-xs px-2 py-1 rounded-full`">{{ badge.text }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ data.keyFeatures.title }}</h2>
          <p class="text-gray-600">{{ data.keyFeatures.subtitle }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="feature in data.keyFeatures.features" :key="feature.title" :class="`bg-${feature.color}-50 rounded-xl p-6 border border-${feature.color}-100`">
            <div :class="`w-10 h-10 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-4`">
              <Icon :name="feature.icon" :class="`h-5 w-5 text-${feature.color}-600`" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600 text-sm mb-3">
              {{ feature.description }}
            </p>
            <div class="bg-white rounded-lg p-3">
              <h4 class="font-semibold text-gray-900 mb-2 text-sm">Key Capabilities:</h4>
              <ul class="text-xs text-gray-600 space-y-1">
                <li v-for="detail in feature.details" :key="detail" class="flex items-start">
                  <span :class="`w-1 h-1 bg-${feature.color}-500 rounded-full mt-1.5 mr-2 flex-shrink-0`"></span>
                  {{ detail }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Wallet Comparison Matrix -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ data.walletComparison.title }}</h2>
          <p class="text-gray-600">{{ data.walletComparison.subtitle }}</p>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full bg-white rounded-xl border border-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th v-for="header in data.walletComparison.headers" :key="header" class="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="wallet in data.walletComparison.wallets" :key="wallet.name" class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900">{{ wallet.name }}</td>
                <td class="px-4 py-3 text-sm text-gray-600">
                  <span :class="wallet.security === 'Highest' ? 'bg-green-100 text-green-800' : wallet.security === 'High' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'" class="px-2 py-1 rounded-full text-xs">
                    {{ wallet.security }}
                  </span>
                </td>
                <td class="px-4 py-3 text-sm text-gray-600">
                  <span :class="wallet.easeOfUse === 'High' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'" class="px-2 py-1 rounded-full text-xs">
                    {{ wallet.easeOfUse }}
                  </span>
                </td>
                <td class="px-4 py-3 text-sm text-gray-600">
                  <span :class="wallet.nftFeatures === 'Excellent' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'" class="px-2 py-1 rounded-full text-xs">
                    {{ wallet.nftFeatures }}
                  </span>
                </td>
                <td class="px-4 py-3 text-sm text-gray-600">
                  <span :class="wallet.multiChain === 'Yes' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'" class="px-2 py-1 rounded-full text-xs">
                    {{ wallet.multiChain }}
                  </span>
                </td>
                <td class="px-4 py-3 text-sm text-gray-600">
                  <span :class="wallet.mobileSupport === 'Excellent' ? 'bg-green-100 text-green-800' : wallet.mobileSupport === 'Yes' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'" class="px-2 py-1 rounded-full text-xs">
                    {{ wallet.mobileSupport }}
                  </span>
                </td>
                <td class="px-4 py-3 text-sm text-gray-600">{{ wallet.cost }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Security Tips -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ data.security.title }}</h2>
          <p class="text-gray-600">{{ data.security.subtitle }}</p>
        </div>

        <div class="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
          <div class="flex items-start space-x-3">
            <Icon name="heroicons:exclamation-triangle" class="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 class="font-bold text-gray-900 mb-2">{{ data.security.warning.title }}</h3>
              <p class="text-sm text-gray-700">
                {{ data.security.warning.description }}
              </p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="tip in data.security.tips" :key="tip.title" class="bg-white rounded-xl p-6 border border-gray-200">
            <div :class="`w-10 h-10 bg-${tip.color}-100 rounded-lg flex items-center justify-center mb-4`">
              <Icon :name="tip.icon" :class="`h-5 w-5 text-${tip.color}-600`" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ tip.title }}</h3>
            <p class="text-gray-600 text-sm mb-3">
              {{ tip.description }}
            </p>
            <div class="bg-gray-50 rounded-lg p-3">
              <h4 class="font-semibold text-gray-900 mb-2 text-sm">Best Practices:</h4>
              <ul class="text-xs text-gray-600 space-y-1">
                <li v-for="detail in tip.details" :key="detail" class="flex items-start">
                  <span :class="`w-1 h-1 bg-${tip.color}-500 rounded-full mt-1.5 mr-2 flex-shrink-0`"></span>
                  {{ detail }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Troubleshooting -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ data.troubleshooting.title }}</h2>
          <p class="text-gray-600">{{ data.troubleshooting.subtitle }}</p>
        </div>

        <div class="space-y-6">
          <div v-for="issue in data.troubleshooting.issues" :key="issue.problem" class="bg-white rounded-xl p-6 border border-gray-200">
            <h3 class="text-lg font-bold text-gray-900 mb-3">❓ {{ issue.problem }}</h3>
            <div class="space-y-2">
              <h4 class="font-semibold text-gray-900 text-sm">Solutions:</h4>
              <ul class="space-y-1">
                <li v-for="solution in issue.solutions" :key="solution" class="text-sm text-gray-600 flex items-start">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                  {{ solution }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO Meta Tags
useSeoMeta({
  title: 'NFT Wallets Guide - Security & Setup | NFT Learn by SolanaM',
  ogTitle: 'NFT Wallets Guide - Security & Setup | NFT Learn by SolanaM',
  description: 'Complete NFT wallet guide: MetaMask, Ledger, Phantom, and more. Learn security best practices, setup instructions, and wallet comparisons.',
  ogDescription: 'Complete NFT wallet guide: MetaMask, Ledger, Phantom, and more. Learn security best practices, setup instructions, and wallet comparisons.',
  ogImage: 'https://nft.solanam.com/og-wallets.jpg',
  twitterCard: 'summary_large_image'
})

const { data } = await useAsyncData('wallets', () => queryContent('/wallets').findOne())
</script> 