export const fadeInVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const projectCardVariants = {
  rest: { 
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  hover: { 
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export const skillBarVariants = {
  hidden: { width: "0%" },
  visible: (width: string) => ({
    width: width,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 0.3
    }
  })
};
