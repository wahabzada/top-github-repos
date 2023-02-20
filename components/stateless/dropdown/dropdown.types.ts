export interface DropdownProps {
  label: string
  options: Array<DropdownOptionType>
}

export type DropdownOptionType = {
  label: string
  onClick: (event: React.MouseEvent) => void
}
