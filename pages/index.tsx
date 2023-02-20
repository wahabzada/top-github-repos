import { useEffect } from "react"
import { useRouter } from "next/router"
import { DefaultLayout } from "layouts/DefaultLayout"
import { useReposAction } from "state/repos/useReposAction"
import { RepoLister } from "components/stateful/repos/RepoLister"
import { RepoSearch } from "components/stateful/repos/RepoSearch"

export default function Home() {
  const router = useRouter()
  const { language } = router.query

  const { fetchRepos, resetRepos } = useReposAction()

  useEffect(() => {
    if (language) {
      fetchRepos(language as string)
    }

    return () => resetRepos()
  }, [language])

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-2xl my-5 space-y-10">
        <RepoSearch />
        <RepoLister />
      </div>
    </DefaultLayout>
  )
}
