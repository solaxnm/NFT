<template>
  <div>
    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <div class="mb-8">
          <div class="rounded-2xl flex items-center justify-center mx-auto mb-6 float-animation">
            <img src="/N.svg" alt="logo" class="w-20 h-20" />
          </div>
          <h1 class="text-4xl md:text-6xl font-bold gradient-text mb-4">
            {{ data.hero.title }}
          </h1>
          <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {{ data.hero.subtitle }}
          </p>
          <NuxtLink to="#basics" class="btn-primary">
            {{ data.hero.cta }}
            <Icon name="heroicons:arrow-right" class="ml-2 h-4 w-4" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- NFT World Overview Card -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        <div class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div class="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          <div class="relative z-10">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                <Icon name="heroicons:globe-alt" class="h-6 w-6 text-white" />
              </div>
              <h2 class="text-2xl md:text-3xl font-bold">{{ data.nftWorld.title }}</h2>
            </div>
            <div class="space-y-4 text-lg md:text-xl leading-relaxed">
              <p v-for="(paragraph, index) in data.nftWorld.description" :key="index" :class="`opacity-${95 - index * 5}`">
                {{ paragraph }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Learning Classification -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ data.learningClassification.title }}</h2>
          <p class="text-gray-600">{{ data.learningClassification.subtitle }}</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="path in data.learningClassification.paths" :key="path.id" :class="`bg-gradient-to-br from-${path.color}-50 to-${path.color}-100 rounded-3xl p-8 border border-${path.color}-200 hover:shadow-xl transition-all duration-300`">
            <div class="flex items-start space-x-4 mb-6">
              <div :class="`w-16 h-16 bg-${path.color}-500 rounded-2xl flex items-center justify-center flex-shrink-0`">
                <Icon :name="path.icon" class="h-8 w-8 text-white" />
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ path.title }}</h3>
                <p class="text-gray-700 mb-3">{{ path.description }}</p>
                <div class="flex items-center space-x-4 text-sm">
                  <span :class="`bg-${path.color}-200 text-${path.color}-800 px-3 py-1 rounded-full`">{{ path.difficulty }}</span>
                  <span class="text-gray-600">{{ path.duration }}</span>
                </div>
              </div>
            </div>
            
            <!-- Real World Example -->
            <div class="bg-white/80 rounded-xl p-4 mb-4">
              <h4 class="font-semibold text-gray-900 mb-2">💡 Real-World Example:</h4>
              <p class="text-sm text-gray-700 mb-2">{{ path.realWorldExample }}</p>
              <p class="text-xs text-gray-600"><strong>Technical Reality:</strong> {{ path.technicalDepth }}</p>
            </div>
            
            <!-- Learning Steps -->
            <div class="mb-4">
              <h4 class="font-semibold text-gray-900 mb-3">Learning Steps:</h4>
              <div class="space-y-2">
                <div v-for="step in path.steps" :key="step.step" class="flex items-start space-x-3">
                  <div :class="`w-6 h-6 bg-${path.color}-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5`">
                    {{ step.step }}
                  </div>
                  <div class="flex-1">
                    <h5 class="font-medium text-gray-900 text-sm">{{ step.title }}</h5>
                    <p class="text-xs text-gray-600 mb-1">{{ step.description }}</p>
                    <p class="text-xs text-gray-500 italic">{{ step.example }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Outcomes -->
            <div class="bg-white/60 rounded-lg p-3">
              <h4 class="font-semibold text-gray-900 mb-2 text-sm">What You'll Achieve:</h4>
              <ul class="text-xs text-gray-700 space-y-1">
                <li v-for="outcome in path.outcomes" :key="outcome" class="flex items-start">
                  <span :class="`w-1 h-1 bg-${path.color}-500 rounded-full mt-2 mr-2 flex-shrink-0`"></span>
                  {{ outcome }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Step-by-Step Guide -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ data.stepByStepGuide.title }}</h2>
          <p class="text-gray-600">{{ data.stepByStepGuide.subtitle }}</p>
        </div>
        
        <div class="space-y-8">
          <div v-for="phase in data.stepByStepGuide.phases" :key="phase.phase" :class="`bg-gradient-to-r from-${phase.color}-50 to-white rounded-3xl p-8 border border-${phase.color}-100`">
            <div class="flex items-start space-x-6">
              <div :class="`w-20 h-20 bg-${phase.color}-500 rounded-2xl flex items-center justify-center flex-shrink-0`">
                <span class="text-white font-bold text-2xl">{{ phase.phase }}</span>
              </div>
              <div class="flex-1">
                <div class="mb-4">
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ phase.title }}</h3>
                  <p class="text-lg text-gray-700 mb-2">{{ phase.subtitle }}</p>
                  <div class="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <span :class="`bg-${phase.color}-100 text-${phase.color}-800 px-3 py-1 rounded-full`">{{ phase.duration }}</span>
                  </div>
                  <p class="text-gray-700 mb-2">{{ phase.description }}</p>
                  <p class="text-sm text-gray-600 italic">{{ phase.realWorldAnalogy }}</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div v-for="module in phase.modules" :key="module.title" class="bg-white rounded-xl p-4 border border-gray-100">
                    <h4 class="font-semibold text-gray-900 mb-2">{{ module.title }}</h4>
                    <p class="text-sm text-gray-700 mb-2">{{ module.description }}</p>
                    <div class="bg-blue-50 rounded-lg p-3 mb-3">
                      <p class="text-xs text-blue-800 mb-1"><strong>Example:</strong></p>
                      <p class="text-xs text-blue-700">{{ module.example }}</p>
                    </div>
                    <div>
                      <p class="text-xs font-medium text-gray-900 mb-1">Technical Concepts:</p>
                      <ul class="text-xs text-gray-600 space-y-1">
                        <li v-for="concept in module.technicalConcepts" :key="concept" class="flex items-start">
                          <span class="w-1 h-1 bg-gray-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          {{ concept }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Practical Examples -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ data.practicalExamples.title }}</h2>
          <p class="text-gray-600">{{ data.practicalExamples.subtitle }}</p>
        </div>
        
        <div class="space-y-8">
          <div v-for="example in data.practicalExamples.examples" :key="example.category" class="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-indigo-100">
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ example.category }}</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div class="bg-white rounded-xl p-4">
                <h4 class="font-semibold text-green-800 mb-2">🌟 Simple Example</h4>
                <h5 class="font-medium text-gray-900 mb-2">{{ example.simpleExample }}</h5>
                <p class="text-sm text-gray-700">{{ example.explanation }}</p>
              </div>
              
              <div class="bg-white rounded-xl p-4">
                <h4 class="font-semibold text-blue-800 mb-2">⚙️ Technical Reality</h4>
                <p class="text-sm text-gray-700">{{ example.technicalReality }}</p>
              </div>
            </div>
            
            <div>
              <h4 class="font-semibold text-gray-900 mb-3">Real Applications:</h4>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                <span v-for="app in example.applications" :key="app" class="bg-white text-gray-700 text-xs px-3 py-2 rounded-lg text-center">
                  {{ app }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Learning Resources -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ data.learningResources.title }}</h2>
          <p class="text-gray-600">{{ data.learningResources.subtitle }}</p>
        </div>

        <div class="space-y-8">
          <div v-for="category in data.learningResources.categories" :key="category.title" class="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ category.title }}</h3>
            <p class="text-gray-600 mb-6">{{ category.description }}</p>
            
            <div class="space-y-4">
              <div v-for="resource in category.resources" :key="resource.name" class="bg-gray-50 rounded-xl p-4">
                <div class="flex items-start justify-between mb-2">
                  <h4 class="font-semibold text-gray-900">{{ resource.name }}</h4>
                  <div class="flex items-center space-x-2">
                    <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{{ resource.type }}</span>
                    <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">{{ resource.difficulty }}</span>
                  </div>
                </div>
                <p class="text-sm text-gray-700 mb-2">{{ resource.description }}</p>
                <p class="text-xs text-gray-500">Duration: {{ resource.duration }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ data.successStories.title }}</h2>
          <p class="text-gray-600">{{ data.successStories.subtitle }}</p>
        </div>

        <div class="space-y-6">
          <div v-for="story in data.successStories.stories" :key="story.name" class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
            <div class="flex items-start space-x-4">
              <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="heroicons:user-circle" class="h-8 w-8 text-white" />
              </div>
              <div class="flex-1">
                <div class="flex items-start justify-between mb-3">
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">{{ story.name }}</h3>
                    <p class="text-sm text-gray-600">{{ story.role }}</p>
                  </div>
                  <span class="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">{{ story.achievement }}</span>
                </div>
                <p class="text-gray-700 mb-3">{{ story.story }}</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span class="font-medium text-gray-900">Timeline:</span>
                    <p class="text-gray-600">{{ story.timeline }}</p>
                  </div>
                  <div>
                    <span class="font-medium text-gray-900">Key Learning:</span>
                    <p class="text-gray-600">{{ story.keyLearning }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Course Overview -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Structured Learning Paths</h2>
          <p class="text-gray-600">Comprehensive courses designed for every skill level</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Beginner Course -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <Icon name="heroicons:academic-cap" class="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900">{{ data.courses.beginner.title }}</h3>
                <p class="text-sm text-gray-600">{{ data.courses.beginner.duration }}</p>
              </div>
            </div>
            <div class="space-y-3">
              <div v-for="(module, index) in data.courses.beginner.modules" :key="index" class="bg-white rounded-lg p-3">
                <h4 class="font-semibold text-gray-900 text-sm mb-1">{{ module.title }}</h4>
                <p class="text-xs text-gray-600">{{ module.duration }} • {{ module.lessons.length }} lessons</p>
              </div>
            </div>
          </div>

          <!-- Intermediate Course -->
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <Icon name="heroicons:chart-bar" class="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900">{{ data.courses.intermediate.title }}</h3>
                <p class="text-sm text-gray-600">{{ data.courses.intermediate.duration }}</p>
              </div>
            </div>
            <div class="space-y-3">
              <div v-for="(module, index) in data.courses.intermediate.modules" :key="index" class="bg-white rounded-lg p-3">
                <h4 class="font-semibold text-gray-900 text-sm mb-1">{{ module.title }}</h4>
                <p class="text-xs text-gray-600">{{ module.duration }} • {{ module.lessons.length }} lessons</p>
              </div>
            </div>
          </div>

          <!-- Advanced Course -->
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                <Icon name="heroicons:code-bracket" class="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900">{{ data.courses.advanced.title }}</h3>
                <p class="text-sm text-gray-600">{{ data.courses.advanced.duration }}</p>
              </div>
            </div>
            <div class="space-y-3">
              <div v-for="(module, index) in data.courses.advanced.modules" :key="index" class="bg-white rounded-lg p-3">
                <h4 class="font-semibold text-gray-900 text-sm mb-1">{{ module.title }}</h4>
                <p class="text-xs text-gray-600">{{ module.duration }} • {{ module.lessons.length }} lessons</p>
              </div>
            </div>
          </div>

          <!-- Expert Course -->
          <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                <Icon name="heroicons:rocket-launch" class="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900">{{ data.courses.expert.title }}</h3>
                <p class="text-sm text-gray-600">{{ data.courses.expert.duration }}</p>
              </div>
            </div>
            <div class="space-y-3">
              <div v-for="(module, index) in data.courses.expert.modules" :key="index" class="bg-white rounded-lg p-3">
                <h4 class="font-semibold text-gray-900 text-sm mb-1">{{ module.title }}</h4>
                <p class="text-xs text-gray-600">{{ module.duration }} • {{ module.lessons.length }} lessons</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What are NFTs Section -->
    <section id="basics" class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ data.basics.title }}</h2>
          <p class="text-gray-600">{{ data.basics.subtitle }}</p>
        </div>
        
        <div class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 md:p-8 text-white mb-8">
          <h3 class="text-xl md:text-2xl font-bold mb-4">Technical Definition</h3>
          <p class="text-base md:text-lg opacity-90">
            {{ data.basics.definition }}
          </p>
        </div>
        
        <!-- Technical Concepts -->
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Core Technical Concepts</h3>
          <div class="space-y-6">
            <div v-for="concept in data.basics.technicalConcepts" :key="concept.title" class="bg-gray-50 rounded-xl p-6">
              <h4 class="text-lg font-bold text-gray-900 mb-3">{{ concept.title }}</h4>
              <p class="text-gray-700 mb-4">{{ concept.description }}</p>
              <ul class="space-y-2">
                <li v-for="detail in concept.details" :key="detail" class="text-sm text-gray-600 flex items-start">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {{ detail }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="feature in data.basics.features" :key="feature.title" class="text-center p-6 bg-gray-50 rounded-xl">
            <div :class="`w-12 h-12 bg-${feature.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`">
              <Icon :name="feature.icon" :class="`h-6 w-6 text-${feature.color}-600`" />
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">{{ feature.title }}</h4>
            <p class="text-sm text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Advantages Section -->
    <section id="pros" class="py-16 bg-green-50">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ data.advantages.title }}</h2>
          <p class="text-gray-600">{{ data.advantages.subtitle }}</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="item in data.advantages.items" :key="item.title" class="bg-white rounded-xl p-6 card-hover">
            <div :class="`w-10 h-10 bg-${item.color}-100 rounded-lg flex items-center justify-center mb-4`">
              <Icon :name="item.icon" :class="`h-5 w-5 text-${item.color}-600`" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ item.title }}</h3>
            <p class="text-gray-600 text-sm mb-3">{{ item.description }}</p>
            <div v-if="item.details" class="space-y-1">
              <div v-for="detail in item.details" :key="detail" class="text-xs text-gray-500 flex items-start">
                <span class="w-1 h-1 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                {{ detail }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Disadvantages Section -->
    <section id="cons" class="py-16 bg-red-50">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ data.disadvantages.title }}</h2>
          <p class="text-gray-600">{{ data.disadvantages.subtitle }}</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="item in data.disadvantages.items" :key="item.title" class="bg-white rounded-xl p-6 card-hover">
            <div :class="`w-10 h-10 bg-${item.color}-100 rounded-lg flex items-center justify-center mb-4`">
              <Icon :name="item.icon" :class="`h-5 w-5 text-${item.color}-600`" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ item.title }}</h3>
            <p class="text-gray-600 text-sm mb-3">{{ item.description }}</p>
            <div v-if="item.details" class="space-y-1">
              <div v-for="detail in item.details" :key="detail" class="text-xs text-gray-500 flex items-start">
                <span class="w-1 h-1 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                {{ detail }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Examples Section -->
    <section id="examples" class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ data.examples.title }}</h2>
          <p class="text-gray-600">{{ data.examples.subtitle }}</p>
        </div>
        
        <div class="space-y-8">
          <div v-for="category in data.examples.categories" :key="category.title" :class="`bg-gradient-to-br ${category.gradient} rounded-2xl p-6 md:p-8`">
            <div class="flex items-start space-x-4">
              <div :class="`w-16 h-16 bg-${category.iconColor}-100 rounded-2xl flex items-center justify-center flex-shrink-0`">
                <Icon :name="category.icon" :class="`h-8 w-8 text-${category.iconColor}-600`" />
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ category.title }}</h3>
                <p class="text-gray-700 mb-6">{{ category.description }}</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div v-for="example in category.examples" :key="example.name" class="bg-white/80 rounded-lg p-4">
                    <h4 class="font-semibold text-gray-900 mb-2">{{ example.name }}</h4>
                    <p class="text-sm text-gray-600 mb-2">{{ example.description }}</p>
                    <span class="text-xs font-medium text-blue-600">{{ example.value }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Learning Resources -->
    <section class="py-16 bg-gray-50">
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
        
        <div class="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mt-12">
          <div class="flex items-start space-x-3">
            <Icon name="heroicons:exclamation-triangle" class="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 class="font-bold text-gray-900 mb-2">{{ data.warning.title }}</h3>
              <p class="text-sm text-gray-700">
                {{ data.warning.description }}
              </p>
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
  title: 'NFT Learn by SolanaM - Master NFTs from Beginner to Expert',
  ogTitle: 'NFT Learn by SolanaM - Master NFTs from Beginner to Expert',
  description: 'Comprehensive NFT education platform by SolanaM. Learn blockchain development, smart contracts, NFT creation, and trading on high-performance, low-cost networks.',
  ogDescription: 'Comprehensive NFT education platform by SolanaM. Learn blockchain development, smart contracts, NFT creation, and trading on high-performance, low-cost networks.',
  ogImage: 'https://nft.solanam.com/og-home.jpg',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://nft.solanam.com/twitter-home.jpg'
})
 
const { data } = await useAsyncData('home', () => queryContent('/home').findOne())
</script>

<style scoped>
.btn-primary {
  @apply inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5;
}
</style>