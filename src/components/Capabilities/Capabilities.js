import React from "react";

function Capabilities() {
  const capabilities = [
    {
      category: "Development",
      skills: [
      "Front-end Development",
      "Full-stack Applications",
      "Mobile App Development",
      "Backend Services & APIs",
      "Data Analysis & Visualization",
      "Machine Learning Models",
      "Big Data Processing",
      "Cloud-Native Applications",
      "DevOps & Automation",
      "Database Design & Optimization"
    ]
    },
    {
      category: "Technologies",
    skills: [
      "React & Next.js",
      "Vue.js & Nuxt.js",
      "Angular",
      "Flutter & React Native",
      "Python & R",
      "Java & Spring Boot",
      "C# & .NET Core",
      "C++ & Go",
      "JavaScript & TypeScript",
      "Node.js & Express",
      "SQL & NoSQL Databases",
      "GraphQL & REST APIs",
      "AWS, Azure & Google Cloud",
      "Kubernetes & Docker",
      "CI/CD (GitHub Actions, Jenkins, GitLab CI)"
    ]
    },
    {
      category: "Specialties",
    skills: [
      "AI & Machine Learning",
      "Deep Learning (TensorFlow, PyTorch)",
      "Data Science & Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Financial Modeling & Quant Analysis",
      "Statistical Analysis",
      "Business Intelligence & Data Warehousing",
      "Cybersecurity & Encryption",
      "System Design & Architecture"
    ]
    }
  ];

  const techSkills = [
  { name: "React", icon: "⚛️" },
  { name: "Vue.js", icon: "🖖" },
  { name: "Angular", icon: "📐" },
  { name: "React Native", icon: "📱" },
  { name: "Python", icon: "🐍" },
  { name: "R", icon: "📊" },
  { name: "Java", icon: "☕" },
  { name: "C#", icon: "🎯" },
  { name: "C++", icon: "➕" },
  { name: "Go", icon: "🐹" },
  { name: "JavaScript", icon: "🟨" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Node.js", icon: "🟢" },
  { name: "GraphQL", icon: "🔺" },
  { name: "SQL", icon: "🗄️" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MySQL", icon: "🐬" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Redis", icon: "🟥" },
  { name: "Kafka", icon: "🌀" },
  { name: "Hadoop", icon: "🐘" },
  { name: "Spark", icon: "⚡" },
  { name: "TensorFlow", icon: "🔶" },
  { name: "PyTorch", icon: "🔥" },
  { name: "Keras", icon: "🧠" },
  { name: "Scikit-learn", icon: "📈" },
  { name: "AWS", icon: "☁️" },
  { name: "Azure", icon: "🔷" },
  { name: "Google Cloud", icon: "🌐" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "☸️" },
  { name: "Git", icon: "📝" },
  { name: "Jenkins", icon: "⚙️" },
  { name: "GitHub Actions", icon: "🤖" },
  { name: "Linux", icon: "🐧" },
  { name: "Bash/Shell", icon: "💻" }
  ];

  return (
    <section id="capabilities" style={{
      padding: '4rem 0',
      background: 'linear-gradient(180deg, white, #f9fafb)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1.5rem'
          }}>
            Capabilities
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#4b5563',
            maxWidth: '48rem',
            margin: '0 auto',
            lineHeight: '1.75'
          }}>
            Full-stack development, data science, and AI solutions to help bring your ideas to life
          </p>
        </div>

        {/* Capabilities Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '5rem'
        }}>
          {capabilities.map((category, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '1.5rem'
              }}>
                {category.category}
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} style={{
                    color: '#4b5563',
                    fontSize: '1.125rem',
                    marginBottom: '0.75rem'
                  }}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skills & Tools */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h3 style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1rem'
          }}>
            Skills & Tools
          </h3>
          <p style={{
            color: '#4b5563',
            marginBottom: '2rem'
          }}>
            Technologies I work with regularly
          </p>
        </div>

        {/* Tech Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1.5rem'
        }}>
          {techSkills.map((tech, index) => (
            <div
              key={index}
              className="skill-item card"
              style={{
                background: 'white',
                borderRadius: '0.5rem',
                padding: '1.5rem',
                textAlign: 'center',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                border: '1px solid #f3f4f6',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ fontSize: '1.875rem', marginBottom: '0.75rem' }}>{tech.icon}</div>
              <span style={{ color: '#374151', fontWeight: '500' }}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
