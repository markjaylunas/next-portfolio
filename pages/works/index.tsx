import axios from 'axios';
import { useState, useEffect } from 'react';

interface data {
    id: number;
    name: string;
}

const Works: React.FC = () => {
    const [repos, setRepos] = useState<data[]>([]);

    useEffect(() => {
        const fetchRepos = async () => {
            const response = await axios
                .get('https://api.github.com/users/markjaylunas/repos')
                .then((response) => response.data);
            const data = await response;
            setRepos(data);
        };
        fetchRepos();
    }, []);
    return (
        <main className="text-center">
            <h1>Works</h1>
            {repos.length > 0 &&
                repos.map((data) => {
                    return <div key={data.id}>{data.name}</div>;
                })}
        </main>
    );
};

export default Works;
