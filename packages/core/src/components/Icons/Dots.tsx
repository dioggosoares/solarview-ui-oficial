interface IconProps {
  color?: string
  size?: number
}

export function Dots({ size, color }: IconProps) {
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
        d="M12.308 17.385A2.308 2.308 0 1112.307 22a2.308 2.308 0 010-4.616zm0-7.693a2.308 2.308 0 110 4.616 2.308 2.308 0 010-4.616zm0-3.077a2.308 2.308 0 110-4.616 2.308 2.308 0 010 4.616z"
      />
    </svg>
  )
}
