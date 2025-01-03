
async function show_project(source, port, project) {

    const iFrame = document.getElementById('project');
    iFrame.width  = "100%";
    iFrame.height = document.body.scrollHeight;
    iFrame.src = source + ':' + port
    iFrame.frameBorder = 2

    const ldblm_description = `This site uses the Node.js server platform, the backend web framework Express, the javascript library Handlebars for generating the user-interface/html content, and a MySQL database to manage the company's inventory, users who subscribe to a monthly newsletter, shopping baskets, etc. Special features include:  1) cookie tracking to manage a specific users shopping basket; 2) Bot control using reCaptcha on the 'Subscribe Page' to protect the database; 3) 3 microservices that handle sorting the products list on the shopping page, and subscribing and unsubscribing from the monthly newsletter. To open the site in a new page <a href='${source}:${port}' target='_blank' rel='noopener noreferrer'">click here</a>`;
    const byte_hikers_description = `This project was built with a classmate of mine, which was a great opportunity to work as a team to develop a project that was much larger than anything I had built up to that point. The application uses the Node.js server platform, the backend web framework Express, the javascript library Handlebars for generating the user-interface/html content, and a MySQL database to manage the application's users, categories, trails, and activites. CRUD operations can be carried out on all of the entities and are facilitated with REST API requests, and the pages are updated asynchronously using AJAX. To open the application in a new page <a href='${source}:${port}' target='_blank' rel='noopener noreferrer'">click here</a>`;
    const ocean_description = `This undergraduate research project was completed over the course of my junior and senior years. The goal was to find a new approach for determining the intensity of turbulence. The data analysis, plotting, and modeling was completed using MatLab`;
    let description = "";
    
    let project_description = document.getElementById('about-project')
    if (project == 'ldblm') {description = ldblm_description}
    else if (project == 'byte_hikers') {description = byte_hikers_description}
    else if (project == 'ocean') {description = ocean_description}
    project_description.innerHTML = description;
    project_description.style.background = "#7961ff50";
    project_description.style.padding = "10px";
}
