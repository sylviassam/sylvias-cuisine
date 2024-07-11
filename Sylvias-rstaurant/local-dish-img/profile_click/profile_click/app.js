document.querySelectorAll('.card-link').forEach(link => {
    link.addEventListener('click', function() {
        const profileName = this.getAttribute('data-name');
        const profileInfo = this.getAttribute('data-info');
        
        document.querySelector('.profile-name').textContent = profileName;
        document.querySelector('.profile-info').textContent = profileInfo;
    });
});