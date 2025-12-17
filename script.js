// Data: Incluye el logo, el nombre y el ENLACE de perfil
const socialData = [
    {
        name: "tiktok",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Tiktok_logo.png",
        user: "MakacaGotica",
        profileLink: "https://www.tiktok.com/@MakacaGotica" 
    },
    {
        name: "instagram",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
        user: "MakacaGoticaIG",
        profileLink: "https://www.instagram.com/MakacaGoticaIG" 
    }
];

const socialPanel = document.querySelector(".social-panel");
const iconBox = document.querySelector(".social-icon");
const userText = document.querySelector(".social-user"); 
let index = 0;

/**
 * Muestra el logo y el texto con animación GSAP.
 */
function showIcon(i) {
    iconBox.innerHTML = "";
    
    const data = socialData[i];
    
    // 1. GESTIÓN DEL LOGO
    const logoImg = document.createElement('img');
    logoImg.src = data.url; 
    logoImg.alt = `${data.name} logo`;
    iconBox.appendChild(logoImg);

    gsap.fromTo(
        logoImg, 
        { opacity: 0, scale: 0.8 }, 
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
    );
    
    // 2. GESTIÓN DEL TEXTO (Rotación con Fade)
    gsap.to(userText, {
        opacity: 0,
        y: 5,
        duration: 0.2,
        onComplete: () => {
            userText.textContent = data.user;
            gsap.fromTo(
                userText, 
                { opacity: 0, y: -5 }, 
                { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
            );
        }
    });
    
    // 3. ACTUALIZAR ENLACE CLICABLE (Añade el enlace como data attribute)
    socialPanel.dataset.profileLink = data.profileLink;
}

// FUNCIÓN CLICABLE (Abre el perfil actual)
socialPanel.addEventListener('click', () => {
    const link = socialPanel.dataset.profileLink;
    if (link) {
        window.open(link, '_blank');
    }
});


// Muestra el primer elemento al cargar
showIcon(index);

// Configura la rotación automática cada 3 segundos (3000ms)
setInterval(() => {
    index = (index + 1) % socialData.length;
    showIcon(index);
}, 3000);
