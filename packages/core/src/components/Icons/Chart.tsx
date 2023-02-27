interface IconProps {
  color?: string
  size?: number
}

export function Chart({ size, color }: IconProps) {
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
        d="M21.352 11.375h-8.727V2.648c0-.353.238-.648.625-.648A8.75 8.75 0 0122 10.75a.637.637 0 01-.648.625zM10.75 13.25h8.645c.722 0 1.3.613 1.152 1.32A9.374 9.374 0 0111.375 22 9.375 9.375 0 012 12.625c0-4.512 3.185-8.277 7.43-9.173.707-.149 1.32.43 1.32 1.153v8.645zM8.875 5.551a7.504 7.504 0 00-5 7.074 7.48 7.48 0 007.5 7.5 7.504 7.504 0 007.074-5H8.875V5.551z"
      />
    </svg>
  )
}
