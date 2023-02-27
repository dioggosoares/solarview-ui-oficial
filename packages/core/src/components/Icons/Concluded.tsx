interface IconProps {
  color?: string
  size?: number
}

export function Concluded({ size, color }: IconProps) {
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
        d="M11.523 15.273a1.096 1.096 0 01-1.546 0l-2.5-2.5a1.096 1.096 0 010-1.546 1.096 1.096 0 011.546 0l1.727 1.726 4.227-4.226a1.096 1.096 0 011.546 0 1.096 1.096 0 010 1.546l-5 5zM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zM12 3.875A8.124 8.124 0 003.875 12 8.124 8.124 0 0012 20.125 8.124 8.124 0 0020.125 12 8.124 8.124 0 0012 3.875z"
      />
    </svg>
  )
}
