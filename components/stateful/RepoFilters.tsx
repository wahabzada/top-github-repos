import { useRouter } from "next/router"
import { useEffect } from "react"
import { useReposState } from "state/repos/useReposState"
import { ReposSortEnum } from "state/repos/repos.types"
import { useReposAction } from "state/repos/useReposAction"
import { Dropdown } from "components/stateless/dropdown/Dropdown"
import { IoMdArrowDropdown } from "react-icons/io"

export const RepoFilters: React.FC = () => {
  const router = useRouter()
  const { language, sort } = router.query

  const { totalRepos, reposLanguage, sortBy } = useReposState()
  const { sortRepos } = useReposAction()

  useEffect(() => {
    if (sort) {
      sortRepos(sort as string)
    }
  }, [sort])

  const formattedSortValue = (value: string) => {
    return value.replace("_", " ")
  }

  const filters = [
    {
      label: formattedSortValue(ReposSortEnum.MOST_STARS),
      onClick: () => handleSort(ReposSortEnum.MOST_STARS),
    },
    {
      label: formattedSortValue(ReposSortEnum.RECENTLY_ADDED),
      onClick: () => handleSort(ReposSortEnum.RECENTLY_ADDED),
    },
  ]

  const handleSort = (selectedSortOption: string) => {
    router.push({
      pathname: "/",
      query: { language: language, sort: selectedSortOption },
    })
  }

  console.log(new Date("2016-01-18T22:37:52Z"))

  return (
    <div className="flex flex-row justify-between align-middle bg-blue-50 px-3 py-2 border-l-2 border-blue-500 rounded-lg">
      <div className="self-center">
        <span className="text-blue-500 font-medium">{reposLanguage}</span>:{" "}
        <span className="text-gray-500 text-sm">{totalRepos} repositories</span>
      </div>
      <Dropdown
        label={
          <span>
            Sort: {formattedSortValue(sortBy)}
            <IoMdArrowDropdown className="inline h-4 w-4" />{" "}
          </span>
        }
        options={filters}
      />
    </div>
  )
}
