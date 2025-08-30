// frontend/src/api/urls.js

// Base URL for backend API
export const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:8000" // Local development
    : "https://interviewprepai-tf6v.onrender.com"; // Deployed backend on Render

// API endpoints
export const API_PATHS = {
  AUTH: {
    REGISTER: `${BASE_URL}/api/auth/register`,
    LOGIN: `${BASE_URL}/api/auth/login`,
    GET_PROFILE: `${BASE_URL}/api/auth/profile`,
  },

  IMAGE: {
    UPLOAD_IMAGE: `${BASE_URL}/api/auth/upload-image`,
  },

  AI: {
    GENERATE_QUESTIONS: `${BASE_URL}/api/ai/generate-questions`,
    GENERATE_EXPLANATION: `${BASE_URL}/api/ai/generate-explanation`,
  },

  SESSION: {
    CREATE: `${BASE_URL}/api/session/create`,
    GET_ALL: `${BASE_URL}/api/session/my-sessions`,
    GET_ONE: (id) => `${BASE_URL}/api/session/${id}`,
    DELETE: (id) => `${BASE_URL}/api/session/${id}`,
  },

  QUESTION: {
    ADD_TO_SESSION: `${BASE_URL}/api/questions/add`,
    PIN: (id) => `${BASE_URL}/api/questions/${id}/pin`,
    UPDATE_NOTE: (id) => `${BASE_URL}/api/questions/${id}/note`,
  },
};
