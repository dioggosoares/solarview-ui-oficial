interface IconProps {
  color?: string
  size?: number
}

export function Invoice({ size, color }: IconProps) {
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
        d="M7.688 14.5h8.125c.519 0 .937-.418.937-.938a.935.935 0 00-.938-.937H7.688a.94.94 0 00-.938.938.94.94 0 00.938.937zm0 3.75h4.375a.938.938 0 000-1.875H7.686a.94.94 0 00-.937.938.94.94 0 00.938.937zm0-7.5h8.125c.519 0 .937-.418.937-.938a.935.935 0 00-.938-.937H7.688a.94.94 0 00-.938.938.94.94 0 00.938.937zM18 2H5.5A2.5 2.5 0 003 4.5v15A2.5 2.5 0 005.5 22H18a2.5 2.5 0 002.5-2.5v-15C20.5 3.12 19.379 2 18 2zm.625 17.5c0 .345-.28.625-.625.625H5.5a.626.626 0 01-.625-.625V7h13.75v12.5z"
      />
    </svg>
  )
}
