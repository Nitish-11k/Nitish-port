// Utility function to get the correct resume URL for both development and production
export const getResumeUrl = (): string => {
  // Use absolute path for all environments - works in development and production
  return '/Nitish_backend_resume_page-0001.jpeg';
};

// Function to handle resume click with debugging
export const handleResumeClick = (): void => {
  const url = getResumeUrl();
  console.log('Resume URL:', url);
  console.log('Current environment:', process.env.NODE_ENV);
  console.log('Current location:', window.location.href);
  console.log('Full resume URL:', window.location.origin + url);
};
