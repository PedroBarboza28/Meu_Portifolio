
const TechLogosStyles = () => {
  const technologies = [
    {
      name: "JavaScript",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
      name: "Python",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    },
    {
      name: "ReactJS",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
      name: "Angular",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-plain.svg",
    },
    {
      name: "MySQL",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    },
    {
      name: "Git",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Jest",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg",
    },
    {
      name: "Swagger",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swagger/swagger-original.svg",
    },
    {
      name: "Vercel",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
    },
  ];

  const logos = [
    { className: "w-15 h-15 rounded-full", title: "Circular" },
    { className: "w-10 h-10 rounded-full opacity-50", title: "Circular com Opacidade" },
    { className: "w-12 h-12 border-4 border-blue-500 rounded-full animate-bounce", title: "Borda com Bouncing" }
  ];

  return (
    <div className="flex flex-col items-center space-y-8">
      {technologies.map((tech) => (
        <div key={tech.name} className="flex flex-col items-center space-y-4">
          <h2 className="text-xl font-bold">{tech.name} Logo com Estilos Diferentes</h2>
          {logos.map((logo, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-lg font-semibold">{logo.title}</h3>
              <img
                src={tech.logo}
                alt={`${tech.name} Logo`}
                className={logo.className}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TechLogosStyles;
