const handler = async (_, res) => {
    const projects = [
        {
            id: "1",
            category: "personal",
            en: {
                name: "Portfolio Website",
                description:
                    "A responsive portfolio website to showcase my work and skills.",
            },
            es: {
                name: "Sitio Web de Portafolio",
                description:
                    "Un sitio web responsivo para mostrar mi trabajo y habilidades.",
            },
            technologies: ["React", "Next.js", "Framer Motion"],
            website: "https://myportfolio.com",
            github: "https://github.com/mygithub/portfolio",
            timestamp: 1625238467000,
            url: "personal-project-1",
        },
        {
            id: "2",
            timestamp: 1698879800,
            category: "personal",
            en: {
                name: "E-commerce Website",
                description:
                    "A fully functional e-commerce website built with React and Node.js. Includes product pages, cart, and checkout process.",
            },
            es: {
                name: "Sitio Web de Comercio Electrónico",
                description:
                    "Un sitio web de comercio electrónico completamente funcional, construido con React y Node.js. Incluye páginas de productos, carrito y proceso de pago.",
            },
            technologies: ["React", "Node.js", "Express", "MongoDB"],
            website: "https://myecommerce.com",
            github: "https://github.com/mygithub/ecommerce",
            url: "ecommerce-website",
            image: "",
        },
        {
            id: "3",
            timestamp: 1698881000,
            category: "practice",
            en: {
                name: "Blog Platform",
                description:
                    "A simple blog platform allowing users to write and publish blog posts. Built using Next.js and MongoDB.",
            },
            es: {
                name: "Plataforma de Blog",
                description:
                    "Una plataforma de blog sencilla que permite a los usuarios escribir y publicar publicaciones. Construido con Next.js y MongoDB.",
            },
            technologies: ["Next.js", "MongoDB", "CSS"],
            website: "https://myblogplatform.com",
            github: "https://github.com/mygithub/blog-platform",
            url: "blog-platform",
        },

        {
            id: "4",
            timestamp: 1698883000,
            category: "experiments",
            en: {
                name: "Weather App",
                description:
                    "A weather app that fetches real-time data using the OpenWeather API. It displays weather information based on the user's location.",
            },
            es: {
                name: "Aplicación del Clima",
                description:
                    "Una aplicación del clima que obtiene datos en tiempo real usando la API de OpenWeather. Muestra información del clima basada en la ubicación del usuario.",
            },
            technologies: ["React", "OpenWeather API", "CSS"],
            website: "https://myweatherapp.com",
            github: "https://github.com/mygithub/weather-app",
            url: "weather-app",
        },

        {
            id: "5",
            timestamp: 1698884500,
            category: "personal",
            en: {
                name: "Task Manager",
                description:
                    "A task management app where users can add, update, and delete tasks. Built with React and Firebase for real-time updates.",
            },
            es: {
                name: "Administrador de Tareas",
                description:
                    "Una aplicación de gestión de tareas donde los usuarios pueden agregar, actualizar y eliminar tareas. Construida con React y Firebase para actualizaciones en tiempo real.",
            },
            technologies: ["React", "Firebase", "CSS"],
            website: "https://mytaskmanager.com",
            github: "https://github.com/mygithub/task-manager",
            url: "task-manager",
        },

        {
            id: "6",
            timestamp: 1698885600,
            category: "recommended",
            en: {
                name: "Chat Application",
                description:
                    "A real-time chat application that allows users to communicate with each other. Built with React and Socket.io.",
            },
            es: {
                name: "Aplicación de Chat",
                description:
                    "Una aplicación de chat en tiempo real que permite a los usuarios comunicarse entre sí. Construida con React y Socket.io.",
            },
            technologies: ["React", "Socket.io", "CSS"],
            website: "https://mychatapp.com",
            github: "https://github.com/mygithub/chat-application",
            url: "chat-application",
        },
    ];

    res.status(200).json(projects);
};

export default handler;
