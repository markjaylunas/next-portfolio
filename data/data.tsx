import { BsFillBootstrapFill } from 'react-icons/bs';
import {
    FaHtml5,
    FaCss3Alt,
    FaSass,
    FaPython,
    FaNodeJs,
    FaGitAlt,
} from 'react-icons/fa';
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
import { FiFigma } from 'react-icons/fi';

const name = {
    bootstrap: 'bootstrap',
    html: 'HTML',
    css: 'CSS',
    sass: 'Sass',
    python: 'Python',
    node: 'NodeJS',
    framer: 'Framer',
    javascript: 'JavaScript',
    jquery: 'JQuery',
    mongodb: 'MongoDB',
    mysql: 'MySQL',
    php: 'PHP',
    postgresql: 'PostgreSQL',
    redux: 'Redux',
    tailwindcss: 'TailwindCSS',
    tailwindui: 'TailwindUI',
    typescript: 'TypeScript',
    code: 'VS Code',
    react: 'ReactJS',
    next: 'NextJS',
    git: 'Git',
    figma: 'Figma',
};
const logo = {
    bootstrap: <BsFillBootstrapFill />,
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
    git: <FaGitAlt />,
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
        logo: logo.bootstrap,
        name: 'Bootstrap',
        exp: exp.intermediate,
    },
    {
        logo: logo.tailwind,
        name: 'TailwindCSS',
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
        logo: logo.git,
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
        description: [
            'My first program in python with classes and functions. It is a console game with turn-based strategies. This is a final requirement project from my Computer Science Course in Second Year.',
            'I learned the concepts of programming from this course and project.',
        ],
        repoURL: 'https://github.com/markjaylunas/Python-Forest-Survival.git',
        demoURL: '',
        imagesDir: '/images/works/otherProjects/forest-survival/',
        images: ['home.jpg', 'battle.jpg', 'victor.jpg'],
        date: 'Jun 2020',
        stack: [logo.python],
        stackName: [name.python],
    },
];
export const projects = [
    {
        name: 'Benj Pharmacy',
        description: [
            'An E-commerce website for a local pharmacy with online payment method via Gcash, Maya and Paypal. It has a fully functional admin dashboard to manage products and orders.',
            'I used PHP for the back end; Sass for the front end of the main page, and Bootstrap for the Admin dashboard. JQuery was used for some dynamic page changes. The database is in MySQL with the help of PHPMyadmin. Overall, I learned a lot from this project to develop a fullstack website. This is where I realized the importance of reusable components concepts like React.',
        ],
        repoURL: 'https://github.com/markjaylunas/benj-pharmacy.git',
        demoURL: 'https://pharmacy.makje.me/',
        imagesDir: '/images/works/projects/benj-pharmacy/',
        images: ['home.jpg', 'login.jpg', 'products.jpg'],
        date: 'Dec 2021',
        stack: [logo.php, logo.sass, logo.bootstrap, logo.mysql, logo.jquery],
        stackName: [
            name.php,
            name.sass,
            name.bootstrap,
            name.mysql,
            name.jquery,
        ],
    },
    {
        name: 'Weather',
        description: [
            'An weather website for mobile users to get weather information on the go. My first attempt to develop dynamic web page with fetching API.',
            'Consumes API with a weather api to gather weather information and location api to get current weather information of the current location on initial load.',
        ],
        repoURL: 'https://github.com/markjaylunas/Weather-App-Dec2020.git',
        demoURL: '',
        imagesDir: '/images/works/projects/weather/',
        images: ['home.jpg', 'weather.jpg', 'weekly.jpg'],
        date: 'Dec 2020',
        stack: [logo.html, logo.css, logo.javascript],
        stackName: [name.html, name.css, name.javascript],
    },
];

export const updates = [
    "Recently, I have been learning NextJS after getting comfortable with ReactJS fundamentals and concepts. Also, TailwindCSS has been my goto CSS framework and discovered other libraries such as Framer motion for animations, Redux with Redux Toolkit for state management, and Axios for data fetching. Learning these and some backend such as REST API's and more has been a great experience for me to grow as a frontend developer. ",
    'My portfolio website is a great example of some of my learnings. You can find more about it in my github repo by clicking view source at the navigation bar.',
];
