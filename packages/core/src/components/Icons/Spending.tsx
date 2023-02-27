interface IconProps {
  color?: string
  size?: number
}

export function Spending({ size, color }: IconProps) {
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
        d="M3.5 9.25a.75.75 0 11-1.5 0v-2.5A2.75 2.75 0 014.75 4h14.5A2.75 2.75 0 0122 6.75v2.5c0 .416-.334.75-.75.75a.748.748 0 01-.75-.75v-2.5c0-.69-.56-1.25-1.25-1.25H4.75c-.69 0-1.25.56-1.25 1.25v2.5zM16.5 7H18v11c0 1.103-.897 2-2 2H8c-1.103 0-2-.897-2-2V7h1.5v9.5c1.103 0 2 .897 2 2h5c0-1.103.897-2 2-2V7zM12 15c-1.684 0-3-1.119-3-2.5s1.316-2.5 3-2.5c1.656 0 3 1.119 3 2.5S13.656 15 12 15z"
      />
    </svg>
  )
}
