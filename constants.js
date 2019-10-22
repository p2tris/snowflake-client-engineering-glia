// @flow
import * as d3 from 'd3'

export type TrackId = 'MOBILE' | 'WEB_CLIENT' | 'FOUNDATIONS' | 'INTEGRATIONS' |
  'PROJECT_MANAGEMENT' | 'COMMUNICATION' | 'CRAFT' | 'INITIATIVE' |
  'CAREER_DEVELOPMENT' | 'ORG_DESIGN' | 'WELLBEING' | 'ACCOMPLISHMENT' |
  'MENTORSHIP' | 'EVANGELISM' | 'RECRUITING' | 'COMMUNITY'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'MOBILE': Milestone,
  'WEB_CLIENT': Milestone,
  'FOUNDATIONS': Milestone,
  'INTEGRATIONS': Milestone,
  'PROJECT_MANAGEMENT': Milestone,
  'COMMUNICATION': Milestone,
  'CRAFT': Milestone,
  'INITIATIVE': Milestone,
  'CAREER_DEVELOPMENT': Milestone,
  'ORG_DESIGN': Milestone,
  'WELLBEING': Milestone,
  'ACCOMPLISHMENT': Milestone,
  'MENTORSHIP': Milestone,
  'EVANGELISM': Milestone,
  'RECRUITING': Milestone,
  'COMMUNITY': Milestone
}
export const milestones = [0, 1, 2, 3, 4, 5]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 12
    case 5: return 20
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '11': '1.3',
  '17': '2.1',
  '23': '2.2',
  '29': '2.3',
  '36': '3.1',
  '43': '3.2',
  '50': '3.3',
  '58': '4.1',
  '66': '4.2',
  '74': '4.3',
  '90': '5.1',
  '110': '5.2',
  '135': '5.3',
}

export const maxLevel = 135

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'MOBILE': Track,
  'WEB_CLIENT': Track,
  'FOUNDATIONS': Track,
  'INTEGRATIONS': Track,
  'PROJECT_MANAGEMENT': Track,
  'COMMUNICATION': Track,
  'CRAFT': Track,
  'INITIATIVE': Track,
  'CAREER_DEVELOPMENT': Track,
  'ORG_DESIGN': Track,
  'WELLBEING': Track,
  'ACCOMPLISHMENT': Track,
  'MENTORSHIP': Track,
  'EVANGELISM': Track,
  'RECRUITING': Track,
  'COMMUNITY': Track
|}

