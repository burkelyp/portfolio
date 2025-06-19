/*
projects database
*/

const projects = {
    ldblm: {
        id: 0,
        site: "https://ldblm-ecommerce-site-fall-2024.uk.r.appspot.com/",
        title: "eCommerce Website",
        year: 2024,
        img_path: "img/ldblm_screenshot.png",
        description: "An eCommerce website for a small business. Three Microservices handle sorting the products list, subscribing, and unsubscribing. Implements cookie tracking to manage the shopping basket.",
        software: [
            {
                name: "Node JS",
                src: "img/node_logo.png",
                alt: "Node JS logo"
            },
            {
                name: "Express",
                src: "img/express_logo.png",
                alt: "Express logo"
            },
            {
                name: "MySQL",
                src: "img/mysql_logo.png",
                alt: "MySQL logo"
            },
            {
                name: "Handlebars",
                src: "img/handlebars_logo.png",
                alt: "Handlebars logo"
            },
            {
                name: "JavaScript",
                src: "img/js_logo.png",
                alt: "JavaScript logo"
            },
            {
                name: "CSS",
                src: "img/css_logo.png",
                alt: "CSS logo"
            }
        ]

    },
    byte_hikers: {
        id: 1,
        site: "https://byte-hikers-spring-2024.uk.r.appspot.com/",
        title: "Hiking Application",
        year: 2023,
        img_path: "img/byte_hikers_screenshot.png",
        description: "Worked with a classmate to build an application that tracks users' outdoor activities. Each page represents an entity in the SQL database and CRUD operations are implemented with REST APIs",
        software: [
            {
                name: "Node JS",
                src: "img/node_logo.png",
                alt: "Node JS logo"
            },
            {
                name: "Express",
                src: "img/express_logo.png",
                alt: "Express logo"
            },
            {
                name: "MySQL",
                src: "img/mysql_logo.png",
                alt: "MySQL logo"
            },
            {
                name: "Handlebars",
                src: "img/handlebars_logo.png",
                alt: "Handlebars logo"
            },
            {
                name: "JavaScript",
                src: "img/js_logo.png",
                alt: "JavaScript logo"
            },
            {
                name: "CSS",
                src: "img/css_logo.png",
                alt: "CSS logo"
            }
        ]
    },
    ocean: {
        id: 2,
        site: "https://oaktrust.library.tamu.edu/items/c2ae34f5-38d1-4337-a497-52338ea696e7",
        title: "Oceanographic Undergraduate Thesis",
        year: 2014,
        img_path: "img/oceanography_poster.jpg",
        description: "Oceanographic research project that attempts to describe turbulence intensity using a novel approach. Learned how to program in MATLAB for data analysis and modeling. Helped describe internal waves and nutrient transport mechanisms in a threatened bay.",
        software: [
            {
                name: "MATLAB",
                src: "img/matlab_logo.png",
                alt: "MATLAB logo"
            }
        ]
    }
}

module.exports = projects;