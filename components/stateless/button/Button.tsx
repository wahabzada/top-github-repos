import { ButtonProps } from "./Button.types"

export const Button: React.FC<ButtonProps> = (button) => {
  return (
    <button
      onClick={button.onClick}
      disabled={button.disabled || button.loading}
      className="px-3 py-2 text-sm rounded-full text-gray-500 hover:text-gray-600 ring-gray-900/10 hover:ring-gray-900/20 bg-gray-50 hover:bg-gray-100 active:bg-gray-200"
    >
      {button.label}
    </button>
  )
}
