// =====================================================
// CONTENT GENERATION FUNCTIONS
// =====================================================

/**
 * Quick fill function for sidebar buttons
 * Populates search input and generates content
 */
function quickFill(topic) {
    const searchInput = document.getElementById('keyword-search');
    if (searchInput) {
        searchInput.value = topic;
        searchInput.focus();
        // Trigger generation after a short delay
        setTimeout(() => {
            generateViralContent();
        }, 100);
    } else {
        console.warn('Search input not found');
    }
}

/**
 * Load recent searches - shows popular topics
 */
function loadRecentSearches() {
    const recentTopics = ['Fashion', 'Lifestyle', 'Travel', 'Food', 'Technology', 'Beauty'];
    const randomTopic = recentTopics[Math.floor(Math.random() * recentTopics.length)];
    quickFill(randomTopic);
}

/**
 * Generate viral keywords and titles based on user input
 * Fixed to work with dashboard structure
 */
function generateViralContent() {
    // Find input field with proper error handling
    var queryInput = document.querySelector('input[placeholder*="e.g., Daily"]') || 
                     document.querySelector('input[placeholder*="Type your topic"]') ||
                     document.getElementById('keyword-search');
    
    if (!queryInput) {
        console.warn('Input field not found');
        return;
    }

    var query = queryInput.value.trim().toLowerCase();
    
    // Get target elements
    var keywordBox = document.getElementById('tags-box');
    var titleBox = document.getElementById('titles-box');
    
    // Validate input
    if (!query) {
        alert("Please enter a topic first! (e.g., Fashion, Lifestyle, Travel)");
        return;
    }

    // Default keywords and titles
    var keywords = [
        "#" + query + "viral",
        "#" + query + "trending",
        "#" + query + "tips",
        "#" + query + "guide",
        "#viral",
        "#trending",
        "#content"
    ];

    var titles = [
        "🔥 How to Create Viral " + query + " Content in 2026",
        "⚡ The Ultimate " + query + " Guide You're Missing",
        "🚀 " + query + " Tips That Actually Work!",
        "💡 Learn Professional " + query + " Techniques"
    ];

    // Category-specific customization
    if (query.includes('fashion')) {
        keywords = ["#fashiontrends", "#fashiontips", "#styling", "#outfitinspo", "#fashionblogger", "#fashionista", "#lookbook"];
        titles = ["👗 Latest Fashion Trends 2026", "✨ Fashion Styling Hacks", "💄 How to Create Great Looks", "👠 Complete Fashion Guide"];
    }
    else if (query.includes('lifestyle')) {
        keywords = ["#lifestyle", "#dailylife", "#livinbest", "#motivation", "#inspiration", "#selfcare", "#wellness"];
        titles = ["🌟 Daily Lifestyle Tips", "💪 How to Improve Your Life", "🏡 Best Lifestyle Hacks", "✨ Living Your Best Life"];
    }
    else if (query.includes('history')) {
        keywords = ["#history", "#historical", "#heritage", "#culture", "#interesting", "#facts", "#learning"];
        titles = ["📚 Fascinating History Facts", "🏛️ Historical Events Explained", "📖 Must-Know History Lessons", "🌍 World History Guide"];
    }
    else if (query.includes('vlog') || query.includes('blog')) {
        keywords = ["#vloglife", "#dailyvlog", "#vlogging", "#cinematic", "#travel", "#lifestyle", "#content"];
        titles = ["📹 How I Film Professional Vlogs", "🎥 Vlogging Setup & Editing Guide", "✨ Daily Vlog Ideas That Go Viral", "🌟 Complete Vlogging Tutorial"];
    } 
    else if (query.includes('shayari') || query.includes('poetry')) {
        keywords = ["#shayari", "#poetry", "#urdu", "#emotional", "#viral", "#reels", "#trending"];
        titles = ["💔 Emotional Shayari Collection", "✍️ How to Write Viral Shayari", "🎵 Best Shayari Reels Guide", "📖 Poetry Writing Masterclass"];
    } 
    else if (query.includes('trading') || query.includes('stock') || query.includes('market')) {
        keywords = ["#trading", "#stocks", "#market", "#invest", "#finance", "#analysis", "#tips"];
        titles = ["📈 Stock Market Trading Guide", "💰 Best Trading Strategies 2026", "🎯 Technical Analysis Basics", "🔍 How to Pick Winning Stocks"];
    } 
    else if (query.includes('instagram') || query.includes('social') || query.includes('facebook')) {
        keywords = ["#instagram", "#reels", "#viral", "#growth", "#socialmedia", "#trending", "#engage"];
        titles = ["📱 How to Grow Instagram Fast", "🚀 Viral Reels Strategy", "⭐ Instagram Algorithm Secrets", "💬 Social Media Growth Hacks"];
    }

    // Update keywords/tags efficiently
    if (keywordBox) {
        keywordBox.innerHTML = keywords.map(kw => 
            `<span class="tag">${kw}</span>`
        ).join('');
    }

    // Update titles efficiently
    if (titleBox) {
        titleBox.innerHTML = titles.map(title => 
            `<div class="title-item">${title}</div>`
        ).join('');
    }

    // Update metrics dynamically
    updateMetrics();
}

/**
 * Update metrics with random values
 */
function updateMetrics() {
    var volumeElement = document.getElementById('stat-volume');
    var usersElement = document.getElementById('stat-users');
    
    if (volumeElement) {
        volumeElement.textContent = (Math.random() * (250 - 60) + 60).toFixed(1) + "K";
    }
    if (usersElement) {
        usersElement.textContent = Math.floor(Math.random() * (50000 - 10000) + 10000).toLocaleString();
    }
}

/**
 * Alias function for generateViralContent (called from dashboard)
 */
function generateViralContent() {
    return generateKeywords();
}

/**
 * Toggle between login and register forms
 * (Removed - no longer needed in current structure)
 */
function toggleForm(event) {
    if (event) event.preventDefault();
    console.log('Form toggle called - this function is deprecated in the current version');
}

/**
 * Dismiss cookie banner
 * (Removed - no cookie banner in current structure)
 */
function dismissCookieBanner() {
    var banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.style.display = 'none';
    }
}

// =====================================================
// ERROR HANDLING & LOGGING
// =====================================================

// Log script initialization
console.log('✅ Script.js loaded successfully');