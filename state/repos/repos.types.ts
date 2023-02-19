export interface reposContextType {
  state: reposStateType
  dispatch: ({ type }: reposActionType) => void
}

export type repoType = unknown

export interface reposStateType {
  data: repoType[]
  loading: boolean
  error: boolean
}

export interface reposActionType {
  type:
    | ReposActionEnum.FETCH_REPOS_BEGIN
    | ReposActionEnum.FETCH_REPOS_FAILURE
    | ReposActionEnum.FETCH_REPOS_SUCCESS
    | ReposActionEnum.RESET_REPOS
  payload?: unknown[]
}

export enum ReposActionEnum {
  FETCH_REPOS_BEGIN = "FETCH_REPOS_BEGIN",
  FETCH_REPOS_FAILURE = "FETCH_REPOS_FAILURE",
  FETCH_REPOS_SUCCESS = "FETCH_REPOS_SUCCESS",
  RESET_REPOS = "RESET_REPOS",
}
