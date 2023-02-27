interface IconProps {
  color?: string
  size?: number
}

export function Close({ size, color }: IconProps) {
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
        d="M19.06 7.06a1.502 1.502 0 00-2.124-2.124L12 9.876 7.06 4.942a1.502 1.502 0 00-2.124 2.123L9.876 12l-4.935 4.94a1.502 1.502 0 002.123 2.124L12 14.124l4.94 4.935a1.502 1.502 0 002.124-2.123L14.124 12l4.935-4.94z"
      />
    </svg>
  )
}
