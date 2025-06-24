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
        link: "https://github.com/burkelyp/Space-Invaders",
        link_name: "GitHub Repository",
        new_tab: false,
        id: 'invaders',
        long_description: "A team project that emulates the behavior of the Intel 8080 processor. The software was written in C++ and demonstrates a clear understanding of lower lever programming and CPU behavior. Feel free to download the application for your platform from our GitHub repository, but obtaining the copyrighted ROM files is up to you.",
        features: ["Cycle-accurate Intel 8080 CPU emulation that reads official ROMs and renders authentic gameplay, visuals, and sound.", "Cross-platform support (Windows, Mac, Linux) with a modular architecture and custom built workflows.", "Standalone user interface with customizable key bindings and OpenGL-powered visuals for an accessible, arcade-accurate experience."],
        width: "350px"
    },
    tarpaulin: {
        site: "projects/tarpaulin",
        title: "Course Management Tool",
        year: 2025,
        img_path: "img/tarpaulin_screenshot.png",
        description: "The complete backend of a lightweight course management tool with 13 strict REST API endpoints and user authentication/authorization.",
        software: ["python", "flask", "datastore", "gcloud", "oauth", "postman"],
        link: "https://github.com/burkelyp/tarpaulin",
        link_name: 'GitHub Repository',
        new_tab: false,
        id: 'tarpaulin',
        long_description: "Developed and deployed Tarpaulin, a lightweight course management RESTful API using Python Flask, Google App Engine, and Google Datastore. The application features secure authentication with Auth0 and role-based access for admins, instructors, and students.",
        features: ["13 RESTful API endpoints with JWT-based authentication and role-based access control.", "Deployment on Google Cloud Platform using App Engine and Datastore for scalable performance.", "Integration with Auth0 for secure and modern authentication management."],
        width: "900px"
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
        site: "projects/ocean",
        title: "Oceanographic Undergraduate Thesis",
        year: 2014,
        img_path: "img/oceanography_poster.jpg",
        description: "Oceanographic research project that attempts to describe turbulence intensity using a novel approach. Learned how to program in MATLAB for data analysis and modeling. Helped describe internal waves and nutrient transport mechanisms in a threatened bay.",
        software: ["matlab"],
        link: "https://oaktrust.library.tamu.edu/items/c2ae34f5-38d1-4337-a497-52338ea696e7",
        link_name: "Archived Project",
        new_tab: false,
        id: "ocean",
        long_description: "Conducted a MATLAB-based analysis of oceanographic turbulence data collected from the Bay of La Paz, Mexico, to model mixing and transport mechanisms in coastal ecosystems. The project involved computing turbulence kinetic energy dissipation rates (ε) and exploring their relationship to measurable oceanographic parameters using numerical modeling and signal processing.",
        features: ["Developed MATLAB scripts to process and analyze CTD, ADCP, and turbulence profiler data, including Thorpe scale calculations and ε estimation.", "Modeled nonlinear relationships between turbulence metrics (e.g., ε, TL, and Ri) to enable indirect estimation of mixing intensity.", "Applied time-series analysis and vertical profiling to reveal tidal influence on internal wave generation and mixing dynamics."],
        width: "750px"
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
    },
    research: {
        title: "Research Assistant",
        employer: "Texas A&M Health and Science Center",
        dates: "2015 - 2019",
        description: "Researched how proteins cross membranes. Developed experiments using techniques such as: plasmid prep, protein purification, labeling proteins with fluorescent probes, and fluorescence microscopy to observe biophysical experiments."
    }
}

const skills = {
    Programming: {
        python: {
            name: "Python",
            src: "img/python_logo.png",
            alt: "Python logo"
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
        matlab: {
            name: "MATLAB",
            src: "img/matlab_logo.png",
            alt: "MATLAB logo"
        }
    },

    Databases: {
        mysql: {
            name: "",
            src: "img/mysql_logo.png",
            alt: "MySQL logo"
        },
        sqlite: {
            name: "SQLite",
            src: "img/sqlite_logo.png",
            alt: "SQLite logo"
        },
        cloudstore: {
            name: "Google Cloud Datastore",
            src: "img/datastore_logo.png",
            alt: "Google Cloud Datastore logo"
        }
    },

    Frameworks: {
        node: {
            name: "",
            src: "img/node_logo.png",
            alt: "Node JS logo"
        },
        express: {
            name: "Express",
            src: "img/express_logo.png",
            alt: "Express logo"
        },
        flask: {
            name: "Python Flask",
            src: "img/flask_logo.png",
            alt: "Python Flask logo"
        }
    },

    Frontend: {
        handlebars: {
            name: "Handlebars",
            src: "img/handlebars_logo.png",
            alt: "Handlebars logo"
        },
        html: {
            name: "HTML",
            src: "img/html_logo.png",
            alt: "HTML logo"
        },
        css: {
            name: "CSS",
            src: "img/css_logo.png",
            alt: "CSS logo"
        }
    },

    Platforms: {
        gcloud: {
            name: "Google Cloud",
            src: "img/gcloud_logo.png",
            alt: "Google Cloud logo"
        },
        aws: {
            name: "",
            src: "img/aws_logo.png",
            alt: "AWS logo"
        },
        github: {
            name: "GitHub",
            src: "img/github_logo.png",
            alt: "GitHub logo"
        }
    },

    Tools: {
        oauth: {
            name: "OAuth2.0",
            src: "img/oauth_logo.png",
            alt: "OAuth logo"
        },
        postman: {
            name: "Postman",
            src: "img/postman_logo.png",
            alt: "Postman logo"
        },
        git: {
            name: "Git",
            src: "img/git_logo.png",
            alt: "Git logo"
        }
    }
}

module.exports = {
    projects,
    jobs,
    skills
}