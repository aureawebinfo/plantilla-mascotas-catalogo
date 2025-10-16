// script-productos.js
/*
 * PetHouse Colombia - Funcionalidades para página de productos
 * Desarrollado por Áurea Web - https://aurea-web.com
 * Todos los derechos reservados
 */

document.addEventListener('DOMContentLoaded', function() {
    // Loading screen
    const loadingScreen = document.getElementById('loading-screen');
    
    // Simulate loading time
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        
        // Remove loading screen from DOM after fade out
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 1500);
    
    // Mobile menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }
    
    // Header scroll effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Scroll animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
        
        // Animate product cards individually
        const productCards = document.querySelectorAll('.product-card-catalog');
        
        productCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.1;
            
            if (cardPosition < screenPosition) {
                card.classList.add('animated');
            }
        });
    };
    
    // Initial check for elements in view
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Product data
    const products = [
        {
            id: 1,
            name: "Cama Premium Memory Foam",
            category: "camas",
            pet: "perros",
            price: "$89.900",
            image: "https://http2.mlstatic.com/D_986513-MCO81894147966_012025-O.jpg",
            description: "Cama ortopédica con memory foam para el máximo confort de tu mascota. Diseñada para distribuir el peso de manera uniforme y aliviar la presión en articulaciones.",
            features: [
                "Memory foam de alta densidad",
                "Funda desenfundable y lavable",
                "Base antideslizante",
                "Disponible en 3 tamaños",
                "Material hipoalergénico"
            ]
        },
        {
            id: 2,
            name: "Juguete Interactivo para Gatos",
            category: "juguetes",
            pet: "gatos",
            price: "$24.900",
            image: "https://http2.mlstatic.com/D_986513-MCO81894147966_012025-O.jpg",
            description: "Estimula el instinto cazador de tu felino con este divertido juguete interactivo. Perfecto para mantener a tu gato activo y entretenido.",
            features: [
                "Plumas naturales no tóxicas",
                "Sonido de cascabel atractivo",
                "Varilla flexible y duradera",
                "Ideal para ejercicio físico",
                "Fomenta el comportamiento natural"
            ]
        },
        {
            id: 3,
            name: "Correa Extensible 5m",
            category: "correas",
            pet: "perros",
            price: "$35.900",
            image: "https://http2.mlstatic.com/D_986513-MCO81894147966_012025-O.jpg",
            description: "Correa retráctil de alta resistencia para paseos cómodos y seguros. Permite a tu perro explorar con libertad manteniendo el control.",
            features: [
                "Longitud extensible hasta 5 metros",
                "Mecanismo de bloqueo seguro",
                "Empuñadura ergonómica antideslizante",
                "Resistente a mordidas y rasgaduras",
                "Ideal para perros de hasta 25kg"
            ]
        },
        {
            id: 4,
            name: "Comedero Ergonómico Elevado",
            category: "comederos",
            pet: "perros",
            price: "$42.900",
            image: "https://http2.mlstatic.com/D_986513-MCO81894147966_012025-O.jpg",
            description: "Mejora la postura de tu mascota durante las comidas con este comedero ergonómico elevado. Reduce el estrés en cuello y articulaciones.",
            features: [
                "Altura ajustable en 3 posiciones",
                "Base antideslizante de goma",
                "Bowl de acero inoxidable",
                "Fácil limpieza y mantenimiento",
                "Diseño estable y resistente"
            ]
        },
        {
            id: 5,
            name: "Collar Ajustable con Placa",
            category: "correas",
            pet: "perros",
            price: "$28.900",
            image: "https://http2.mlstatic.com/D_986513-MCO81894147966_012025-O.jpg",
            description: "Collar de nylon resistente con placa de identificación personalizable. Cómodo, seguro y duradero para el día a día de tu mascota.",
            features: [
                "Nylon resistente al agua",
                "Hebilla de liberación rápida",
                "Placa de identificación grabada",
                "Ajuste perfecto para cualquier tamaño",
                "Variedad de colores disponibles"
            ]
        },
        {
            id: 6,
            name: "Shampoo Natural para Perros",
            category: "higiene",
            pet: "perros",
            price: "$32.900",
            image: "https://http2.mlstatic.com/D_986513-MCO81894147966_012025-O.jpg",
            description: "Shampoo natural con ingredientes botánicos que limpia profundamente sin irritar la piel. Deja el pelaje suave, brillante y con agradable aroma.",
            features: [
                "Fórmula 100% natural",
                "PH balanceado para mascotas",
                "Aceites esenciales calmantes",
                "Sin parabenos ni sulfatos",
                "Adecuado para pieles sensibles"
            ]
        },
        {
            id: 7,
            name: "Rascador para Gatos",
            category: "juguetes",
            pet: "gatos",
            price: "$45.900",
            image: "https://http2.mlstatic.com/D_986513-MCO81894147966_012025-O.jpg",
            description: "Rascador vertical con múltiples niveles para trepar, jugar y afilar uñas. Satisface el instinto natural de tu gato de rascar y escalar.",
            features: [
                "Sisal natural de alta calidad",
                "Plataformas múltiples para descanso",
                "Base estable y resistente",
                "Juguetes colgantes incluidos",
                "Fácil montaje sin herramientas"
            ]
        },
        {
            id: 8,
            name: "Cama Tipo Cueva para Gatos",
            category: "camas",
            pet: "gatos",
            price: "$38.900",
            image: "https://http2.mlstatic.com/D_986513-MCO81894147966_012025-O.jpg",
            description: "Cama tipo cueva que proporciona un refugio cálido y seguro para tu gato. Diseño acogedor que simula un escondite natural.",
            features: [
                "Material suave y acogedor",
                "Diseño tipo iglú para privacidad",
                "Base antideslizante",
                "Lavable a máquina",
                "Ideal para gatos que buscan seguridad"
            ]
        },
        {
            id: 9,
            name: "Comedero Automático Programable",
            category: "comederos",
            pet: "perros",
            price: "$129.900",
            image: "https://http2.mlstatic.com/D_986513-MCO81894147966_012025-O.jpg",
            description: "Comedero automático programable para alimentación precisa de tu mascota. Ideal para horarios regulares y control de porciones.",
            features: [
                "Programación de hasta 4 comidas diarias",
                "Pantalla LCD y controles intuitivos",
                "Batería de respaldo para cortes de energía",
                "Capacidad de 2.5 litros",
                "Grabación de mensaje personalizado"
            ]
        },
        {
            id: 10,
            name: "Cepillo Deslanador para Gatos",
            category: "higiene",
            pet: "gatos",
            price: "$22.900",
            image: "https://http2.mlstatic.com/D_986513-MCO81894147966_012025-O.jpg",
            description: "Cepillo deslanador que elimina el pelo suelto y reduce la formación de bolas de pelo. Diseño ergonómico para un cepillado cómodo.",
            features: [
                "Púas de acero inoxidable",
                "Empuñadura ergonómica antideslizante",
                "Liberación fácil del pelo acumulado",
                "Adecuado para todo tipo de pelajes",
                "Masajea la piel mientras cepilla"
            ]
        },
        {
            id: 11,
            name: "Arnés de Paseo con Correa",
            category: "correas",
            pet: "perros",
            price: "$39.900",
            image: "https://i.imgur.com/7tK3j9X.jpg",
            description: "Arnés de paseo que distribuye la presión de manera uniforme evitando daños en el cuello. Incluye correa acolchada para mayor comodidad.",
            features: [
                "Diseño en H para distribución de presión",
                "Acolchado en puntos de contacto",
                "Hebillas de liberación rápida",
                "Correa incluida de 1.5 metros",
                "Disponible en múltiples tallas"
            ]
        },
        {
            id: 12,
            name: "Juguete Dispensador de Comida",
            category: "juguetes",
            pet: "perros",
            price: "$31.900",
            image: "https://i.imgur.com/9nF5w8T.jpg",
            description: "Juguete dispensador de comida que estimula mentalmente a tu perro mientras se alimenta. Ralentiza la comida y previene problemas digestivos.",
            features: [
                "Diseño interactivo que desafía la inteligencia",
                "Compartimentos ajustables de dificultad",
                "Material no tóxico y duradero",
                "Fácil de limpiar",
                "Ideal para prevenir el aburrimiento"
            ]
        }
    ];
    
    // Render products
    const productsGrid = document.getElementById('products-grid');
    const loadMoreBtn = document.getElementById('load-more');
    let visibleProducts = 8;
    
    function renderProducts(filteredProducts = products) {
        productsGrid.innerHTML = '';
        
        const productsToShow = filteredProducts.slice(0, visibleProducts);
        
        productsToShow.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card-catalog';
            productCard.setAttribute('data-category', product.category);
            productCard.setAttribute('data-pet', product.pet);
            productCard.innerHTML = `
                <div class="product-image-catalog">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info-catalog">
                    <h3 class="product-name-catalog">${product.name}</h3>
                    <p class="product-description-catalog">${product.description}</p>
                    <div class="product-price-catalog">${product.price}</div>
                    <div class="product-category">${product.category} • ${product.pet}</div>
                </div>
            `;
            
            productCard.addEventListener('click', () => openProductModal(product));
            productsGrid.appendChild(productCard);
        });
        
        // Show/hide load more button
        if (visibleProducts >= filteredProducts.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-block';
        }
        
        // Trigger animations after a short delay
        setTimeout(() => {
            animateOnScroll();
        }, 100);
    }
    
    // Filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    let activeCategory = 'all';
    let activePet = 'all';
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons in the same group
            const btnGroup = this.closest('.filter-options');
            btnGroup.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update filters
            if (this.hasAttribute('data-category')) {
                activeCategory = this.getAttribute('data-category');
            } else if (this.hasAttribute('data-pet')) {
                activePet = this.getAttribute('data-pet');
            }
            
            // Apply filters
            applyFilters();
        });
    });
    
    function applyFilters() {
        let filteredProducts = products;
        
        if (activeCategory !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === activeCategory);
        }
        
        if (activePet !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.pet === activePet);
        }
        
        visibleProducts = 8;
        renderProducts(filteredProducts);
    }
    
    // Load more functionality
    loadMoreBtn.addEventListener('click', function() {
        visibleProducts += 4;
        applyFilters();
    });
    
    // Product modal functionality
    const productModal = document.getElementById('product-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalPrice = document.getElementById('modal-price');
    const modalDescription = document.getElementById('modal-description');
    const modalFeaturesList = document.getElementById('modal-features-list');
    
    function openProductModal(product) {
        modalImg.src = product.image;
        modalImg.alt = product.name;
        modalTitle.textContent = product.name;
        modalPrice.textContent = product.price;
        modalDescription.textContent = product.description;
        
        // Clear previous features
        modalFeaturesList.innerHTML = '';
        
        // Add features
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            modalFeaturesList.appendChild(li);
        });
        
        // Show modal
        productModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeProductModal() {
        productModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    modalOverlay.addEventListener('click', closeProductModal);
    modalClose.addEventListener('click', closeProductModal);
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && productModal.classList.contains('active')) {
            closeProductModal();
        }
    });
    
    // Initial render
    renderProducts();
});