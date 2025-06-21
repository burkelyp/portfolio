/*
Database
*/

const projects = {
    invaders: {
        site: "projects/invaders",
        title: "CPU Emulator",
        year: 2025,
        img_path: "img/invaders_screenshot.png",
        description: "This project was built with a team, and the software emulates the behavior of the Intel 8080 processor. It was designed specifically to play the classic arcade game - Space Invaders, but can run most roms designed for this cpu.",
        software: ["cpp", "opengl", "sdl2", "qt"],
        github: "https://github.com/burkelyp/Space-Invaders",
        new_tab: false
    },
    ldblm: {
        site: "https://ldblm-ecommerce-site-fall-2024.uk.r.appspot.com/",
        title: "eCommerce Website",
        year: 2024,
        img_path: "img/ldblm_screenshot.png",
        description: "An eCommerce website for a small business. Three Microservices handle sorting the products list, subscribing, and unsubscribing. Implements cookie tracking to manage the shopping basket.",
        software: ["node", "js", "express", "mysql", "handlebars", "css"],
        new_tab: true
    },
    byte_hikers: {
        site: "https://byte-hikers-spring-2024.uk.r.appspot.com/",
        title: "Hiking Application",
        year: 2023,
        img_path: "img/byte_hikers_screenshot.png",
        description: "Worked with a classmate to build an application that tracks users' outdoor activities. Each page represents an entity in the SQL database and CRUD operations are implemented with REST APIs",
        software: ["node", "js", "express", "mysql", "handlebars", "css"],
        new_tab: true
    },
    ocean: {
        site: "https://oaktrust.library.tamu.edu/items/c2ae34f5-38d1-4337-a497-52338ea696e7",
        title: "Oceanographic Undergraduate Thesis",
        year: 2014,
        img_path: "img/oceanography_poster.jpg",
        description: "Oceanographic research project that attempts to describe turbulence intensity using a novel approach. Learned how to program in MATLAB for data analysis and modeling. Helped describe internal waves and nutrient transport mechanisms in a threatened bay.",
        software: ["matlab"],
        new_tab: true
    }
}

const jobs = {
    ta: {
        title: "Teaching Assistant",
        employer: "Oregon State University",
        dates: "2023 - 2025",
        description: "Coordinated with faculty for Discrete Math and Data Structures to help students keep up with course content by hosting office hours, moderating the class forum, and facilitating group projects. Also, responsible for grading classwork and exams, and checking for plagiarism."
    },
    lab_tech: {
        title: "Laboratory Technician",
        employer: "Marathon Petroleum",
        dates: "2019 - 2023",
        description: "Performed analytical testing to ensure quality control of refinery operations. Verified accuracy of instruments and troubleshot any issues. Data entry and instrument control carried out in LIMS sample manager, QC/Plus, and OpenLab."
    }
}

const skills = {
    python: {
        name: "Python",
        src: "img/python_logo.png",
        alt: "Python logo"
    },
    matlab: {
        name: "MATLAB",
        src: "img/matlab_logo.png",
        alt: "MATLAB logo"
    },
    mysql: {
        name: "MySQL",
        src: "img/mysql_logo.png",
        alt: "MySQL logo"
    },
    cpp: {
        name: "C/C++",
        src: "img/cpp_logo.png",
        alt: "C++ logo"
    },
    js: {
        name: "JavaScript",
        src: "img/js_logo.png",
        alt: "JavaScript logo"
    },
    node: {
        name: "Node JS",
        src: "img/node_logo.png",
        alt: "Node JS logo"
    },
    express: {
        name: "Express",
        src: "img/express_logo.png",
        alt: "Express logo"
    },
    handlebars: {
        name: "Handlebars",
        src: "img/handlebars_logo.png",
        alt: "Handlebars logo"
    },
    css: {
        name: "CSS",
        src: "img/css_logo.png",
        alt: "CSS logo"
    },
    flask: {
        name: "Python Flask",
        src: "img/flask_logo.png",
        alt: "Python Flask logo"
    },
    gcloud: {
        name: "Google Cloud",
        src: "img/gcloud_logo.png",
        alt: "Google Cloud logo"
    },
    oauth: {
        name: "OAuth2.0",
        src: "img/oauth_logo.png",
        alt: "OAuth logo"
    }
}

module.exports = {
    projects,
    jobs,
    skills
}