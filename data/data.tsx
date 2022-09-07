import { BsFillBootstrapFill } from 'react-icons/bs';
import { FaHtml5, FaCss3Alt, FaSass, FaPython, FaNodeJs } from 'react-icons/fa';
import {
    SiFramer,
    SiJavascript,
    SiJquery,
    SiMongodb,
    SiMysql,
    SiPhp,
    SiPostgresql,
    SiRedux,
    SiTailwindcss,
    SiTypescript,
    SiVisualstudiocode,
} from 'react-icons/si';
import { IoLogoReact } from 'react-icons/io5';
import { TbBrandNextjs } from 'react-icons/tb';
import { AiFillGithub } from 'react-icons/ai';
import { FiFigma } from 'react-icons/fi';

const logo = {
    boootsrap: <BsFillBootstrapFill />,
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    sass: <FaSass />,
    python: <FaPython />,
    node: <FaNodeJs />,
    framer: <SiFramer />,
    javascript: <SiJavascript />,
    jquery: <SiJquery />,
    mongodb: <SiMongodb />,
    mysql: <SiMysql />,
    php: <SiPhp />,
    postgresql: <SiPostgresql />,
    redux: <SiRedux />,
    tailwind: <SiTailwindcss />,
    typescript: <SiTypescript />,
    code: <SiVisualstudiocode />,
    react: <IoLogoReact />,
    next: <TbBrandNextjs />,
    github: <AiFillGithub />,
    figma: <FiFigma />,
};

const exp = {
    basic: 'Basic',
    intermediate: 'Intermediate',
    experienced: 'Experienced',
};

export const frontend = [
    {
        logo: logo.html,
        name: 'HTML',
        exp: exp.experienced,
    },
    {
        logo: logo.css,
        name: 'CSS',
        exp: exp.experienced,
    },

    {
        logo: logo.sass,
        name: 'Sass',
        exp: exp.intermediate,
    },
    {
        logo: logo.boootsrap,
        name: 'Bootstrap',
        exp: exp.intermediate,
    },
    {
        logo: logo.tailwind,
        name: 'TailwindCSS',
        exp: exp.intermediate,
    },
    {
        logo: logo.tailwind,
        name: 'TailwindUI',
        exp: exp.intermediate,
    },
    {
        logo: logo.react,
        name: 'ReactJS',
        exp: exp.intermediate,
    },
    {
        logo: logo.redux,
        name: 'Redux',
        exp: exp.basic,
    },
    {
        logo: logo.next,
        name: 'NextJS',
        exp: exp.basic,
    },
    {
        logo: logo.framer,
        name: 'Framer ',
        exp: exp.basic,
    },
];

export const backend = [
    {
        logo: logo.javascript,
        name: 'JavaScript',
        exp: exp.experienced,
    },
    {
        logo: logo.typescript,
        name: 'TypeScript',
        exp: exp.basic,
    },
    {
        logo: logo.python,
        name: 'Python',
        exp: exp.experienced,
    },
    {
        logo: logo.node,
        name: 'NodeJS',
        exp: exp.intermediate,
    },
    {
        logo: logo.php,
        name: 'PHP',
        exp: exp.intermediate,
    },
    {
        logo: logo.jquery,
        name: 'JQuery',
        exp: exp.basic,
    },
    {
        logo: logo.mysql,
        name: 'MySQL',
        exp: exp.experienced,
    },
    {
        logo: logo.mongodb,
        name: 'MongoDB',
        exp: exp.basic,
    },
    {
        logo: logo.postgresql,
        name: 'PostgreSQL',
        exp: exp.basic,
    },
];

export const tools = [
    {
        logo: logo.code,
        name: 'VS Code',
        exp: exp.experienced,
    },

    {
        logo: logo.github,
        name: 'Git',
        exp: exp.intermediate,
    },

    {
        logo: logo.figma,
        name: 'Figma',
        exp: exp.experienced,
    },
];

export const otherProjects = [
    {
        name: 'Forest Survival',
        description:
            'My first program in python with classes and functions. It is a console game with turn-based strategies. This is a final requirement project from my Computer Science Course in Second Year.',
        repoURL: 'https://github.com/markjaylunas/Python-Forest-Survival.git',
        demoURL: '',
        imagesDir: '/images/works/otherProjects/forest-survival/',
        images: ['home.jpg', 'battle.jpg', 'victor.jpg'],
        date: '',
        stack: [logo.python],
    },
    // {
    //     name: 'My Project 2',
    //     description: 'description',
    //     repoURL: 'https://github.com/markjaylunas',
    //     demoURL: 'https://github.com/markjaylunas',
    //     imagesDir: '/images/works/otherProjects/forest-survival/',
    //     images: ['home.jpg', 'battle.jpg', 'victor.jpg'],
    // },
];
