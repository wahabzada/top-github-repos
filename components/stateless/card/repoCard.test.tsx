import { RepoCard } from "./RepoCard"
import { render, screen } from "@testing-library/react"

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
