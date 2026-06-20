const translations = {
    th: {
        "page-title": "Milk Run - ร้านนมสไตล์วัยรุ่น",
        "hero-headline": "เติมความหวาน แวะมาจอยกันที่ <span>Milk Run!</span>",
        "hero-subheadline": "ร้านนมนั่งชิล บรรยากาศสุดคิวท์ ขนมอร่อย เครื่องดื่มจัดเต็ม ชวนแก๊งเพื่อนมาได้เลย 💖",
        "cta-button": "ดูเมนูแนะนำ <i class='fas fa-arrow-down'></i>",
        "vibe-title": "📸 มุมถ่ายรูปสุดปัง นั่งชิลได้ยาวๆ",
        "vibe-desc": "บรรยากาศร้านสีพาสเทลสุดละมุน ถ่ายรูปมุมไหนก็รอด ชวนเพื่อนมาจอยกันได้เลย!",
        "menu-title": "🥛 เมนูแนะนำที่ต้องลอง!",
        "menu-desc": "จัดเต็มความอร่อย ทั้งเครื่องดื่ม ขนมปังปิ้ง และของหวานอีกเพียบ",
        "menu-1": "ปังปิ้งช็อกโกแลต",
        "menu-2": "ของทอดทานเล่น",
        "menu-3": "ปังปิ้งแยมส้ม",
        "menu-4": "ปังเย็นนมชมพู",
        "menu-5": "เฟรนช์ฟรายส์",
        "menu-6": "นมชมพูเย็น",
        "menu-7": "ปังปิ้งภูเขาไฟ",
        "footer-desc": "ร้านนมนั่งชิล ฟีลวัยรุ่น",
        "footer-time-title": "<i class='fas fa-clock'></i> เวลาเปิด-ปิด",
        "footer-time-desc": "เปิดให้บริการทุกวัน<br>16:00 - 23:00 น.",
        "footer-location-title": "<i class='fas fa-map-marker-alt'></i> พิกัดร้าน",
        "footer-location-desc": "Milk Run<br>(สอบถามเส้นทางเพิ่มเติมได้ที่เพจ)",
        "footer-social": "ติดตามเรา",
        "footer-copyright": "&copy; 2026 Milk Run. All rights reserved."
    },
    en: {
        "page-title": "Milk Run - Teen Style Cafe",
        "hero-headline": "Add some sweetness, come join us at <span>Milk Run!</span>",
        "hero-subheadline": "Chill cafe with cute vibes, delicious desserts, and full-on drinks. Bring your friends! 💖",
        "cta-button": "See our menu <i class='fas fa-arrow-down'></i>",
        "vibe-title": "📸 Awesome photo spots, chill all day long",
        "vibe-desc": "Pastel colored vibes, every angle is photogenic. Come hang out with friends!",
        "menu-title": "🥛 Must-try recommended menu!",
        "menu-desc": "Full of deliciousness, including drinks, toasts, and many more desserts.",
        "menu-1": "Chocolate Toast",
        "menu-2": "Fried Snacks",
        "menu-3": "Orange Jam Toast",
        "menu-4": "Pink Milk Shaved Ice",
        "menu-5": "French Fries",
        "menu-6": "Iced Pink Milk",
        "menu-7": "Volcano Toast",
        "footer-desc": "Teen style chill cafe",
        "footer-time-title": "<i class='fas fa-clock'></i> Opening Hours",
        "footer-time-desc": "Open Daily<br>16:00 - 23:00",
        "footer-location-title": "<i class='fas fa-map-marker-alt'></i> Location",
        "footer-location-desc": "Milk Run<br>(Contact our page for directions)",
        "footer-social": "Follow Us",
        "footer-copyright": "&copy; 2026 Milk Run. All rights reserved."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // ---- Localization (i18n) Logic ----
    const btnTh = document.getElementById('btn-th');
    const btnEn = document.getElementById('btn-en');
    
    function setLanguage(lang) {
        // update active button class
        if(lang === 'th') {
            btnTh.classList.add('active');
            btnEn.classList.remove('active');
            document.documentElement.lang = 'th';
        } else {
            btnEn.classList.add('active');
            btnTh.classList.remove('active');
            document.documentElement.lang = 'en';
        }
        
        // replace text for all data-i18n elements
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(translations[lang] && translations[lang][key]) {
                if(el.tagName.toLowerCase() === 'title') {
                    document.title = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });
    }

    btnTh.addEventListener('click', () => setLanguage('th'));
    btnEn.addEventListener('click', () => setLanguage('en'));

    // ตั้งค่าเริ่มต้นให้ดึงคำแปลมาใส่ตอนโหลดหน้าเว็บ
    setLanguage('th');


    // ---- Intersection Observer for scroll animations ----
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
                
                setTimeout(() => {
                    entry.target.style.transition = '';
                    entry.target.style.opacity = '';
                    entry.target.style.transform = '';
                }, 1000); 
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.section-header, .vibe-gallery img, .menu-card');
    
    animatedElements.forEach((el, index) => {
        el.classList.add('fade-up');
        
        if (el.classList.contains('menu-card') || el.tagName.toLowerCase() === 'img') {
            const delay = (index % 4) * 0.15;
            el.style.transition = `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`;
        } else {
            el.style.transition = `opacity 0.8s ease-out, transform 0.8s ease-out`;
        }
        
        observer.observe(el);
    });
});
