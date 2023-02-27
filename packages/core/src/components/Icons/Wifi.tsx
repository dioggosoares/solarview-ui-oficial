interface IconProps {
  color?: string
  size?: number
}

export function Wifi({ size, color }: IconProps) {
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
        d="M11.974 15.474c-.938 0-1.723.812-1.723 1.778s.784 1.75 1.723 1.75c.938 0 1.778-.784 1.778-1.75s-.784-1.778-1.778-1.778zm9.795-6.767C19.294 6.35 15.734 5 12.002 5 8.27 5 4.71 6.35 2.234 8.707a.749.749 0 101.034 1.086C5.44 7.7 8.65 6.5 12.001 6.5c3.35 0 6.532 1.2 8.736 3.295a.733.733 0 00.487.206.745.745 0 00.543-.234.724.724 0 00.001-1.06zm-9.767 1.79c-2.395 0-4.623.876-6.27 2.462a.75.75 0 101.039 1.083c1.368-1.316 3.224-2.04 5.23-2.04 2.007 0 3.864.724 5.233 2.04.144.14.303.21.49.21a.75.75 0 00.52-1.292c-1.62-1.587-3.848-2.462-6.242-2.462z"
      />
    </svg>
  )
}
