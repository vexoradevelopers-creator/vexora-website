/** Single source of truth for everything that appears in more than one place. */

export const company = {
  legalName: "Vexora Developers & Consulting Private Limited",
  shortName: "Vexora",
  regNo: "402129/83/84",
  phone: "+977 9749849725",
  phoneHref: "tel:+9779749849725",
  email: "vexoradevelopers@gmail.com",
  emailHref: "mailto:vexoradevelopers@gmail.com",
  address: "Khairahani-01, Chitwan, Nepal",
  hours: "[MON-SAT, 10:00-19:00 NPT]",
} as const;

export const socials = [
  {
    label: "LinkedIn",
    // Resolved from the organisation id in the search link you sent.
    href: "https://www.linkedin.com/company/143674980/",
    short: "in",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/vexoradeveleopers/",
    short: "ig",
  },
] as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/how-we-work", label: "How we work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const stack = [
  "React",
  "Next.js",
  "Node.js",
  "React Native",
  "Unity",
  "Python",
  "PostgreSQL",
  "AWS",
] as const;

export const projectTypes = [
  "Web app",
  "Website",
  "Mobile app",
  "Game",
  "Consulting",
  "Not sure",
] as const;

export const problems = [
  {
    title: "Tools that almost fit",
    problem:
      "You bend your process around the software instead of the other way round, and every month costs a little more time than it should.",
    answer:
      "we map how your team works today, then build to that. No feature you will never open.",
  },
  {
    title: "Websites that look good and do nothing",
    problem:
      "A handsome page nobody finds, with no clear next step for the few people who do.",
    answer:
      "every page is built around one action: the enquiry, the booking, the call. Search basics included, not sold separately.",
  },
  {
    title: "Handover that leaves you stranded",
    problem:
      "The code sits in someone else's account. Changing vendor means starting over.",
    answer:
      "repositories, domains and hosting are in your name from day one. You could replace us tomorrow.",
  },
  {
    title: "Quotes that move after you sign",
    problem:
      "The number at the start and the number on the invoice turn out to be two different numbers.",
    answer:
      "fixed scope, fixed price, fixed dates, written down before any money moves. Changes get re-quoted, not absorbed quietly.",
  },
  {
    title: "Nobody to call after launch",
    problem:
      "Something breaks on a Friday and you are emailing a shared inbox, hoping.",
    answer:
      "a named person, a phone number, and a response window written into the contract.",
  },
  {
    title: "Work you can't see until it's late",
    problem:
      "Weeks of silence, then a demo that is not quite what you had in your head.",
    answer:
      "a working link every week from week one. Course-correct early, while it is still cheap.",
  },
] as const;

export const services = [
  {
    slug: "web-applications",
    n: "01",
    title: "Web applications",
    tagline: "The software your team lives in all day.",
    body: "Internal tools, client portals, dashboards and workflow systems. Built for when a spreadsheet has stopped being enough and off-the-shelf software has stopped fitting.",
    includes: [
      "Role-based logins and permissions",
      "Document upload, versions and sharing",
      "Status tracking and reminders",
      "Reports and exports",
      "An admin area your team can run without us",
    ],
    tech: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
    duration: "[6-12 WEEKS]",
    price: "[YOUR PRICE]",
  },
  {
    slug: "websites",
    n: "02",
    title: "Websites & landing pages",
    tagline: "A site that brings in enquiries, not compliments.",
    body: "Built around one action: the call, the enquiry, the booking. Fast on an ordinary phone connection, with a way for you to change the words yourself.",
    includes: [
      "Design and build, phone-first",
      "Copy structure, so you say it plainly",
      "Enquiry forms that reach your inbox and phone",
      "Search basics, analytics and Google Business setup",
      "An editor for your own text and images",
    ],
    tech: ["Next.js", "Headless CMS", "Analytics", "On-page SEO"],
    duration: "[2-4 WEEKS]",
    price: "[YOUR PRICE]",
  },
  {
    slug: "mobile-apps",
    n: "03",
    title: "Mobile apps",
    tagline: "Android and iOS, from one codebase.",
    body: "Building the same app twice is how small budgets disappear. We build once and ship to both stores, which keeps the cost and the future maintenance sane.",
    includes: [
      "Play Store and App Store submission handled",
      "Push notifications and offline behaviour",
      "Payments and login where you need them",
      "Developer accounts registered in your name",
    ],
    tech: ["React Native", "Expo", "Play Store", "App Store"],
    duration: "[8-14 WEEKS]",
    price: "[YOUR PRICE]",
  },
  {
    slug: "games",
    n: "04",
    title: "Games & interactive",
    tagline: "Casual games, and interactive work that isn't a game.",
    body: "Sortly, our own colour-sorting puzzle, is where we learned to care about frame times, input latency and solvability guarantees, and that discipline shows up in everything else we build.",
    includes: [
      "Browser and mobile builds",
      "Unity or web-native, whichever suits the piece",
      "Art direction, or we work to yours",
      "Store listing, analytics and updates",
    ],
    tech: ["Unity", "WebGL", "Canvas"],
    duration: "[SCOPE-DEPENDENT]",
    price: "[YOUR PRICE]",
  },
  {
    slug: "consulting",
    n: "05",
    title: "IT consulting & support",
    tagline: "Advice you can act on, and someone to call afterwards.",
    body: "Not every problem needs a build. Sometimes it needs a decision made properly: which platform, which host, what it will cost to run in year three, whether the thing you already own can be fixed instead of replaced.",
    includes: [
      "Stack and hosting choices, with realistic budgets",
      "An honest repair-or-replace assessment of what exists",
      "Monthly maintenance, updates, backups and monitoring",
      "A response time written into the agreement",
    ],
    tech: ["Architecture", "Migrations", "Maintenance"],
    duration: "[ONGOING]",
    price: "[YOUR PRICE]",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Scope call",
    short: "Forty-five minutes, free, no obligation.",
    body: "We walk through what your team does today and where it breaks. You leave with a straight opinion whether or not you hire us.",
    chips: ["45 minutes", "Free", "No obligation"],
  },
  {
    n: "02",
    title: "Written proposal",
    short: "Scope, price and dates on paper before anything is signed.",
    body: "A document you could hand to any other developer and get a comparable quote. If we think the project is a bad idea, that goes on paper too.",
    chips: ["[3-5 working days]", "Fixed price", "Fixed dates"],
  },
  {
    n: "03",
    title: "Weekly builds",
    short: "A link you can open and click, from week one.",
    body: "Feedback goes into the next week's build, so surprises stay small and cheap. If something is going to be late, you hear it that week.",
    chips: ["Every week", "From week one"],
  },
  {
    n: "04",
    title: "Launch & handover",
    short: "Code, accounts and documentation, plus a recorded walkthrough.",
    body: "If you replaced us the following week, nothing would stop working. Support is priced separately, so you are never locked in by default.",
    chips: ["[1 week]", "Everything transferred"],
  },
] as const;

