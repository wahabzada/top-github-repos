export interface ButtonProps {
  label: string
  onClick: (event: React.MouseEvent) => void
  disabled?: boolean
  loading?: boolean
}
