interface IconProps {
  color?: string
  size?: number
}

export function ArrowRight({ size, color }: IconProps) {
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
        d="M8.922 2.344l8.512 8.885c.208.215.31.494.31.771 0 .278-.102.556-.31.771l-8.512 8.885a1.112 1.112 0 01-1.577.033 1.11 1.11 0 01-.033-1.576l7.81-8.155-7.809-8.07a1.11 1.11 0 01.034-1.577 1.11 1.11 0 011.575.033z"
      />
    </svg>
  )
}
