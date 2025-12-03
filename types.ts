export interface Experience {
  company: string;
  location: string;
  title: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface CoverLetter {
  title: string;
  recipientName: string;
  recipient: string;
  paragraphs: string[];
  closing: string;
  signature: string;
  contacts: string[];
}

export interface ResumeData {
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedinUrl: string;
  linkedinHandle: string;
  summary: string;
  passionStatement: string;
  keyCompetencies: string[];
  experience: Experience[];
  previousExperience: string;
  education: Education[];
  differentiators: string[];
  coverLetter: CoverLetter;
}
