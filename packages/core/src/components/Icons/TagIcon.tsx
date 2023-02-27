interface IconProps {
  color?: string
  size?: number
}

export function TagIcon({ size, color }: IconProps) {
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
        d="M5.658 7.12a1.462 1.462 0 112.924 0 1.462 1.462 0 01-2.924 0zM11.03 2c.777 0 1.518.308 2.066.857l8.047 8.045a2.93 2.93 0 010 4.142l-6.1 6.099a2.93 2.93 0 01-4.141 0l-8.045-8.047A2.917 2.917 0 012 11.03V4.195C2 2.983 2.983 2 4.195 2h6.835zm-6.621 9.546l8.047 8.047a.726.726 0 001.033 0l6.104-6.104a.726.726 0 000-1.033L11.546 4.41a.734.734 0 00-.516-.214H4.195v6.835c0 .192.077.38.214.516z"
      />
    </svg>
  )
}
