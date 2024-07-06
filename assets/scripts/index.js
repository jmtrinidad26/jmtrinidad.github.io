const sections = document.querySelectorAll('.section')
const profile = document.getElementById('Profile')
const navBg = document.getElementById("bg")
const about = document.getElementById("About")
    about.style.display ='none'
function showSection() {
            about.style.display =''
            profile.style.display = 'none';
            navBg.style.backgroundImage = 'none';
            sections.forEach(section => {
                section.classList.add('inactive')
            })
}
function showAll(){
        about.style.display ='none'
        profile.style.display = '';
        navBg.style.backgroundImage = '';
        sections.forEach(section => {
            section.classList.remove('inactive')
        })
}
