// ==========================================
// 📱 LÓGICA DEL MENÚ MÓVIL (RESPONSIVE)
// ==========================================
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const navbar = document.getElementById("navbar");

if (openMenu && mobileMenu) {
    openMenu.addEventListener("click", () => {
        mobileMenu.classList.remove("-translate-x-full");
        document.body.classList.add("overflow-hidden");
        if (navbar) navbar.classList.remove("backdrop-blur");
    });
}

if (closeMenu && mobileMenu) {
    closeMenu.addEventListener("click", () => {
        mobileMenu.classList.add("-translate-x-full");
        document.body.classList.remove("overflow-hidden");
        if (navbar) navbar.classList.add("backdrop-blur");
    });
}

// Cierra el menú al dar clic en cualquier enlace interno
const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];
mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (mobileMenu) mobileMenu.classList.add("-translate-x-full");
        document.body.classList.remove("overflow-hidden");
        if (navbar) navbar.classList.add("backdrop-blur");
    });
});

// ==========================================
// 🌗 TOGGLE DEL MODO OSCURO (THEME)
// ==========================================
const themeToggle = document.getElementById("themeToggle");

// Cambiar icono y tema de forma dinámica
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
        
        if (document.documentElement.classList.contains("dark")) {
            themeToggle.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon">
                    <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>
                </svg>`;
        } else {
            themeToggle.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun">
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                </svg>`;
        }
    });
}