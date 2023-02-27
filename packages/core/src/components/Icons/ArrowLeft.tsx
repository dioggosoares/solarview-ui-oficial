interface IconProps {
  color?: string
  size?: number
}

export function ArrowLeft({ size, color }: IconProps) {
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
        d="M15.94 21.86l-8.584-8.957c-.252-.3-.356-.581-.356-.82 0-.24.104-.562.314-.778l8.582-8.958a1.121 1.121 0 011.59-.034 1.12 1.12 0 01.033 1.59l-7.836 8.18 7.875 8.222a1.12 1.12 0 01-.034 1.589 1.116 1.116 0 01-1.585-.033z"
      />
    </svg>
  )
}
