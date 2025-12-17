// Data: Incluimos el nombre de usuario/título para cada red social
const socialData = [
    {
        name: "tiktok",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Tiktok_logo.png",
        user: "MakacaGotica" // Nombre para TikTok
    },
    {
        name: "instagram",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
        user: "MakacaGoticaIG" // Nombre para Instagram (¡Cámbialo al que quieras!)
    }
];

const iconBox = document.querySelector(".social-icon");
// NUEVO: Capturamos el elemento de texto
const userText = document.querySelector(".social-user"); 
let index = 0;

/**
 * Muestra el logo y el texto correspondientes al índice proporcionado.
 * @param {number} i - El índice del elemento en el array socialData.
 */
function showIcon(i) {
    iconBox.innerHTML = "";
    
    const data = socialData[i];
    
    // ===================================
    // 1. GESTIÓN DEL LOGO (IMAGEN)
    // ===================================
    
    const logoImg = document.createElement('img');
    logoImg.src = data.url; 
    logoImg.alt = `${data.name} logo`;
    iconBox.appendChild(logoImg);

    // Animación para el LOGO
    gsap.fromTo(
        logoImg, 
        { opacity: 0, scale: 0.8 }, 
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
    );
    
    // ===================================
    // 2. GESTIÓN DEL TEXTO (NOMBRE DE USUARIO)
    // ===================================
    
    // Animación de salida del texto anterior
    gsap.to(userText, {
        opacity: 0,
        y: 5,
        duration: 0.2,
        onComplete: () => {
            // Una vez que el texto viejo desaparece, lo cambiamos
            userText.textContent = data.user;
            
            // Animación de entrada del nuevo texto
            gsap.fromTo(
                userText, 
                { opacity: 0, y: -5 }, 
                { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
            );
        }
    });
}

// Muestra el primer elemento al cargar
showIcon(index);

// Configura la rotación automática cada 3 segundos (3000ms)
setInterval(() => {
    index = (index + 1) % socialData.length;
    showIcon(index);
}, 3000);
