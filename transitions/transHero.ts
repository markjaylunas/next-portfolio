export const motionHero = {
    initial: { opacity: 0 },
    final: { opacity: 1, transition: { duration: 5, delay: 2 } },
};

export const motionSend = {
    animate: {
        scale: [1, 1.2, 0.9, 1.2, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 3,
        },
    },

    tap: {
        scale: 3,
        opacity: 0,
        transition: { ease: 'easeInOut' },
    },
};
