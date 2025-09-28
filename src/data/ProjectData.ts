export const csProjects = [
  {
  title: 'Outfit Recommendation Mobile App',
  description:
    'React Native app recommending outfits using CSP rules for weather, color, formality, and layering.',
  tags: ['CSP', 'React Native', 'Firebase', 'Flask', 'Recommendation Systems'],
  details: `Developed a mobile app to recommend daily outfits tailored to each user.
Used a constraint satisfaction problem (CSP) approach to enforce rules like color matching, layering order, and weather-appropriate clothing.
Integrated a Firebase backend for secure photo storage and retrieval of clothing items.
Built a Flask API to handle CSP solving logic and serve outfit combinations.
React Native was used for the front-end to ensure cross-platform deployment.
Added filters for formality and activity context to make results practical for everyday use.
Focused on intuitive user experience and the ability to extend rules easily.
The system balanced personalization with flexibility, encouraging exploration of new outfit choices.`,
  image: '/images/App1.png',
},
{
  title: '8-Puzzle AI Solver',
  description:
    'AI solver for the 8-puzzle using A*, UCS, and heuristics with focus on efficiency and memory use.',
  tags: ['AI', 'Search Algorithms', 'A*', 'Puzzle Solving', 'Heuristics'],
  details: `Implemented an AI solver for the classic 8-puzzle problem as a testbed for search algorithms.
Built out A* search with admissible heuristics like Manhattan distance and misplaced tiles.
Compared performance with uniform cost search and depth-first strategies.
Optimized memory usage to handle deeper puzzle configurations efficiently.
Wrote benchmarking tools to evaluate runtime and expansion node counts.
The project highlighted trade-offs between optimality, efficiency, and memory use.
It also served as an introduction to evaluating heuristic quality in practical settings.
Packaged results into visual demonstrations for better interpretability.`,
  video: '/videos/EightPuzzle.mp4',
  image: '/images/EightPuzzle.png',
},
{
  title: 'Racket-Based Language Interpreter',
  description:
    'Interpreter with variables, closures, control flow, and tail recursion in pure Racket style.',
  tags: ['Interpreters', 'Racket', 'Functional Programming', 'Closures', 'Control Flow'],
  details: `Created a custom interpreter in Racket with functional and declarative design principles.
Implemented lexical scoping, closures, and higher-order functions.
Added structured control flow support including if, while, break, and exception handling.
Focused on immutability and pure state-passing to avoid hidden side effects.
Enabled tail-call optimization for performance and correctness in recursion-heavy programs.
Designed short-circuit evaluation for boolean operators, reducing unnecessary computation.
The interpreter supported nested scopes and local environments.
This project served as both a language theory exercise and a systems-level coding challenge.`,
  image: '/images/LanguageInterpreter.png',
},
{
  title: 'De-identification Tool for Research Data',
  description:
    'Flask/Docker tool using NLP and AI tagging to anonymize text data for IRB compliance.',
  tags: ['NLP', 'Flask', 'Docker', 'De-identification', 'IRB Compliance'],
  details: `Built a de-identification pipeline to protect sensitive research data like interviews and surveys.
Integrated NLP models to detect and redact identifiers such as names, organizations, and locations.
Added AI-assisted tagging to improve coverage and reduce manual oversight.
Implemented as a Flask app for usability and wrapped in Docker for reproducibility.
Designed to comply with IRB requirements for handling human subject data.
Developed batch-processing capabilities for researchers handling large datasets.
Provided output in anonymized but context-preserving text for analysis.
This tool bridged NLP research with applied compliance needs in social science.`,
  image: '/images/Deidentify.png',
},
{
  title: 'Tax Policy Comparison Engine',
  description:
    'Dashboards comparing flat, regressive, and progressive tax impacts on income and inequality.',
  tags: ['Data Analysis', 'Tax Policy', 'Inequality', 'Google Sheets', 'Visualization'],
  details: `Analyzed tax systems to model their effects on income distribution and inequality.
Built dashboards to compare progressive, regressive, and flat tax structures.
Used visualization tools to highlight differences across U.S. states and international examples.
Focused on how policy choices shift tax burdens across income brackets.
Explored long-term implications for wealth distribution and inequality trends.
Enabled interactive exploration of hypothetical tax policies.
Designed for accessibility to both students and policy analysts.
The engine provided data-driven insights into often abstract political debates.`,
},
{
  title: 'City Livability Comparison Tool',
  description:
    'Tool ranking cities by income, taxes, jobs, and cost of living, with customizable factors.',
  tags: ['Data Science', 'City Rankings', 'Livability', 'Cost of Living', 'Tools'],
  details: `Developed a livability ranking system to evaluate cities across economic and lifestyle factors.
Combined data on income, cost of living, tax burdens, and employment opportunities.
Created customizable weights so users could prioritize what mattered most.
Synthesized multiple datasets into a consistent scoring and ranking model.
Designed an interface for easy comparison across U.S. metro areas.
Focused on helping students, professionals, and families make relocation decisions.
The tool highlighted trade-offs between affordability and opportunity.
Its modular design made it easy to add new cities or indicators over time.`,
},
{
  title: 'Domo Dashboard & ETL Automation System',
  description:
    'Interactive Domo dashboards with automated ETL for pricing, performance, and reporting.',
  tags: ['Domo', 'ETL Automation', 'Data Visualization', 'Competitive Analysis', 'Dashboards'],
  details: `Implemented a business intelligence solution for a multi-site self-storage company.
Created interactive dashboards in Domo to visualize pricing and occupancy.
Automated ETL pipelines to merge facility data with competitor pricing feeds.
Enabled real-time reporting to support strategic pricing decisions.
Designed KPI-driven dashboards for executives, regional managers, and analysts.
Reduced manual reporting effort by over 80% through automation.
Focused on scalability to support 18+ storage facilities.
Delivered actionable insights that improved revenue and efficiency.`,
  image: '/images/Domo Placeholder.png',
},
{
  title: 'Mac Mini Laptop Conversion',
  description:
    'Converted a Mac Mini into a portable laptop with custom wiring, LCD, battery, and cooling.',
  tags: ['Hardware Engineering', 'Mac Mini', 'Electronics', 'DIY Builds', 'Power Systems'],
  details: `Repurposed a Mac Mini into a fully functional portable laptop-style device.
Integrated a laptop LCD display using a custom controller board.
Added a rechargeable battery pack with regulated power delivery for portability.
Designed a cooling system to keep the Mac Mini stable under mobile use.
Embedded a keyboard, trackpad, and speakers into the custom enclosure.
Created custom wiring harnesses for power, display, and peripherals.
Tested multiple configurations for runtime and thermal performance.
This project combined DIY electronics, power systems, and enclosure design.`,
  image: '/images/MacMiniLaptop.png',
},
{
  title: 'Food Tracking App',
  description:
    'SwiftUI app for logging food with photos or text, tracking macros, progress, and insights.',
  tags: ['SwiftUI', 'Mobile App', 'Health Tracking', 'Nutrition', 'iOS Development'],
  details: `Designed a nutrition app to log meals via text entry, quick add, or photos.
Implemented calorie and macro tracking with real-time visualizations.
Built progress rings and trend graphs to motivate consistent tracking.
Added personalized insights and health warnings for unhealthy patterns.
Emphasized clean, modern UI using SwiftUI components and animations.
Focused on extensibility for future features like social sharing or barcode scanning.
Implemented persistent storage to save logs across sessions.
Aimed at combining usability with scientifically sound health tracking.`,
  image: '/images/FoodTracking.png',
},
{
  title: 'Storage Unit Finder App',
  description:
    'React Native app browsing self-storage units with filters, promotions, and sales-oriented UI.',
  tags: ['React Native', 'Web Scraping', 'APIs', 'Self-Storage', 'Frontend'],
  details: `Developed a React Native app to browse and compare self-storage unit availability.
Integrated scraped data from facility websites and processed via backend APIs.
Built filters for unit size, price, availability, and promotions.
Designed scrollable tiles with clear calls-to-action for sales conversion.
Created a responsive interface optimized for both mobile and tablet.
Focused on making the app sales-oriented rather than account-management.
Implemented logic to surface special deals and discounts first.
The app streamlined the unit selection process for potential renters.`,
  image: '/images/StorageUnitApp.png',
},
{
  title: 'Custom Email Client',
  description:
    'SwiftUI email client with multi-account support, threading, HTML rendering, and tagging.',
  tags: ['SwiftUI', 'Email Clients', 'iOS', 'UI/UX', 'Account Management'],
  details: `Built a custom email client to manage multiple accounts in one place.
Implemented inbox and detail views with modern SwiftUI design.
Supported email threading, search, and tagging for organization.
Added rendering of HTML emails alongside plain text.
Designed account management for easy adding/removing of providers.
Focused on responsive layouts for both iPhone and iPad.
Included user-centric features like favorites, folders, and notifications.
The client emphasized a balance of functionality and simplicity.`,
  image: '/images/EmailApp.png',
},
{
  title: 'Automated Job Posting Finder',
  description:
    'Python scraper aggregating jobs, filtering by skills and location, with alerts and logs.',
  tags: ['Python', 'Web Scraping', 'Automation', 'Job Search', 'Alerts'],
  details: `Created a Python script to aggregate job postings across multiple platforms.
Added filters for job title, skills, salary, and location.
Implemented deduplication to avoid repeat listings in results.
Stored logs in JSON for reproducibility and analysis over time.
Integrated with email alerts to send top results hourly/daily.
Focused on saving time during job searches with automated curation.
Built error handling for scraping different site structures.
The tool provided a lightweight, customizable job search assistant.`,
},
{
  title: 'Apartment Finder Tool',
  description:
    'Scraper with geofencing, NLP parking detection, and email alerts for rental listings.',
  tags: ['Python', 'NLP', 'Rental Listings', 'Geofencing', 'Automation'],
  details: `Developed a rental listing scraper to evaluate apartments against custom criteria.
Implemented geofencing to filter listings within defined map areas.
Used NLP to detect parking availability and amenities in descriptions.
Enabled filters for price, bedroom count, and unit type.
Automated hourly refreshes of new listings to keep results current.
Built an email notification system to push curated listings to users.
Focused on reducing manual apartment search time and effort.
Combined data engineering, NLP, and automation into one tool.`,
},
{
  title: 'Cleveland Housing Analytics Project',
  description:
    'React + MapLibre frontend with Flask APIs to analyze Cleveland housing vacancy and trends.',
  tags: ['React', 'MapLibre', 'Flask', 'SQLite', 'Data Visualization'],
  details: `Built a data analytics platform to study Cleveland housing vacancy and livability.
Created a React + MapLibre frontend with tract-level heatmaps.
Implemented a Flask + SQLite backend serving ACS-derived APIs.
Supported queries for poverty, occupancy, housing structure, and more.
Designed choropleth visualizations to highlight neighborhood disparities.
Added filters for demographic and structural characteristics.
Focused on turning raw datasets into actionable insights for policymakers.
Delivered an interactive map-based tool for exploring urban housing data.`,
  image: '/images/ClevelandHousing.png',
},

]
