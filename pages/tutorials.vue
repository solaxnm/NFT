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

    <!-- Learning Path Overview -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ data.learningPath.title }}</h2>
          <p class="text-gray-600 mb-6">{{ data.learningPath.subtitle }}</p>
          <p class="text-gray-700 max-w-3xl mx-auto">{{ data.learningPath.description }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="level in data.learningPath.levels" :key="level.level" :class="`bg-${level.color}-50 rounded-2xl p-6 border border-${level.color}-100`">
            <div class="flex items-center mb-4">
              <div :class="`w-12 h-12 bg-${level.color}-100 rounded-xl flex items-center justify-center mr-4`">
                <span :class="`text-${level.color}-600 font-bold text-sm`">{{ level.level.slice(0, 3) }}</span>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900">{{ level.title }}</h3>
                <p class="text-sm text-gray-600">{{ level.duration }}</p>
              </div>
            </div>
            <p class="text-gray-700 mb-4">{{ level.description }}</p>
            
            <div class="mb-4">
              <h4 class="font-semibold text-gray-900 mb-2">Prerequisites:</h4>
              <p class="text-sm text-gray-600">{{ level.prerequisites }}</p>
            </div>

            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Learning Outcomes:</h4>
              <ul class="text-sm text-gray-600 space-y-1">
                <li v-for="outcome in level.outcomes" :key="outcome" class="flex items-start">
                  <span :class="`w-1 h-1 bg-${level.color}-500 rounded-full mt-2 mr-2 flex-shrink-0`"></span>
                  {{ outcome }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Smart Contract Tutorials -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ data.smartContractTutorials.title }}</h2>
          <p class="text-gray-600">{{ data.smartContractTutorials.subtitle }}</p>
        </div>

        <div class="space-y-8">
          <div v-for="tutorial in data.smartContractTutorials.tutorials" :key="tutorial.title" :class="`bg-gradient-to-r ${tutorial.gradient} rounded-2xl p-6 md:p-8 border border-${tutorial.iconColor}-100`">
            <div class="flex items-start space-x-4">
              <div :class="`w-16 h-16 bg-${tutorial.iconColor}-100 rounded-2xl flex items-center justify-center flex-shrink-0`">
                <Icon :name="tutorial.icon" :class="`h-8 w-8 text-${tutorial.iconColor}-600`" />
              </div>
              <div class="flex-1">
                <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ tutorial.title }}</h3>
                    <div class="flex items-center space-x-4 mb-3">
                      <span :class="`bg-${tutorial.iconColor}-100 text-${tutorial.iconColor}-800 text-xs px-2 py-1 rounded-full`">{{ tutorial.difficulty }}</span>
                      <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">{{ tutorial.duration }}</span>
                      <span class="text-yellow-500 text-sm">{{ tutorial.complexity }}</span>
                    </div>
                  </div>
                </div>
                
                <p class="text-gray-700 mb-4">{{ tutorial.description }}</p>
                
                <!-- Real World Example -->
                <div class="bg-white/80 rounded-xl p-4 mb-4">
                  <h4 class="font-semibold text-gray-900 mb-2">💡 Real-World Example:</h4>
                  <p class="text-sm text-gray-700 mb-2">{{ tutorial.realWorldExample }}</p>
                  <p class="text-xs text-gray-600"><strong>Technical Reality:</strong> {{ tutorial.technicalDepth }}</p>
                </div>

                <!-- Prerequisites -->
                <div v-if="tutorial.prerequisites" class="mb-4">
                  <h4 class="font-semibold text-gray-900 mb-2">Prerequisites:</h4>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="prereq in tutorial.prerequisites" :key="prereq" class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {{ prereq }}
                    </span>
                  </div>
                </div>
                
                <!-- Learning Topics -->
                <div class="mb-4">
                  <h4 class="font-semibold text-gray-900 mb-2">What You'll Learn:</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
                    <div v-for="topic in tutorial.topics" :key="topic" class="text-sm text-gray-600 flex items-start">
                      <span class="w-1 h-1 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {{ topic }}
                    </div>
                  </div>
                </div>

                <!-- Learning Outcomes -->
                <div v-if="tutorial.learningOutcomes" class="mb-4">
                  <h4 class="font-semibold text-gray-900 mb-2">Learning Outcomes:</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
                    <div v-for="outcome in tutorial.learningOutcomes" :key="outcome" class="text-sm text-gray-600 flex items-start">
                      <span class="w-1 h-1 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {{ outcome }}
                    </div>
                  </div>
                </div>

                <!-- Code Example -->
                <div v-if="tutorial.codeExample" class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre class="text-green-400 text-xs"><code>{{ tutorial.codeExample }}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Frontend Tutorials -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ data.frontendTutorials.title }}</h2>
          <p class="text-gray-600">{{ data.frontendTutorials.subtitle }}</p>
        </div>

        <div class="space-y-6">
          <div v-for="tutorial in data.frontendTutorials.tutorials" :key="tutorial.title" :class="`bg-gradient-to-r ${tutorial.gradient} rounded-2xl p-6 border border-${tutorial.iconColor}-100`">
            <div class="flex items-start space-x-4">
              <div :class="`w-12 h-12 bg-${tutorial.iconColor}-100 rounded-xl flex items-center justify-center flex-shrink-0`">
                <Icon :name="tutorial.icon" :class="`h-6 w-6 text-${tutorial.iconColor}-600`" />
              </div>
              <div class="flex-1">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 class="text-xl font-bold text-gray-900">{{ tutorial.title }}</h3>
                  <div class="flex items-center space-x-2 mt-2 md:mt-0">
                    <span :class="`bg-${tutorial.iconColor}-100 text-${tutorial.iconColor}-800 text-xs px-2 py-1 rounded-full`">{{ tutorial.difficulty }}</span>
                    <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">{{ tutorial.duration }}</span>
                    <span class="text-yellow-500 text-sm">{{ tutorial.complexity }}</span>
                  </div>
                </div>
                <p class="text-gray-700 mb-3">{{ tutorial.description }}</p>
                
                <!-- Real World Example -->
                <div class="bg-white/80 rounded-lg p-3 mb-3">
                  <h4 class="font-semibold text-gray-900 mb-1 text-sm">💡 Real-World Example:</h4>
                  <p class="text-xs text-gray-700 mb-1">{{ tutorial.realWorldExample }}</p>
                  <p class="text-xs text-gray-600"><strong>Technical Reality:</strong> {{ tutorial.technicalDepth }}</p>
                </div>

                <!-- Prerequisites -->
                <div v-if="tutorial.prerequisites" class="mb-3">
                  <h4 class="font-semibold text-gray-900 mb-2 text-sm">Prerequisites:</h4>
                  <div class="flex flex-wrap gap-1">
                    <span v-for="prereq in tutorial.prerequisites" :key="prereq" class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {{ prereq }}
                    </span>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
                  <div v-for="topic in tutorial.topics" :key="topic" class="text-sm text-gray-600 flex items-start">
                    <span class="w-1 h-1 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {{ topic }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Backend Tutorials -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ data.backendTutorials.title }}</h2>
          <p class="text-gray-600">{{ data.backendTutorials.subtitle }}</p>
        </div>

        <div class="space-y-6">
          <div v-for="tutorial in data.backendTutorials.tutorials" :key="tutorial.title" :class="`bg-gradient-to-r ${tutorial.gradient} rounded-2xl p-6 border border-${tutorial.iconColor}-100`">
            <div class="flex items-start space-x-4">
              <div :class="`w-12 h-12 bg-${tutorial.iconColor}-100 rounded-xl flex items-center justify-center flex-shrink-0`">
                <Icon :name="tutorial.icon" :class="`h-6 w-6 text-${tutorial.iconColor}-600`" />
              </div>
              <div class="flex-1">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 class="text-xl font-bold text-gray-900">{{ tutorial.title }}</h3>
                  <div class="flex items-center space-x-2 mt-2 md:mt-0">
                    <span :class="`bg-${tutorial.iconColor}-100 text-${tutorial.iconColor}-800 text-xs px-2 py-1 rounded-full`">{{ tutorial.difficulty }}</span>
                    <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">{{ tutorial.duration }}</span>
                    <span class="text-yellow-500 text-sm">{{ tutorial.complexity }}</span>
                  </div>
                </div>
                <p class="text-gray-700 mb-3">{{ tutorial.description }}</p>
                
                <!-- Real World Example -->
                <div class="bg-white/80 rounded-lg p-3 mb-3">
                  <h4 class="font-semibold text-gray-900 mb-1 text-sm">💡 Real-World Example:</h4>
                  <p class="text-xs text-gray-700 mb-1">{{ tutorial.realWorldExample }}</p>
                  <p class="text-xs text-gray-600"><strong>Technical Reality:</strong> {{ tutorial.technicalDepth }}</p>
                </div>

                <!-- Prerequisites -->
                <div v-if="tutorial.prerequisites" class="mb-3">
                  <h4 class="font-semibold text-gray-900 mb-2 text-sm">Prerequisites:</h4>
                  <div class="flex flex-wrap gap-1">
                    <span v-for="prereq in tutorial.prerequisites" :key="prereq" class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {{ prereq }}
                    </span>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
                  <div v-for="topic in tutorial.topics" :key="topic" class="text-sm text-gray-600 flex items-start">
                    <span class="w-1 h-1 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {{ topic }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Advanced Topics -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ data.advancedTopics.title }}</h2>
          <p class="text-gray-600">{{ data.advancedTopics.subtitle }}</p>
        </div>

        <div class="space-y-6">
          <div v-for="tutorial in data.advancedTopics.tutorials" :key="tutorial.title" :class="`bg-gradient-to-r ${tutorial.gradient} rounded-2xl p-6 border border-${tutorial.iconColor}-100`">
            <div class="flex items-start space-x-4">
              <div :class="`w-12 h-12 bg-${tutorial.iconColor}-100 rounded-xl flex items-center justify-center flex-shrink-0`">
                <Icon :name="tutorial.icon" :class="`h-6 w-6 text-${tutorial.iconColor}-600`" />
              </div>
              <div class="flex-1">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 class="text-xl font-bold text-gray-900">{{ tutorial.title }}</h3>
                  <div class="flex items-center space-x-2 mt-2 md:mt-0">
                    <span :class="`bg-${tutorial.iconColor}-100 text-${tutorial.iconColor}-800 text-xs px-2 py-1 rounded-full`">{{ tutorial.difficulty }}</span>
                    <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">{{ tutorial.duration }}</span>
                    <span class="text-yellow-500 text-sm">{{ tutorial.complexity }}</span>
                  </div>
                </div>
                <p class="text-gray-700 mb-3">{{ tutorial.description }}</p>
                
                <!-- Real World Example -->
                <div class="bg-white/80 rounded-lg p-3 mb-3">
                  <h4 class="font-semibold text-gray-900 mb-1 text-sm">💡 Real-World Example:</h4>
                  <p class="text-xs text-gray-700 mb-1">{{ tutorial.realWorldExample }}</p>
                  <p class="text-xs text-gray-600"><strong>Technical Reality:</strong> {{ tutorial.technicalDepth }}</p>
                </div>

                <!-- Prerequisites -->
                <div v-if="tutorial.prerequisites" class="mb-3">
                  <h4 class="font-semibold text-gray-900 mb-2 text-sm">Prerequisites:</h4>
                  <div class="flex flex-wrap gap-1">
                    <span v-for="prereq in tutorial.prerequisites" :key="prereq" class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {{ prereq }}
                    </span>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
                  <div v-for="topic in tutorial.topics" :key="topic" class="text-sm text-gray-600 flex items-start">
                    <span class="w-1 h-1 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {{ topic }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Practical Projects -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ data.practicalProjects.title }}</h2>
          <p class="text-gray-600">{{ data.practicalProjects.subtitle }}</p>
        </div>

        <div class="space-y-8">
          <div v-for="project in data.practicalProjects.projects" :key="project.title" class="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-indigo-100">
            <div class="flex items-start space-x-4">
              <div class="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Icon name="heroicons:rocket-launch" class="h-8 w-8 text-indigo-600" />
              </div>
              <div class="flex-1">
                <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ project.title }}</h3>
                    <div class="flex items-center space-x-4 mb-3">
                      <span class="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">{{ project.difficulty }}</span>
                      <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">{{ project.duration }}</span>
                      <span class="text-yellow-500 text-sm">{{ project.complexity }}</span>
                      <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{{ project.teamSize }}</span>
                    </div>
                  </div>
                </div>
                
                <p class="text-gray-700 mb-4">{{ project.description }}</p>
                
                <!-- Real World Example -->
                <div class="bg-white/80 rounded-xl p-4 mb-4">
                  <h4 class="font-semibold text-gray-900 mb-2">💡 Real-World Example:</h4>
                  <p class="text-sm text-gray-700">{{ project.realWorldExample }}</p>
                </div>

                <!-- Technical Stack -->
                <div class="mb-4">
                  <h4 class="font-semibold text-gray-900 mb-2">Technical Stack:</h4>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tech in project.technicalStack" :key="tech" class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      {{ tech }}
                    </span>
                  </div>
                </div>
                
                <!-- Project Modules -->
                <div class="mb-4">
                  <h4 class="font-semibold text-gray-900 mb-2">Project Timeline:</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div v-for="module in project.modules" :key="module" class="text-sm text-gray-600 flex items-start">
                      <span class="w-2 h-2 bg-indigo-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      {{ module }}
                    </div>
                  </div>
                </div>

                <!-- Deliverables -->
                <div class="mb-4">
                  <h4 class="font-semibold text-gray-900 mb-2">Project Deliverables:</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div v-for="deliverable in project.deliverables" :key="deliverable" class="text-sm text-gray-600 flex items-start">
                      <span class="w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      {{ deliverable }}
                    </div>
                  </div>
                </div>

                <!-- Portfolio Value -->
                <div class="bg-green-50 rounded-lg p-3">
                  <h4 class="font-semibold text-gray-900 mb-1">Portfolio Value:</h4>
                  <p class="text-sm text-gray-700">{{ project.portfolioValue }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Best Practices -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ data.bestPractices.title }}</h2>
          <p class="text-gray-600">{{ data.bestPractices.subtitle }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="practice in data.bestPractices.practices" :key="practice.title" :class="`bg-${practice.color}-50 rounded-xl p-6 border border-${practice.color}-100`">
            <div :class="`w-10 h-10 bg-${practice.color}-100 rounded-lg flex items-center justify-center mb-4`">
              <Icon :name="practice.icon" :class="`h-5 w-5 text-${practice.color}-600`" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ practice.title }}</h3>
            <p class="text-gray-600 text-sm mb-3">{{ practice.description }}</p>
            <div v-if="practice.details" class="space-y-1">
              <div v-for="detail in practice.details" :key="detail" class="text-xs text-gray-500 flex items-start">
                <span :class="`w-1 h-1 bg-${practice.color}-400 rounded-full mt-2 mr-2 flex-shrink-0`"></span>
                {{ detail }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Learning Support -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ data.learningSupport.title }}</h2>
          <p class="text-gray-600">{{ data.learningSupport.subtitle }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="support in data.learningSupport.support" :key="support.title" :class="`bg-${support.color}-50 rounded-xl p-6 border border-${support.color}-100`">
            <div :class="`w-10 h-10 bg-${support.color}-100 rounded-lg flex items-center justify-center mb-4`">
              <Icon :name="support.icon" :class="`h-5 w-5 text-${support.color}-600`" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ support.title }}</h3>
            <p class="text-gray-600 text-sm mb-3">{{ support.description }}</p>
            <div class="space-y-1">
              <div v-for="feature in support.features" :key="feature" class="text-xs text-gray-600 flex items-start">
                <span :class="`w-1 h-1 bg-${support.color}-400 rounded-full mt-2 mr-2 flex-shrink-0`"></span>
                {{ feature }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Resources -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ data.resources.title }}</h2>
          <p class="text-gray-600">{{ data.resources.subtitle }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="(category, index) in data.resources.categories" :key="index" class="bg-white rounded-xl p-6 border border-gray-200">
            <h3 class="text-lg font-bold text-gray-900 mb-4">{{ category.title }}</h3>
            <ul class="space-y-2">
              <li v-for="item in category.items" :key="item" class="text-sm text-gray-600 flex items-start">
                <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {{ item }}
              </li>
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
  title: 'NFT Development Tutorials - Smart Contracts & DApps | NFT Learn by SolanaM',
  ogTitle: 'NFT Development Tutorials - Smart Contracts & DApps | NFT Learn by SolanaM',
  description: 'Comprehensive NFT development tutorials from beginner to expert. Learn Solidity, smart contracts, frontend integration, and build complete NFT applications with real-world projects.',
  ogDescription: 'Comprehensive NFT development tutorials from beginner to expert. Learn Solidity, smart contracts, frontend integration, and build complete NFT applications with real-world projects.',
  ogImage: 'https://nft.solanam.com/og-tutorials.jpg',
  twitterCard: 'summary_large_image'
})

const { data } = await useAsyncData('tutorials', () => queryContent('/tutorials').findOne())
</script>