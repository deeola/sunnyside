const heroText = document.getElementById('hi');
const about = document.getElementById('about');
const project = document.getElementById('projects')




const datareload = document.querySelectorAll("[data-reload]");


const language = {
    eng:{
        "header": 'Transform your brand',
        "about" : 'about',
        'project' : 'Projects',
    },
    de:{
        "header": 'Transformieren Sie Ihre Marke',
        "about": 'über',
        'project' : 'Projekte',
        
    }
}

console.log(heroText)

if(window.location.hash){
    if(window.location.hash === '#de'){
        heroText.textContent = language.de.header;
        about.textContent = language.de.about;
        project.textContent = language.de.project;

    }

}

datareload.forEach(anchortag => {

    anchortag.onclick = function(){
        setTimeout(() => {
            location.reload()
        }, 100)
        
    }
})