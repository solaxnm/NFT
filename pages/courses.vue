<template>
  <div class="pt-16 pb-8">
    <!-- Header -->
    <section class="bg-gradient-to-br from-indigo-50 to-purple-50 py-16">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Icon name="heroicons:academic-cap" class="h-8 w-8 text-white" />
        </div>
        <h1 class="text-4xl md:text-5xl font-bold gradient-text mb-4">NFT Courses</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive learning paths from beginner to expert level
        </p>
      </div>
    </section>

    <!-- Course Overview -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Choose Your Learning Path</h2>
          <p class="text-gray-600">Structured courses designed for progressive skill development</p>
        </div>

        <!-- Beginner Course -->
        <div class="mb-16">
          <div class="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white mb-8">
            <div class="flex items-center mb-4">
              <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6">
                <Icon name="heroicons:academic-cap" class="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 class="text-3xl font-bold">{{ data.courses.beginner.title }}</h3>
                <p class="text-green-100">{{ data.courses.beginner.duration }}</p>
              </div>
            </div>
            <p class="text-lg opacity-90">Perfect for complete beginners with no prior blockchain experience</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="(module, index) in data.courses.beginner.modules" :key="index" class="bg-green-50 rounded-xl p-6 border border-green-100">
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-600 font-bold text-sm">
                  {{ index + 1 }}
                </div>
                <h4 class="text-lg font-bold text-gray-900">{{ module.title }}</h4>
              </div>
              <p class="text-sm text-gray-600 mb-4">Duration: {{ module.duration }}</p>
              <ul class="space-y-2">
                <li v-for="lesson in module.lessons" :key="lesson" class="text-sm text-gray-700 flex items-start">
                  <Icon name="heroicons:play-circle" class="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  {{ lesson }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Intermediate Course -->
        <div class="mb-16">
          <div class="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-8 text-white mb-8">
            <div class="flex items-center mb-4">
              <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6">
                <Icon name="heroicons:chart-bar" class="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 class="text-3xl font-bold">{{ data.courses.intermediate.title }}</h3>
                <p class="text-blue-100">{{ data.courses.intermediate.duration }}</p>
              </div>
            </div>
            <p class="text-lg opacity-90">For those ready to create, mint, and trade NFTs professionally</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="(module, index) in data.courses.intermediate.modules" :key="index" class="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold text-sm">
                  {{ index + 1 }}
                </div>
                <h4 class="text-lg font-bold text-gray-900">{{ module.title }}</h4>
              </div>
              <p class="text-sm text-gray-600 mb-4">Duration: {{ module.duration }}</p>
              <ul class="space-y-2">
                <li v-for="lesson in module.lessons" :key="lesson" class="text-sm text-gray-700 flex items-start">
                  <Icon name="heroicons:play-circle" class="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                  {{ lesson }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Advanced Course -->
        <div class="mb-16">
          <div class="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-8 text-white mb-8">
            <div class="flex items-center mb-4">
              <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6">
                <Icon name="heroicons:code-bracket" class="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 class="text-3xl font-bold">{{ data.courses.advanced.title }}</h3>
                <p class="text-purple-100">{{ data.courses.advanced.duration }}</p>
              </div>
            </div>
            <p class="text-lg opacity-90">Master smart contract development and build NFT applications</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="(module, index) in data.courses.advanced.modules" :key="index" class="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 text-purple-600 font-bold text-sm">
                  {{ index + 1 }}
                </div>
                <h4 class="text-lg font-bold text-gray-900">{{ module.title }}</h4>
              </div>
              <p class="text-sm text-gray-600 mb-4">Duration: {{ module.duration }}</p>
              <ul class="space-y-2">
                <li v-for="lesson in module.lessons" :key="lesson" class="text-sm text-gray-700 flex items-start">
                  <Icon name="heroicons:play-circle" class="h-4 w-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                  {{ lesson }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Expert Course -->
        <div class="mb-16">
          <div class="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white mb-8">
            <div class="flex items-center mb-4">
              <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6">
                <Icon name="heroicons:rocket-launch" class="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 class="text-3xl font-bold">{{ data.courses.expert.title }}</h3>
                <p class="text-orange-100">{{ data.courses.expert.duration }}</p>
              </div>
            </div>
            <p class="text-lg opacity-90">Advanced infrastructure, scaling solutions, and cutting-edge innovations</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="(module, index) in data.courses.expert.modules" :key="index" class="bg-orange-50 rounded-xl p-6 border border-orange-100">
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3 text-orange-600 font-bold text-sm">
                  {{ index + 1 }}
                </div>
                <h4 class="text-lg font-bold text-gray-900">{{ module.title }}</h4>
              </div>
              <p class="text-sm text-gray-600 mb-4">Duration: {{ module.duration }}</p>
              <ul class="space-y-2">
                <li v-for="lesson in module.lessons" :key="lesson" class="text-sm text-gray-700 flex items-start">
                  <Icon name="heroicons:play-circle" class="h-4 w-4 text-orange-500 mt-0.5 mr-2 flex-shrink-0" />
                  {{ lesson }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Prerequisites and Recommendations -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Course Prerequisites</h2>
          <p class="text-gray-600">Recommended background knowledge for each level</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Icon name="heroicons:academic-cap" class="h-5 w-5 text-green-600" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Beginner Course</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• No prior experience required</li>
              <li>• Basic computer literacy</li>
              <li>• Willingness to learn new concepts</li>
              <li>• Access to a computer and internet</li>
            </ul>
          </div>

          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Icon name="heroicons:chart-bar" class="h-5 w-5 text-blue-600" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Intermediate Course</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Completed beginner course or equivalent</li>
              <li>• Basic understanding of blockchain</li>
              <li>• Familiarity with digital art tools</li>
              <li>• Some experience with online marketplaces</li>
            </ul>
          </div>

          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Icon name="heroicons:code-bracket" class="h-5 w-5 text-purple-600" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Advanced Course</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Programming experience (JavaScript preferred)</li>
              <li>• Understanding of web development</li>
              <li>• Familiarity with command line</li>
              <li>• Basic knowledge of blockchain concepts</li>
            </ul>
          </div>

          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Icon name="heroicons:rocket-launch" class="h-5 w-5 text-orange-600" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Expert Course</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Advanced programming skills</li>
              <li>• Smart contract development experience</li>
              <li>• Understanding of blockchain architecture</li>
              <li>• Experience with development frameworks</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO Meta Tags
useSeoMeta({
  title: 'NFT Courses - Structured Learning Paths | NFT Learn by SolanaM',
  ogTitle: 'NFT Courses - Structured Learning Paths | NFT Learn by SolanaM',
  description: 'Comprehensive NFT courses from beginner to expert. Learn smart contracts, blockchain development, NFT creation, and advanced DeFi integration.',
  ogDescription: 'Comprehensive NFT courses from beginner to expert. Learn smart contracts, blockchain development, NFT creation, and advanced DeFi integration.',
  ogImage: 'https://nft.solanam.com/og-courses.jpg',
  twitterCard: 'summary_large_image'
})

const { data } = await useAsyncData('courses', () => queryContent('/home').findOne())
</script>