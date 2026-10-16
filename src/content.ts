// Single source of truth. Edit contact details and links here.
export const site = {
  name: 'Anas Elmoftahgy', monogram: 'AE',
  email: 'anaselmoftahgy1@gmail.com', phone: '+201095161970',
  linkedin: 'https://linkedin.com/in/anas-elmoftahgy',
  github: '' as string, // add your GitHub URL here; it appears automatically
  location: 'Cairo, Egypt',
  photo: '/images/anas-profile.jpg', // replace the file or change this path
  photoAlt: 'Portrait of Anas Elmoftahgy, smiling with arms crossed, in a light grey polo shirt',
}
export const nav = ['About', 'Projects', 'Experience', 'Skills', 'Contact']
export const about = [
  'I study Computer Science at Arab Open University and trained as a software tester through the Digital Egypt Pioneers Initiative.',
  'I also founded and run Wandy, a local brand, where I handle operations, sales, brand strategy, web design and digital marketing. Running a real business taught me what reliable digital products need.',
  'I am most interested in the space where software quality meets business strategy.',
]
export const projects = [
  { id: 'fore', title: 'Fore.', cat: 'AI personal finance app · Proposed concept', ctx: 'Dell Technologies Summer Technology Internship 2026',
    overview: 'A proposed AI-powered personal finance app for young adults, built around preventing overspending before it happens rather than only tracking past spending. Developed collaboratively; it is a concept, not a launched product.',
    role: 'Contributed to research, concept development and the team presentation to Dell Technologies stakeholders.',
    points: ['AI Financial Coach that answers from the user’s real budget and live spending forecast','Personalized saving plans, financial goals and early overspending warnings','Automated transaction classification and receipt OCR for Arabic and English receipts','Financial Health Score concept','Privacy framework: read-only data access, encryption, on-device AI processing'],
    tech: ['React Native / Flutter (proposed)', 'Cloud infrastructure (proposed)', 'Predictive forecasting models (proposed)'] },
  { id: 'saucedemo', title: 'SauceDemo — Swag Lab', cat: 'Software QA case study', ctx: 'DEPI Capstone · March – April 2026',
    overview: 'End-to-end testing of the SauceDemo web application, done by a team of 5 across a 20-day sprint (80 hours), covering 9 user stories: Login, Product Sorting, Cart Management, Checkout and Logout.',
    role: 'Tester within a five-stream team, collaborating on a consolidated project handoff.',
    points: ['Static testing: requirements and design review','Manual testing: test cases, bug reports and test summary reports on Chrome and Safari','Mobile testing on Android and iOS with full documentation','API testing: designed and executed test cases, reported defects','Automation testing scripts with documented results','Risk assessment: deadlines, team availability, collaboration alignment'],
    tech: ['Jira', 'Postman', 'Selenium', 'ISTQB 4 foundations'] },
  { id: 'wandy', title: 'Wandy', cat: 'Entrepreneurship · Local brand', ctx: 'Founder and owner · Ongoing',
    overview: 'A local brand I founded and manage, covering the full lifecycle from concept to launch and adjusting strategy based on market feedback.',
    role: 'Business Owner and Software Tester, self-employed.',
    points: ['Business operations, business development, sales and brand strategy','Web design and development with Figma and WordPress','Digital marketing campaigns on Meta Business Suite and Google Ads','E-commerce and customer experience','Software testing fundamentals applied to digital products and web deployments'],
    tech: ['Figma', 'WordPress', 'Meta Business Suite', 'Google Ads'] },
]
export const timeline = [
  { when: 'Ongoing', kind: 'Entrepreneurship', title: 'Business Owner / Software Tester', org: 'Wandy (local brand), self-employed', text: 'Founded and manage the brand: operations, sales, brand strategy, web design, digital marketing and quality checks on web deployments.' },
  { when: 'Dell Technologies Egypt · 2026', kind: 'Internship', title: 'Summer Technology Internship', org: 'Dell Technologies Egypt', text: 'Part of the team that researched and presented the Fore. concept.' },
  { when: 'Dec 2025 – Jul 2026', kind: 'Training program', title: 'Software Development: Software Tester Track', org: 'Digital Egypt Pioneers Initiative (DEPI), Ministry of Communications & IT', text: 'Prompt Engineering, Java fundamentals, ISTQB 4 fundamentals, static testing (Jira), test tools (Postman, Selenium), test analysis and design, managing test activities, capstone project.' },
  { when: 'Expected 2029', kind: 'Education', title: 'BSc Computer Science', org: 'Arab Open University, Egypt Branch', text: 'Coursework: Software Engineering, Data Structures, Web Development, Database Systems.' },
]
export const skills = {
  'Software Testing': ['Functional testing','Test planning','Bug tracking','Testing across the SDLC','Deployment strategies','Maintenance'],
  'Web and Design': ['HTML / CSS','Figma','WordPress','UX design principles','User research'],
  'Digital Marketing': ['SEO','Google Ads','Meta Business Suite','E-commerce','Content marketing'],
  'AI and Data': ['AI fundamentals','Data analysis foundations','Prompt writing','Cybersecurity awareness'],
  'Business': ['Sales strategy','Brand development','Project management','Market analysis'],
}
export const certs = {
  'Government and industry': ['Digital Egypt Pioneers Program: Software Development, Software Tester (DEPI), Dec 2025 – Jul 2026','Dell Technologies Summer Technology Internship 2026 (Dell Technologies Egypt)','Fundamentals and Applications in Artificial Intelligence (BUE, Faculty of Engineering), 12 hours'],
  'Google / Coursera': ['AI Fundamentals','Introduction to AI','Start Writing Prompts like a Pro','Foundations of Cybersecurity','Foundations: Data, Data, Everywhere','Foundations of Digital Marketing & E-commerce','Foundations of UX Design'],
  'IBM / Coursera': ['Software Testing, Deployment & Maintenance Strategies'],
  'Google Digital Garage': ['Fundamentals of Digital Marketing'],
}
