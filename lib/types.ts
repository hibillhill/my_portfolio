export interface Project {
  id: string;
  title: string;
  summary: string;
  thumbnailGradient: string;
  folderColor: string;
  tags: string[];
  overview: {
    challenge: string;
    goal: string;
  };
  userResearch: string;
  designProcess: string;
  resultsReflection: string;
}

export interface SkillBadge {
  name: string;
  category: "design" | "frontend" | "process";
  emoji: string;
}
