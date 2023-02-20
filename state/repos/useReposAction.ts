import { useContext } from "react"
import { ReposContext } from "./ReposContext"
import { ReposActionEnum } from "./repos.types"

export function useReposAction() {
  const { dispatch } = useContext(ReposContext)

  const fetchRepos = async (language: string) => {
    if (!language) return
    const lang = language.toLowerCase().trim()

    const fetchReposFailed = (errorMessage: string) => {
      dispatch({
        type: ReposActionEnum.FETCH_REPOS_FAILURE,
      })

      console.log(errorMessage)
    }

    try {
      dispatch({
        type: ReposActionEnum.FETCH_REPOS_BEGIN,
      })

      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
      const response = await fetch(
        `https://api.github.com/search/repositories?q=language:${lang}&sort=stars&order=desc`,
        requestOptions
      )

      if (!response.ok) {
        fetchReposFailed(`No repositories found for the keyword ${lang} :(`)
      } else {
        const data = await response.json()
        if (data.items) {
          dispatch({
            type: ReposActionEnum.FETCH_REPOS_SUCCESS,
            payload: data.items,
          })
        }
      }
    } catch (error) {
      fetchReposFailed(error as string)
    }
  }

  const sortRepos = (sortType: string) => {
    dispatch({
      type: ReposActionEnum.SORT_REPOS,
      payload: sortType,
    })
  }

  const resetRepos = () => {
    dispatch({
      type: ReposActionEnum.RESET_REPOS,
    })
  }

  return {
    fetchRepos,
    resetRepos,
    sortRepos,
  }
}
