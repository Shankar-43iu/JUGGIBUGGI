function generateKeywords() {
    var queryInput = document.querySelector('input[placeholder*="e.g., Daily"]');
    if (!queryInput) {
        queryInput = document.getElementById('seo-search-input');
    }
    var query = queryInput ? queryInput.value.trim().toLowerCase() : '';
    
    var kl = document.getElementById('keyword-list');
    var tl = document.getElementById('title-list');
    
    if(!query) {
        alert("Pehle koi topic toh daalo bhai! (e.g., Vlog, Shayari, Trading)");
        return;
    }

    var keywords = [
        "How to viral " + query + " video on YouTube",
        "Trending " + query + " ideas",
        "Best " + query + " setups",
        query + " guide"
    ];

    var titles = [
        "My First " + query,
        "The Ultimate Secret of " + query + " !",
        "Don't Make This Mistake in " + query + " !",
        "Trying " + query + " For 24 Hours!"
    ];

    if(query.includes('vlog') || query.includes('blog')) {
        keywords = ["Daily Lifestyle Vlog 2026", "Family vlog behind the scenes", "Indian village travel vlog", "Cinematic mobile editing"];
        titles = ["Finally Yeh Sab Ho Gaya! 😮", "Mummy Ne Sab Kharab Kardiya 😭", "Traveling Unknown City! ⛺", "My Real Daily Routine | Juggi Buggi"];
    } else if(query.includes('shayari') || query.includes('poetry')) {
        keywords = ["Own voice motivational shayari", "Sad emotional status reels", "Love shayari captions", "Attitude shayari music"];
        titles = ["Dil Ko Chhu Jane Wali Shayari 💔", "Sunna Zaroor: Kismat Par Poetry 🔥", "When Silence Speaks... ✨", "Viral Shayari Reel Editing"];
    } else if(query.includes('trading') || query.includes('stock') || query.includes('market')) {
        keywords = ["Intraday trading strategies", "Swing trading technical analysis", "Top 5 growth stocks", "Risk management tips"];
        titles = ["I Made ₹10,000 in 10 Minutes! 😲", "Don't Start Trading Before This! 🛑", "Technical Analysis Masterclass", "How I Select Stocks | Tutorial"];
    } else if(query.includes('instagram') || query.includes('social') || query.includes('facebook')) {
        keywords = ["Grow on Instagram algorithm", "Viral hashtags for reels", "Best time to post", "Professional bio setup"];
        titles = ["From 0 to 100K Followers! 📈", "The Secret Strategy! 🤫", "Stop Posting Like This! 🛑", "How I Make Professional Content"];
    }

    if (kl) {
        kl.innerHTML = '';
        keywords.forEach(function(kw) { 
            kl.innerHTML += '<li><strong>' + kw + '</strong> <span style="color: #8ab4f8; font-size: 0.8rem; margin-left: 10px;">🔥 High Vol</span></li>'; 
        });
    }

    if (tl) {
        tl.innerHTML = '';
        titles.forEach(function(tt) { 
            tl.innerHTML += '<li>' + tt + ' <span style="color: #00e676; font-size: 0.8rem; margin-left: 10px;">⚡ 9.8% CTR</span></li>'; 
        });
    }
} 
// Create one here par click karne par login form ko chhupane aur register form ko dikhane ke liye
function toggleForm(event) {
    if (event) event.preventDefault(); // Page ko automatic reload hone se rokne ke liye
    
    var loginCard = document.getElementById('login-container');
    var registerCard = document.getElementById('register-container');
    
    if (loginCard && registerCard) {
        loginCard.style.display = 'none';
        registerCard.style.display = 'block';
    }
}
// Got it button par click karne par cookie banner ko chhupane ke liye
function dismissCookieBanner() {
    var banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.style.display = 'none';
    }
}