interface IconProps {
  color?: string
  size?: number
}

export function Send({ size, color }: IconProps) {
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
        d="M3.228 1.29C1.892.638.576 2.253 1.267 3.695l2.66 5.56c.168.358.483.596.84.648l6.753.95c.13.017.23.142.23.289 0 .146-.1.271-.23.289l-6.753.95a1.125 1.125 0 00-.84.647l-2.66 5.56c-.69 1.442.625 3.056 1.96 2.405l16.958-8.267c1.231-.6 1.231-2.569 0-3.169L3.228 1.29z"
      />
    </svg>
  )
}
