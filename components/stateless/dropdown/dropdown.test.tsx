import { Dropdown } from "./Dropdown"
import { render, screen, fireEvent } from "@testing-library/react"

// test type: unit
test("Dropdown component", () => {
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

  // options work
  fireEvent.click(dropdown)
  expect(screen.getByText(options[1].label)).toBeInTheDocument
})
