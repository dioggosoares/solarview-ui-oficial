interface IconProps {
  color?: string
  size?: number
}

export function Credential({ size, color }: IconProps) {
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
        d="M14.778 14.833h3.333a.833.833 0 000-1.666h-3.333a.834.834 0 000 1.666zM9.222 14a2.222 2.222 0 100-4.444 2.222 2.222 0 000 4.444zM19.778 4H4.222A2.222 2.222 0 002 6.222v11.111c0 1.228.995 2.223 2.222 2.223h15.556A2.222 2.222 0 0022 17.333V6.223A2.223 2.223 0 0019.778 4zm.555 13.333c0 .307-.249.556-.555.556H13.11a2.778 2.778 0 00-2.778-2.778H8.111a2.777 2.777 0 00-2.778 2.778h-1.11a.556.556 0 01-.556-.556V8.444h16.666v8.89zm-5.555-5.277h3.333a.834.834 0 000-1.667h-3.333a.834.834 0 000 1.667z"
      />
    </svg>
  )
}
