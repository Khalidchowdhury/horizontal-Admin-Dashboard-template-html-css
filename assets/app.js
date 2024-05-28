// setting script file 

function showSection(section) {
    document.getElementById('profile-section').style.display = 'none';
    document.getElementById('security-section').style.display = 'none';
    document.getElementById('notifications-section').style.display = 'none';
    
    document.getElementById(`${section}-section`).style.display = 'block';
}









