// Shared functionality across all pages
document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year and last modified date
    const currentYear = new Date().getFullYear();
    document.querySelector('#currentYear').textContent = `© ${currentYear} Aspindale SkillSwap`;
    document.querySelector('#lastModified').textContent = `Last modified: ${document.lastModified}`;

    // Mobile menu toggle
    const menuButton = document.getElementById('menu-button');
    const navMenu = document.getElementById('nav-menu');
    
    if (menuButton && navMenu) {
        menuButton.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav') && navMenu) {
            navMenu.classList.remove('show');
        }
    });
});

// Home Page Specific Functionality
if (document.querySelector('#featured-skills-container')) {
    // Sample skill data
    const skills = [
        {
            id: 1,
            title: "Guitar Lessons",
            category: "Music",
            description: "Intermediate guitar lessons in exchange for Spanish tutoring",
            offer: "1 hour guitar lesson",
            request: "1 hour Spanish conversation",
            image: "images/placeholder.jpg"
        },
        {
            id: 2,
            title: "Math Tutoring",
            category: "Education",
            description: "High school math help in exchange for gardening assistance",
            offer: "2 hours math tutoring",
            request: "2 hours gardening help",
            image: "images/placeholder.jpg"
        },
        {
            id: 3,
            title: "Web Development",
            category: "Technology",
            description: "Website building in exchange for photography services",
            offer: "Basic website setup",
            request: "Professional headshots",
            image: "images/placeholder.jpg"
        }
    ];

    // Display featured skills
    function displayFeaturedSkills() {
        const container = document.getElementById('featured-skills-container');
        
        if (container) {
            container.innerHTML = skills.map(skill => `
                <div class="skill-card">
                    <img src="${skill.image}" alt="${skill.title}" loading="lazy">
                    <div class="skill-card-content">
                        <span class="skill-category">${skill.category}</span>
                        <h3>${skill.title}</h3>
                        <p>${skill.description}</p>
                        <p><strong>Offering:</strong> ${skill.offer}</p>
                        <p><strong>Requesting:</strong> ${skill.request}</p>
                    </div>
                </div>
            `).join('');
        }
    }

    displayFeaturedSkills();
}

