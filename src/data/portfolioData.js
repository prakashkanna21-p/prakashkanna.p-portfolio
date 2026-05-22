// src/data/portfolioData.js
export const skills = [
  { name: "Python", icon: "🐍", level: 90 },
  { name: "JavaScript", icon: "🟡", level: 88 },
  { name: "React.js", icon: "⚛️", level: 85 },
  { name: "Django", icon: "🎸", level: 87 },
  { name: "Node.js", icon: "🟢", level: 82 },
  { name: "MongoDB", icon: "🍃", level: 80 },
  { name: "HTML5", icon: "🌐", level: 95 },
  { name: "CSS3", icon: "🎨", level: 90 },
  { name: "Tailwind CSS", icon: "💨", level: 88 },
  { name: "SQL", icon: "🗄️", level: 85 },
  { name: "Git & GitHub", icon: "📦", level: 87 },
];

export const projects = [
  {
    id: 1,
    title: "Smart Parking Marketplace Application",
    description: "A full-stack smart parking platform connecting vehicle owners with parking space providers.",
    features: ["Real-time parking search", "Interactive maps", "Booking system", "Authentication", "Responsive UI"],
    techStack: ["React", "Django", "MySQL", "Leaflet Maps"],
    image: "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=600",
    github: "https://github.com/prakash/smart-parking",
    demo: "https://smart-parking.demo.com",
  },
  {
    id: 2,
    title: "Online Food Ordering Web Application",
    description: "A complete food ordering platform with cart management and order tracking.",
    features: ["Food ordering system", "Cart management", "Authentication", "Order tracking"],
    techStack: ["HTML", "CSS", "JavaScript", "Django", "MongoDB"],
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600",
    github: "https://github.com/prakash/food-ordering",
    demo: "https://food-ordering.demo.com",
  },
  {
    id: 3,
    title: "Full-Stack E-Commerce Web Application",
    description: "A modern e-commerce platform with product management and shopping cart.",
    features: ["Product management", "Shopping cart", "Authentication", "REST APIs"],
    techStack: ["React", "Django", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600",
    github: "https://github.com/prakash/ecommerce",
    demo: "https://ecommerce.demo.com",
  },
  {
    id: 4,
    title: "Banking System Simulation",
    description: "A secure banking simulation system for account and transaction management.",
    features: ["Account creation", "Deposit and withdrawal", "Transaction management"],
    techStack: ["Python"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600",
    github: "https://github.com/prakash/banking-system",
    demo: "https://banking-system.demo.com",
  },
];

export const certifications = [
  { name: "Full Stack Web Development", provider: "Udemy", year: "2024", icon: "🎓" },
  { name: "Python Programming", provider: "Udemy", year: "2023", icon: "🐍" },
  { name: "MERN Stack Development", provider: "Udemy", year: "2024", icon: "⚛️" },
];

export const contactInfo = {
  email: "prakash@example.com",
  phone: "+91 98765 43210",
  github: "https://github.com/prakash",
  linkedin: "https://linkedin.com/in/prakash",
};