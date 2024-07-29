function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(element => {
        const enText = element.getAttribute('data-en');
        const siText = element.getAttribute('data-si');
        if (lang === 'si') {
            element.innerText = siText;
        } else {
            element.innerText = enText;
        }
    });

    const btn = document.getElementById('language-btn');
    if (lang === 'si') {
        btn.innerText = 'English';
    } else {
        btn.innerText = 'සිංහල';
    }

    // Save the selected language in localStorage
    localStorage.setItem('language', lang);
}

document.getElementById('language-btn').addEventListener('click', function() {
    const currentLang = localStorage.getItem('language') || 'en';
    const newLang = currentLang === 'en' ? 'si' : 'en';
    switchLanguage(newLang);
});

// On page load, check the saved language preference
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('language') || 'en';
    switchLanguage(savedLang);
    
    // Initialize Lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });
});
