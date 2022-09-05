export const motionHero = {
    initial: { opacity: 0 },
    final: { opacity: 1, transition: { duration: 5 } },
};
export const motionSend = {
    tap: {
        scale: 5,
        opacity: 0,
        transition: { ease: 'easeInOut' },
    },

    hover: { y: -10, scale: 1.3, transition: { duration: 0.3 } },
};
