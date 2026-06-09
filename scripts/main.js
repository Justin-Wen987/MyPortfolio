// Smooth scroll for anchor links
document.querySelectorAll('.nav-links a, .btn-primary[href="#work"], .btn-outline[href="#contact"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            e.preventDefault();
            const targetElem = document.querySelector(targetId);
            if (targetElem) {
                targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

console.log("Portfolio with case-study structure and enhanced interactive positioning loaded.");