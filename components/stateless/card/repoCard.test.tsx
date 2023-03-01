import { RepoCard } from "./RepoCard"
import { render, screen } from "@testing-library/react"
import { repoMockData } from "tests/utils/MockReposContextProvider"

// test type: unit
test("RepoCard component", () => {
  // renders
  const label = "click me"
  render(<RepoCard data={repoMockData} />)

  const repoCard = screen.getByTestId("repo-card")

  // uses article semantic element: accessibility
  expect(screen.getByRole("article")).toBeInTheDocument

  // has title
  expect(screen.getByText(repoMockData.full_name)).toBeInTheDocument

  // has description
  expect(screen.getByText(repoMockData.description)).toBeInTheDocument

  // has url
  const repoCardLink = screen.getByRole("link")
  expect(repoCardLink.getAttribute("href")).toBe(repoMockData.html_url)
})
