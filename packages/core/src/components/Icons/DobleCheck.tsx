interface IconProps {
  color?: string
  size?: number
}

export function DobleCheck({ size, color }: IconProps) {
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
        d="M9.866 10.938c-.38.455-1.059.455-1.479 0L4.815 7.364c-.418-.38-.418-1.058 0-1.478a1.078 1.078 0 011.516 0l2.816 2.819 6.387-6.391c.42-.419 1.1-.419 1.479 0a1.011 1.011 0 010 1.516l-7.147 7.108zm0 10.005c-.38.456-1.059.456-1.479 0L2.314 14.87c-.419-.38-.419-1.059 0-1.479a1.078 1.078 0 011.516 0l5.317 5.32L20.18 7.673c.42-.416 1.099-.416 1.478 0 .456.42.456 1.099 0 1.478L9.866 20.944z"
      />
    </svg>
  )
}
