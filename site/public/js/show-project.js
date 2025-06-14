
async function fetchURL(project) {
    const response = await fetch("/api/projects/");
    const data = await response.json();
    return data[project];
}

async function show_project(project) {

    const project_href = await fetchURL(project)

    const listItems = document.querySelectorAll('li');
    listItems.forEach((item, index) => {
        item.style.fontWeight = 'inherit';
        item.style.padding = 'inherit';
    });
    document.getElementById(project).style.fontWeight = "bold";
    document.getElementById(project).style.padding = "7px";
    
    const iFrame = document.getElementById('project');
    iFrame.width  = "100%";
    iFrame.height = document.body.scrollHeight;
    iFrame.src = project_href
    iFrame.frameBorder = "3px solid black"

    const descriptions = {
        ldblm: `<strong>Little Dreamer Big Leader Mobiles eCommerce Website: 
        </strong>This site uses the Node server platform, Express for the backend web framework, 
        Handlebars javascript library for generating the user-interface/html content, and a MySQL 
        database to manage the company's inventory, customers, shopping baskets, etc. Database 
        creations, retrievals, and deletions are facilitated by REST API requests. Special features of 
        this site include:  1) 3 microservices that handle sorting the products list on the shopping 
        page, and subscribing and unsubscribing from the monthly newsletter; 2) cookie tracking to 
        manage a specific users shopping basket; 3) bot control using reCaptcha on the 'Subscribe 
        Page' to protect the database. To open the site in a new page, <a href='${project_href}' 
        target='_blank' rel='noopener noreferrer'>click here</a>`,
        
        byte_hikers: `<strong>Byte Hikers Application: </strong>This project was built 
        with a classmate of mine, which was a great opportunity to work as a team to develop a project 
        that was much larger than anything I had built up to that point. The application uses the 
        Node.js server platform, the backend web framework Express, the javascript library Handlebars 
        for generating the user-interface/html content, and a MySQL database to manage the 
        application's users, categories, trails, and activites. CRUD operations can be carried out on 
        all of the entities and are facilitated with REST API requests, and the pages are updated 
        dynamically using AJAX. To open the application in a new page, <a href='${project_href}' 
        target='_blank' rel='noopener noreferrer'>click here</a>`,
        
        ocean: `<strong>Oceanographic Research Project: </strong>This undergraduate 
        research project was completed over the course of my junior and senior years. The goal was to 
        find a new approach for determining the intensity of turbulence. The data analysis, plotting, 
        and modeling was completed using MatLab. To view my thesis on turbulence in a new page, <a
        href='${project_href} target='_blank' rel='noopener noreferrer'>click here</a>`
    }
    
    let description = descriptions[project];
    
    let project_description = document.getElementById('about-project')
    
    project_description.innerHTML = description;
    project_description.style.background = "#7961ff50";
    project_description.style.padding = "10px";
}


// Listener
document.addEventListener('DOMContentLoaded', function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has('project')) {
        const project = urlParams.get('project');
        show_project(project);
    }
})