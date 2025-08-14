// API Configuration
const API_BASE_URL = import.meta.env.PROD 
  ? window.location.origin // Use current domain in production
  : 'http://localhost:3001'; // Use localhost in development

export const API_ENDPOINTS = {
  CONSULTATION: `${API_BASE_URL}/api/consultation`,
  HEALTH: `${API_BASE_URL}/api/health`,
};

export { API_BASE_URL };
