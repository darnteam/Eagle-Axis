export const scrollToSection = (ref, sectionType = 'default') => {
  if (ref.current) {
    let offset = 0;
    
    // Adjust offset based on section type
    if (sectionType === 'about' || sectionType === 'equipment') {
      if (window.innerWidth >= 1024) {
        offset = 100; // Reduced offset for about/equipment sections on large screens
      } else if (window.innerWidth >= 768) {
        offset = 80; // Reduced offset for about/equipment sections on medium screens
      } else {
        offset = 60; // Reduced offset for about/equipment sections on small screens
      }
    } else {
      // Default offsets for other sections (like Apply Now)
      if (window.innerWidth >= 1024) {
        offset = 300;
      } else if (window.innerWidth >= 768) {
        offset = 290;
      } else {
        offset = 100;
      }
    }

    const topPosition = ref.current.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  }
};
