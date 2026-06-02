import type { Dictionary } from "./types";
import { legalEn } from "./legal-en";

export const en: Dictionary = {
  meta: {
    siteName: "Hill Choi",
    role: "UI/UX Designer",
  },
  nav: {
    home: "Home",
    about: "About",
    portfolio: "Portfolio",
    connect: "Connect",
  },
  home: {
    welcome: ["Welcome to the", "playground", "of"],
    playground: "playground",
    of: "of",
    introParen:
      "( Hi! I'm Hill Choi, UI/UX Designer from Hong Kong. I design experiences where user needs meet business goals. )",
    nameLine1: "hill",
    nameLine2: "choi",
    roleLines: ["UI/UX", "Designer", "&", "Researcher"],
    tagline: "lets-build-meaningful-products",
    marquee: [
      "On my free time you can find me sketching interfaces",
      "exploring design systems",
      "and hunting for good coffee",
      "On my free time you can find me sketching interfaces",
      "exploring design systems",
      "and hunting for good coffee",
    ],
    clickMore: "Click for more",
    philosophy:
      "I always strive to develop human-centered design solutions that improve the quality of digital life.",
    worksTitle: "Some of my selected works",
    works: [
      {
        id: "skyline",
        index: 1,
        title: "Skyline Air — Check-in Redesign",
        description:
          "Service design for high-pressure travel contexts. Simplified flows for diverse user groups.",
        tags: ["App Redesign", "UX Research"],
        color: "bg-[#E8D4F8]",
        image: "/images/works/skyline-air-checkin.png",
      },
      {
        id: "neon",
        index: 2,
        title: "Neon Commerce — Brand Web",
        description:
          "Bold e-commerce experience balancing visual energy with conversion-focused UX.",
        tags: ["Web Design", "Design System"],
        color: "bg-[#FFF3B0]",
        image: "/images/works/neon-commerce-brand.png",
      },
      {
        id: "pulse",
        index: 3,
        title: "Pulse Health — Dashboard",
        description:
          "Health data visualization for clinicians and patients with clear hierarchy.",
        tags: ["Dashboard", "B2B SaaS"],
        color: "bg-[#B8F0D4]",
        image: "/images/works/pulse-health-dashboard.png",
      },
    ],
  },
  about: {
    hiTitle: "hi-im hill",
    role: "UI/UX designer & researcher",
    bio1:
      "A Hong Kong based UI/UX Designer specializing in product design, user research, and design systems. I love creating clear, bold interfaces that feel delightful yet purposeful.",
    bio2:
      "My background in aviation hospitality taught me composure under pressure, rigorous communication, and deep empathy — skills I bring into every design critique and stakeholder workshop.",
    bio3:
      "I am open to full-time roles, freelance collaborations, and peer design exchanges. Ready for new challenges.",
    cta: "hit me up !",
    clientsTitle: "Focus areas",
    clientsParen: "( Product, service, and brand experiences across web & mobile. )",
    clients: [
      "Product Design",
      "UX Research",
      "Design Systems",
      "Service Design",
      "Prototyping",
      "Front-End Collaboration",
    ],
    traitsTitle: "How I work",
    traits: [
      {
        title: "Empathy first",
        text: "Aviation service experience → user interviews & journey mapping with real compassion.",
      },
      {
        title: "Rigorous delivery",
        text: "Structured process from discovery to handoff, aligned with engineering constraints.",
      },
      {
        title: "Team player",
        text: "Bridge design, product, and dev with clear storytelling and collaborative energy.",
      },
    ],
  },
  portfolio: {
    title: ["My", "portfolio", "&", "toolkit"],
    introParen:
      "( Selected works, personal strengths, and master's-level software for design & build. )",
    traitsTitle: "Personal strengths",
    traits: [
      {
        title: "User × Business",
        text: "Design decisions anchored in measurable outcomes and real user pain points.",
      },
      {
        title: "Visual clarity",
        text: "Bold typography and layout discipline inspired by editorial & brutalist web.",
      },
      {
        title: "Build-aware",
        text: "Comfortable in Figma and React — prototypes that teams can actually ship.",
      },
    ],
    worksTitle: "Selected works",
    works: [
      {
        id: "skyline",
        index: 1,
        title: "Skyline Air",
        description: "Airport self check-in app redesign — reduced anxiety, +21% completion.",
        tags: ["UI Research", "App"],
        color: "bg-[#E8D4F8]",
        image: "/images/works/skyline-air-checkin.png",
      },
      {
        id: "neon",
        index: 2,
        title: "Neon Commerce",
        description: "Gen-Z e-commerce — design system + conversion-focused flows.",
        tags: ["Web Design"],
        color: "bg-[#FFF3B0]",
        image: "/images/works/neon-commerce-brand.png",
      },
      {
        id: "pulse",
        index: 3,
        title: "Pulse Health",
        description: "B2B health dashboard — dual views for care teams & patients.",
        tags: ["Dashboard"],
        color: "bg-[#B8F0D4]",
        image: "/images/works/pulse-health-dashboard.png",
      },
      {
        id: "retro",
        index: 4,
        title: "Retrofolio",
        description: "Personal portfolio exploring Y2K & minimal design languages.",
        tags: ["Branding", "Front-End"],
        color: "bg-[#FFD0E0]",
      },
    ],
    softwareTitle: "Software & apps",
    softwareParen: "( Tools I use at master's level for research, design, and delivery. )",
    software: [
      { name: "Figma", category: "Design" },
      { name: "Adobe Creative Cloud", category: "Visual" },
      { name: "Miro / FigJam", category: "Research" },
      { name: "Principle / ProtoPie", category: "Prototype" },
      { name: "React / Next.js", category: "Front-End" },
      { name: "Notion", category: "Ops" },
    ],
  },
  footer: {
    copyright: "© 2026 Hill Choi. All rights reserved.",
    sitemap: "Sitemap",
    social: "Social",
    legal: "Legal",
    terms: "Terms",
    privacy: "Privacy",
    cookies: "Cookies",
    links: { home: "Home", about: "About", portfolio: "Portfolio" },
  },
  legal: legalEn,
  connect: {
    title: "Connect",
    text: "Open to collaborations, consulting, and design peer chats.",
    email: "connect@hillchoi.com",
    close: "Close",
  },
  lang: {
    label: "中文",
  },
};
