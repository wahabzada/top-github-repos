import { Pill } from "./Pill"
import { render, screen } from "@testing-library/react"

// test type: unit
test("Pill component", async () => {
  // renders
  const label = "I am a pill"
  render(<Pill label={label} />)

  const pill = await screen.findByTestId("pill")

  // has label
  expect(pill.textContent).toBe(label)
})
