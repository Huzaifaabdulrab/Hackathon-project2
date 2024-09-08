function createResume() {
    // Get form values
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const skills = document.getElementById('skills').value;
    const education = document.getElementById('education').value;
    const languages = document.getElementById('languages').value;
    const interests = document.getElementById('interests').value;
    const contact = document.getElementById('contact').value;
    // Generate resume HTML
    const resumeHtml = `
        <div>
            <h1>${name}</h1>
            <h2>${profession}</h2>
            <h3>Skills</h3>
            <p>${skills}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Languages</h3>
            <p>${languages}</p>
            <h3>Interests</h3>
            <p>${interests}</p>
            <h3>Contact Information</h3>
            <p>${contact}</p>
        </div>
    `;
    // Display the resume
    document.getElementById('resume').innerHTML = resumeHtml;
}
// Attach event listener to form
document.getElementById('resumeForm')?.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    createResume();
});
