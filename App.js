const about = document.getElementById('about');
const project = document.getElementById('projects');
const contact = document.getElementById('contact');
const heroText = document.getElementById('hero-text');



//SECTION ONE

// const transform = document.getElementById('transform');
// const transformText = document.getElementById('transformText');
// const transformlink = document.getElementById('transformlink');

//SECTION TWO

const datareload = document.querySelectorAll("[data-reload]");


const language = {
    eng:{
        "header": 'Transform your brand',
        "about" : 'about',
        'project' : 'Projects',
        'contact' : 'Contact',
        'heroText' : 'We are creatives',
        'transform' : 'Transform your brand',
        'transformText' : 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
        'transformlink' : 'learn more',
        'standout' : 'Stand out to the right audience',
        'standoutText' : 'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.',
        'graphics' : 'Graphic design',
        'graphicsText' : 'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.',
        'photography' : 'photography',
        'photographyText' : 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.',
        'client' : 'Client testimonials',
        'emilyText' : 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
        'emilyTitle' : 'Managing Director',
        'thomasText' : 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
        'thomasTitle': 'Chief Operating Officer',
        'jennieText' : 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
        'jennieTitle' : 'Business Owner'

    },
    de:{
        "header": 'Transformieren Sie Ihre Marke',
        "about": 'über',
        'project' : 'Projekte',
        'contact' : 'Kontakt',
        'heroText' : 'Wir sind Kreative',
        'transform' : 'Transformieren Sie Ihre Marke',
        'transformText' : 'Wir sind eine Full-Service-Kreativagentur, die darauf spezialisiert ist, Marken zu schnellem Wachstum zu verhelfen. Binden Sie Ihre Kunden durch überzeugende Visuals, die den Großteil des Marketings für Sie erledigen.',
        'transformlink':'mehr erfahren',
        'standout' : 'Dem richtigen Publikum auffallen',
        'standoutText' : 'Mit einer kollaborativen Formel von Designern, Forschern, Fotografen, Videographen und Textern bauen wir Ihre Marke auf und erweitern sie an digitalen Orten.',
        'graphics' : 'Grafische Gestaltung',
        'graphicsText' : 'Großartiges Design macht Sie einprägsam. Wir liefern Artwork, das Ihre Markenbotschaft unterstreicht und die Aufmerksamkeit potenzieller Kunden fesselt.',
        'photography' : 'Fotografie',
        'photographyText' : 'Steigern Sie Ihre Glaubwürdigkeit, indem Sie atemberaubende, qualitativ hochwertige Fotos erhalten, die das Image Ihres Unternehmens verbessern.',
        'client' : 'Kundenreferenzen',
        'emilyText' : 'Wir haben unser Vertrauen in Sunnyside gesetzt, und sie haben geliefert und dafür gesorgt, dass unsere Bedürfnisse erfüllt und die Termine immer eingehalten wurden.',
        'emilyTitle' : 'Marketing Direktor',
        'thomasText' : 'Der Enthusiasmus von Sunnyside, gepaart mit ihrem großen Interesse am Erfolg unserer Marke, machte es zu einer zufriedenstellenden und angenehmen Erfahrung.',
        'thomasTitle' : 'Geschäftsführer',
        'jennieText'  :'Unglaubliches Endergebnis! Unsere Verkäufe stiegen um über 400 %, als wir mit Sunnyside arbeiteten. Sehr zu empfehlen!',
        'jennieTitle' : 'Geschäftsinhaber'
        
    }
}

if(window.location.hash){
    if(window.location.hash === '#de'){
        about.textContent = language.de.about;
        project.textContent = language.de.project;
        contact.textContent = language.de.contact;
        heroText.textContent = language.de.heroText;
        transform.textContent = language.de.transform;
        transformText.textContent = language.de.transformText;
        transformlink.textContent = language.de.transformlink;
        standout.textContent = language.de.standout;
        standoutText.textContent = language.de.standoutText;
        idLink.textContent = language.de.transformlink;
        graphics.textContent = language.de.graphics;
        graphicsText.textContent = language.de.graphicsText;
        photography.textContent = language.de.photography;
        photographyText.textContent = language.de.photographyText;
        client.textContent = language.de.client;
        emilyText.textContent = language.de.emilyText;
        emilyTitle.textContent = language.de.emilyTitle;
        thomasText.textContent = language.de.thomasText;
        thomasTitle.textContent = language.de.thomasTitle;
        jennieText.textContent = language.de.jennieText;
        jennieTitle.textContent = language.de.jennieTitle;
        footerabout.textContent = language.de.about;
        footerprojects.textContent = language.de.project


        //CHANGE LANG TEXT

        selectedlang.textContent = 'Deutsch';
        //flag change

        // const flagimage =  document.getElementById('selectedlang')

        // console.log(flagimage)

        flagimage.src = 'https://www.countryflags.io/de/flat/32.png'

    }


}

datareload.forEach(anchortag => {

    anchortag.onclick = function(){
        setTimeout(() => {
            location.reload()
        }, 100)
        
    }
})

