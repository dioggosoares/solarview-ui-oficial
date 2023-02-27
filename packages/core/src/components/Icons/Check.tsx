interface IconProps {
  color?: string
  size?: number
}

export function Check({ size, color }: IconProps) {
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
        d="M21.658 5.313c.456.42.456 1.099 0 1.478L9.866 18.584c-.38.455-1.059.455-1.479 0l-6.073-6.075c-.419-.38-.419-1.059 0-1.479a1.078 1.078 0 011.516 0l5.317 5.32L20.18 5.313c.42-.417 1.099-.417 1.478 0z"
      />
    </svg>
  )
}
