
import jakmalls from "../assets/jakmalls.jpg";

const projects = [
    {
        number: "01",
        slug: "jakmalls",
        title: "JAKMalls",
        category: "E-Commerce Platform",
        year: "2026",
        description:
            "A complete full-stack e-commerce platform built around real-world shopping, product management and order workflows.",
        overview:
            "JAKMalls is a full-stack e-commerce platform designed to connect the customer shopping experience with product management, authentication, carts, orders and administration in one system.",
        challenge:
            "The goal was to build more than a simple storefront. The platform needed to handle real e-commerce workflows while keeping the interface clean, responsive and easy to use.",
        solution:
            "JAKMalls was developed with React, Tailwind CSS, Node.js, Express and MongoDB. JWT-based authentication, cart functionality, product management, order handling and an admin panel were integrated into the platform.",
        technologies: [
            "React",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "MongoDB",
            "JWT",
        ],
        features: [
            "Product management",
            "Shopping cart",
            "User authentication",
            "Order management",
            "Admin panel",
            "Product search and filtering",
            "Responsive interface",
        ],
        image: jakmalls,
        liveUrl: "https://jakmalls.netlify.app/",
        featured: true,
    },
];

export default projects; 