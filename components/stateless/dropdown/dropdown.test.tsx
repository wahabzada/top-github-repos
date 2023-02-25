import { Dropdown } from "./Dropdown"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"

// test type: unit
test("Dropdown component", async () => {
  const handleClick = jest.fn()

  // renders
  const options = [
    { label: "option 1", onClick: handleClick },
    { label: "option 2", onClick: handleClick },
  ]

  render(<Dropdown label={options[0].label} options={options} />)

  const dropdown = screen.getByTestId("dropdown")

  // has label
  expect(screen.getByText(options[0].label)).toBeInTheDocument

  // dropdown work
  fireEvent.click(dropdown)
  await waitFor(() => {
    screen.getByRole("menuitem", {
      name: options[1].label,
    })
  })
})
