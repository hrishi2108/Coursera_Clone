// Add event listeners to all course cards
document.querySelectorAll('.certificate-card').forEach(card => {
    card.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default behavior of <a> tag
        console.log('Course card clicked');

        // Extract course details from the card
        const course = {
            image: card.querySelector('img').src,
            title: card.querySelector('h3').textContent,
            description: card.querySelector('p').textContent
        };

        // Log the course details and redirect URL
        console.log('Course Details:', course);
        const queryParams = new URLSearchParams(course);
        console.log('Redirecting to: product.html?' + queryParams.toString());

        // Redirect to index.html
        window.location.href = `product.html?${queryParams.toString()}`;
    });
});