// Utility function to get the correct resume URL for both development and production
export const getResumeUrl = (): string => {
  // For production builds, use the build path
  if (process.env.NODE_ENV === 'production') {
    // Check if we're on Vercel or similar platform
    const isVercel = window.location.hostname.includes('vercel.app');
    
    if (isVercel) {
      // For Vercel, use absolute path
      return '/Nitish_backend_resume_page-0001.jpeg';
    } else {
      // For other production builds, use PUBLIC_URL
      return `${process.env.PUBLIC_URL || ''}/Nitish_backend_resume_page-0001.jpeg`;
    }
  }
  
  // For development, use relative path
  return '/Nitish_backend_resume_page-0001.jpeg';
};

// Function to handle resume click with debugging
export const handleResumeClick = (): void => {
  const url = getResumeUrl();
  console.log('Resume URL:', url);
  console.log('Current environment:', process.env.NODE_ENV);
  console.log('PUBLIC_URL:', process.env.PUBLIC_URL);
  console.log('Current location:', window.location.href);
};
