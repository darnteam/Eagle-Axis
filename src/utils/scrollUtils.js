export const scrollToSection = (ref) => {
  if (ref.current) {
    let offset = 0;
    if (window.innerWidth >= 1024) {
      offset = 300;
    } else if (window.innerWidth >= 768) {
      offset = 290;
    } else {
      offset = 100;
    }

    const topPosition = ref.current.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  }
};
