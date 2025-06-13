import{ useState } from "react";

const CategoryIcons = {
  "Backend Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M4 4h16v2H4V4zm0 14h16v2H4v-2zm0-7h16v2H4v-2zm0-3h16v2H4V8zm0 6h16v2H4v-2z" />
    </svg>
  ),
  "DevOps & Cloud": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M17 18a4 4 0 0 0 .88-7.91 5.5 5.5 0 0 0-10.76 1.26A4.5 4.5 0 0 0 7.5 18H17z" />
    </svg>
  ),
  "Automation & CI/CD": (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-6 h-6 text-[var(--sec)] opacity-70"
  >
    <path d="M12 2a1 1 0 0 1 1 1v1.07a7.002 7.002 0 0 1 4.93 4.93H19a1 1 0 1 1 0 2h-1.07a7.002 7.002 0 0 1-4.93 4.93V19a1 1 0 1 1-2 0v-1.07a7.002 7.002 0 0 1-4.93-4.93H5a1 1 0 1 1 0-2h1.07a7.002 7.002 0 0 1 4.93-4.93V3a1 1 0 0 1 1-1zm0 4a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5-5z" />
  </svg>
),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Backend Development": [
      "Development of RESTful APIs using .NET and Python",
      "Database design with MySQL and PostgreSQL",
      "Authentication, authorization, and role-based systems",
    ],
    "DevOps & Cloud": [
      "Infrastructure management with AWS and Terraform",
      "Containerization with Docker and orchestration with Kubernetes",
      "Version control and collaboration with Git and GitHub",
    ],
    "Automation & CI/CD": [
      "CI/CD pipelines with GitHub Actions",
      "Automated testing and deployments",
      "Shell scripting and automation with Bash",
    ],
  };
  
  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
