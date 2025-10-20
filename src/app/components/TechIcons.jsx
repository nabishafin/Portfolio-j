function TechIcons({ technologies, activeTab, setSelectedTech }) {
  return (
    <div className="grid grid-cols-3 gap-8 max-w-md">
      {technologies.map((tech, index) => (
        <div
          key={`${activeTab}-${tech.name}`}
          className="group relative flex flex-col items-center gap-4 animate-fade-in cursor-pointer"
          style={{
            animationDelay: `${index * 100}ms`,
            animationFillMode: "both",
          }}
          onClick={() => setSelectedTech(tech)}
        >
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:border-white group-hover:shadow-2xl"
              style={{ boxShadow: `0 0 20px ${tech.color}` }}
            >
              <span className="text-4xl" style={{ color: tech.color }}>
                {tech.icon}
              </span>
            </div>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="absolute -inset-2 rounded-full bg-white opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-300"></div>
          </div>
          <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default TechIcons;
