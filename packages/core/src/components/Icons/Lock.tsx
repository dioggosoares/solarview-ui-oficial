interface IconProps {
  color?: string
  size?: number
}

export function Lock({ size, color }: IconProps) {
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
        d="M6.75 9.5V7a5 5 0 1110 0v2.5H18c1.379 0 2.5 1.121 2.5 2.5v7.5c0 1.379-1.121 2.5-2.5 2.5H5.5C4.12 22 3 20.879 3 19.5V12c0-1.379 1.12-2.5 2.5-2.5h1.25zm1.875 0h6.25V7a3.125 3.125 0 10-6.25 0v2.5zm-3.75 10c0 .344.28.625.625.625H18a.627.627 0 00.625-.625V12a.627.627 0 00-.625-.625H5.5a.626.626 0 00-.625.625v7.5z"
      />
    </svg>
  )
}
