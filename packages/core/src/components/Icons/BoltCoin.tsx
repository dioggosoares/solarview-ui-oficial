interface IconProps {
  color?: string
  size?: number
}

export function BoltCoin({ size, color }: IconProps) {
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
        d="M14.25 7.125c.23.172.313.48.2.746l-1.5 3.504h2.488c.265 0 .5.164.59.414.085.215.011.527-.192.695l-5.313 4.375a.625.625 0 01-.973-.73l1.5-3.54H8.563c-.265 0-.5-.128-.59-.378a.633.633 0 01.192-.695l5.313-4.375c.222-.215.543-.188.773-.016zM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zM12 3.875A8.124 8.124 0 003.875 12 8.124 8.124 0 0012 20.125 8.124 8.124 0 0020.125 12 8.124 8.124 0 0012 3.875z"
      />
    </svg>
  )
}
