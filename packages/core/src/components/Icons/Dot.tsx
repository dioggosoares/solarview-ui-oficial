interface IconProps {
  color?: string
  size?: number
}

export function Dot({ size, color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill={!color ? 'currentColor' : color}
        d="M7.5 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
      />
    </svg>
  )
}
