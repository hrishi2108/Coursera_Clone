// Function to load course details
function loadCourseDetails() {
    // Get the course details from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const course = {
        image: urlParams.get('image'),
        title: urlParams.get('title'),
        description: urlParams.get('description')
    };

    if (course.image && course.title && course.description) {
        // Update the course details section
        const courseDetails = document.getElementById('course-details');
        courseDetails.innerHTML = `
            <div class="course-header">
                <img src="${course.image}" alt="${course.title}">
                <h1>${course.title}</h1>
                <p class="course-description">${course.description}</p>
                <button onclick="window.location.href='enrollsuccess.html'"  id="enroll-button">Enroll Now</button>
            </div>
        `;

        // Add event listener for the Enroll button
        document.getElementById('enroll-button').addEventListener('click', () => {
            alert('You have successfully enrolled in the course!');
        });
    } else {
        // If the course details are not found, display an error message
        const courseDetails = document.getElementById('course-details');
        courseDetails.innerHTML = `<h1>Course not found</h1>`;
    }
}

// Load course details when the page loads
window.onload = loadCourseDetails;