export const commitments = [
  {
    n: "01",
    title: "A price that does not move",
    body: "Scope, price and dates agreed on paper before any money moves. Changes get re-quoted openly, never absorbed into the invoice.",
  },
  {
    n: "02",
    title: "You get the builders",
    body: "The person who takes your scope call is the person who writes the code. Nothing gets lost being passed down a chain.",
  },
  {
    n: "03",
    title: "Everything in your name",
    body: "Repositories, domains, hosting and store accounts registered to you from day one. Nothing we build is ever held hostage.",
  },
] as const;

export const faqs = [
  {
    q: "How do I know the project will actually land?",
    a: "Because you can check, every single week. The scope and the price are fixed in writing before you pay anything, and from week one there is a working build you can open and click. No month-long silences ending in a demo that misses. Every repository, domain and account sits in your name throughout, so the work is yours at any point, not just at the end.",
  },
  {
    q: "What does a project cost?",
    a: "It depends on scope, and we will not pretend otherwise, but you get a fixed number in writing before you commit to anything. The scoping call is free and ends with a realistic range, so you can walk away with a budget even if you never hire us.",
  },
  {
    q: "How long does a build take?",
    a: "A website is usually a few weeks; a web application is usually a couple of months. The written proposal commits to specific dates, and the weekly build tells you every Friday whether we are on them.",
  },
  {
    q: "Do I own the code and the accounts?",
    a: "Yes, all of it, from day one rather than at the end. Repositories, domains, hosting and store accounts are registered in your name, and handover includes documentation and a recorded walkthrough so the knowledge does not live only with us.",
  },
  {
    q: "What happens after launch?",
    a: "You get a named contact and an agreed response window. Ongoing maintenance (updates, backups, monitoring and small changes) is optional and priced separately, so you are never locked in by default.",
  },
  {
    q: "Can we work with you remotely?",
    a: "Yes. We are based in Chitwan and work with clients wherever they are. The weekly clickable build and the written scope exist precisely so that distance stops mattering. You can see the state of the work without being in the room.",
  },
] as const;

export const comparison = [
  ["The quote moves after you sign", "Fixed price, in writing, before we start"],
  ["You see it when it is finished", "You click a working build every week"],
  ["Code sits in the vendor's account", "Repos, domains and hosting in your name"],
  ["Support means a shared inbox", "A named contact and an agreed response time"],
  ["Built on whatever is quickest for the agency", "Built on a stack you can hire for later"],
] as const;

export const audiences = [
  "Chartered accountancy & audit firms",
  "Clinics, consultancies and small practices",
  "Local retail and service businesses",
  "Early-stage founders building a first version",
  "Schools, institutes and training providers",
] as const;