export const tracks: Tracks = {
  "MOBILE": {
    "displayName": "Mobile",
    "category": "A",
    "description": "Develops expertise in native mobile platform engineering, such as iOS or Android",
    "milestones": [{
      "summary": "Works effectively within established iOS or Android Glia SDKs, following current best practices",
      "signals": [
        "Troubleshoots native mobile apps using real devices and emulators",
        "Creates clear and understandable dev tickets of mobile issues",
        "Reuses existing components appropriately",
      ],
      "examples": [
        "Reproducing client reported issues on native apps",
        "Reading and understanding app logs",
        "Leads working session with client with dev",
        "Gathers sufficient info for devs and formats properly in ticets",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Understands clients implementations and code",
        "Able to set up simple app to replicate client setup and issues",
        "Able to have mobile SDK related debug session with client without devs and solve the problem",
        "Proposes solutions to client issues pointing to proper methods in SDK",
      ],
      "examples": [
        "Sets up/develops simple app to replicate client issue",
        "Propose solution to the issue with code examples, point out the place where issue comes from",
        "Successful working session with client without dev help about mobile SDK implementation",
        "Explains to client what to use and how without dev help",
      ],
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of mobile platform constraints",
      "signals": [
        "Complete understanding of Glia mobile SDKs",
      ],
      "examples": [
        "Develops sample apps using all the functionality provided by Glia mobile SDK (Android/iOS) and makes it open source",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      ],
      "examples": [
        "fixing bugs for mobile SDK, Adding test to mobile SDK",
      ],
    }, {
      "summary": "Is an expert in mobile engineering or sets strategic mobile direction for an eng team",
      "signals": [
        "Congrats - you are now maxed out, we have more challenges waiting for you, prob you want to explore dev tracks!",
      ],
      "examples": [
        "Congrats - you are now maxed out, we have more challenges waiting for you, prob you want to explore dev tracks!",
      ],
    }],
  },

  "WEB_CLIENT": {
    "displayName": "Web client",
    "category": "A",
    "description": "Develops expertise in web client technologies, such as HTML, CSS, and JavaScript",
    "milestones": [{
      "summary": "Works effectively within established web client architectures, following current best practices",
      "signals": [
        "Troubleshoot web client issues",
        "Knows way around in dev tools",
        "Able to call/execute JS in web console",
      ],
      "examples": [
        "Troubleshoot issues, understand where the problem is in a way that proper dev ticket can be created",
        "Understands REST API, JS SDK to clone site, add bulk users etc. using/modifying existing code snippets",
        "Understands, finds correct HTML elements for business rules",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Creates new code snippets using SDK/API",
        "Able to propose updates for existing behaviour/issue",
      ],
      "examples": [
        "Creates new scripts using APIs/SDKs to do bulk operations, modifications, updates - bulk adding operators, bulk adding transfer numbers",
        "Code snippets using JS SDK to set up queue buttons",
        "Understands CSS issues, is able to propose solutions to devs",
      ],
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of browser constraints",
      "signals": [
        "Understands and implements fully the visitor app using REST API and JS SDK, open sources the sample project as example",
      ],
      "examples": [
        "Implements JS SDK to create custom visitor app solution and open sources it - custom flow and custom behaviour of the app",
        "Creates custom skin (CSS, HTML) using JS SDK and open sources it",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migrations that reduce CE burden",
        "Implements complex UI transitions that bring delight",
        "Makes architectural decisions that eliminate entire classes of bugs",
      ],
      "examples": [
        "Creating tools to collect more data from the client using JS SDK - IE, firefox, mobile even. Similar to Twilio tool for WebRTC debug",
      ],
    }, {
      "summary": "Is an expert in web client or sets strategic web client direction for an eng team",
      "signals": [
        "Congrats - you are now maxed out, we have more challenges waiting for you, prob you want to explore dev tracks!",
      ],
      "examples": [
        "Congrats - you are now maxed out, we have more challenges waiting for you, prob you want to explore dev tracks!",
      ],
    }],
  },

  "FOUNDATIONS": {
    "displayName": "Foundations",
    "category": "A",
    "description": "Develops expertise in foundational systems, databases and OS",
    "milestones": [{
      "summary": "Works effectively within established structures, following current best practices",
      "signals": [
        "Able to use redash, able to gather relevant info from the system logs",
      ],
      "examples": [
        "Creates new and understands existing redash queries",
        "Able to set up bot to own test site",
        "Reads and understands logs so is able to reproduce flow",
        "Explaining password policy to client. Explaining security that we have in place - explains Luhn algorithm that we have for Credit Card info filtering",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Understanding DB schema and building on top of that complex queries in redash",
        "Able to create DB migrations for bulk actions, updates",
      ],
      "examples": [
        "Creates DB migration to bulk update, creates complex redash queries",
        "Creates complex AI setup with transfers etc",
        "Creating zipkin or logstash prebuilt queries",
        "Setting up SAML with client, explaining security to client",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        "Creating or improving existing system with a complex update",
        "Understand how DB and GitHub and other infrastructure parts works and behave",
      ],
      "examples": [
        "Creating/Improving CIE",
        "Adding new tables to Redash",
        "Adding a new locale",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Builds or implements multi system tools for others to use",
      ],
      "examples": [
        "Implementing redash/kibana",
        "Implementing centralised logging system with Glia, AWS, Twilio etc. logs",
        "Introduced Kinesis and pioneered streaming events pipeline",
      ],
    }, {
      "summary": "Is an expert in foundational engineering or sets strategic foundational direction for an eng team",
      "signals": [
        "Congrats - you are now maxed out, we have more challenges waiting for you, prob you want to explore dev ops, backend, infra dev track!",
      ],
      "examples": [
        "Congrats - you are now maxed out, we have more challenges waiting for you, prob you want to explore dev ops, backend, infra dev track!",
      ],
    }],
  },

  "INTEGRATIONS": {
    "displayName": "Integrations",
    "category": "A",
    "description": "Develops expertise in external, integratale systems such as SalesForce, Twilio, Amazon Connect etc.",
    "milestones": [{
      "summary": "Works effectively within established integrations, following current best practices",
      "signals": [
        "Understands and is able to make updates to existing integrations",
      ],
      "examples": [
        "Troubleshooting integration",
        "Updates twilio flow/aws connect flow, adds new users and configures them in aws flow, updates lambdas",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or major improvements to existing architecture",
      "signals": [
        "Creates new basic integration for client",
        "Integrates it with more than 1 system (i.e aws connect, lambda, salesforce)",
      ],
      "examples": [
        "Sets up complete new aws flow to a client from scratch",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        "Understands completely integration and architectural needs for new setup, executes it",
      ],
      "examples": [
        "Sets up multiple flows and complex multi system integration",
        "Creates lambdas and optimized flows",
        "Designs solution for client",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Delivers complex systems that achieve their goals",
        "Avoids subtle architectural mistakes when considering new systems",
      ],
      "examples": [
        "Come up with own visitor app flow that is open source, best practices recomended by glia, how to use the SDK",
        "Create Twilio, SalesForce package that integrates Glia. Greating integration with 3rd party",
        "Create Lambda that pushes and moves data between systems and open sourcing, making accessible to public (best practices are used)",
      ],
    }, {
      "summary": "Is an expert in server side engineering or sets strategic server side direction for an eng team",
      "signals": [
        "Congrats - you are now maxed out, we have more challenges waiting for you, prob you want to explore dev tracks!",
      ],
      "examples": [
        "Congrats - you are now maxed out, we have more challenges waiting for you, prob you want to explore dev tracks!",
      ],
    }],
  },

  "PROJECT_MANAGEMENT": {
    "displayName": "Project management",
    "category": "B",
    "description": "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
    "milestones": [{
      "summary": "Effectively delivers individual tasks",
      "signals": [
        "Estimates small tasks accurately",
        "Delivers tightly-scoped projects efficiently",
      ],
      "examples": [
        "Work through own tickets that are assigned",
        "Identifying when pairing is needed from CE or DEVs",
        "Asking relevant info from client",
      ],
    }, {
      "summary": "Effectively delivers small personal projects",
      "signals": [
        "Performs research and considers alternative approaches",
        "Balances pragmatism and polish appropriately",
        "Defines and hits interim milestones",
      ],
      "examples": [
        "Create audit for client cofiguration to bring clarity",
        "Handling new site setup",
      ],
    }, {
      "summary": "Effectively delivers projects through a small team",
      "signals": [
        "Delegates tasks to others appropriately",
        "Integrates business needs into project planning",
        "Chooses appropriate project management strategy based on context",
      ],
      "examples": [
        "Start and manage new initiative/product (such as CIE) - distribution of work, understanding scope and explaining it",
        "Running Standups and providing pointers, direction",
        "Advocating on behalf of the team in planning sessions",
      ],
    }, {
      "summary": "Effectively delivers projects through a large team, or with a significant amount of stakeholders or complexity",
      "signals": [
        "Finds ways to deliver requested scope faster, and prioritizes backlog",
        "Including different stakeholders to the project in appropriate time. Making sure nothing falls through the cracks predicting and forseeing",
        "Pushing client to get work done",
        "Figure out who, what, when needs to do and be on top of coordinating it",
      ],
      "examples": [
        "Setting up kickoff meetings to start integrations, projects with a client (full client setup)",
      ],
    }, {
      "summary": "Manages major company pushes delivered by multiple teams",
      "signals": [
        "Borderline between CE and CSM. Handling most of client meetings and moving them from 0 to 100",
      ],
      "examples": [
        "Take over the client handling from CSM in EU from beginning",
      ],
    }],
  },

  "COMMUNICATION": {
    "displayName": "Communication",
    "category": "B",
    "description": "Shares the right amount of information with the right people, at the right time, and listens effectively",
    "milestones": [{
      "summary": "Communicates effectively to close stakeholders when called upon, and incorporates constructive feedback",
      "signals": [
        "Communicates project status clearly and effectively",
        "Collaborates with others with empathy",
        "Asks for help at the appropriate juncture",
        "Understands when it is necessary to have response reviewed, able to make most client responses individually",
      ],
      "examples": [
        "Makes public comments without review necessary",
        "Asks CSMs to review sensitive topic responses",
      ],
    }, {
      "summary": "Communicates with the wider team appropriately, focusing on timeliness and good quality conversations",
      "signals": [
        "Understands and communicates blockers between stakeholders, sends out public announcements when necessary",
        "Practises active listening and suspension of attention",
        "Ensures stakeholders are aware of current blockers",
        "Chooses the appropriate tools for accurate and timely communication",
      ],
      "examples": [
        "Incident public announcement, complex system explenations, being able to guide conversation in debug/working sessions for internal meetings",
        "Set up and take lead in integration slack channel",
        "Leading investigation, pairing sessions",
      ],
    }, {
      "summary": "Proactively shares information, actively solicits feedback, and facilitates communication for multiple stakeholders",
      "signals": [
        "Being able to communicate and take lead in client conversations",
        "Communication is clear and well structured in those meetings",
      ],
      "examples": [
        "Explaining game plan and purpose in the beginning of meeting, able to clearly communicate how to open dev tools, how to execute console code",
        "Summarizes and sends summary email at the end and after the meeting",
        "Able to guide communication in client debug sessions, SDK and other technical talks with clients",
      ],
    }, {
      "summary": "Communicates complex ideas skillfully and with nuance, and establishes alignment within the wider organization",
      "signals": [
        "Able to discuss complex ideas and propose different features with clients. ",
        "Able to clearly communicate between CSM, devs and client different progress aspects and blockers and ideas",
      ],
      "examples": [
        "Communicating and understanding different client needs and guiding them clearly and understandably to most suitable direction",
        "Communicating that in a timely manner (already in planning and idea level) between product owner, dev team, CSM etc",
        "Explaining and proposing different business rules",
      ],
    }, {
      "summary": "Influences outcomes at the highest level, moves beyond mere broadcasting, and sets best practices for others",
      "signals": [
        "Clarifying best practices to enable others to use best ways of communication, bringing the communication best practices to repeatable state",
      ],
      "examples": [
        "Designing and adapting the processes working structure (i.e. standups restructure for the best way), Jira tickets fields update with prefilled data",
        "Organising training session to introduce best practices of communication",
      ],
    }],
  },

  "CRAFT": {
    "displayName": "Craft",
    "category": "B",
    "description": "Embodies and promotes practices to ensure excellent quality products and services",
    "milestones": [{
      "summary": "Delivers consistently good quality work",
      "signals": [
        "Tests new code thoroughly, both locally, and in production once shipped",
        "Documents properly all steps",
        "Writes clear comments and documentation",
        "Creates high quality dev tickets",
      ],
      "examples": [
        "Caught a bug on Hatch before it went live",
        "Records effectively all debug ideas and results in a ticket for a record and overview before involving other CE or DEV",
        "Tests client issues and their fixes in different environments additionally",
      ],
    }, {
      "summary": "Increases the robustness and reliability of codebases, and devotes time to polishing products and systems",
      "signals": [
        "Reviews created documentations",
        "Structurizes and proposes updates for existing info",
      ],
      "examples": [
        "Suggest better structure, order in Confluence/dev docs/support docs",
        "Writes techincal support documentation",
      ],
    }, {
      "summary": "Improves others' ability to deliver great quality work",
      "signals": [
        "Creating a process to create/update custom code",
        "Creating a repeatable process and improving it to work and be used by others, automating creation of value",
      ],
      "examples": [
        "Setting up and moving custom code to Git Repo",
        "Creating onboarding document",
        "Creating Beta validation flow and base template that can be cloned easily",
        "Creating email templates and convensions to use",
      ],
    }, {
      "summary": "Advocates for and models great quality with proactive actions, and tackles difficult and subtle system issues",
      "signals": [
        "Builds and sets up a system that brings a lot value",
        "Recognisez and takes action for close to large scale critical situations",
      ],
      "examples": [
        "Creates Service desk and sets up workflows and guidelines",
        "Enforces daily standups (or other necessary means) for critical clients or projects until things get solved",
        "Introducing the SLA framework",
      ],
    }, {
      "summary": "Enables and encourages the entire organization to make quality a central part of the CE process",
      "signals": [
        "Including other skillbases to widen the organization and expand",
        "Identifies and eliminates single points of failure throughout the organization",
        "Secures time and resources from execs to support great quality",
      ],
      "examples": [
        "Plans and scales the team in multiple locations with high quality, capacity planning, training on a bigger scale",
        "Introducing summer school training camp for bunch on new people",
      ],
    }],
  },

  "INITIATIVE": {
    "displayName": "Initiative",
    "category": "B",
    "description": "Challenges the status quo and effects positive organizational change outside of mandated work",
    "milestones": [{
      "summary": "Identifies opportunities for organizational change or product improvements",
      "signals": [
        "Pointing out places for improvement in the organisation/workflow/communications etc.",
        "Raises meaningful tensions in tactical meetings",
        "Raising awareness of a problem",
      ],
      "examples": [
        "Pointing out the Jira workflow does not work properly",
        "Recognise the Beta validation is too time consuming",
      ],
    }, {
      "summary": "Causes change to positively impact a few individuals or minor improvement to an existing product or service",
      "signals": [
        "Pointing out solutions to problems that could be done",
      ],
      "examples": [
        "Adding CE wishlist board an item to move locale updates to platform",
        "Proposing solutions proactively to others pointed problems",
        "Proposing and executing a solution like dev ticket template to improve quality",
      ],
    }, {
      "summary": "Causes change to positively impact an entire team or instigates a minor feature or service",
      "signals": [
        "Fixes complicated bugs outside of regular domain",
        "Takes ownership of systems that nobody owns or wants",
        "Demonstrates concepts proactively with prototypes",
      ],
      "examples": [
        "Take initiative of creating/implementing a useful tool i.e. CIE",
        "Introducing better logging system and working on implementign it",
        "Volunteering to be first responder for P1 incidents",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the engineering organization or a major product impact",
      "signals": [
        "Champions and pioneers new technologies to solve new classes of problem",
      ],
      "examples": [
        "Coming up with a prototype with some mobile framework like Cordova",
        "Creating the personal growth framework for CE",
        "Shaping the OnBoarding process",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the whole company",
      "signals": [
        "Creates a new function to solve systemic issues",
        "Galvanizes the entire company and garners buy in for a new strategy",
        "Changes complex organizational processes",
      ],
      "examples": [
        "Built Medium Android prototype and convinced execs to fund it",
        "Convinced leadership and engineering org to move to Medium Lite architecture",
      ],
    }],
  },

  "CAREER_DEVELOPMENT": {
    "displayName": "Career development",
    "category": "C",
    "description": "Provides strategic support to engineers to help them build the career they want",
    "milestones": [{
      "summary": "Gives insight into opportunities and helps identify individuals' strengths and weaknesses",
      "signals": [
        "Advocates on behalf and in defense of a group member",
        "Shares opportunities for improvements and recognises achievements",
        "Explains appropriate available industry paths",
      ],
      "examples": [
        "Collected and delivered feedback",
        "Discussed career options and areas of interest informally",
        "Hosted a Floodgate Academy intern",
      ],
    }, {
      "summary": "Formally supports and advocates for one person and provides tools to help them solve career problems",
      "signals": [
        "Ensure a group member has an appropriate role on their team",
        "Offers effective career advice to group members, without being prescriptive",
        "Creates space for people to talk through challenges",
      ],
      "examples": [
        "Set up and attended regular, constructive 1:1s",
        "Provided coaching on how to have difficult conversations",
        "Taught group members the GROW model",
      ],
    }, {
      "summary": "Inspires and retains a small group of people and actively pushes them to stretch themselves",
      "signals": [
        "Discusses paths, and creates plans for personal and professional growth",
        "Advocates to align people with appropriate roles within organization",
        "Works with team leads to elevate emerging leaders",
      ],
      "examples": [
        "Reviewed individual group member progression every 6 weeks",
        "Suggested appropriate group member for Tech Lead position",
        "Arranged a requested switch of discipline for a group member",
      ],
    }, {
      "summary": "Manages interactions and processes between groups, promoting best practices and setting a positive example",
      "signals": [
        "Manages team transitions smoothly, respecting team and individual needs",
        "Develops best practices for conflict resolution",
        "Ensures all group members' roles are meeting their career needs",
      ],
      "examples": [
        "Completed training on situational leadership",
        "Built a resourcing plan based on company, team, and individual goals",
        "Prevented regretted attrition with intentional, targeted intervention",
      ],
    }, {
      "summary": "Supports the development of a signficant part of the engineering org, and widely viewed as a trusted advisor",
      "signals": [
        "Supports and develops senior leaders",
        "Identified leadership training opportunities for senior leadership",
        "Pushes everyone to be as good as they can be, with empathy",
      ],
      "examples": [
        "Provided coaching to group leads",
        "Devised Pathwise curriculum for group leads",
        "Advocated to execs for engineer development resources and programs",
      ],
    }],
  },

  "ORG_DESIGN": {
    "displayName": "Org design",
    "category": "C",
    "description": "Defines processes and structures that enables the strong growth and execution of a diverse eng organization",
    "milestones": [{
      "summary": "Respects and participates in processes, giving meaningful feedback to help the organization improve",
      "signals": [
        "Reflects on meetings that leave them inspired or frustrated",
        "Teaches others about existing processes",
        "Actively participates and makes contributions within organizational processes",
      ],
      "examples": [
        "Facilitated effective tactical meeting with empathy",
        "Explained tactical meeting format to a new hire",
        "Provided feedback on sprint planning meeting",
      ],
    }, {
      "summary": "Identifies opportunities to improve existing processes and makes changes that positively affect the local team",
      "signals": [
        "Defines meeting structure and cadence that meets team needs",
        "Engages in organizational systems thinking",
        "Advocates for improved diversity and inclusion, and proposes ideas to help",
      ],
      "examples": [
        "Defined Frankenmeeting structure for small team",
        "Improved Watch on-call rotation scheduling",
        "Defined standard channels for inter-team communication",
      ],
    }, {
      "summary": "Develops processes to solve ongoing organizational problems",
      "signals": [
        "Creates programs that meaningfully improve organizational diversity",
        "Solves long-standing organizational problems",
        "Reallocates resources to meet organizational needs",
      ],
      "examples": [
        "Developed baseline team templates for consistency",
        "Created bug-rotation program to address ongoing quality issues",
        "Defined Guilds manifesto and charter",
      ],
    }, {
      "summary": "Thinks deeply about organizational issues and identifies hidden dynamics that contribute to them",
      "signals": [
        "Evaluates incentive structures and their effect on execution",
        "Analyzes existing processes for bias and shortfall",
        "Ties abstract concerns to concrete organizational actions or norms",
      ],
      "examples": [
        "Connected mobile recruiting difficulties to focus on excellence",
        "Raised leadership level change discrepancies",
        "Analyzed the hiring rubric for false negative potential",
      ],
    }, {
      "summary": "Leads initiatives to address issues stemming from hidden dynamics and company norms",
      "signals": [
        "Builds programs to train leadership in desired skills",
        "Creates new structures that provide unique growth opportunities",
        "Leads planning and communication for reorgs",
      ],
      "examples": [
        "Lead efforts to increase number of mobile engineers",
        "Directed resources to meaningfully improve diversity at all levels",
        "Built the growth framework rubric",
      ],
    }],
  },

  "WELLBEING": {
    "displayName": "Wellbeing",
    "category": "C",
    "description": "Supports the emotional well-being of group members in difficult times, and celebrates their successes",
    "milestones": [{
      "summary": "Uses tools and processes to help ensure colleagues are healthy and happy",
      "signals": [
        "Keeps confidences unless legally or morally obliged to do otherwise",
        "Applies the reasonable person principle to others",
        "Avoids blame and focuses on positive change",
      ],
      "examples": [
        "Ensured group members were taking enough vacation",
        "Put themself in another's shoes to understand their perspective",
        "Checked in with colleague showing signs of burnout",
      ],
    }, {
      "summary": "Creates a positive, supportive, engaging team environment for group members",
      "signals": [
        "Sheds light on other experiences to build empathy and compassion",
        "Validates ongoing work and sustains motivation",
        "Proposes solutions when teams get bogged down or lose momentum",
      ],
      "examples": [
        "Coordinated a small celebration for a project launch",
        "Connected tedious A|B testing project with overall company goals",
        "Noted a team without a recent win and suggested some easy quick wins",
      ],
    }, {
      "summary": "Manages expectations across peers, leads in the org, promotes calm, and prevents consensus building",
      "signals": [
        "Trains group members to separate stimulus from response",
        "Maintains a pulse on individual and team morale",
        "Helps group members approach problems with curiosity",
      ],
      "examples": [
        "Completed training on transference and counter transference",
        "Completed training on compromise and negotiation techniques",
        "Reframed a problem as a challenge, instead of a barrier, when appropriate",
      ],
    }, {
      "summary": "Advocates for the needs of teams and group members, and proactively works to calm the organization",
      "signals": [
        "Ensures team environments are safe and inclusive, proactively",
        "Grounds group member anxieties in reality",
        "Tracks team retention actively and proposes solutions to strengthen it",
      ],
      "examples": [
        "Relieved org tension around product direction by providing extra context",
        "Encouraged group members to focus on what they can control",
        "Guided people through complex organizational change",
      ],
    }, {
      "summary": "Manages narratives, channels negativity into inspiration and motivation, and protects the entire team",
      "signals": [
        "Recognizes and points out narratives when appropriate",
        "Works to reshape narratives from victimization to ownership",
        "Increases the psychological safety of the entire team",
      ],
      "examples": [
        "Converted group member from a problem haver to a problem solver",
        "Challenged false narrative and redirected to compassion and empathy",
        "Cultivated and championed a culture of empathy within the entire team",
      ],
    }],
  },

  "ACCOMPLISHMENT": {
    "displayName": "Accomplishment",
    "category": "C",
    "description": "Inspires day to day excellence, maximises potential and effectively resolves performance issues with compassion",
    "milestones": [{
      "summary": "Helps individuals identify blockers and helps them identify next steps for resolution",
      "signals": [
        "Notices when someone is stuck and reaches out",
        "Helps others break down problems into feasible, tangible next steps",
        "Talks through problems non-judgmentally",
      ],
      "examples": [
        "Completed training on diagnosing problems",
        "Unblocked a group member",
        "Reinforces and affirms positive feedback for good work",
      ],
    }, {
      "summary": "Helps individuals resolve difficult performance issues, with insight, compassion, and skill",
      "signals": [
        "Gathers context outside the immediate problem",
        "Recognizes issues within local environment and suggests change",
        "Works to encourage ownership of actions and responsibilities",
      ],
      "examples": [
        "Completed training on decision making",
        "Convinced a group member to solve a problem directly, rather than doing it for them",
        "Gave honest feedback about poor performance, with compassion",
      ],
    }, {
      "summary": "Intervenes in long-standing performance issues with targeted behavior change or performance plans",
      "signals": [
        "Aggregates signals of poor performance and creates process for improvement",
        "Investigates motivation and externalities for consistent poor performance",
        "Puts together comprehensive, achievable performance plans",
      ],
      "examples": [
        "Worked with group member to address persistent communication failures",
        "Arranged a transfer to another team, resulting in improved performance",
        "Managed group member closely to maximise chances of PIP success",
      ],
    }, {
      "summary": "Mediates escalated situations, empowers underperforming teams, and resolves conflict",
      "signals": [
        "Recognizes heightened situations and toxic or aggressive interactions",
        "Inserts themself into conflict where appropriate to calm and mediate",
        "Encourages open dialog and builds trust between parties in conflict",
      ],
      "examples": [
        "Empowered a team to drive forward amidst uncertainty",
        "Protected team from externalities so they could focus on goals",
        "Mediated sit-down between team members to address tension",
      ],
    }, {
      "summary": "Resolves complex organizational dysfunction, or persistent conflict at senior levels",
      "signals": [
        "Takes control of dysfunctional teams to organise chaos",
        "Repairs broken team dynamics and builds harmony",
        "Presides over a well-oiled team of teams",
      ],
      "examples": [
        "Turned around the performance of a problematic team",
        "De-escalated serious tensions between teams",
        "Rebuilt trust between senior team leads",
      ],
    }],
  },

  "MENTORSHIP": {
    "displayName": "Mentorship",
    "category": "D",
    "description": "Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures",
    "milestones": [{
      "summary": "Informally mentors individuals in an ad-hoc way, supports new hires, and conveys institutional knowledge",
      "signals": [
        "Makes themself available for informal support and advice",
        "Acts as sounding board for peers and more junior members",
        "Provides sound advice when asked",
      ],
      "examples": [
        "Acted as an onboarding buddy",
        "Paired with an engineer to help them with an unfamiliar area",
        "Helped a colleague understand their feelings",
      ],
    }, {
      "summary": "Mentors people proactively, and guides people to realizations rather than providing the answer",
      "signals": [
        "Takes time to explain concepts and best practices",
        "Asks questions to illuminate concepts, rather than stating them",
        "Allows others to lead efforts when it will help their development",
      ],
      "examples": [
        "Shared interesting article with a team member to help with their growth",
        "Offered unprompted feedback to help growth, with empathy",
        "Lead from behind to support someone new to a leadership role",
      ],
    }, {
      "summary": "Teaches small groups of engineers and contributes to Medium's shared knowledge base",
      "signals": [
        "Avoids siloing information when it can be usefully shared with others",
        "Works to increase the bus factor of systems",
        "Finds tools that work best for a team member's personality",
      ],
      "examples": [
        "Gave a brown bag presentation on payments",
        "Wrote Hatch post on avoiding RDS backfill issues",
        "Wrote Medium-U content module",
      ],
    }, {
      "summary": "Encourages people to mentor each other, and creates ways for them to do so",
      "signals": [
        "Defines an entire curriculum for a discipline",
        "Draws positive attention to well-modeled mentor and teaching behaviours",
        "Creates brown bag series and lines up speakers",
      ],
      "examples": [
        "Created and lead Medium's Women in Eng group",
        "Organized an Eng All Hands with an outside speaker",
        "Designed and taught web client guild curriculum",
      ],
    }, {
      "summary": "Instills and promotes a culture of learning and development within the team",
      "signals": [
        "Sets incentive structures to recognise and reward mentorship",
        "Empowers team members to develop themselves",
        "Role models productive and healthy mentor relationships",
      ],
      "examples": [
        "Instituted the professional education budget for engineers",
        "Mentored mentors",
        "Started the eng advisor program and lined up external mentors",
      ],
    }],
  },

  "EVANGELISM": {
    "displayName": "Evangelism",
    "category": "D",
    "description": "Promotes Medium to the outside world and establishes it as an attractive and thoughtful place to work",
    "milestones": [{
      "summary": "Represents Medium well externally, and influences individuals positively",
      "signals": [
        "Shares personal and organizational successes with their network",
        "Attends Medium-hosted events and talks with guests",
        "Communicates genuine and honest excitement about their work externally",
      ],
      "examples": [
        "Shared a Medium product launch post on Facebook",
        "Acted as a guide for a non-friend visitor to the office",
        "Supported PR efforts by giving a quote or having a photo taken",
      ],
    }, {
      "summary": "Participates more centrally in small events, and takes simple actions that positively influence groups of people",
      "signals": [
        "Takes meaningful action to introduce people to Medium",
        "Joined public Slack group and represented Medium appropriately, and well",
        "Organizes positive small- or medium-sized events that bring people to Medium",
      ],
      "examples": [
        "Volunteered as a helper for CODE2040 writing workshop",
        "Organized a short tour of the office by college students",
        "Talked at a Women Who Code event hosted at Medium",
      ],
    }, {
      "summary": "Works hard to positively influence large groups of people on their views of Medium",
      "signals": [
        "Mentors or participates in a high visibility way in an external organization",
        "Builds fruitful partnerships with external organizations",
        "Writes blog posts about Medium that receive moderate traffic",
      ],
      "examples": [
        "Represented Medium on a panel at a conference of industry experts",
        "Established close ties with Creative Commons",
        "Built a durable, long-standing relationship with Code2040",
      ],
    }, {
      "summary": "Establishes Medium as an great, innovative company and workplace to the whole industry",
      "signals": [
        "Establishes themself as an industry thought leader who attracts talent",
        "Publishes material about Medium's organizational or technical innovations",
        "Leverages significant following to evangelise Medium",
      ],
      "examples": [
        "Published a paper on Medium technology in a peer-reviewed journal",
        "Authored joint-press release with EFF on DNT",
        "Published “Why Content Editable Is Terrible” on the Medium engineering blog",
      ],
    }, {
      "summary": "Introduces Medium in a positive light to a wider audience outside the industry",
      "signals": [
        "Delivers key messages to broad, mainstream audiences",
        "Influences people with large audiences to talk about Medium positively",
        "Drives recognition and adoption of Medium in significant numbers",
      ],
      "examples": [
        "Published or interviewed in a mainstream newspaper or website outside tech",
        "Keynoted a conference with international attention",
        "Represented Medium in national televised media",
      ],
    }],
  },

  "RECRUITING": {
    "displayName": "Recruiting",
    "category": "D",
    "description": "Strengthens Medium's team by bringing in excellent staff members",
    "milestones": [{
      "summary": "Brings new candidates into the pipeline and understands how to evaluate candidates at Medium",
      "signals": [
        "Reviews existing network for hiring leads regularly",
        "Shadows interviews to gain familiarity with process",
        "Reviews current job postings regularly",
      ],
      "examples": [
        "Completed interview calibration",
        "Set up casual sessions to practice asking questions",
        "Referred appropriate individuals for open positions",
      ],
    }, {
      "summary": "Interviews regularly, helps the team make meaningful hiring decisions, and helps build a diverse pipeline",
      "signals": [
        "Uses interview rubric to provide clear, objective feedback on candidates",
        "Interviews candidates with empathy and treats them all with equal respect",
        "Researches approaches for sourcing candidates and diversifying hiring",
      ],
      "examples": [
        "Added observable evidence for every rating",
        "Started a monthly brunch for candidates to meet Medium employees",
        "Tested a new service for quality and diversity of candidates",
      ],
    }, {
      "summary": "Maintains and strengthens the integrity of the current process, and regularly brings in great candidates",
      "signals": [
        "Teaches new interviewers how to interview with empathy",
        "Models great interview technique and feedback when shadowed",
        "Reverse shadows trainees and helps calibrate their feedback",
      ],
      "examples": [
        "Wrote new interview question which meets our question quality criteria",
        "Brought candidates into our pipeline proactively, with a high conversion rate",
        "Proposed useful, tangible improvements to the interview process",
      ],
    }, {
      "summary": "Actively contributes to and leads hiring decisions, and goes to great lengths to source great candidates",
      "signals": [
        "Documents subtle cues in interviews that indicate values alignment",
        "Makes hiring decisions, resolving discrepancies between conflicting reports",
        "Top-grades candidates and teases out character traits",
      ],
      "examples": [
        "Planned engineering summit on interview process and training",
        "Organized and lead Medium's presence at a recruitment fair",
        "Started CODE2040 internship program",
      ],
    }, {
      "summary": "Sets recruitment strategy, invests in long-term relationships for critical roles, and recruits at scale",
      "signals": [
        "Sets the tone, policy and goals around building a diverse, high-quality team",
        "Identifies and brings in promising acquisitions",
        "Tracks industry activity, identifying opportunities for critical roles",
      ],
      "examples": [
        "Talked with a senior candidate over many months to fill a critical role",
        "Organized efforts around convincing acquired engineers to join and stay",
        "Set goals, then tracked and reported metrics on team demographics over time",
      ],
    }],
  },

  "COMMUNITY": {
    "displayName": "Community",
    "category": "D",
    "description": "Builds community internally, gives of themself to the team, and champions and extols company values",
    "milestones": [{
      "summary": "Is available and present on current teams, and works to contribute positively to company culture",
      "signals": [
        "Participates in team activities and offsites",
        "Treats colleagues and clients with respect",
        "Joins groups or committees outside regular duties",
      ],
      "examples": [
        "Joined and actively participated in the web client guild",
        "Brought a small gift back from vacation for the team",
        "Wrote entertaining and informative Prod Ops writeups on Hatch",
      ],
    }, {
      "summary": "Steps up, builds connectedness, and takes concrete actions to promote an inclusive culture",
      "signals": [
        "Makes space for others to participate",
        "Collaborates with other engineers outside direct responsibilities",
        "Finds ways to ramp up and engage new hires quickly",
      ],
      "examples": [
        "Created onboarding bingo",
        "Brought shy and introverted people into a dominant conversation",
        "Volunteered as secretary for a team",
      ],
    }, {
      "summary": "Contributes to improving team relatedness, and helps build a culture of lending support",
      "signals": [
        "Takes on additional Watch shifts at short notice",
        "Pitches in to help other teams hit deadlines, without missing own deadlines",
        "Uses position to raise difficult issues on someone's behalf",
      ],
      "examples": [
        "Lead Watch cycles with little support while still contributing to projects",
        "Started and drove the LGBTQIA ERG",
        "Stayed positive and improved team morale during period after layoffs",
      ],
    }, {
      "summary": "Exemplifies selflessness for the team without compromising responsibilities, and lifts everyone up",
      "signals": [
        "Goes above and beyond on the Watch, serving the team without complaint",
        "Implements concrete programs to signficantly improve team inclusivity",
        "Takes on large amounts of tedious grunt work for the team without being asked",
      ],
      "examples": [
        "Devoted large amount of time to helping outside direct responsibilities",
        "Refactored hundreds of legacy Shepherd nodes",
        "Acted as sole maintainer of Boxen for years",
      ],
    }, {
      "summary": "Lives the company values, guards positive culture, and defines policies that support relatedness between teams",
      "signals": [
        "Brings separate teams together to build relatedness",
        "Holds individuals, teams, and leadership accountable to Medium's values",
        "Sets the tone, policy, and goals around maintaining an inclusive company",
      ],
      "examples": [
        "Organized wine and olive tasting offsite to Napa for the whole engineering org",
        "Devised, delivered and acted on findings from an engineer happiness survey",
        "Challenged and corrected exclusionary behaviour or policies",
      ],
    }],
  },
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#00abc2', '#428af6', '#e1439f', '#e54552'])

export const titles = [
  {label: 'Engineer I', minPoints: 0, maxPoints: 16},
  {label: 'Engineer II', minPoints: 17, maxPoints: 35},
  {label: 'Senior Engineer', minPoints: 36, maxPoints: 57},
  {label: 'Group Lead', minPoints: 36, maxPoints: 57},
  {label: 'Staff Engineer', minPoints: 58, maxPoints: 89},
  {label: 'Senior Group Lead', minPoints: 58, maxPoints: 89},
  {label: 'Principal Engineer', minPoints: 90},
  {label: 'Director of Engineering', minPoints: 90}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
