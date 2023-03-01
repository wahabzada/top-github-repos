import { render, screen, fireEvent, cleanup } from "@testing-library/react"
import { SearchRepos } from "./SearchRepos"
import { useRouter } from "next/router"
import {
  MockReposContextProvider,
  mockReposStateType,
} from "tests/utils/MockReposContextProvider"

// test type: integration
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))

const setup = (state: mockReposStateType) => {
  useRouter.mockReturnValue({ query: { sort: "" } })

  const utils = render(
    <MockReposContextProvider newState={state}>
      <SearchRepos />
    </MockReposContextProvider>
  )

  return {
    ...utils,
  }
}

afterEach(cleanup)

test("search input empty when initially rendered", () => {
  setup({})
  const searchInput = screen.getByRole("searchbox")
  expect(searchInput.value).toBe("")
})

test("search btn disabled when search input has no value", () => {
  setup({})
  const searchInput = screen.getByRole("searchbox")
  const searchBtn = screen.getByTestId("search-btn")

  expect(searchInput.value).toBe("")
  expect(searchBtn).toHaveProperty("disabled", true)
})

test("search btn enabled when search input has value", async () => {
  setup({})

  const searchInput = screen.getByRole("searchbox")
  const searchBtn = screen.getByTestId("search-btn")

  const value = "typescript"
  fireEvent.change(searchInput, { target: { value: value } })
  expect(searchInput.value).toBe(value)
  expect(searchBtn).toHaveProperty("disabled", false)
})

test("trending searches list rendered", async () => {
  setup({})
  screen.getByTestId("trending-searches")
})
