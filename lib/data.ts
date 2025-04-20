export interface Job {
  id: string
  title: string
  company: string
  location: string
  type: string
  salary: string
  description: string
  requirements: string[]
  posted: string
  logo: string
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA (Remote)",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    description:
      "We're looking for a skilled Frontend Developer to join our team and help build beautiful, responsive web applications using React and Next.js.",
    requirements: [
      "3+ years of experience with React",
      "Experience with Next.js",
      "Strong understanding of HTML, CSS, and JavaScript",
      "Experience with Tailwind CSS or similar utility-first CSS frameworks",
      "Knowledge of responsive design and cross-browser compatibility",
    ],
    posted: "2 days ago",
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "2",
    title: "Backend Engineer",
    company: "DataSystems",
    location: "New York, NY (Hybrid)",
    type: "Full-time",
    salary: "$100,000 - $140,000",
    description:
      "Join our backend team to design and implement scalable APIs and services that power our data-intensive applications.",
    requirements: [
      "4+ years of experience with Node.js or Python",
      "Experience with SQL and NoSQL databases",
      "Knowledge of RESTful API design",
      "Understanding of microservices architecture",
      "Experience with cloud platforms (AWS, GCP, or Azure)",
    ],
    posted: "1 week ago",
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "3",
    title: "UX/UI Designer",
    company: "CreativeMinds",
    location: "Austin, TX (Remote)",
    type: "Full-time",
    salary: "$85,000 - $110,000",
    description:
      "We're seeking a talented UX/UI Designer to create intuitive and engaging user experiences for our digital products.",
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency with design tools like Figma or Sketch",
      "Strong portfolio demonstrating user-centered design process",
      "Experience with design systems",
      "Knowledge of accessibility standards",
    ],
    posted: "3 days ago",
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "CloudNative",
    location: "Seattle, WA (On-site)",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description: "Help us build and maintain our cloud infrastructure, CI/CD pipelines, and deployment processes.",
    requirements: [
      "4+ years of experience in DevOps or SRE roles",
      "Experience with Kubernetes and Docker",
      "Knowledge of infrastructure as code (Terraform, CloudFormation)",
      "Experience with CI/CD tools (Jenkins, GitHub Actions)",
      "Strong scripting skills (Bash, Python)",
    ],
    posted: "5 days ago",
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "5",
    title: "Data Scientist",
    company: "AnalyticsPro",
    location: "Boston, MA (Hybrid)",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description:
      "Join our data science team to develop machine learning models and extract insights from large datasets.",
    requirements: [
      "MS or PhD in Computer Science, Statistics, or related field",
      "3+ years of experience in data science or machine learning",
      "Proficiency in Python and data science libraries (NumPy, Pandas, scikit-learn)",
      "Experience with deep learning frameworks (TensorFlow, PyTorch)",
      "Strong statistical knowledge and data visualization skills",
    ],
    posted: "2 weeks ago",
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "6",
    title: "Product Manager",
    company: "InnovateTech",
    location: "Chicago, IL (Remote)",
    type: "Full-time",
    salary: "$95,000 - $130,000",
    description:
      "Lead the development of innovative products from conception to launch, working closely with design, engineering, and marketing teams.",
    requirements: [
      "4+ years of experience in product management",
      "Experience with agile development methodologies",
      "Strong analytical and problem-solving skills",
      "Excellent communication and stakeholder management abilities",
      "Technical background preferred",
    ],
    posted: "1 week ago",
    logo: "/placeholder.svg?height=80&width=80",
  },
]