// Browse Page Specific Functionality
if (document.querySelector('#all-skills-container')) {
    // Sample data with more skills
    const allSkills = [
        {
            id: 1,
            title: "Guitar Lessons",
            category: "Music",
            description: "Intermediate guitar lessons in exchange for Spanish tutoring",
            offer: "1 hour guitar lesson",
            request: "1 hour Spanish conversation",
            image: "images/placeholder.jpg"
        },
        {
            id: 2,
            title: "Math Tutoring",
            category: "Education",
            description: "High school math help in exchange for gardening assistance",
            offer: "2 hours math tutoring",
            request: "2 hours gardening help",
            image: "images/placeholder.jpg"
        },
        {
            id: 3,
            title: "Web Development",
            category: "Technology",
            description: "Website building in exchange for photography services",
            offer: "Basic website setup",
            request: "Professional headshots",
            image: "images/placeholder.jpg"
        },
        {
            id: 4,
            title: "Yoga Instruction",
            category: "Fitness",
            description: "Private yoga sessions in exchange for home cooked meals",
            offer: "1 hour yoga session",
            request: "2 home cooked meals",
            image: "images/placeholder.jpg"
        },
        {
            id: 5,
            title: "Car Maintenance",
            category: "Automotive",
            description: "Basic car maintenance in exchange for computer help",
            offer: "Oil change and inspection",
            request: "Computer troubleshooting",
            image: "images/placeholder.jpg"
        },
        {
            id: 6,
            title: "Graphic Design",
            category: "Creative",
            description: "Logo design in exchange for babysitting",
            offer: "Custom logo design",
            request: "3 hours babysitting",
            image: "images/placeholder.jpg"
        }
    ];

    // Display all skills with filtering
    function displayAllSkills(filter = 'all') {
        const container = document.getElementById('all-skills-container');
        
        if (container) {
            const filteredSkills = filter === 'all' 
                ? allSkills 
                : allSkills.filter(skill => skill.category.toLowerCase() === filter.toLowerCase());
            
            container.innerHTML = filteredSkills.map(skill => `
                <div class="skill-card">
                    <img src="${skill.image}" alt="${skill.title}" loading="lazy">
                    <div class="skill-card-content">
                        <span class="skill-category">${skill.category}</span>
                        <h3>${skill.title}</h3>
                        <p>${skill.description}</p>
                        <p><strong>Offering:</strong> ${skill.offer}</p>
                        <p><strong>Requesting:</strong> ${skill.request}</p>
                    </div>
                </div>
            `).join('');
        }
    }

    // Initialize with all skills
    displayAllSkills();

    // Search and filter functionality
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = document.getElementById('search-input').value.toLowerCase();
            const category = document.getElementById('category-filter').value;
            
            const filtered = allSkills.filter(skill => {
                const matchesCategory = category === 'all' || skill.category.toLowerCase() === category.toLowerCase();
                const matchesSearch = skill.title.toLowerCase().includes(searchTerm) || 
                                     skill.description.toLowerCase().includes(searchTerm);
                return matchesCategory && matchesSearch;
            });
            
            const container = document.getElementById('all-skills-container');
            if (container) {
                container.innerHTML = filtered.map(skill => `
                    <div class="skill-card">
                        <img src="${skill.image}" alt="${skill.title}" loading="lazy">
                        <div class="skill-card-content">
                            <span class="skill-category">${skill.category}</span>
                            <h3>${skill.title}</h3>
                            <p>${skill.description}</p>
                            <p><strong>Offering:</strong> ${skill.offer}</p>
                            <p><strong>Requesting:</strong> ${skill.request}</p>
                        </div>
                    </div>
                `).join('');
            }
        });
    }
}

// Post Page Specific Functionality
if (document.getElementById('skill-form')) {
    const skillForm = document.getElementById('skill-form');
    
    skillForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const skillName = document.getElementById('skill-name').value;
        const skillCategory = document.getElementById('skill-category').value;
        const skillDescription = document.getElementById('skill-description').value;
        const skillOffer = document.getElementById('skill-offer').value;
        const skillRequest = document.getElementById('skill-request').value;
        const contactMethod = document.getElementById('contact-method').value;
        const contactInfo = document.getElementById('contact-info').value;
        
        // Create skill object
        const newSkill = {
            id: Date.now(),
            title: skillName,
            category: skillCategory,
            description: skillDescription,
            offer: skillOffer,
            request: skillRequest,
            contact: {
                method: contactMethod,
                info: contactInfo
            },
            image: "images/placeholder.jpg"
        };
        
        // Save to localStorage
        let savedSkills = JSON.parse(localStorage.getItem('skills')) || [];
        savedSkills.push(newSkill);
        localStorage.setItem('skills', JSON.stringify(savedSkills));
        
        // Show success message
        alert('Your skill has been posted successfully!');
        
        // Reset form
        skillForm.reset();
    });
    
    // Load skills from localStorage when browsing
    window.addEventListener('load', function() {
        if (document.getElementById('all-skills-container')) {
            const savedSkills = JSON.parse(localStorage.getItem('skills')) || [];
            if (savedSkills.length > 0) {
                const container = document.getElementById('all-skills-container');
                if (container) {
                    container.innerHTML += savedSkills.map(skill => `
                        <div class="skill-card">
                            <img src="${skill.image}" alt="${skill.title}" loading="lazy">
                            <div class="skill-card-content">
                                <span class="skill-category">${skill.category}</span>
                                <h3>${skill.title}</h3>
                                <p>${skill.description}</p>
                                <p><strong>Offering:</strong> ${skill.offer}</p>
                                <p><strong>Requesting:</strong> ${skill.request}</p>
                            </div>
                        </div>
                    `).join('');
                }
            }
        }
    });
}