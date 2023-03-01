import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from "@testing-library/react"
import { FilterRepos } from "./FilterRepos"
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
      <FilterRepos />
    </MockReposContextProvider>
  )

  return {
    ...utils,
  }
}

afterEach(cleanup)

test("filter title rendered", async () => {
  setup({})
  expect(screen.getByTestId("filter-title").textContent).toContain(
    "repositories"
  )
})

test("sort dropdown options opened", async () => {
  setup({})

  fireEvent.click(screen.getByTestId("dropdown"))
  await waitFor(() => {
    screen.getByRole("menuitem", {
      name: "most stars",
    })
    screen.getByRole("menuitem", {
      name: "recently added",
    })
  })
})
