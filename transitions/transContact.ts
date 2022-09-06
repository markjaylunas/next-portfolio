export const motionSendButton = {
    initial: { opacity: 0, x: -20 },
    final: { opacity: 1, x: 0, transition: { ease: 'easeInOut' } },
};
export const motionSending = {
    animate: {
        x: [10, 0, 10, 0, 10],

        transition: {
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
        },
    },
};
