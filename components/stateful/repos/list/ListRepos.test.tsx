import { render, screen, cleanup } from "@testing-library/react"
import { ListRepos } from "./ListRepos"
import { useRouter } from "next/router"
import {
  MockReposContextProvider,
  mockReposStateType,
  repoMockData,
} from "tests/utils/MockReposContextProvider"

// test type: integration
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))

const setup = (state: mockReposStateType) => {
  useRouter.mockReturnValue({ query: { sort: "" } })

  const utils = render(
    <MockReposContextProvider newState={state}>
      <ListRepos />
    </MockReposContextProvider>
  )

  return {
    ...utils,
  }
}

afterEach(cleanup)

test("render repo list if no error, not loading and data fetched", async () => {
  setup({
    data: [repoMockData],
    error: false,
  })

  expect(screen.getByTestId("repo-list")).toBeInTheDocument

  expect(screen.queryByText(repoMockData.full_name)).toBeTruthy()
})

test("don't render repo list if no data", async () => {
  setup({
    data: [],
  })

  expect(screen.queryByTestId(/repo-list/i)).toBeFalsy()
})

test("don't render repo list if loading", async () => {
  setup({
    loading: true,
  })

  expect(screen.queryByTestId(/repo-list/i)).toBeFalsy()
})

test("don't render repo list if error", async () => {
  setup({
    error: true,
  })

  expect(screen.queryByTestId(/repo-list/i)).toBeFalsy()
})
