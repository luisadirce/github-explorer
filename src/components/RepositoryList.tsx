import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
import { useState, useEffect } from 'react'

interface Repository { // convenção mais utilizada
	name: string;
	description: string;
	html_url: string
}

export function RepositoryList() {
	const [repositories, setRepositories] = useState<Repository[]>([]);

	useEffect(() => {
		fetch('https://api.github.com/orgs/rocketseat/repos')
			.then(response => response.json()) //converte a resposta para json
			.then(data => setRepositories(data))
	}, []);

	return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => { 
					return <RepositoryItem key={repository.name} repository={repository} />
				})}
      </ul>
    </section>

	);
}