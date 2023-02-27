interface IconProps {
  color?: string
  size?: number
}

export function SmartPhone({ size, color }: IconProps) {
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
        d="M16.25 2H7.5A2.5 2.5 0 005 4.5v15A2.5 2.5 0 007.5 22h8.75a2.5 2.5 0 002.5-2.5v-15c0-1.38-1.121-2.5-2.5-2.5zm.625 17.5c0 .345-.28.625-.625.625H7.5a.626.626 0 01-.625-.625v-15c0-.345.28-.625.625-.625h8.75c.344 0 .625.28.625.625v15zm-3.75-1.875h-2.5a.625.625 0 100 1.25h2.5a.625.625 0 100-1.25z"
      />
    </svg>
  )
}
