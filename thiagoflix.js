// ThiagoFlix - JavaScript

// Slide positions for navigation
const slidePositions = {
    slide1: 0,
    slide2: 0
};

const cardsPerView = 4;
const cardWidth = 215; // Card width + gap

// Function to navigate slides
function moveSlide(slideId, direction) {
    const slide = document.getElementById(slideId);
    const maxScroll = slide.scrollWidth - slide.clientWidth;
    
    // Update position
    slidePositions[slideId] += direction * (cardsPerView * cardWidth);
    
    // Clamp values
    if (slidePositions[slideId] < 0) {
        slidePositions[slideId] = 0;
    }
    if (slidePositions[slideId] > maxScroll) {
        slidePositions[slideId] = maxScroll;
    }
    
    // Animate scroll
    slide.scrollTo({
        left: slidePositions[slideId],
        behavior: 'smooth'
    });
}

// Function to set classification
function setClassification(classification) {
    const button = document.getElementById('classificationDropdown');
    button.textContent = 'Classificação: ' + classification;
    
    // Filter movies based on classification
    filterMoviesByClassification(classification);
}

// Function to filter movies based on classification
function filterMoviesByClassification(classification) {
    const cards = document.querySelectorAll('.movie-card');
    
    // Map classifications to age ratings
    const classificationMap = {
        'Livre': 0,
        'Infantil': 0,
        '10+': 10,
        '12+': 12,
        '14+': 14,
        '16+': 16,
        '18+': 18
    };
    
    const minAge = classificationMap[classification] || 0;
    
    cards.forEach(card => {
        // In a real app, you would check the movie's rating
        // For demo, we'll show/hide based on random logic
        card.style.display = 'block';
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('ThiagoFlix loaded successfully!');
    
    // Add smooth scroll behavior to movie rows
    const movieRows = document.querySelectorAll('.movie-row');
    
    movieRows.forEach(row => {
        // Enable horizontal scrolling with mouse wheel
        row.addEventListener('wheel', function(e) {
            if (e.deltaY !== 0) {
                e.preventDefault();
                this.scrollLeft += e.deltaY;
            }
        });
    });
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        moveSlide('slide1', -1);
        moveSlide('slide2', -1);
    } else if (e.key === 'ArrowRight') {
        moveSlide('slide1', 1);
        moveSlide('slide2', 1);
    }
});