interface IconProps {
  color?: string
  size?: number
}

export function ArrowsUpDown({ size, color }: IconProps) {
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
        d="M21.716 16.91a.967.967 0 00-1.367-1.367l-2.217 2.218V3.97a.965.965 0 00-.968-.968.965.965 0 00-.967.968V17.76l-2.218-2.217a.967.967 0 00-1.367 1.367l3.871 3.87a.964.964 0 001.367 0l3.87-3.87h-.004zM7.526 3.284a.964.964 0 00-1.368 0l-3.874 3.87a.967.967 0 001.367 1.367l2.217-2.217v13.791c0 .537.432.968.968.968a.965.965 0 00.967-.968V6.304l2.218 2.217a.967.967 0 001.367-1.367l-3.863-3.87z"
      />
    </svg>
  )
}
