
function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.style.display = 'none'; 
    });

    document.getElementById(sectionId).style.display = 'block'; 
}


function pay(packageName) {
    const messageDiv = document.getElementById('message');
    messageDiv.style.display = 'block';
    messageDiv.innerText = `Pakiet "${packageName}" opłacony!`;

    setTimeout(() => {
        const randomCode = generateRandomCode();
        messageDiv.innerText += `\nTwój kod to: ${randomCode}`;
    }, 5000); 
}


function generateRandomCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}


document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});
