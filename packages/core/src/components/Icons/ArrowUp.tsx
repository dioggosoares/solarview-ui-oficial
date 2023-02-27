interface IconProps {
  color?: string
  size?: number
}

export function ArrowUp({ size, color }: IconProps) {
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
        d="M2.344 15.889l8.866-8.495c.254-.25.533-.394.81-.394.28 0 .556.103.77.31l8.866 8.495c.445.424.46 1.129.034 1.572a1.108 1.108 0 01-1.574.034l-8.095-7.716-8.137 7.794c-.441.428-1.15.413-1.574-.033a1.103 1.103 0 01.034-1.567z"
      />
    </svg>
  )
}
