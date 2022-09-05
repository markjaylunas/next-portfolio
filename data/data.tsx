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

const exp = {
    basic: 'Basic',
    intermediate: 'Intermediate',
    experienced: 'Experienced',
};

export const frontend = [
    {
        logo: <FaHtml5 />,
        name: 'HTML',
        exp: exp.experienced,
    },
    {
        logo: <FaCss3Alt />,
        name: 'CSS',
        exp: exp.experienced,
    },

    {
        logo: <FaSass />,
        name: 'Sass',
        exp: exp.intermediate,
    },
    {
        logo: <BsFillBootstrapFill />,
        name: 'Bootstrap',
        exp: exp.intermediate,
    },
    {
        logo: <SiTailwindcss />,
        name: 'TailwindCSS',
        exp: exp.intermediate,
    },
    {
        logo: <SiTailwindcss />,
        name: 'TailwindUI',
        exp: exp.intermediate,
    },
    {
        logo: <IoLogoReact />,
        name: 'ReactJS',
        exp: exp.intermediate,
    },
    {
        logo: <SiRedux />,
        name: 'Redux',
        exp: exp.basic,
    },
    {
        logo: <TbBrandNextjs />,
        name: 'NextJS',
        exp: exp.basic,
    },
    {
        logo: <SiFramer />,
        name: 'Framer ',
        exp: exp.basic,
    },
];

export const backend = [
    {
        logo: <SiJavascript />,
        name: 'JavaScript',
        exp: exp.experienced,
    },
    {
        logo: <SiTypescript />,
        name: 'TypeScript',
        exp: exp.basic,
    },
    {
        logo: <FaPython />,
        name: 'Python',
        exp: exp.experienced,
    },
    {
        logo: <FaNodeJs />,
        name: 'NodeJS',
        exp: exp.intermediate,
    },
    {
        logo: <SiPhp />,
        name: 'PHP',
        exp: exp.intermediate,
    },
    {
        logo: <SiJquery />,
        name: 'JQuery',
        exp: exp.basic,
    },
    {
        logo: <SiMysql />,
        name: 'MySQL',
        exp: exp.experienced,
    },
    {
        logo: <SiMongodb />,
        name: 'MongoDB',
        exp: exp.basic,
    },
    {
        logo: <SiPostgresql />,
        name: 'PostgreSQL',
        exp: exp.basic,
    },
];

export const tools = [
    {
        logo: <SiVisualstudiocode />,
        name: 'VS Code',
        exp: exp.experienced,
    },

    {
        logo: <AiFillGithub />,
        name: 'Git',
        exp: exp.intermediate,
    },

    {
        logo: <FiFigma />,
        name: 'Figma',
        exp: exp.experienced,
    },
];
