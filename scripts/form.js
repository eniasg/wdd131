// Get current year for copyright
const currentYear = new Date().getFullYear();
document.querySelector('footer p:first-of-type').innerHTML = `&copy; ${currentYear} 🏀 Enias Gramu 🏀 Zimbabwe.`;

// Get last modified date
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Populate product dropdown
document.addEventListener('DOMContentLoaded', function() {
    const productSelect = document.getElementById('productName');
    
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    // Review counter for confirmation page
    if (document.getElementById('reviewCount')) {
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCount++;
        localStorage.setItem('reviewCount', reviewCount);
        document.getElementById('reviewCount').textContent = `You have submitted ${reviewCount} review(s).`;
    }

    if (document.getElementById('productNameHeader')) {
        // Get product name from URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('productName');
        
        // Find the product in our array
        const reviewedProduct = products.find(product => product.id === productId);
        
        if (reviewedProduct) {
            const productNameHeader = document.getElementById('productNameHeader');
            productNameHeader.textContent = reviewedProduct.name;
            productNameHeader.style.textTransform = 'capitalize';
        }
    }
});