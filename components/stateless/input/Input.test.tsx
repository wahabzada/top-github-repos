import { Input } from "./Input"
import { render, screen } from "@testing-library/react"

// test type: unit
test("Button component", () => {
  // renders
  const value = "I am an input field"
  const maxLength = 10
  render(
    <Input value={value} maxLength={maxLength} onChange={() => jest.fn()} />
  )

  const input = screen.getByLabelText("input")

  // has value
  expect(input.value).toBe(value)

  // has maxLength
  expect(input.maxLength).toBe(maxLength)
})
