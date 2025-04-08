const sites = [
  { name: "Google", link: "https://www.google.com", category: "Search Engine", description: "Search engine offering web, image, and video results." },
  { name: "Bing", link: "https://www.bing.com", category: "Search Engine", description: "Microsoft's search engine with integrated services." },
  { name: "Yahoo! Search", link: "https://search.yahoo.com", category: "Search Engine", description: "Web search with news, email, and other services." },
  { name: "DuckDuckGo", link: "https://duckduckgo.com", category: "Search Engine", description: "Privacy-focused search engine that doesn’t track you." },
  { name: "Facebook", link: "https://www.facebook.com", category: "Social Media", description: "Connect with friends, share updates and media." },
  { name: "Instagram", link: "https://www.instagram.com", category: "Social Media", description: "Photo and video sharing platform." },
  { name: "Twitter", link: "https://twitter.com", category: "Social Media", description: "Microblogging platform for short updates and news." },
  { name: "LinkedIn", link: "https://www.linkedin.com", category: "Social Media", description: "Professional networking platform." },
  { name: "Snapchat", link: "https://www.snapchat.com", category: "Social Media", description: "Messaging app with ephemeral multimedia." },
  { name: "TikTok", link: "https://www.tiktok.com", category: "Social Media", description: "Short-form mobile video sharing platform." },
  { name: "Reddit", link: "https://www.reddit.com", category: "Social Media", description: "Community-based discussion forum." },
  { name: "Pinterest", link: "https://www.pinterest.com", category: "Social Media", description: "Idea discovery and visual bookmarking tool." },
  { name: "WhatsApp", link: "https://www.whatsapp.com", category: "Social Media", description: "Messaging and voice/video calling app." },
  { name: "YouTube", link: "https://www.youtube.com", category: "Video", description: "Video sharing and streaming platform." },
  { name: "Vimeo", link: "https://vimeo.com", category: "Video", description: "High-quality video hosting and sharing." },
  { name: "Dailymotion", link: "https://www.dailymotion.com", category: "Video", description: "French video-sharing platform." },
  { name: "Twitch", link: "https://www.twitch.tv", category: "Video", description: "Live streaming, mostly for gaming." },
  { name: "Amazon", link: "https://www.amazon.com", category: "Shopping", description: "Online marketplace for everything." },
  { name: "eBay", link: "https://www.ebay.com", category: "Shopping", description: "Auction and shopping website." },
  { name: "Alibaba", link: "https://www.alibaba.com", category: "Shopping", description: "Global wholesale and retail platform." },
  { name: "AliExpress", link: "https://www.aliexpress.com", category: "Shopping", description: "Retail services from China, direct to consumers." },
  { name: "Etsy", link: "https://www.etsy.com", category: "Shopping", description: "Handmade, vintage, and unique factory-manufactured items." },
  { name: "Walmart", link: "https://www.walmart.com", category: "Shopping", description: "Online store of the retail giant Walmart." },
  { name: "Target", link: "https://www.target.com", category: "Shopping", description: "Online store for electronics, clothes, groceries, and more." },
  { name: "Netflix", link: "https://www.netflix.com", category: "Streaming", description: "Watch TV shows and movies anytime, anywhere." },
  { name: "Xalaflix", link: "https://xalaflix.com", category: "Streaming", description: "Free streaming of movies and TV series." },
  { name: "Tubi", link: "https://www.tubi.tv", category: "Streaming", description: "Free streaming movies and TV shows." },
  { name: "Crackle", link: "https://www.crackle.com", category: "Streaming", description: "Free TV shows and movies, available online." },
  { name: "PayPal", link: "https://www.paypal.com", category: "Finance", description: "Send and receive money, shop online." },
  { name: "Wise", link: "https://wise.com", category: "Finance", description: "Send money abroad with low fees." },
  { name: "WorldRemit", link: "https://www.worldremit.com", category: "Finance", description: "Online money transfer to family and friends." },
  { name: "Remitly", link: "https://www.remitly.com", category: "Finance", description: "Send money internationally with speed and ease." },
  { name: "Skrill", link: "https://www.skrill.com", category: "Finance", description: "Digital wallet for international payments." },
  { name: "Paysend", link: "https://paysend.com", category: "Finance", description: "Send money online to cards or bank accounts." },
  { name: "Cash App", link: "https://cash.app", category: "Finance", description: "Mobile payment service by Square." },
  { name: "Western Union", link: "https://www.westernunion.com", category: "Finance", description: "Global money transfer and payment services." },
  { name: "Bothosting", link: "https://bothosting.net", category: "Bots & Hosting", description: "Host and manage your WhatsApp or Telegram bots." },
  { name: "KataBump", link: "https://katabump.com", category: "Bots & Hosting", description: "Platform to deploy and manage WhatsApp bots easily." },
  { name: "SoloLearn", link: "https://www.sololearn.com", category: "Education", description: "Learn programming interactively from your phone or web browser." },
  { name: "The Odin Project", link: "https://www.theodinproject.com", category: "Education", description: "Free full-stack curriculum with real projects and support." },
  { name: "Codewars", link: "https://www.codewars.com", category: "Education", description: "Improve your coding skills by completing challenges." },
  { name: "Coursera", link: "https://www.coursera.org", category: "Education", description: "Courses from universities and companies in web development." },
  { name: "edX", link: "https://www.edx.org", category: "Education", description: "Online university-level courses in programming and web dev." },
  { name: "Radio Garden", link: "https://radio.garden", category: "Entertainment", description: "Listen to thousands of live radio stations across the globe." },
  { name: "Window Swap", link: "https://www.window-swap.com", category: "Entertainment", description: "View short window videos from random places around the world." },
  { name: "Have I Been Pwned", link: "https://haveibeenpwned.com", category: "Security", description: "Check if your email or passwords have been compromised in data breaches." },
  { name: "Slidesgo", link: "https://slidesgo.com", category: "Productivity", description: "Téléchargez gratuitement des modèles de présentations professionnels." },
  { name: "The Useless Web", link: "https://theuselessweb.com", category: "Divertissement", description: "Redirige vers des sites web aléatoires et inutiles pour se divertir." },
  { name: "This Person Does Not Exist", link: "https://thispersondoesnotexist.com", category: "Technologie", description: "Génère des visages réalistes de personnes qui n'existent pas à l'aide de l'IA." },
  { name: "Unplug The TV", link: "https://unplugthetv.com", category: "Éducation", description: "Propose des vidéos éducatives aléatoires pour remplacer le temps passé devant la télévision." }
];
    "link": "https://www.atlasobscura.com",
    "category": "Voyage",
    "description": "Guide des lieux étranges et merveilleux à travers le monde."
  },
  {
    "name": "Sleepytime",
    "link": "https://sleepyti.me",
    "category": "Santé",
    "description": "Calcule les meilleurs moments pour s'endormir ou se réveiller en fonction des cycles de sommeil."
  },
  {
    "name": "SuperCook",
    "link": "https://www.supercook.com",
    "category": "Cuisine",
    "description": "Trouvez des recettes en fonction des ingrédients que vous avez déjà."
  },
  {
    "name": "Ninite",
    "link": "https://ninite.com",
    "category": "Technologie",
    "description": "Installez et mettez à jour plusieurs applications Windows en une seule fois."
  },
  {
    "name": "AlternativeTo",
    "link": "https://alternativeto.net",
    "category": "Technologie",
    "description": "Trouvez des alternatives aux logiciels que vous utilisez déjà."
  },
  
  
function displaySites(query) { const results = document.getElementById("results"); results.innerHTML = "";

const filtered = sites.filter(site => site.name.toLowerCase().includes(query.toLowerCase()) || site.description.toLowerCase().includes(query.toLowerCase()) || site.category.toLowerCase().includes(query.toLowerCase()) );

filtered.forEach(site => { const siteDiv = document.createElement("div"); siteDiv.classList.add("site"); siteDiv.innerHTML = <h3><a href="${site.link}" target="_blank">${site.name}</a></h3> <p><strong>Category:</strong> ${site.category}</p> <p>${site.description}</p>; results.appendChild(siteDiv); }); }

document.getElementById("searchInput").addEventListener("input", (e) => { displaySites(e.target.value); });

displaySites("")
