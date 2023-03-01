import { useState } from "react"
import { useRouter } from "next/router"
import { useReposState } from "state/repos/useReposState"
import { Button } from "components/stateless/button/Button"
import { Input } from "components/stateless/input/Input"
import { IoIosTrendingUp, IoMdSad } from "react-icons/io"

export const SearchRepos: React.FC = () => {
  const router = useRouter()
  const { sort } = router.query

  const [searchTerm, setSearchTerm] = useState<string>("")
  const { loading, error } = useReposState()

  const popularSearches = [
    "Javascript",
    "Python",
    "Typescript",
    "Go",
    "Swift",
    "Java",
  ]

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()

    if (searchTerm) {
      handleSearch(searchTerm)
    }
  }

  const handleSearch = (searchTerm: string) => {
    router.push({
      pathname: "/",
      query: { language: searchTerm, sort: sort },
    })
  }

  return (
    <div className="space-y-5">
      <form
        onSubmit={handleSubmit}
        className="relative"
        data-testid="search-repos"
      >
        <Input
          value={searchTerm}
          name="search-input"
          type="search"
          placeholder={
            loading ? "Loading ..." : "Javascript, Python, Swift ..."
          }
          onChange={(event) => setSearchTerm(event.target.value)}
          disabled={loading}
          className="pr-24"
          maxLength={50}
        />
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
          <Button
            label={"Search"}
            onClick={handleSubmit}
            disabled={loading || !searchTerm}
            loading={loading}
            testId="search-btn"
          />
        </div>
      </form>

      {error ? (
        <p className="text-center text-gray-500">
          0 repositories found <IoMdSad className="inline text-lg mb-1" />
        </p>
      ) : (
        <ul className="flex flex-wrap" data-testid="trending-searches">
          {popularSearches.map((search) => (
            <li key={search} className="my-2 mr-2">
              <Button
                label={
                  <span>
                    <IoIosTrendingUp className="inline" /> {search}
                  </span>
                }
                onClick={() => handleSearch(search)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
