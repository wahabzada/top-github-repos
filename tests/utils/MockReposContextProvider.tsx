import { useReducer } from "react"
import { ReposSortEnum, repoType } from "state/repos/repos.types"
import { ReposContext } from "state/repos/ReposContext"
import { reposReducer } from "state/repos/reposReducer"

export const MockReposContextProvider: React.FC<any> = ({
  children,
  newState,
}) => {
  const initialState: mockReposStateType = {
    data: [],
    loading: false,
    error: false,
    sortBy: ReposSortEnum.MOST_STARS,
  }

  const mockState = { ...initialState, ...newState }

  const [state, dispatch] = useReducer(reposReducer, mockState)
  return (
    <ReposContext.Provider value={{ state, dispatch }}>
      {children}
    </ReposContext.Provider>
  )
}

export const repoMockData = {
  id: 1,
  full_name: "repo name",
  description: "mock repo object",
  watchers: 1000,
  html_url: "/repo-link",
  language: "typescript",
  topics: ["typescript"],
  created_at: "",
}

export interface mockReposStateType {
  data?: repoType[]
  loading?: boolean
  error?: boolean
  sortBy?: string
}
