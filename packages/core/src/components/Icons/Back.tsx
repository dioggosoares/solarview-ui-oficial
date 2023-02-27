interface IconProps {
  color?: string
  size?: number
}

export function Back({ size, color }: IconProps) {
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
        d="M21 11.589c0 .593-.481 1.074-1.074 1.074H4.753l5.936 5.663a1.075 1.075 0 01-1.482 1.555l-7.873-7.515A1.061 1.061 0 011 11.589c0-.295.12-.573.333-.779l7.873-7.515a1.077 1.077 0 011.519.038c.41.425.394 1.107-.037 1.519l-5.936 5.663h15.214c.591 0 1.034.483 1.034 1.074z"
      />
    </svg>
  )
}
