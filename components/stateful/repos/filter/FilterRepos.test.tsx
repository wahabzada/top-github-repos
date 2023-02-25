import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from "@testing-library/react"
import { FilterRepos } from "./FilterRepos"
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
      <FilterRepos />
    </ReposContextProvider>
  )
  const sortDropdown = screen.getByTestId("dropdown")
  const filterTitle = screen.getByTestId("filter-title")
  return {
    sortDropdown,
    filterTitle,
    ...utils,
  }
}

afterEach(cleanup)

test("filter title rendered", async () => {
  const { filterTitle } = setup()
  expect(filterTitle.textContent).toContain("repositories")
})

test("sort dropdown options opened", async () => {
  const { sortDropdown } = setup()

  fireEvent.click(sortDropdown)
  await waitFor(() => {
    screen.getByRole("menuitem", {
      name: "most stars",
    })
    screen.getByRole("menuitem", {
      name: "recently added",
    })
  })
})
