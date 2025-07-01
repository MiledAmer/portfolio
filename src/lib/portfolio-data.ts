import portfolioDataJson from "@/data/portfolio.json";
import type { PortfolioData, Project, Technology } from "@/types";

const portfolioData = portfolioDataJson as PortfolioData;

export const getPortfolioData = () => portfolioData;

export const getProjects = (): Project[] => portfolioData.projects;

export const getTechnologies = (): Technology[] => portfolioData.technologies;

export const getPersonalInfo = () => portfolioData.personal;

export const getSocialLinks = () => portfolioData.social;

export const getAboutInfo = () => portfolioData.about;

export const getContactInfo = () => portfolioData.contact;

export const getStats = () => portfolioData.stats;

