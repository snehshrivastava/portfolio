// Single source of truth for the portfolio site and the resume PDF.
// After editing, run `npm run resume` to regenerate src/Assets/Snehresume.pdf.
// Wrap a phrase in **double asterisks** to highlight it.

export const profile = {
  name: "Sneh Shrivastava",
  title: "Senior Backend Engineer",
  location: "Bengaluru, India",
  email: "sneh4shri@gmail.com",
  phone: "+91 88773 38956",
  website: "https://snehshrivastava.github.io",
  github: "https://github.com/snehshrivastava",
  linkedin: "https://www.linkedin.com/in/snehshrivastava/",
  summary:
    "Senior Backend Engineer with 6+ years of experience designing and scaling cloud-native microservices with Node.js, TypeScript, Java and Spring Boot. Builds event-driven systems on Apache Kafka, real-time features with WebSockets and Redis, and secure banking platforms for limit management and KYC automation. Owns systems end to end, from architecture to production reliability, and mentors engineers on backend best practices.",
};

// `technologies` appear on the resume and as tiles on the site.
// `concepts` appear on the resume only (they have no logo to show).
export const skills = [
  {
    category: "Languages",
    technologies: ["JavaScript", "TypeScript", "Java", "Python", "C/C++", "SQL"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express.js", "NestJS", "Fastify", "Spring Boot", "WebSockets"],
    concepts: ["API Development", "Microservices"],
  },
  {
    category: "Databases",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    category: "Messaging & Streaming",
    technologies: ["Apache Kafka", "Redpanda"],
    concepts: ["Event-Driven Architecture"],
  },
  {
    category: "Cloud & DevOps",
    technologies: ["AWS", "GCP", "Docker", "Kubernetes", "OpenShift", "3scale API Management"],
  },
  {
    category: "Observability",
    technologies: ["Kibana", "Jaeger"],
    concepts: ["Distributed Tracing", "Structured Logging"],
  },
  {
    category: "Practices",
    concepts: [
      "System Design",
      "Distributed Systems",
      "Multi-Tenant Architecture",
      "RBAC",
      "Code Review",
      "Mentoring",
    ],
  },
];

export const experience = [
  {
    company: "Khelomore",
    location: "Bengaluru",
    role: "Senior Engineer",
    period: "Apr 2026 – Present",
    points: [
      "Own the operations backend end to end, leading **microservices architecture** improvements, **database optimization** and robust API development.",
      "Designed and launched the **Circle** community feature, increasing platform interactivity and user engagement.",
      "Architected a scalable **venue integration framework** that standardizes programmatic onboarding of new partner sports facilities.",
      "Built real-time one-to-one and group chat on **WebSockets** and **Redis**, delivering low-latency, reliable messaging for active users.",
      "Mentor **2 junior engineers** through code reviews and backend engineering best practices, accelerating their technical growth.",
    ],
  },
  {
    company: "Speridian Technology (Client: Emirates NBD)",
    location: "Bengaluru",
    role: "Senior Software Engineer",
    period: "Jun 2025 – Mar 2026",
    points: [
      "Architected a **Limit Management System** enforcing real-time transaction controls across distributed banking systems, with dynamic transfer, withdrawal and payment limits, **RBAC** and high availability.",
      "Led design and implementation of **Smart-Pass**, a security service that lets banking operations teams configure customer transaction controls across all channels, with UPI and OTP authentication and real-time enforcement.",
      "Built the **TRUEID OCR framework** from the ground up for automated KYC document scanning and validation, processing **10,000+ documents daily** at **98% accuracy**; adopted company-wide as the KYC standard across **15+ banking products**.",
      "Integrated TRUEID OCR into the end-to-end KYC and customer onboarding pipeline, reducing manual verification time by **85%** and raising onboarding completion from **72% to 94%**.",
      "Engineered secure document handling with **encryption at rest and in transit**, compliant with UAE Central Bank regulations and international banking security standards.",
      "Designed a **multi-tenant configuration service** that lets business teams self-serve limit changes, cutting deployment cycles from **2 weeks to 2 hours**.",
      "Developed a monitoring and analytics dashboard for the limit management system, giving real-time visibility into transaction patterns, failure rates and customer behavior.",
      "Implemented **distributed tracing** and logging across the OCR pipeline, reducing **MTTR** for document processing issues by **70%**.",
    ],
  },
  {
    company: "Chingari",
    location: "Bengaluru",
    role: "Senior Software Development Engineer",
    period: "Jul 2024 – Feb 2025",
    points: [
      "Remediated platform-wide **JWT vulnerabilities** and enforced session-limiting controls, closing unauthorized-access paths in production.",
      "Owned architecture and end-to-end delivery of a gamified **reward system** built from scratch, increasing user engagement by **40%** and retention by **35%**.",
      "Enhanced the **transaction analytics** system with real-time insights and historical tracking, enabling data-driven decisions for business teams.",
      "Launched an **in-app currency system** unlocking exclusive features such as free WhatsApp integration, improving onboarding completion by **25%**.",
    ],
  },
  {
    company: "Biz2Credit",
    location: "Noida",
    role: "Software Development Engineer",
    period: "Jun 2023 – Jun 2024",
    points: [
      "Owned architecture and delivery of a **multi-tenant report generation service** driven by JSON mapping, reducing manual reporting by **80%** and generating **500+ reports daily**.",
      "Built a custom **JSON-to-XLSX** converter that accelerated data processing **3x** for **200+ enterprise clients**.",
      "Created reusable **npm modules** for structured logging and **Jaeger** tracing, reducing production incident resolution time by **50%**.",
      "Implemented an **API middleware layer** for third-party integrations, including payment gateways and banking APIs, enabling **30+ external services**.",
      "Migrated a legacy JavaScript codebase to **TypeScript**, improving maintainability and reducing runtime errors by **45%**.",
    ],
  },
  {
    company: "Saveo",
    location: "Bengaluru",
    role: "Software Developer",
    period: "Jan 2022 – May 2023",
    points: [
      "Migrated infrastructure from **AWS to GCP**, achieving a **40% cost reduction** and **25%** lower latency for millions of daily transactions.",
      "Delivered zero-downtime deployments with **Docker** and **Kubernetes**, raising availability to **99.98%** and enabling daily releases.",
      "Implemented **Elasticsearch** product search from scratch, cutting query response time from **2.5s to 500ms** and enabling complex aggregations.",
      "Optimized backend services for multi-order digital payment processing and customer map views, improving transaction speed and user experience.",
    ],
  },
  {
    company: "Publicis Sapient",
    location: "Gurugram",
    role: "Associate Technology",
    period: "Feb 2021 – Dec 2021",
    points: [
      "Led **A/B testing** initiatives for an international client, increasing conversion rates by **18%**.",
      "Refined code architecture and resolved critical bugs, reducing the application crash rate by **60%**.",
      "Mapped data integration requirements to keep information flowing between business and technical stakeholders.",
    ],
  },
  {
    company: "SaddaCampus",
    location: "Dhanbad",
    role: "Founding Member",
    period: "Aug 2018 – Jul 2020",
    points: [
      "Defined the technical strategy and architected a scalable platform serving **50,000+ users**.",
      "Built and mentored an engineering team from **0 to 8 developers**, establishing coding standards, architectural patterns and agile practices.",
      "Designed a **microservices architecture** for course management, user authentication and content delivery.",
    ],
  },
];

export const education = {
  school: "Indian Institute of Technology (ISM), Dhanbad",
  degree: "B.Tech in Computer Science and Engineering",
  period: "2015 – 2019",
};

export const projects = [
  {
    title: "Real-Time Event Processing System",
    stack: ["Apache Kafka", "Node.js", "Distributed Systems"],
    description:
      "Designed an **event-driven architecture** on Apache Kafka for high-throughput real-time data streams, with fault tolerance and horizontal scalability to handle spikes of **10k+ events/sec**.",
  },
  {
    title: "Scalable API Gateway",
    stack: ["Node.js", "Microservices"],
    description:
      "Built a lightweight **API gateway** providing authentication, rate limiting, request routing and response aggregation for a suite of microservices; intelligent caching reduced latency by **15%**.",
  },
];
