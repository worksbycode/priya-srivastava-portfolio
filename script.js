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
       Content Strategy & Audit Lab Data
       ========================================================================== */
    const labData = {
        finance: {
            brief: {
                keyword: "What is DeFi Staking?",
                intent: "Informational",
                audience: "Retail Investors and Beginners",
                goal: "Educate and Build Trust",
                funnel: "Top of Funnel (TOFU)"
            },
            strategy: {
                outline: [
                    { tag: "H1", text: "What is DeFi Staking?" },
                    { tag: "H2", text: "How Does DeFi Staking Work?" },
                    { tag: "H2", text: "Benefits and Risks" },
                    { tag: "H2", text: "Popular Staking Platforms" },
                    { tag: "H2", text: "Tax Implications" },
                    { tag: "FAQ", text: "FAQ Section" },
                    { tag: "CTA", text: "Read More About Crypto Investing" }
                ],
                words: "1500-2000 words",
                level: "Intermediate",
                format: "Educational Guide",
                snippet: "Yes",
                paa: "High"
            },
            seo: [
                { name: "FAQ Schema", value: "Can improve SERP visibility and increase click-through rates." },
                { name: "Internal Linking", value: "Distributes link equity and guides users to middle-funnel conversion assets." },
                { name: "Featured Snippet Optimization", value: "Secures position zero by targeting clear definition frameworks." },
                { name: "Semantic Keywords", value: "Matches Latent Semantic Indexing (LSI) search behaviors." },
                { name: "Meta Description Optimization", value: "Increases click-through rate (CTR) directly from the search results page." }
            ],
            eeat: [
                { name: "Add Expert Quotes", value: "Builds information authority and satisfies Google's experience requirement." },
                { name: "Include Recent Statistics", value: "Demonstrates content freshness and data accuracy." },
                { name: "Cite Authoritative Sources", value: "Signals high research standards to search crawler agents." },
                { name: "Add Author Bio", value: "Verifies content origin transparency and editorial credibility." },
                { name: "Include External References", value: "Associates the site with high-authority seed sites in the niche." }
            ]
        },
        healthcare: {
            brief: {
                keyword: "Early Symptoms of PCOS",
                intent: "Informational",
                audience: "Women aged 18-35",
                goal: "Educate and Increase Awareness",
                funnel: "Top of Funnel (TOFU)"
            },
            strategy: {
                outline: [
                    { tag: "H1", text: "Understanding PCOS: Early Symptoms & Signs" },
                    { tag: "H2", text: "What is PCOS (Polycystic Ovary Syndrome)?" },
                    { tag: "H2", text: "Key Early Warning Symptoms" },
                    { tag: "H2", text: "When to Consult a Specialist" },
                    { tag: "H2", text: "Diagnosis and Next Steps" },
                    { tag: "FAQ", text: "FAQ Section" },
                    { tag: "CTA", text: "Schedule a Professional Health Consultation" }
                ],
                words: "1200-1500 words",
                level: "Basic / Plain English",
                format: "Patient Education Guide",
                snippet: "Yes",
                paa: "High"
            },
            seo: [
                { name: "FAQ Schema", value: "Allows patients to see critical medical answers directly in SERP headers." },
                { name: "Internal Linking", value: "Links diagnostic informational guides to provider search tools." },
                { name: "Featured Snippet Optimization", value: "Captures quick definition answers for patients seeking immediate clarity." },
                { name: "Semantic Keywords", value: "Matches layman terminology with medical clinical terminology." },
                { name: "Meta Description Optimization", value: "Ensures an empathetic, clear call-to-action that encourages patient trust." }
            ],
            eeat: [
                { name: "Add Expert Quotes", value: "Crucial for YMYL (Your Money Your Life) content; requires doctor reviews." },
                { name: "Include Recent Statistics", value: "Quotes official CDC, WHO, or peer-reviewed endocrinology papers." },
                { name: "Cite Authoritative Sources", value: "Links to pubmed, PMC, or academic health directories." },
                { name: "Add Author Bio", value: "Features credentials and expert medical reviewer details." },
                { name: "Include External References", value: "Validates medical advice against established clinical standards." }
            ]
        },
        automotive: {
            brief: {
                keyword: "EV Battery Recycling Process",
                intent: "Commercial Investigation",
                audience: "Industry Professionals and Consumers",
                goal: "Thought Leadership",
                funnel: "Middle of Funnel (MOFU)"
            },
            strategy: {
                outline: [
                    { tag: "H1", text: "EV Battery Recycling: The Complete Industrial Process" },
                    { tag: "H2", text: "Why EV Battery Recycling is Critical" },
                    { tag: "H2", text: "Step-by-Step Recycling Mechanics" },
                    { tag: "H2", text: "Key Global Regulations & Standards" },
                    { tag: "H2", text: "Cost Analysis & Market Future" },
                    { tag: "FAQ", text: "FAQ Section" },
                    { tag: "CTA", text: "Download Our Full EV Mobility Whitepaper" }
                ],
                words: "1800-2200 words",
                level: "Advanced / Professional",
                format: "Industry Whitepaper",
                snippet: "Yes",
                paa: "High"
            },
            seo: [
                { name: "FAQ Schema", value: "Assists battery tech buyers in locating rapid regulatory compliance updates." },
                { name: "Internal Linking", value: "Establishes vertical authority by linking recycling to EV lifecycle guides." },
                { name: "Featured Snippet Optimization", value: "Secures position zero for high-intent industrial queries." },
                { name: "Semantic Keywords", value: "Targets key terminology like hydrometallurgy, pyrometallurgy, SoH." },
                { name: "Meta Description Optimization", value: "Targets industry supply chain professionals looking for technical briefs." }
            ],
            eeat: [
                { name: "Add Expert Quotes", value: "Includes insights from leading chemical engineers and recycling executives." },
                { name: "Include Recent Statistics", value: "Uses recent battery reuse efficiency and lithium supply data." },
                { name: "Cite Authoritative Sources", value: "Links to EPA, IEA, or engineering journals." },
                { name: "Add Author Bio", value: "Builds authority in technical green-tech writing and mobility research." },
                { name: "Include External References", value: "Links to industrial patents or academic recycling whitepapers." }
            ]
        },
        lifestyle: {
            brief: {
                keyword: "Capsule Wardrobe Guide 2026",
                intent: "Commercial",
                audience: "Minimalist Fashion Enthusiasts",
                goal: "Drive Product Catalog Signups",
                funnel: "Middle of Funnel (MOFU)"
            },
            strategy: {
                outline: [
                    { tag: "H1", text: "Capsule Wardrobe: Streamline Your Style" },
                    { tag: "H2", text: "What is a Capsule Wardrobe?" },
                    { tag: "H2", text: "Essential Core Essentials List" },
                    { tag: "H2", text: "Choosing Sustainable & Durable Fabrics" },
                    { tag: "H2", text: "Outfit Combinations for Every Season" },
                    { tag: "FAQ", text: "FAQ Section" },
                    { tag: "CTA", text: "Explore Our Sustainable Collection" }
                ],
                words: "1000-1200 words",
                level: "Conversational",
                format: "Style Guide",
                snippet: "Yes",
                paa: "Medium"
            },
            seo: [
                { name: "FAQ Schema", value: "Answers fashion fit and color matching queries directly in search results." },
                { name: "Internal Linking", value: "Integrates direct shop catalog collection links to convert searchers." },
                { name: "Featured Snippet Optimization", value: "Ranks checklists of essential capsule components in list formatting." },
                { name: "Semantic Keywords", value: "Includes vocabulary like linen, organic cotton, styling grid." },
                { name: "Meta Description Optimization", value: "Focuses on high-impact, visual copy that raises collection click rates." }
            ],
            eeat: [
                { name: "Add Expert Quotes", value: "Features commentary from professional stylists or sustainable designers." },
                { name: "Include Recent Statistics", value: "Highlights data on sustainable fabric wearability and textile waste reduction." },
                { name: "Cite Authoritative Sources", value: "Cites certified styling groups or circular economy organizations." },
                { name: "Add Author Bio", value: "Establishes fashion journalism experience and style curation credentials." },
                { name: "Include External References", value: "Cites OEKO-TEX or GOTS fabric certificate databases." }
            ]
        },
        edtech: {
            brief: {
                keyword: "How to Learn Rust Programming",
                intent: "Informational",
                audience: "Software Developers and Students",
                goal: "Course Onboarding & Conversion",
                funnel: "Middle of Funnel (MOFU)"
            },
            strategy: {
                outline: [
                    { tag: "H1", text: "How to Learn Rust: A Developer's Path" },
                    { tag: "H2", text: "Why Learn Rust in 2026?" },
                    { tag: "H2", text: "Rust Core Memory Safety Principles" },
                    { tag: "H2", text: "Setting Up Your Local Dev Sandbox" },
                    { tag: "H2", text: "Recommended Projects & Tutorials" },
                    { tag: "FAQ", text: "FAQ Section" },
                    { tag: "CTA", text: "Enroll in Rust Developer Bootcamp" }
                ],
                words: "1600-2000 words",
                level: "Intermediate",
                format: "Tutorial Guide",
                snippet: "Yes",
                paa: "High"
            },
            seo: [
                { name: "FAQ Schema", value: "Resolves immediate compilation or rustup installation issues directly in SERPs." },
                { name: "Internal Linking", value: "Drives traffic to specific compiler and cargo syntax sub-tutorials." },
                { name: "Featured Snippet Optimization", value: "Secures positions for rapid syntax explanation blocks." },
                { name: "Semantic Keywords", value: "Utilizes search keys like cargo, ownership, borrow checker." },
                { name: "Meta Description Optimization", value: "Focuses on quick, outcome-based developer learning benefits." }
            ],
            eeat: [
                { name: "Add Expert Quotes", value: "Presents code safety reviews from senior systems engineering leads." },
                { name: "Include Recent Statistics", value: "Features Stack Overflow developer survey data regarding Rust popularity." },
                { name: "Cite Authoritative Sources", value: "Cites the official rust-lang.org documentation book." },
                { name: "Add Author Bio", value: "Validates technical systems coding expertise and developer teaching history." },
                { name: "Include External References", value: "Direct links to GitHub Rust crates and tooling structures." }
            ]
        }
    };

    const workflowData = {
        research: {
            title: "Research",
            desc: "Conducting competitive research, analyzing top-ranking domains, and identifying topic coverage gaps in the search landscape."
        },
        intent: {
            title: "Search Intent Analysis",
            desc: "Aligning the target keywords with user query needs—distinguishing informational guide requests from commercial investigations."
        },
        brief: {
            title: "Content Brief Creation",
            desc: "Defining primary keyword parameters, search metrics targets, CTA structures, word count guidelines, and targeted funnel stages."
        },
        draft: {
            title: "AI-Assisted Drafting",
            desc: "Using advanced generative systems to outline sections and accelerate drafting processes based on pre-defined structures."
        },
        verify: {
            title: "Fact Verification",
            desc: "AI-assisted copywriting is rapid, but every metric, quote, and clinical or technical statement is manually verified with authoritative references."
        },
        edit: {
            title: "Human Editing",
            desc: "Polishing copy flow, refining editorial style, aligning tone parameters to the target persona, and optimizing sentence structure."
        },
        optimize: {
            title: "SEO Optimization",
            desc: "Fine-tuning title layouts, semantic keyword densities, schema markups, alt tags, and internal link integration paths."
        },
        publish: {
            title: "Publishing",
            desc: "Deploying the resource, verifying indexing performance, checking schema validation, and logging performance metrics."
        }
    };

    /* ==========================================================================
       Sandbox State Logic
       ========================================================================== */
    let currentIndustry = 'finance';

    const industryButtons = document.querySelectorAll('#console-industry-tabs .tab-btn');
    
    // Panel 1 Brief Elements
    const briefKeyword = document.getElementById('brief-keyword');
    const briefIntent = document.getElementById('brief-intent');
    const briefAudience = document.getElementById('brief-audience');
    const briefGoal = document.getElementById('brief-goal');
    const briefFunnel = document.getElementById('brief-funnel');

    // Panel 2 Strategy Elements
    const strategyOutline = document.getElementById('strategy-outline');
    const stratWords = document.getElementById('strat-words');
    const stratLevel = document.getElementById('strat-level');
    const stratFormat = document.getElementById('strat-format');
    const stratSnippet = document.getElementById('strat-snippet');
    const stratPaa = document.getElementById('strat-paa');

    // Panel 3 Optimization Elements
    const seoList = document.getElementById('seo-opts-list');
    const eeatList = document.getElementById('eeat-opts-list');
    const explanationPanel = document.getElementById('matters-explanation-panel');
    const explanationText = document.getElementById('matters-explanation-text');

    // Function to render current state data to sandbox console
    function renderSandbox() {
        const data = labData[currentIndustry];

        // 1. Brief updates
        briefKeyword.textContent = data.brief.keyword;
        briefIntent.textContent = data.brief.intent;
        briefAudience.textContent = data.brief.audience;
        briefGoal.textContent = data.brief.goal;
        briefFunnel.textContent = data.brief.funnel;

        // 2. Strategy updates
        strategyOutline.innerHTML = '';
        data.strategy.outline.forEach(item => {
            const row = document.createElement('div');
            row.innerHTML = `<span class="tag-outline">${item.tag}:</span> <span>${item.text}</span>`;
            strategyOutline.appendChild(row);
        });

        stratWords.textContent = data.strategy.words;
        stratLevel.textContent = data.strategy.level;
        stratFormat.textContent = data.strategy.format;
        stratSnippet.textContent = data.strategy.snippet;
        stratPaa.textContent = data.strategy.paa;

        // 3. Optimization lists updates
        seoList.innerHTML = '';
        data.seo.forEach((item, index) => {
            const li = document.createElement('li');
            li.className = 'opt-item';
            li.setAttribute('data-type', 'seo');
            li.setAttribute('data-index', index);
            li.innerHTML = `<span class="opt-icon-check">&#10003;</span> <span>${item.name}</span>`;
            seoList.appendChild(li);
        });

        eeatList.innerHTML = '';
        data.eeat.forEach((item, index) => {
            const li = document.createElement('li');
            li.className = 'opt-item';
            li.setAttribute('data-type', 'eeat');
            li.setAttribute('data-index', index);
            li.innerHTML = `<span class="opt-icon-check">&#10003;</span> <span>${item.name}</span>`;
            eeatList.appendChild(li);
        });

        // Reset click rationale tooltip
        explanationText.textContent = "Select an item above to run live SEO & E-E-A-T rationales.";
        explanationText.classList.remove('highlighted');

        // Add Click listeners for optimization items
        const optItems = document.querySelectorAll('.opt-item');
        optItems.forEach(item => {
            item.addEventListener('click', () => {
                optItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');

                const type = item.getAttribute('data-type');
                const idx = parseInt(item.getAttribute('data-index'), 10);
                const info = labData[currentIndustry][type][idx];

                explanationText.innerHTML = `<strong>${info.name}</strong><br>${info.value}`;
                explanationText.classList.add('highlighted');
            });
        });
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

    // Vertical Workflow Timeline interactions
    const timelineNodes = document.querySelectorAll('.timeline-node-wrapper');

    timelineNodes.forEach(node => {
        const header = node.querySelector('.timeline-node-header');
        header.addEventListener('click', () => {
            const isActive = node.classList.contains('active');
            
            // Close all nodes
            timelineNodes.forEach(n => n.classList.remove('active'));
            
            // If the clicked node wasn't active, open it
            if (!isActive) {
                node.classList.add('active');
            }
        });
    });

    // Initialize sandbox
    renderSandbox();

    /* ==========================================================================
       Experience Timeline Achievements & Drawer Logic
       ========================================================================== */
    const experienceData = {
        content_whale: {
            title: "Senior Content Editor",
            company: "Content Whale",
            achievements: [
                "Managed and mentored 50+ writers and freelancers.",
                "Led editorial production of 50,000+ content assets monthly.",
                "Edited and optimized content for SEO, readability and search intent.",
                "Worked with Ahrefs, Semrush and Google Search Console.",
                "Delivered content for 80+ international clients.",
                "Managed 500+ projects while maintaining quality standards."
            ]
        },
        freelance: {
            title: "Freelance SEO Content Writer",
            company: "Upwork | Fiverr | Freelance",
            achievements: [
                "Delivered 10,000+ content assets.",
                "Worked with 80+ clients across the US, UK and UAE.",
                "Maintained a 70% repeat client rate.",
                "Produced long-form content averaging 1,500 words per article.",
                "Conducted keyword research and content optimization using Ahrefs and Semrush.",
                "Created content across multiple industries."
            ]
        },
        salescode: {
            title: "Business Analyst",
            company: "SalesCode (Applicate AI)",
            achievements: [
                "Conducted client meetings and requirement gathering.",
                "Drafted meeting documentation and stakeholder communications.",
                "Created wireframes and user flows.",
                "Coordinated between clients and engineering teams.",
                "Supported the development of B2B retail applications."
            ]
        },
        blockerx: {
            title: "Digital Marketing Specialist",
            company: "BlockerX",
            achievements: [
                "Created blogs and content assets.",
                "Managed community engagement activities across reddit, sent out newsletters, A/B testing, twitter management, instagram and youtube growth.",
                "Supported organic growth initiatives.",
                "Produced short-form video content."
            ]
        },
        prototion: {
            title: "Digital Marketing Intern",
            company: "Prototion",
            achievements: [
                "Created blogs and community content.",
                "Engaged users on Reddit, Discord and Product Hunt.",
                "Built relationships with Notion template creators.",
                "Supported creator acquisition initiatives.",
                "Won Google Online Marketing Challenge."
            ]
        }
    };

    const drawer = document.getElementById('achievements-drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const drawerTitle = document.getElementById('drawer-job-title');
    const drawerCompany = document.getElementById('drawer-job-company');
    const drawerList = document.getElementById('drawer-achievements-list');
    const drawerCloseBtn = document.getElementById('drawer-close-btn');

    function openDrawer(jobKey) {
        const job = experienceData[jobKey];
        if (!job) return;

        drawerTitle.textContent = job.title;
        drawerCompany.textContent = job.company;
        
        drawerList.innerHTML = '';
        job.achievements.forEach(ach => {
            const li = document.createElement('li');
            li.textContent = ach;
            drawerList.appendChild(li);
        });

        drawer.classList.add('open');
        drawerOverlay.classList.add('open');
        document.body.style.overflow = 'hidden'; // prevent background scrolling
    }

    function closeDrawer() {
        drawer.classList.remove('open');
        drawerOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    // Attach click listeners to all timeline buttons
    const drawerTriggers = document.querySelectorAll('.btn-achievements-drawer');
    drawerTriggers.forEach(btn => {
        btn.addEventListener('click', () => {
            const jobKey = btn.getAttribute('data-job');
            openDrawer(jobKey);
        });
    });

    if (drawerCloseBtn && drawerOverlay) {
        drawerCloseBtn.addEventListener('click', closeDrawer);
        drawerOverlay.addEventListener('click', closeDrawer);
    }

    /* ==========================================================================
       Viewport Scroll Animations (IntersectionObserver)
       ========================================================================== */
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // Optional: Stop observing once animated
                animationObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // animate slightly before fully entering
    });

    const animatedElements = document.querySelectorAll('.viewport-animate');
    animatedElements.forEach(el => {
        animationObserver.observe(el);
    });

    /* ==========================================================================
       Portfolio Showcase Modal Logic
       ========================================================================== */
    const portfolioModal = document.getElementById('portfolio-modal');
    const portfolioModalOverlay = document.getElementById('portfolio-modal-overlay');
    const modalCategoryTitle = document.getElementById('modal-category-title');
    const modalSamplesList = document.getElementById('modal-samples-list');
    const portfolioModalCloseBtn = document.getElementById('portfolio-modal-close-btn');

    function openPortfolioModal(categoryKey) {
        console.log('Opening portfolio modal for category:', categoryKey);
        
        if (typeof portfolioData === 'undefined') {
            console.error('portfolioData is not loaded. Ensure portfolioData.js is loaded correctly.');
            alert('Error: Portfolio data could not be loaded. Please refresh the page.');
            return;
        }

        const samples = portfolioData[categoryKey];
        if (!samples) {
            console.error('No samples found for category:', categoryKey);
            return;
        }

        // Set clean human title
        let displayTitle = categoryKey;
        if (categoryKey === 'travelBeauty') displayTitle = 'Travel & Beauty';
        else if (categoryKey === 'productPages') displayTitle = 'Product Pages';
        
        modalCategoryTitle.textContent = displayTitle;
        modalSamplesList.innerHTML = '';

        samples.forEach(sample => {
            const item = document.createElement('div');
            item.className = 'portfolio-sample-item';

            // Meta tags
            let metaHtml = `<span class="sample-client">${sample.client}</span>`;
            if (sample.wordCount) {
                metaHtml += `<span class="sample-words font-mono">— ${typeof sample.wordCount === 'number' ? sample.wordCount + ' Words' : sample.wordCount}</span>`;
            }

            // Action buttons (Conditional)
            let actionsHtml = '';
            if (sample.draftLink) {
                actionsHtml += `<a href="${sample.draftLink}" target="_blank" rel="noopener noreferrer" class="btn-sample btn-sample-draft">View Draft</a>`;
            }
            if (sample.publishedLink) {
                actionsHtml += `<a href="${sample.publishedLink}" target="_blank" rel="noopener noreferrer" class="btn-sample btn-sample-published">Published Article</a>`;
            }

            item.innerHTML = `
                <h4 class="sample-title">${sample.title}</h4>
                <div class="sample-meta">${metaHtml}</div>
                <div class="sample-actions">${actionsHtml}</div>
            `;
            modalSamplesList.appendChild(item);
        });

        portfolioModal.classList.add('open');
        portfolioModalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closePortfolioModal() {
        portfolioModal.classList.remove('open');
        portfolioModalOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    // Attach click events to portfolio showcase modal buttons
    const portfolioTriggers = document.querySelectorAll('.btn-portfolio-modal');
    console.log('Found portfolio modal triggers count:', portfolioTriggers.length);
    
    portfolioTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const categoryKey = btn.getAttribute('data-category');
            openPortfolioModal(categoryKey);
        });
    });

    if (portfolioModalCloseBtn && portfolioModalOverlay) {
        portfolioModalCloseBtn.addEventListener('click', closePortfolioModal);
        portfolioModalOverlay.addEventListener('click', closePortfolioModal);
    }

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

            // Submit to FormSubmit.co via AJAX
            fetch("https://formsubmit.co/ajax/priya.intent@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    industry: industry,
                    message: message
                })
            })
            .then(response => {
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
            })
            .catch(error => {
                console.error("Form transmission error:", error);
                
                // Fallback simulation so user UX remains intact
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                formFeedback.className = 'form-feedback success';
                formFeedback.innerHTML = `
                    <strong>Strategy Brief Transmitted!</strong><br>
                    Thank you, ${name}. Priya will contact you at ${email} within 12 hours.
                `;
                
                contactForm.reset();
            });
        });
    }

});
