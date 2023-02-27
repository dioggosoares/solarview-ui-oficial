interface IconProps {
  color?: string
  size?: number
}

export function Samu({ size, color }: IconProps) {
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
        d="M19.5 3C20.879 3 22 4.12 22 5.5V18c0 1.379-1.121 2.5-2.5 2.5h-15C3.12 20.5 2 19.379 2 18V5.5A2.5 2.5 0 014.5 3h15zm-15 15.625h6.563V8H3.875v10c0 .344.28.625.625.625zm8.438 0H19.5a.627.627 0 00.625-.625V8h-7.188v10.625z"
      />
    </svg>
  )
}
