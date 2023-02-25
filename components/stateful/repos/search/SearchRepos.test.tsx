import { render, screen, fireEvent, cleanup } from "@testing-library/react"
import { SearchRepos } from "./SearchRepos"
import { useRouter } from "next/router"
import { ReposContextProvider } from "state/repos/ReposContext"

// test type: integration
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))

const setup = () => {
  useRouter.mockReturnValue({ query: { sort: "" } })
  const utils = render(
    <ReposContextProvider>
      <SearchRepos />
    </ReposContextProvider>
  )
  const searchForm = screen.getByTestId("search-repos")
  const searchInput = screen.getByRole("textbox")
  const searchBtn = screen.getByTestId("search-btn")
  const trendingSearchesList = screen.getByRole("list")
  return {
    searchForm,
    searchInput,
    searchBtn,
    trendingSearchesList,
    ...utils,
  }
}

afterEach(cleanup)

test("search input empty when initially rendered", () => {
  const { searchInput } = setup()
  expect(searchInput.value).toBe("")
})

test("search btn disabled when search input has no value", () => {
  const { searchBtn, searchInput } = setup()
  expect(searchInput.value).toBe("")
  expect(searchBtn).toHaveProperty("disabled", true)
})

test("search btn enabled when search input has value", async () => {
  const { searchBtn, searchInput } = setup()

  const value = "typescript"
  fireEvent.change(searchInput, { target: { value: value } })
  expect(searchInput.value).toBe(value)
  expect(searchBtn).toHaveProperty("disabled", false)
})

test("trending searches list rendered", async () => {
  const { trendingSearchesList } = setup()
})
