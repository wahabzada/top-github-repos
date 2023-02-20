import { useContext, useMemo } from "react"
import { ReposSortEnum } from "./repos.types"
import { ReposContext } from "./ReposContext"

export const useReposState = () => {
  const { state } = useContext(ReposContext)

  const recentRepos = useMemo(
    () =>
      state.data.sort(
        (objA, objB) =>
          Number(new Date(objB.created_at)) - Number(new Date(objA.created_at))
      ),
    [state.data]
  )

  const popularRepos = useMemo(
    () => state.data.sort((objA, objB) => objB.watchers - objA.watchers),
    [state.data]
  )

  return {
    repos:
      state.sortBy === ReposSortEnum.RECENTLY_ADDED
        ? recentRepos
        : popularRepos,
    loading: state.loading,
    error: state.error,
    sortBy: state.sortBy,
    reposLanguage: state.data.length ? state.data[0].language : "",
    totalRepos: state.data.length,
  }
}
