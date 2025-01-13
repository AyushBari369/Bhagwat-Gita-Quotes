const quotes = [
    {
        text: "Therefore, O best of the Bharatas, in the very beginning bring the senses under control and slay this enemy called desire, which is the embodiment of sin and destroys knowledge and realization..",
        image: 'anime-naruto-pain-naruto-wallpaper-preview (1).jpg',
       
    },
    {
        text: "Those steadfast in karm yog, always think, “I am not the doer,” even while engaged in seeing, hearing, touching, smelling, moving, sleeping, breathing, speaking, excreting, grasping, and opening or closing the eyes. With the light of divine knowledge, they see that it is only the material senses that are moving amongst their objects..",
        image: 'OIP_1702229466081.jpg',
        
    },
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    document.getElementById('quote').innerText = quote.text;


    // Show quote image
    const quoteImage = document.getElementById('quote-image');
    quoteImage.src = quote.image;
    quoteImage.style.display = 'block';

    // Update merchandise link
    const merchLink = document.getElementById('merch-link');
    merchLink.href = quote.merchandiseLink;

   
}

function shareOnTwitter() {
    const quote = document.getElementById('quote').innerText;
    const twitterURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
    window.open(twitterURL, '_blank');
}