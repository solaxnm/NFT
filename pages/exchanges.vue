<template>
  <div class="pt-16 pb-8">
    

    <!-- Header -->
    <section class="bg-gradient-to-br from-emerald-50 to-teal-50 py-16">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Icon name="heroicons:building-storefront" class="h-8 w-8 text-white" />
        </div>
        <h1 class="text-4xl md:text-5xl font-bold gradient-text mb-4">NFT Marketplaces</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive guide to NFT marketplaces, trading platforms, and exchanges
        </p>
      </div>
    </section>

    <!-- Market Overview -->
    <section class="py-12 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div class="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          <div class="relative z-10">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                <Icon name="heroicons:chart-bar" class="h-6 w-6 text-white" />
              </div>
              <h2 class="text-2xl md:text-3xl font-bold">NFT Market Landscape</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
              <div class="text-center">
                <div class="text-3xl font-bold mb-2">$25B+</div>
                <div class="opacity-90">Total Market Volume (2023)</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold mb-2">100M+</div>
                <div class="opacity-90">NFTs Traded</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold mb-2">50+</div>
                <div class="opacity-90">Major Marketplaces</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Major Marketplaces -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Leading NFT Marketplaces</h2>
          <p class="text-gray-600">Comprehensive analysis of top trading platforms</p>
        </div>

        <div class="space-y-8">
          <!-- OpenSea -->
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100">
            <div class="flex items-start space-x-4">
              <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Icon name="heroicons:cube" class="h-8 w-8 text-blue-600" />
              </div>
              <div class="flex-1">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 class="text-2xl font-bold text-gray-900">OpenSea</h3>
                  <div class="flex items-center space-x-2 mt-2 md:mt-0">
                    <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Market Leader</span>
                    <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Multi-Chain</span>
                    <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Established 2017</span>
                  </div>
                </div>
                <p class="text-gray-700 mb-6">
                  The world's largest NFT marketplace with over 80 million NFTs across multiple blockchains. 
                  Offers comprehensive tools for creators, collectors, and traders with advanced filtering, 
                  analytics, and collection management features.
                </p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                  <div>
                    <span class="font-semibold text-gray-900">Trading Fee:</span>
                    <p class="text-gray-600">2.5%</p>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-900">Supported Chains:</span>
                    <p class="text-gray-600">Ethereum, Polygon, Klaytn, Solana</p>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-900">Volume (2023):</span>
                    <p class="text-gray-600">$5.2B+</p>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-900">Active Users:</span>
                    <p class="text-gray-600">1.5M+ monthly</p>
                  </div>
                </div>
                <div class="bg-white rounded-lg p-4">
                  <h4 class="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                    <div>• Advanced search and filtering</div>
                    <div>• Collection analytics and insights</div>
                    <div>• Bulk listing and management tools</div>
                    <div>• Offer and auction systems</div>
                    <div>• Creator royalty enforcement</div>
                    <div>• Mobile app with full functionality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Magic Eden -->
          <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 border border-purple-100">
            <div class="flex items-start space-x-4">
              <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Icon name="heroicons:sparkles" class="h-8 w-8 text-purple-600" />
              </div>
              <div class="flex-1">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 class="text-2xl font-bold text-gray-900">Magic Eden</h3>
                  <div class="flex items-center space-x-2 mt-2 md:mt-0">
                    <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Solana Leader</span>
                    <span class="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Low Fees</span>
                    <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Gaming Focus</span>
                  </div>
                </div>
                <p class="text-gray-700 mb-6">
                  Leading multi-chain NFT marketplace with strong focus on Solana ecosystem. Known for fast transactions, 
                  low fees, and excellent support for gaming NFTs and utility-driven projects.
                </p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                  <div>
                    <span class="font-semibold text-gray-900">Trading Fee:</span>
                    <p class="text-gray-600">2.0%</p>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-900">Supported Chains:</span>
                    <p class="text-gray-600">Solana, Ethereum, Polygon, Bitcoin</p>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-900">Volume (2023):</span>
                    <p class="text-gray-600">$1.8B+</p>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-900">Specialization:</span>
                    <p class="text-gray-600">Gaming & Utility NFTs</p>
                  </div>
                </div>
                <div class="bg-white rounded-lg p-4">
                  <h4 class="font-semibold text-gray-900 mb-2">Unique Features:</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                    <div>• Launchpad for new projects</div>
                    <div>• Gaming marketplace integration</div>
                    <div>• Creator tools and analytics</div>
                    <div>• Community-driven curation</div>
                    <div>• Cross-chain bridge support</div>
                    <div>• Staking and rewards programs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Blur -->
          <div class="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 md:p-8 border border-orange-100">
            <div class="flex items-start space-x-4">
              <div class="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Icon name="heroicons:fire" class="h-8 w-8 text-orange-600" />
              </div>
              <div class="flex-1">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 class="text-2xl font-bold text-gray-900">Blur</h3>
                  <div class="flex items-center space-x-2 mt-2 md:mt-0">
                    <span class="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Pro Traders</span>
                    <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Advanced Tools</span>
                    <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Aggregator</span>
                  </div>
                </div>
                <p class="text-gray-700 mb-6">
                  Professional NFT trading platform designed for serious traders and collectors. Features advanced 
                  analytics, portfolio management, and aggregated listings from multiple marketplaces.
                </p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                  <div>
                    <span class="font-semibold text-gray-900">Trading Fee:</span>
                    <p class="text-gray-600">0.5%</p>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-900">Supported Chains:</span>
                    <p class="text-gray-600">Ethereum</p>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-900">Volume (2023):</span>
                    <p class="text-gray-600">$2.1B+</p>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-900">Target Users:</span>
                    <p class="text-gray-600">Professional Traders</p>
                  </div>
                </div>
                <div class="bg-white rounded-lg p-4">
                  <h4 class="font-semibold text-gray-900 mb-2">Professional Features:</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                    <div>• Real-time market data and analytics</div>
                    <div>• Portfolio tracking and P&L analysis</div>
                    <div>• Sweep and batch buying tools</div>
                    <div>• Advanced filtering and sorting</div>
                    <div>• Marketplace aggregation</div>
                    <div>• API access for developers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- LooksRare -->
          <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 border border-green-100">
            <div class="flex items-start space-x-4">
              <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Icon name="heroicons:eye" class="h-8 w-8 text-green-600" />
              </div>
              <div class="flex-1">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 class="text-2xl font-bold text-gray-900">LooksRare</h3>
                  <div class="flex items-center space-x-2 mt-2 md:mt-0">
                    <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Community Owned</span>
                    <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Rewards Program</span>
                    <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">DAO Governance</span>
                  </div>
                </div>
                <p class="text-gray-700 mb-6">
                  Community-owned NFT marketplace with innovative reward mechanisms and governance features. 
                  Offers competitive fees and unique incentive programs for active traders.
                </p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                  <div>
                    <span class="font-semibold text-gray-900">Trading Fee:</span>
                    <p class="text-gray-600">2.0%</p>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-900">Supported Chains:</span>
                    <p class="text-gray-600">Ethereum</p>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-900">Governance:</span>
                    <p class="text-gray-600">LOOKS Token DAO</p>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-900">Rewards:</span>
                    <p class="text-gray-600">Trading & Staking</p>
                  </div>
                </div>
                <div class="bg-white rounded-lg p-4">
                  <h4 class="font-semibold text-gray-900 mb-2">Community Features:</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                    <div>• Trading rewards in LOOKS tokens</div>
                    <div>• Staking rewards for token holders</div>
                    <div>• Community governance voting</div>
                    <div>• Fee sharing with stakeholders</div>
                    <div>• Creator royalty support</div>
                    <div>• Advanced collection analytics</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Specialized Marketplaces -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Specialized NFT Platforms</h2>
          <p class="text-gray-600">Niche marketplaces for specific types of NFTs and communities</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Art Focused -->
          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="heroicons:paint-brush" class="h-6 w-6 text-indigo-600" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">SuperRare</h3>
            <p class="text-gray-600 mb-4">Curated platform for high-quality digital art with artist verification and collector focus. Features 1/1 artworks and established artist community.</p>
            <div class="space-y-2 text-sm">
              <div><strong>Focus:</strong> Digital Art & Collectibles</div>
              <div><strong>Fee:</strong> 3% + Gas</div>
              <div><strong>Curation:</strong> Invite-only artists</div>
            </div>
            <div class="flex flex-wrap gap-2 mt-4">
              <span class="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Curated</span>
              <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">High-End Art</span>
            </div>
          </div>

          <!-- Music -->
          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="heroicons:musical-note" class="h-6 w-6 text-green-600" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Catalog</h3>
            <p class="text-gray-600 mb-4">Music-focused NFT platform enabling artists to release albums, singles, and exclusive content directly to fans with innovative monetization.</p>
            <div class="space-y-2 text-sm">
              <div><strong>Focus:</strong> Music & Audio NFTs</div>
              <div><strong>Fee:</strong> 2.5%</div>
              <div><strong>Features:</strong> Streaming & Ownership</div>
            </div>
            <div class="flex flex-wrap gap-2 mt-4">
              <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Music</span>
              <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Artist Tools</span>
            </div>
          </div>

          <!-- Photography -->
          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="heroicons:camera" class="h-6 w-6 text-purple-600" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Foundation</h3>
            <p class="text-gray-600 mb-4">Invite-only platform focusing on digital art and creative communities with auction-based sales and creator-centric features.</p>
            <div class="space-y-2 text-sm">
              <div><strong>Focus:</strong> Digital Art & Photography</div>
              <div><strong>Fee:</strong> 5%</div>
              <div><strong>Model:</strong> Auction-based</div>
            </div>
            <div class="flex flex-wrap gap-2 mt-4">
              <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Exclusive</span>
              <span class="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full">Community</span>
            </div>
          </div>

          <!-- Gaming -->
          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="heroicons:puzzle-piece" class="h-6 w-6 text-orange-600" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Immutable X</h3>
            <p class="text-gray-600 mb-4">Gaming-focused marketplace built on Ethereum Layer 2 with zero gas fees, instant trades, and carbon-neutral transactions.</p>
            <div class="space-y-2 text-sm">
              <div><strong>Focus:</strong> Gaming NFTs</div>
              <div><strong>Fee:</strong> 2% (No Gas)</div>
              <div><strong>Network:</strong> Ethereum L2</div>
            </div>
            <div class="flex flex-wrap gap-2 mt-4">
              <span class="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Gaming</span>
              <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">No Gas Fees</span>
            </div>
          </div>

          <!-- Sports -->
          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="heroicons:trophy" class="h-6 w-6 text-blue-600" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">NBA Top Shot</h3>
            <p class="text-gray-600 mb-4">Official NBA marketplace for basketball highlight NFTs called "Moments" built on Flow blockchain with mainstream sports appeal.</p>
            <div class="space-y-2 text-sm">
              <div><strong>Focus:</strong> Sports Moments</div>
              <div><strong>Fee:</strong> 5%</div>
              <div><strong>Network:</strong> Flow Blockchain</div>
            </div>
            <div class="flex flex-wrap gap-2 mt-4">
              <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Sports</span>
              <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Mainstream</span>
            </div>
          </div>

          <!-- Metaverse -->
          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="heroicons:cube-transparent" class="h-6 w-6 text-cyan-600" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">The Sandbox</h3>
            <p class="text-gray-600 mb-4">Virtual world marketplace for LAND, avatars, and gaming assets with integrated creation tools and metaverse experiences.</p>
            <div class="space-y-2 text-sm">
              <div><strong>Focus:</strong> Virtual Real Estate</div>
              <div><strong>Fee:</strong> 5%</div>
              <div><strong>Features:</strong> Creation Tools</div>
            </div>
            <div class="flex flex-wrap gap-2 mt-4">
              <span class="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded-full">Metaverse</span>
              <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Gaming</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trading Strategies -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Trading Strategies & Tips</h2>
          <p class="text-gray-600">Professional insights for successful NFT trading</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- For Beginners -->
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">For Beginners</h3>
            
            <div class="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name="heroicons:shield-check" class="h-5 w-5 text-blue-600" />
              </div>
              <h4 class="text-lg font-bold text-gray-900 mb-2">Verify Authenticity</h4>
              <p class="text-gray-600 text-sm mb-3">
                Always check the creator's verified status, contract address, and collection details to avoid counterfeit NFTs.
              </p>
              <ul class="text-xs text-gray-600 space-y-1">
                <li>• Look for blue checkmarks on verified accounts</li>
                <li>• Cross-reference contract addresses</li>
                <li>• Check collection activity and volume</li>
                <li>• Verify on multiple platforms</li>
              </ul>
            </div>

            <div class="bg-green-50 rounded-xl p-6 border border-green-100">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name="heroicons:currency-dollar" class="h-5 w-5 text-green-600" />
              </div>
              <h4 class="text-lg font-bold text-gray-900 mb-2">Understand Total Costs</h4>
              <p class="text-gray-600 text-sm mb-3">
                Factor in all costs including marketplace fees, gas fees, and creator royalties when calculating your investment.
              </p>
              <ul class="text-xs text-gray-600 space-y-1">
                <li>• Marketplace fees (typically 2-5%)</li>
                <li>• Blockchain gas fees (varies by network)</li>
                <li>• Creator royalties (usually 5-10%)</li>
                <li>• Potential tax implications</li>
              </ul>
            </div>
          </div>

          <!-- For Advanced Traders -->
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">For Advanced Traders</h3>
            
            <div class="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name="heroicons:chart-bar" class="h-5 w-5 text-purple-600" />
              </div>
              <h4 class="text-lg font-bold text-gray-900 mb-2">Market Analysis</h4>
              <p class="text-gray-600 text-sm mb-3">
                Use advanced analytics tools to track floor prices, volume trends, and market sentiment for informed decisions.
              </p>
              <ul class="text-xs text-gray-600 space-y-1">
                <li>• Monitor floor price movements and volume</li>
                <li>• Analyze holder distribution and whale activity</li>
                <li>• Track social sentiment and community growth</li>
                <li>• Use rarity tools for trait analysis</li>
              </ul>
            </div>

            <div class="bg-orange-50 rounded-xl p-6 border border-orange-100">
              <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name="heroicons:bolt" class="h-5 w-5 text-orange-600" />
              </div>
              <h4 class="text-lg font-bold text-gray-900 mb-2">Advanced Tools</h4>
              <p class="text-gray-600 text-sm mb-3">
                Leverage professional tools for portfolio management, automated trading, and market intelligence.
              </p>
              <ul class="text-xs text-gray-600 space-y-1">
                <li>• Portfolio tracking and P&L analysis</li>
                <li>• Automated bidding and sniping tools</li>
                <li>• Cross-marketplace price comparison</li>
                <li>• API integration for custom strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Market Trends -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Market Trends & Insights</h2>
          <p class="text-gray-600">Current trends shaping the NFT marketplace landscape</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Icon name="heroicons:arrow-trending-up" class="h-5 w-5 text-blue-600" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Multi-Chain Expansion</h3>
            <p class="text-gray-600 text-sm">
              Marketplaces are expanding beyond Ethereum to support multiple blockchains, offering users more options and lower fees.
            </p>
          </div>

          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Icon name="heroicons:puzzle-piece" class="h-5 w-5 text-green-600" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Utility-Focused NFTs</h3>
            <p class="text-gray-600 text-sm">
              Growing emphasis on NFTs with real-world utility, gaming integration, and membership benefits rather than pure speculation.
            </p>
          </div>

          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Icon name="heroicons:users" class="h-5 w-5 text-purple-600" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Creator Economy</h3>
            <p class="text-gray-600 text-sm">
              Enhanced creator tools, better royalty systems, and direct fan engagement features are becoming standard across platforms.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Risk Warning -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
          <div class="flex items-start space-x-4">
            <Icon name="heroicons:exclamation-triangle" class="h-8 w-8 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Important Risk Disclaimer</h3>
              <div class="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>High Risk Investment:</strong> NFT trading involves significant financial risk. Prices can be extremely volatile, 
                  and there's no guarantee of returns or liquidity.
                </p>
                <p>
                  <strong>Market Manipulation:</strong> Be aware of potential market manipulation, wash trading, and artificial price inflation 
                  in some NFT collections.
                </p>
                <p>
                  <strong>Technical Risks:</strong> Smart contract bugs, platform failures, and blockchain network issues can result in 
                  permanent loss of assets.
                </p>
                <p>
                  <strong>Regulatory Uncertainty:</strong> Evolving regulations may impact NFT trading, taxation, and platform operations 
                  in different jurisdictions.
                </p>
                <p class="font-semibold">
                  Only invest what you can afford to lose completely. Always conduct thorough research and consider consulting 
                  with financial advisors before making significant investments.
                </p>
              </div>
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
  title: 'NFT Marketplaces & Trading Platforms | NFT Learn by SolanaM',
  ogTitle: 'NFT Marketplaces & Trading Platforms | NFT Learn by SolanaM',
  description: 'Comprehensive guide to NFT marketplaces: OpenSea, Magic Eden, Blur, and specialized platforms. Learn trading strategies, fees, and market analysis.',
  ogDescription: 'Comprehensive guide to NFT marketplaces: OpenSea, Magic Eden, Blur, and specialized platforms. Learn trading strategies, fees, and market analysis.',
  ogImage: 'https://nft.solanam.com/og-exchanges.jpg',
  twitterCard: 'summary_large_image'
})
</script>