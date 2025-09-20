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

    <!-- Evolution Timeline -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ data.evolution.title }}</h2>
          <p class="text-gray-600">{{ data.evolution.subtitle }}</p>
        </div>

        <div class="space-y-8">
          <div v-for="era in data.evolution.timeline" :key="era.year" :class="`bg-${era.color}-50 rounded-2xl p-6 md:p-8 border border-${era.color}-100`">
            <div class="flex items-start space-x-4">
              <div :class="`w-16 h-16 bg-${era.color}-100 rounded-2xl flex items-center justify-center flex-shrink-0`">
                <span :class="`text-${era.color}-600 font-bold text-sm`">{{ era.year }}</span>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ era.title }}</h3>
                <p class="text-gray-700 mb-4">{{ era.description }}</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div v-if="era.innovations" class="bg-white rounded-lg p-4">
                    <h4 class="font-semibold text-gray-900 mb-2">Key Innovations:</h4>
                    <ul class="text-sm text-gray-600 space-y-1">
                      <li v-for="innovation in era.innovations" :key="innovation" class="flex items-start">
                        <span class="w-1 h-1 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {{ innovation }}
                      </li>
                    </ul>
                  </div>
                  
                  <div v-if="era.limitations" class="bg-white rounded-lg p-4">
                    <h4 class="font-semibold text-gray-900 mb-2">Limitations:</h4>
                    <ul class="text-sm text-gray-600 space-y-1">
                      <li v-for="limitation in era.limitations" :key="limitation" class="flex items-start">
                        <span class="w-1 h-1 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {{ limitation }}
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="flex flex-wrap gap-2">
                  <span v-for="blockchain in era.blockchains" :key="blockchain" :class="`bg-${era.color}-100 text-${era.color}-800 text-xs px-2 py-1 rounded-full`">
                    {{ blockchain }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Major Blockchains -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ data.blockchains.title }}</h2>
          <p class="text-gray-600">{{ data.blockchains.subtitle }}</p>
        </div>

        <div class="space-y-8">
          <div v-for="network in data.blockchains.networks" :key="network.name" :class="`bg-gradient-to-r ${network.gradient} rounded-2xl p-6 md:p-8 border border-${network.color}-100`">
            <div class="flex items-start space-x-4">
              <div :class="`w-16 h-16 bg-${network.color}-100 rounded-2xl flex items-center justify-center flex-shrink-0`">
                <span :class="`text-${network.color}-600 font-bold text-lg`">{{ network.symbol }}</span>
              </div>
              <div class="flex-1">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 class="text-2xl font-bold text-gray-900">{{ network.name }}</h3>
                  <div class="flex items-center space-x-2 mt-2 md:mt-0">
                    <span :class="`bg-${network.color}-100 text-${network.color}-800 text-xs px-2 py-1 rounded-full`">{{ network.launched }}</span>
                    <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">{{ network.consensus }}</span>
                  </div>
                </div>
                <p class="text-gray-700 mb-4">{{ network.description }}</p>
                
                <!-- Technical Specs -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                  <div>
                    <span class="font-semibold text-gray-900">TPS:</span>
                    <p class="text-gray-600">{{ network.tps }}</p>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-900">Avg Fee:</span>
                    <p class="text-gray-600">{{ network.avgFee }}</p>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-900">Languages:</span>
                    <p class="text-gray-600">{{ network.programmingLanguages.join(', ') }}</p>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-900">Block Time:</span>
                    <p class="text-gray-600">{{ network.technicalDetails.blockTime }}</p>
                  </div>
                </div>

                <!-- NFT Standards -->
                <div class="mb-4">
                  <h4 class="font-semibold text-gray-900 mb-2">NFT Standards:</h4>
                  <div class="space-y-2">
                    <div v-for="standard in network.nftStandards" :key="standard.standard" class="bg-white rounded-lg p-3">
                      <div class="flex items-center justify-between mb-1">
                        <span class="font-medium text-gray-900">{{ standard.standard }}</span>
                        <span class="text-xs text-gray-500">{{ standard.useCase }}</span>
                      </div>
                      <p class="text-sm text-gray-600">{{ standard.description }}</p>
                    </div>
                  </div>
                </div>

                <!-- Pros and Cons -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div class="bg-green-50 rounded-lg p-4">
                    <h4 class="font-semibold text-gray-900 mb-2 text-green-800">Advantages:</h4>
                    <ul class="text-sm text-gray-700 space-y-1">
                      <li v-for="advantage in network.advantages" :key="advantage" class="flex items-start">
                        <span class="w-1 h-1 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {{ advantage }}
                      </li>
                    </ul>
                  </div>
                  
                  <div class="bg-red-50 rounded-lg p-4">
                    <h4 class="font-semibold text-gray-900 mb-2 text-red-800">Disadvantages:</h4>
                    <ul class="text-sm text-gray-700 space-y-1">
                      <li v-for="disadvantage in network.disadvantages" :key="disadvantage" class="flex items-start">
                        <span class="w-1 h-1 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {{ disadvantage }}
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Marketplaces and Tools -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-2">Major Marketplaces:</h4>
                    <div class="flex flex-wrap gap-1">
                      <span v-for="marketplace in network.majorMarketplaces" :key="marketplace" class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {{ marketplace }}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-2">Development Tools:</h4>
                    <div class="flex flex-wrap gap-1">
                      <span v-for="tool in network.developmentTools" :key="tool" class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                        {{ tool }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cryptocurrencies -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ data.cryptocurrencies.title }}</h2>
          <p class="text-gray-600">{{ data.cryptocurrencies.subtitle }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="currency in data.cryptocurrencies.currencies" :key="currency.name" :class="`bg-${currency.color}-50 rounded-xl p-6 border border-${currency.color}-100`">
            <div :class="`w-12 h-12 bg-${currency.color}-100 rounded-xl flex items-center justify-center mb-4`">
              <span :class="`text-${currency.color}-600 font-bold text-sm`">{{ currency.name.split(' ')[1] || currency.name.split(' ')[0].slice(0, 3) }}</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ currency.name }}</h3>
            <p class="text-sm font-medium text-gray-600 mb-3">{{ currency.role }}</p>
            <p class="text-gray-700 mb-4">{{ currency.description }}</p>
            
            <div class="mb-4">
              <h4 class="font-semibold text-gray-900 mb-2">Primary Use Cases:</h4>
              <ul class="text-sm text-gray-600 space-y-1">
                <li v-for="useCase in currency.useCases" :key="useCase" class="flex items-start">
                  <span :class="`w-1 h-1 bg-${currency.color}-500 rounded-full mt-2 mr-2 flex-shrink-0`"></span>
                  {{ useCase }}
                </li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Key Advantages:</h4>
              <ul class="text-sm text-gray-600 space-y-1">
                <li v-for="advantage in currency.advantages" :key="advantage" class="flex items-start">
                  <span :class="`w-1 h-1 bg-${currency.color}-500 rounded-full mt-2 mr-2 flex-shrink-0`"></span>
                  {{ advantage }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Programming Languages -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ data.programmingLanguages.title }}</h2>
          <p class="text-gray-600">{{ data.programmingLanguages.subtitle }}</p>
        </div>

        <div class="space-y-8">
          <div v-for="language in data.programmingLanguages.languages" :key="language.name" :class="`bg-${language.color}-50 rounded-2xl p-6 md:p-8 border border-${language.color}-100`">
            <div class="flex items-start space-x-4">
              <div :class="`w-16 h-16 bg-${language.color}-100 rounded-2xl flex items-center justify-center flex-shrink-0`">
                <span :class="`text-${language.color}-600 font-bold text-sm`">{{ language.name.slice(0, 2) }}</span>
              </div>
              <div class="flex-1">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 class="text-2xl font-bold text-gray-900">{{ language.name }}</h3>
                  <div class="flex items-center space-x-2 mt-2 md:mt-0">
                    <span :class="`bg-${language.color}-100 text-${language.color}-800 text-xs px-2 py-1 rounded-full`">{{ language.difficulty }}</span>
                    <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">{{ language.type }}</span>
                  </div>
                </div>
                <p class="text-gray-700 mb-4">{{ language.description }}</p>
                <p class="text-sm text-gray-600 mb-4"><strong>Used on:</strong> {{ language.blockchain }}</p>
                
                <!-- Features -->
                <div class="mb-4">
                  <h4 class="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
                    <div v-for="feature in language.features" :key="feature" class="text-sm text-gray-600 flex items-start">
                      <span :class="`w-1 h-1 bg-${language.color}-500 rounded-full mt-2 mr-2 flex-shrink-0`"></span>
                      {{ feature }}
                    </div>
                  </div>
                </div>

                <!-- Pros and Cons -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div class="bg-white rounded-lg p-4">
                    <h4 class="font-semibold text-gray-900 mb-2 text-green-800">Advantages:</h4>
                    <ul class="text-sm text-gray-600 space-y-1">
                      <li v-for="advantage in language.advantages" :key="advantage" class="flex items-start">
                        <span class="w-1 h-1 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {{ advantage }}
                      </li>
                    </ul>
                  </div>
                  
                  <div class="bg-white rounded-lg p-4">
                    <h4 class="font-semibold text-gray-900 mb-2 text-red-800">Disadvantages:</h4>
                    <ul class="text-sm text-gray-600 space-y-1">
                      <li v-for="disadvantage in language.disadvantages" :key="disadvantage" class="flex items-start">
                        <span class="w-1 h-1 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {{ disadvantage }}
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Libraries (if available) -->
                <div v-if="language.libraries" class="mb-4">
                  <h4 class="font-semibold text-gray-900 mb-2">Popular Libraries:</h4>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="library in language.libraries" :key="library" :class="`bg-${language.color}-100 text-${language.color}-800 text-xs px-2 py-1 rounded-full`">
                      {{ library }}
                    </span>
                  </div>
                </div>

                <!-- Code Example -->
                <div v-if="language.codeExample" class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre class="text-green-400 text-xs"><code>{{ language.codeExample }}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Comparison -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ data.technicalComparison.title }}</h2>
          <p class="text-gray-600">{{ data.technicalComparison.subtitle }}</p>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full bg-white rounded-xl border border-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">Metric</th>
                <th class="px-4 py-3 text-center text-sm font-semibold text-blue-600">Ethereum</th>
                <th class="px-4 py-3 text-center text-sm font-semibold text-green-600">Solana</th>
                <th class="px-4 py-3 text-center text-sm font-semibold text-purple-600">Polygon</th>
                <th class="px-4 py-3 text-center text-sm font-semibold text-yellow-600">BSC</th>
                <th class="px-4 py-3 text-center text-sm font-semibold text-cyan-600">Flow</th>
                <th class="px-4 py-3 text-center text-sm font-semibold text-red-600">Avalanche</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="metric in data.technicalComparison.metrics" :key="metric.name" class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900">{{ metric.name }}</td>
                <td class="px-4 py-3 text-sm text-center text-gray-600">{{ metric.ethereum }}</td>
                <td class="px-4 py-3 text-sm text-center text-gray-600">{{ metric.solana }}</td>
                <td class="px-4 py-3 text-sm text-center text-gray-600">{{ metric.polygon }}</td>
                <td class="px-4 py-3 text-sm text-center text-gray-600">{{ metric.bsc }}</td>
                <td class="px-4 py-3 text-sm text-center text-gray-600">{{ metric.flow }}</td>
                <td class="px-4 py-3 text-sm text-center text-gray-600">{{ metric.avalanche }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Future Outlook -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ data.futureOutlook.title }}</h2>
          <p class="text-gray-600">{{ data.futureOutlook.subtitle }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="trend in data.futureOutlook.trends" :key="trend.title" :class="`bg-${trend.color}-50 rounded-xl p-6 border border-${trend.color}-100`">
            <div :class="`w-10 h-10 bg-${trend.color}-100 rounded-lg flex items-center justify-center mb-4`">
              <Icon name="heroicons:arrow-trending-up" :class="`h-5 w-5 text-${trend.color}-600`" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ trend.title }}</h3>
            <p class="text-gray-600 text-sm mb-4">{{ trend.description }}</p>
            
            <div class="mb-4">
              <h4 class="font-semibold text-gray-900 mb-2">Key Technologies:</h4>
              <div class="flex flex-wrap gap-1">
                <span v-for="tech in trend.technologies" :key="tech" :class="`bg-${trend.color}-100 text-${trend.color}-800 text-xs px-2 py-1 rounded-full`">
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="bg-white rounded-lg p-3">
              <h4 class="font-semibold text-gray-900 mb-1">Expected Impact:</h4>
              <p class="text-sm text-gray-600">{{ trend.impact }}</p>
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
  title: 'NFT Blockchains & Cryptocurrencies Guide | NFT Learn by SolanaM',
  ogTitle: 'NFT Blockchains & Cryptocurrencies Guide | NFT Learn by SolanaM',
  description: 'Complete guide to NFT blockchains: Ethereum, Solana, Polygon, and more. Learn programming languages, consensus mechanisms, and technical specifications.',
  ogDescription: 'Complete guide to NFT blockchains: Ethereum, Solana, Polygon, and more. Learn programming languages, consensus mechanisms, and technical specifications.',
  ogImage: 'https://nft.solanam.com/og-blockchains.jpg',
  twitterCard: 'summary_large_image'
})

const { data } = await useAsyncData('blockchains', () => queryContent('/blockchains').findOne())
</script>