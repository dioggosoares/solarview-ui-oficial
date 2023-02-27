interface IconProps {
  color?: string
  size?: number
}

export function Minus({ size, color }: IconProps) {
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
        d="M22 12.154c0 .64-.514 1.154-1.154 1.154H3.154a1.154 1.154 0 110-2.308h17.692c.64 0 1.154.52 1.154 1.154z"
      />
    </svg>
  )
}
