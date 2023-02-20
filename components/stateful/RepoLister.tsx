import { RepoCard } from "components/stateless/card/RepoCard"
import { useReposState } from "state/repos/useReposState"
import { RepoFilters } from "./RepoFilters"

export const RepoLister: React.FC = () => {
  const { loading, error, repos, totalRepos } = useReposState()

  if (loading || error) {
    return null
  } else {
    return (
      <>
        {totalRepos > 0 && <RepoFilters />}
        <ul className="flex flex-col space-y-3">
          {repos.map((repo) => (
            <li key={repo.id}>
              <RepoCard data={repo} />
            </li>
          ))}
        </ul>
      </>
    )
  }
}
