interface IconProps {
  color?: string
  size?: number
}

export function User({ size, color }: IconProps) {
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
        d="M13.625 13.875h-3.75A6.875 6.875 0 003 20.75c0 .69.56 1.25 1.25 1.25h15c.69 0 1.25-.56 1.25-1.25a6.875 6.875 0 00-6.875-6.875zm-8.711 6.25a5.005 5.005 0 014.961-4.375h3.75a5.008 5.008 0 014.96 4.375H4.915zM11.75 12a5 5 0 100-10 5 5 0 000 10zm0-8.125A3.129 3.129 0 0114.875 7a3.129 3.129 0 01-3.125 3.125A3.129 3.129 0 018.625 7a3.129 3.129 0 013.125-3.125z"
      />
    </svg>
  )
}
