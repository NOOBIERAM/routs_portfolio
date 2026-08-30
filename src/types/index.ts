export type KeyDef = {
  label: string;
  code: string;
  width?: number;
};

export type Profile = {
  fullName: string;
  aliases: string[];
  title: string;
  greeting: string;
  nameShort: string;
  slogan: string;
  email: string;
  github: string;
  linkedin: string;
  whatsapp: string;
  whatsappLabel: string;
  site: string;
  cv: string;
  cvOld: string;
};

export type EducationItem = {
  period: string;
  degree: string;
  school: string;
  specialty: string;
  status: "current" | "done";
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  stack: string[];
};

export type SkillCategory = {
  title: string;
  icon: string;
  items: SkillItem[];
};

export type SkillItem = {
  name: string;
  logo?: string;
};

export type ProjectItem = {
  id: number;
  title: string;
  description: string;
  stack: string[];
  demo?: string;
  github?: string;
  image: string;
};

export type CertificationItem = {
  title: string;
  issuer: string;
  date: string;
  verifyUrl: string;
  image: string;
};

export type QualityItem = {
  label: string;
  icon: string;
};
