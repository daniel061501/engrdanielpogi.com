// Colorful Red Theme JavaScript for Daniel Pogi - Electrical Engineer Portfolio
// Enhanced with vibrant animations and electrical engineering effects

document.addEventListener('DOMContentLoaded', function() {
    console.log("🌈 Welcome to Engr. Daniel Pogi's Colorful Red Electrical Engineering Portfolio!");
    
    // Add colorful theme styles
    const addColorfulStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
            /* Additional colorful animations */
            @keyframes rainbowGlow {
                0% { box-shadow: 0 0 5px #ff3333, 0 0 10px #ff3333; }
                25% { box-shadow: 0 0 5px #ffcc00, 0 0 10px #ffcc00; }
                50% { box-shadow: 0 0 5px #00ccff, 0 0 10px #00ccff; }
                75% { box-shadow: 0 0 5px #00ff66, 0 0 10px #00ff66; }
                100% { box-shadow: 0 0 5px #ff3333, 0 0 10px #ff3333; }
            }
            
            @keyframes colorPulse {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
            
            .colorful-glow {
                animation: rainbowGlow 2s ease-in-out infinite;
            }
            
            .color-pulse {
                animation: colorPulse 3s linear infinite;
            }
            
            .floating-particles {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: -1;
            }
            
            .particle {
                position: absolute;
                width: 4px;
                height: 4px;
                background: #ffcc00;
                border-radius: 50%;
                animation: float 6s ease-in-out infinite;
            }
            
            @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
                50% { transform: translateY(-100px) rotate(180deg); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    };
    
    // Create floating colorful particles
    const createFloatingParticles = () => {
        const particleContainer = document.createElement('div');
        particleContainer.className = 'floating-particles';
        document.body.appendChild(particleContainer);
        
        const colors = ['#ff3333', '#ffcc00', '#00ccff', '#00ff66', '#ff66ff'];
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particleContainer.appendChild(particle);
        }
    };
    
    // Add interactive electrical effects
    const addInteractiveEffects = () => {
        // Add hover effects to all elements
        const interactiveElements = document.querySelectorAll('section, .project-card, .service-card, .contact-item');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.classList.add('colorful-glow');
            });
            
            element.addEventListener('mouseleave', function() {
                this.classList.remove('colorful-glow');
            });
        });
        
        // Add click effects
        document.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'radial-gradient(circle, rgba(255,204,0,0.6) 0%, transparent 70%)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = (e.clientX - 25) + 'px';
            ripple.style.top = (e.clientY - 25) + 'px';
            ripple.style.width = '50px';
            ripple.style.height = '50px';
            ripple.style.pointerEvents = 'none';
            ripple.style.zIndex = '1000';
            
            document.body.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
        
        // Add ripple animation
        const rippleStyle = document.createElement('style');
        rippleStyle.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(rippleStyle);
    };
    
    // Add colorful navigation effects
    const addNavEffects = () => {
        const navLinks = document.querySelectorAll('nav a');
        
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.background = 'linear-gradient(45deg, #ffcc00, #00ccff, #00ff66)';
                this.style.backgroundSize = '200% 200%';
                this.style.animation = 'gradientShift 1s ease infinite';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.background = 'linear-gradient(135deg, #ff3333, #cc0000)';
                this.style.animation = 'none';
            });
        });
        
        const gradientStyle = document.createElement('style');
        gradientStyle.textContent = `
            @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
        `;
        document.head.appendChild(gradientStyle);
    };
    
    // Add typing effect for hero text
    const addTypingEffect = () => {
        const heroTitle = document.querySelector('header h1');
        if (heroTitle) {
            const originalText = heroTitle.textContent;
            heroTitle.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < originalText.length) {
                    heroTitle.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            
            setTimeout(typeWriter, 500);
        }
    };
    
    // Add colorful background animation
    const addBackgroundAnimation = () => {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '-2';
        document.body.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const particles = [];
        const particleCount = 100;
        
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 3 + 1;
                this.hue = Math.random() * 60 + 340; // Red spectrum
            }
            
            update() {
                this.x += this.vx;
                this.y += this.vy;
                
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
                
                this.hue = (this.hue + 1) % 360;
            }
            
            draw() {
                ctx.fillStyle = `hsl(${this.hue}, 100%, 50%)`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                
                // Add glow effect
                ctx.shadowBlur = 10;
                ctx.shadowColor = `hsl(${this.hue}, 100%, 50%)`;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }
        
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
        
        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animateParticles);
        }
        
        animate
