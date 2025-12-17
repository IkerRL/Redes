// Data: URLs de los logos e información a rotar
const socialData = [
    {
        name: "tiktok",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Tiktok_logo.png"
    },
    {
        name: "instagram",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
    }
];

const iconBox = document.querySelector(".social-icon");
let index = 0;

function showIcon(i) {
    iconBox.innerHTML = "";
    
    const data = socialData[i];
    
    // 1. Crea el elemento de imagen <img>
    const logoImg = document.createElement('img');
    logoImg.src = data.url; 
    logoImg.alt = `${data.name} logo`;
    
    // 2. Inyecta la imagen
    iconBox.appendChild(logoImg);

    // 3. Animación GSAP
    gsap.fromTo(
        logoImg, 
        { opacity: 0, x: -10 }, 
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );
}

// Muestra el primer ícono al cargar
showIcon(index);

// Configura la rotación automática cada 3 segundos (3000ms)
setInterval(() => {
    index = (index + 1) % socialData.length;
    showIcon(index);
}, 3000);
