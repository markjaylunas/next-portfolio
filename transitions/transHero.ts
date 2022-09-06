export const motionHero = {
    initial: { opacity: 0 },
    final: { opacity: 1, transition: { duration: 5 } },
};

const list = [1.2, 1.1, 1.1, 1];
const random = () => Math.floor(Math.random() * list.length);

export const motionSend = {
    initial: { scale: 0.7 },
    final: {
        scale: [
            1,
            list[random()],
            list[random()],
            list[random()],
            list[random()],
        ],

        transition: {
            duration: 0.9,
            type: 'spring',
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 4,
            delay: 1.5,
        },
    },

    tap: {
        scale: 3,
        opacity: 0,
        transition: { ease: 'easeInOut' },
    },
};
