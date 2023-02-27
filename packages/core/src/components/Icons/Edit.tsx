interface IconProps {
  color?: string
  size?: number
}

export function Edit({ size, color }: IconProps) {
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
        d="M5.061 14.365L15.765 3.66c.88-.88 2.308-.88 3.188 0l1.387 1.388a2.254 2.254 0 010 3.187L9.634 18.936c-.046.046-.091.06-.14.133-.339.3-.74.49-1.176.648l-4.235 1.246a.794.794 0 01-.836-.243c-.218-.186-.3-.507-.213-.806l1.246-4.234c.146-.496.415-.95.781-1.316zm.84 1.792l-.81 2.752 2.752-.81c.193-.067.429-.19.598-.355l8.038-8.042-2.213-2.214-8.01 8.07a1.383 1.383 0 00-.355.598z"
      />
    </svg>
  )
}
