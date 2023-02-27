interface IconProps {
  color?: string
  size?: number
}

export function Info({ size, color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={!color ? 'currentColor' : color}
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18.125c-4.48 0-8.125-3.645-8.125-8.125S7.52 3.875 12 3.875 20.125 7.52 20.125 12 16.48 20.125 12 20.125zm1.563-5h-.626v-3.438A.938.938 0 0012 10.75h-1.25a.94.94 0 00-.938.938.94.94 0 00.938.937h.313v2.5h-.626a.94.94 0 00-.937.938.94.94 0 00.938.937h3.124a.938.938 0 000-1.875zM12 9.5A1.25 1.25 0 1012 7a1.25 1.25 0 000 2.5z"
      />
    </svg>
  )
}
