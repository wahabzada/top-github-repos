import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { DefaultLayout } from "layouts/DefaultLayout"
import { useReposAction } from "state/repos/useReposAction"
import { Button } from "components/stateless/button/Button"
import { useReposState } from "state/repos/useReposState"

export default function Home() {
  const router = useRouter()
  const { language, sort, order } = router.query

  const [searchKeyword, setSearchKeyword] = useState<string>("javascript")

  const { fetchRepos, resetRepos } = useReposAction()
  const { repos, loading, error } = useReposState()

  useEffect(() => {
    if (language) {
      fetchRepos(language as string)
    }

    return () => resetRepos()
  }, [language])

  const handleSearch = (searchKeyword: string) => {
    router.push({
      pathname: "/",
      query: { language: searchKeyword },
    })
  }

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-4xl mt-20">
        <h1 className="text-3xl font-bold font-['Roboto'] sm:text-center sm:text-6xl mb-6">
          Sunday
        </h1>
        <p className="mb-10 text-lg text-gray-600 sm:text-center">
          Discover the top GitHub repositories for programming languages
        </p>

        <Button
          label="Search"
          onClick={() => handleSearch(searchKeyword)}
          loading={loading}
          disabled={loading}
        ></Button>
      </div>
    </DefaultLayout>
  )
}
