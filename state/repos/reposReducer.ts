import { reposActionType, ReposActionEnum, reposStateType } from "./repos.types"

export const reposReducer = (
  state: reposStateType,
  action: reposActionType
): reposStateType => {
  switch (action.type) {
    case ReposActionEnum.FETCH_REPOS_BEGIN:
      return {
        ...state,
        loading: true,
        error: false,
      }

    case ReposActionEnum.FETCH_REPOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      }

    case ReposActionEnum.FETCH_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case ReposActionEnum.RESET_REPOS:
      return {
        ...state,
        loading: false,
        error: false,
        data: [],
      }

    case ReposActionEnum.SORT_REPOS:
      return {
        ...state,
        sortBy: action.payload,
      }

    default:
      return state
  }
}
