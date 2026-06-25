document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       Mobile Navigation Menu
       ========================================================================== */
    const menuToggle = document.getElementById('menu-toggle-btn');
    const navMenu = document.getElementById('nav-menu-bar');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Scroll Spy: Highlight nav menu links based on section visibility
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(`.nav-list a[href*=${sectionId}]`)?.classList.add('active');
            } else {
                document.querySelector(`.nav-list a[href*=${sectionId}]`)?.classList.remove('active');
            }
        });
    });

    /* ==========================================================================
       Content Adaptability Sandbox Data
       ========================================================================== */
    const sandboxData = {
        finance: {
            generic: {
                text: "Decentralized finance (DeFi) platforms have generated extensive utility by scaling financial transactions through smart contracts. We look at yield farming and liquidity pools which offer high yields but exhibit considerable risk indicators. Investing involves potential volatility and loss.",
                readability: 35,
                readabilityLabel: "Academic / Technical",
                readabilityDesc: "Difficult to comprehend. Sentence structure is passive and bloated.",
                seoScore: 25,
                seoScoreLabel: "0.8% density",
                seoDesc: "Under-optimized keyword mapping. Lacks strategic semantic entities.",
                keywords: [
                    { name: "DeFi", count: 1 },
                    { name: "Yield", count: 1 },
                    { name: "Smart contracts", count: 1 }
                ],
                checklist: [
                    { text: "Contains target keywords", done: false },
                    { text: "Optimized for readability (Flesh-Kincaid > 60)", done: false },
                    { text: "Semantic links & clear formatting", done: false },
                    { text: "High E-E-A-T trust signals", done: false }
                ]
            },
            priya: {
                text: "DeFi protocols are restructuring capital efficiency. By replacing intermediary banks with audited smart contracts, yield farms scale liquidity provision. However, liquidity providers must assess smart contract risks, analyze gas fees, and hedge impermanent loss prior to staking assets.",
                readability: 68,
                readabilityLabel: "Standard Editorial",
                readabilityDesc: "Optimal density. Concise, active phrasing ideal for professional audiences.",
                seoScore: 88,
                seoScoreLabel: "2.6% density",
                seoDesc: "Strong keyword mapping with high-intent semantic nodes (gas fees, staking).",
                keywords: [
                    { name: "DeFi protocols", count: 2 },
                    { name: "smart contracts", count: 2 },
                    { name: "liquidity providers", count: 2 },
                    { name: "staking assets", count: 1 }
                ],
                checklist: [
                    { text: "Contains target keywords", done: true },
                    { text: "Optimized for readability (Flesh-Kincaid > 60)", done: true },
                    { text: "Semantic links & clear formatting", done: true },
                    { text: "High E-E-A-T trust signals", done: true }
                ]
            }
        },
        healthcare: {
            generic: {
                text: "The patient onboarding process requires significant medical history disclosure to ensure that clinical providers can deliver appropriate therapy. Fill out all intake forms before scheduling an appointment with our nursing staff.",
                readability: 40,
                readabilityLabel: "Academic / Academic",
                readabilityDesc: "Complex terminology. Jargon-heavy and fails compliance for patient readability standards.",
                seoScore: 30,
                seoScoreLabel: "1.0% density",
                seoDesc: "Misses conversational voice queries and patient search intent vectors.",
                keywords: [
                    { name: "intake", count: 1 },
                    { name: "patient", count: 2 },
                    { name: "medical history", count: 1 }
                ],
                checklist: [
                    { text: "Meets FDA Plain Writing guidelines", done: false },
                    { text: "SEO optimized search queries", done: false },
                    { text: "Action-oriented headings", done: false },
                    { text: "HIPAA security transparency", done: false }
                ]
            },
            priya: {
                text: "Your health journey starts here. Completing your secure digital intake form helps our clinical staff customize your care plan. Every document is HIPAA-compliant, encrypted, and accessed only by your primary physician.",
                readability: 78,
                readabilityLabel: "Clear / Conversational",
                readabilityDesc: "Perfect clarity. Aligns with standard health literacy guidelines (6th-grade reading level).",
                seoScore: 92,
                seoScoreLabel: "3.2% density",
                seoDesc: "Excellent use of high-volume queries like 'intake form' and trust signals.",
                keywords: [
                    { name: "digital intake form", count: 1 },
                    { name: "clinical staff", count: 1 },
                    { name: "HIPAA-compliant", count: 1 },
                    { name: "care plan", count: 1 }
                ],
                checklist: [
                    { text: "Meets FDA Plain Writing guidelines", done: true },
                    { text: "SEO optimized search queries", done: true },
                    { text: "Action-oriented headings", done: true },
                    { text: "HIPAA security transparency", done: true }
                ]
            }
        },
        automotive: {
            generic: {
                text: "Electric vehicles are propelled by lithium-ion battery packs that store electricity. Charging involves connecting the vehicle to a charging station, which transfers current to recharge the cells over several hours.",
                readability: 52,
                readabilityLabel: "Medium",
                readabilityDesc: "Lacks specialized engineering accuracy and feels repetitive.",
                seoScore: 40,
                seoScoreLabel: "1.1% density",
                seoDesc: "Misses technical mobility keywords needed to capture professional automotive search traffic.",
                keywords: [
                    { name: "Electric vehicles", count: 1 },
                    { name: "charging station", count: 1 },
                    { name: "battery packs", count: 1 }
                ],
                checklist: [
                    { text: "Technical engineering precision", done: false },
                    { text: "Semantic keyword clustering (kW, SoH)", done: false },
                    { text: "Dynamic user interest focus", done: false },
                    { text: "Clear structured layout tags", done: false }
                ]
            },
            priya: {
                text: "EV drivetrains bypass mechanical complexity. Built around lithium-ion cells, modern battery packs require dedicated thermal management systems to sustain peak charging rates (kW) and optimize lifetime state-of-health (SoH).",
                readability: 60,
                readabilityLabel: "Technical Copy",
                readabilityDesc: "Highly engaging for engineering audiences while remaining clear to everyday consumers.",
                seoScore: 90,
                seoScoreLabel: "2.8% density",
                seoDesc: "High authority search terms (drivetrains, SoH, peak charging rates) naturally integrated.",
                keywords: [
                    { name: "EV drivetrains", count: 1 },
                    { name: "lithium-ion cells", count: 1 },
                    { name: "charging rates (kW)", count: 1 },
                    { name: "state-of-health (SoH)", count: 1 }
                ],
                checklist: [
                    { text: "Technical engineering precision", done: true },
                    { text: "Semantic keyword clustering (kW, SoH)", done: true },
                    { text: "Dynamic user interest focus", done: true },
                    { text: "Clear structured layout tags", done: true }
                ]
            }
        },
        lifestyle: {
            generic: {
                text: "This jacket is made of high quality wool fabric that will keep you very warm during winter months. It has a classic look that is perfect for everyday wearing and going out to dinners with friends.",
                readability: 70,
                readabilityLabel: "Simple Prose",
                readabilityDesc: "Too basic. Reads like generic drop-shipping catalog descriptions.",
                seoScore: 35,
                seoScoreLabel: "1.3% density",
                seoDesc: "Low semantic search value. Competitors easily outrank this boilerplate text.",
                keywords: [
                    { name: "jacket", count: 1 },
                    { name: "wool fabric", count: 1 },
                    { name: "winter", count: 1 }
                ],
                checklist: [
                    { text: "Evocative sensory descriptors", done: false },
                    { text: "Sustainable fashion E-E-A-T tags", done: false },
                    { text: "Dynamic call-to-action tone", done: false },
                    { text: "Optimal keyword clustering", done: false }
                ]
            },
            priya: {
                text: "Conscious warmth. Crafted from 100% biodegradable virgin merino wool, this double-breasted overcoat pairs structured silhouettes with natural thermal regulation. A timeless editorial statement piece, sustainably sourced.",
                readability: 65,
                readabilityLabel: "Sophisticated Copy",
                readabilityDesc: "Highly evocative and stylistic. Ideal tone for premium retail and fashion publications.",
                seoScore: 85,
                seoScoreLabel: "2.4% density",
                seoDesc: "Targets sustainability search categories and long-tail retail intent values.",
                keywords: [
                    { name: "virgin merino wool", count: 1 },
                    { name: "double-breasted overcoat", count: 1 },
                    { name: "sustainably sourced", count: 1 },
                    { name: "thermal regulation", count: 1 }
                ],
                checklist: [
                    { text: "Evocative sensory descriptors", done: true },
                    { text: "Sustainable fashion E-E-A-T tags", done: true },
                    { text: "Dynamic call-to-action tone", done: true },
                    { text: "Optimal keyword clustering", done: true }
                ]
            }
        },
        edtech: {
            generic: {
                text: "Online learning portals help students study various subjects at their own pace using web browsers. Teachers publish assignments and quiz files which are graded automatically by database scripts in the system.",
                readability: 58,
                readabilityLabel: "Average",
                readabilityDesc: "Passive voice and uninspiring. Focuses on system features, not user success.",
                seoScore: 38,
                seoScoreLabel: "1.0% density",
                seoDesc: "Misses educational taxonomy tags like 'micro-learning' or 'credentialing'.",
                keywords: [
                    { name: "online learning", count: 1 },
                    { name: "students", count: 1 },
                    { name: "assignments", count: 1 }
                ],
                checklist: [
                    { text: "Value-focused, student-centric copy", done: false },
                    { text: "Modern educational taxonomy", done: false },
                    { text: "Sleek feature highlighting", done: false },
                    { text: "Clear structured value proposition", done: false }
                ]
            },
            priya: {
                text: "Modular learning, unlocked. Our micro-learning platform breaks complex computer science tracks into bite-sized codes nodes. Earn verified credentials, track your syntax completion rate, and master coding at your own pace.",
                readability: 74,
                readabilityLabel: "Clear / Benefit-first",
                readabilityDesc: "High readability, highly actionable. Employs strong verbs that drive click-throughs.",
                seoScore: 95,
                seoScoreLabel: "3.5% density",
                seoDesc: "Dense with target tags (micro-learning, credentials, master coding) that attract tech learners.",
                keywords: [
                    { name: "micro-learning platform", count: 1 },
                    { name: "verified credentials", count: 1 },
                    { name: "master coding", count: 1 },
                    { name: "at your own pace", count: 1 }
                ],
                checklist: [
                    { text: "Value-focused, student-centric copy", done: true },
                    { text: "Modern educational taxonomy", done: true },
                    { text: "Sleek feature highlighting", done: true },
                    { text: "Clear structured value proposition", done: true }
                ]
            }
        }
    };

    /* ==========================================================================
       Sandbox State Logic
       ========================================================================== */
    let currentIndustry = 'finance';
    let currentMode = 'generic'; // 'generic' or 'priya'

    const industryButtons = document.querySelectorAll('#console-industry-tabs .tab-btn');
    const modeButtons = document.querySelectorAll('.toggle-mode-wrapper .toggle-btn');
    const textContentArea = document.getElementById('sandbox-text-content');
    const editorLineNumbers = document.getElementById('editor-lines');
    
    // Audit metric elements
    const readabilityVal = document.getElementById('readability-val');
    const readabilityFill = document.getElementById('readability-fill');
    const readabilityExp = document.getElementById('readability-explanation');

    const seoScoreVal = document.getElementById('seo-score-val');
    const seoScoreFill = document.getElementById('seo-score-fill');
    const seoExp = document.getElementById('seo-explanation');

    const keywordsContainer = document.getElementById('sandbox-keywords-container');
    const checklistContainer = document.getElementById('sandbox-checklist');
    const statusText = document.getElementById('sandbox-status');
    const wordCountText = document.getElementById('sandbox-words-count');

    // Function to calculate and render line numbers based on text lines
    function updateLineNumbers(text) {
        const lineCount = text.split('\n').length + 2; // pad lines
        let spans = '';
        for (let i = 1; i <= Math.max(lineCount, 6); i++) {
            spans += `<span>${i.toString().padStart(2, '0')}</span>`;
        }
        editorLineNumbers.innerHTML = spans;
    }

    // Function to render current state data to sandbox console
    function renderSandbox() {
        const data = sandboxData[currentIndustry][currentMode];
        
        statusText.textContent = "Calculating E-E-A-T score...";
        
        // Dynamic content updates
        textContentArea.style.opacity = 0;
        
        setTimeout(() => {
            textContentArea.textContent = data.text;
            textContentArea.style.opacity = 1;
            
            // Calculate word count
            const words = data.text.trim().split(/\s+/).length;
            wordCountText.textContent = `Words: ${words}`;
            updateLineNumbers(data.text);
            statusText.textContent = currentMode === 'priya' ? "Ready (Rank Potential: High)" : "Ready (Rank Potential: Low)";
        }, 150);

        // Update Auditing UI
        setTimeout(() => {
            // Readability metrics
            readabilityVal.textContent = `${data.readability} / 100 (${data.readabilityLabel})`;
            readabilityFill.style.width = `${data.readability}%;`;
            readabilityFill.style.width = `${data.readability}%`;
            readabilityExp.textContent = data.readabilityDesc;

            // SEO density metrics
            seoScoreVal.textContent = data.seoScoreLabel;
            seoScoreFill.style.width = `${data.seoScore}%`;
            seoExp.textContent = data.seoDesc;

            // Target Keywords Tags
            keywordsContainer.innerHTML = '';
            data.keywords.forEach(kw => {
                const tag = document.createElement('span');
                tag.className = 'keyword-tag';
                tag.innerHTML = `${kw.name} <span class="tag-count">${kw.count}x</span>`;
                keywordsContainer.appendChild(tag);
            });

            // Strategy Checklist
            checklistContainer.innerHTML = '';
            data.checklist.forEach(item => {
                const li = document.createElement('li');
                li.className = `checklist-item ${item.done ? 'checked' : ''}`;
                
                const iconSpan = document.createElement('span');
                iconSpan.className = 'checklist-icon';
                
                // SVG check or cross
                if (item.done) {
                    iconSpan.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width:14px;height:14px;">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                        </svg>
                    `;
                } else {
                    iconSpan.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width:14px;height:14px;">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                        </svg>
                    `;
                }
                
                li.appendChild(iconSpan);
                li.appendChild(document.createTextNode(item.text));
                checklistContainer.appendChild(li);
            });
        }, 100);
    }

    // Add Industry Tabs events
    industryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            industryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentIndustry = btn.getAttribute('data-industry');
            renderSandbox();
        });
    });

    // Add Mode Toggle events
    modeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentMode = btn.getAttribute('data-mode');
            renderSandbox();
        });
    });

    // Initialize sandbox
    renderSandbox();


    /* ==========================================================================
       Contact Form Submission & Validation
       ========================================================================== */
    const contactForm = document.getElementById('portfolio-contact-form');
    const formFeedback = document.getElementById('form-message-feedback');

    if (contactForm && formFeedback) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect fields for submission simulation
            const name = document.getElementById('form-name').value;
            const email = document.getElementById('form-email').value;
            const industry = document.getElementById('form-industry').value;
            const message = document.getElementById('form-message').value;

            // Submit Button loading animation
            const submitBtn = document.getElementById('form-submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Encrypting & Transmitting...';
            
            formFeedback.textContent = '';
            formFeedback.className = 'form-feedback';

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                
                // Show success feedback
                formFeedback.className = 'form-feedback success';
                formFeedback.innerHTML = `
                    <strong>Strategy Brief Transmitted!</strong><br>
                    Thank you, ${name}. Priya will contact you at ${email} within 12 hours.
                `;
                
                // Clear form
                contactForm.reset();
            }, 1800);
        });
    }

});
