interface IconProps {
  color?: string
  size?: number
}

export function Search({ size, color }: IconProps) {
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
        d="M21.691 20.398l-5.234-5.234c1.133-1.387 1.758-3.133 1.758-5.039A8.125 8.125 0 0010.09 2C5.603 2 2 5.638 2 10.125s3.638 8.125 8.09 8.125c1.906 0 3.654-.66 5.039-1.76l5.234 5.235c.219.185.461.275.7.275.238 0 .48-.092.662-.275a.913.913 0 00-.034-1.327zM3.875 10.125a6.257 6.257 0 016.25-6.25 6.257 6.257 0 016.25 6.25 6.257 6.257 0 01-6.25 6.25 6.258 6.258 0 01-6.25-6.25z"
      />
    </svg>
  )
}
