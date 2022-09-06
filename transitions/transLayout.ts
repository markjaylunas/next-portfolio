export const motionLayout = {
    initial: { opacity: 0, y: 30 },
    final: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            duration: 3,
            ease: 'linear',
        },
    },
    exit: {
        opacity: 0,
        y: 30,
    },
};
