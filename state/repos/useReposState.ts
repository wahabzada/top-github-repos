import { useContext } from "react"
import { ReposContext } from "./ReposContext"

export const useReposState = () => {
  const { state } = useContext(ReposContext)

  return {
    repos: state.data,
    loading: state.loading,
    error: state.error,
    totalRepos: state.data.length,
  }
}
