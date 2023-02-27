interface IconProps {
  color?: string
  size?: number
}

export function Plus({ size, color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill={!color ? 'currentColor' : color}
        d="M20 10c0 .639-.514 1.153-1.154 1.153h-7.692v7.693a1.155 1.155 0 01-2.308 0v-7.693H1.154a1.154 1.154 0 110-2.307h7.692V1.153a1.154 1.154 0 012.308 0v7.693h7.692c.64 0 1.154.519 1.154 1.153z"
      />
    </svg>
  )
}
