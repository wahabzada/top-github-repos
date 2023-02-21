import { useEffect } from "react"
import { useReposState } from "state/repos/useReposState"
import { RepoCard } from "components/stateless/card/RepoCard"
import { RepoFilters } from "./RepoFilters"
import { useReposAction } from "state/repos/useReposAction"
import { useRouter } from "next/router"

export const RepoLister: React.FC = () => {
  const router = useRouter()
  const { language } = router.query

  const { loading, error, totalRepos, repos } = useReposState()
  const { fetchRepos, resetRepos } = useReposAction()

  useEffect(() => {
    if (language) {
      fetchRepos(language as string)
    }

    return () => resetRepos()
  }, [language])

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
