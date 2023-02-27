interface IconProps {
  color?: string
  size?: number
}

export function AlertCircle({ size, color }: IconProps) {
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
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18.125c-4.48 0-8.125-3.645-8.125-8.125S7.52 3.875 12 3.875 20.125 7.52 20.125 12 16.48 20.125 12 20.125zm0-6.25c.518 0 .938-.42.938-.938v-5a.938.938 0 00-1.876 0v5c0 .52.422.938.938.938zm0 1.293a1.228 1.228 0 100 2.457 1.228 1.228 0 000-2.457z"
      />
    </svg>
  )
}
