export const scrollToSection = (href: string, offset = 80): void => {
  const element = document.querySelector(href);
  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  }
};