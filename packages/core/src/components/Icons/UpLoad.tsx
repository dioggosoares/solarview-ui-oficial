interface IconProps {
  color?: string
  size?: number
}

export function UpLoad({ size, color }: IconProps) {
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
        d="M12.663 2.275a.934.934 0 00-1.324 0L6.96 6.65a.937.937 0 001.324 1.324l2.774-2.773v9.612c0 .52.418.938.937.938.52 0 .938-.418.938-.938V5.201l2.773 2.773A.937.937 0 0017.03 6.65l-4.367-4.375zm-7.85.977A2.81 2.81 0 002 6.064v13.124A2.81 2.81 0 004.812 22h14.374a2.81 2.81 0 002.812-2.812V6.064a2.81 2.81 0 00-2.812-2.812h-.313a.935.935 0 00-.937.937c0 .52.418.938.937.938h.313c.52 0 .937.418.937.937v13.124c0 .52-.418.937-.937.937H4.812a.935.935 0 01-.937-.937V6.064c0-.52.418-.937.937-.937h.313c.52 0 .937-.418.937-.938a.935.935 0 00-.937-.937h-.313z"
      />
    </svg>
  )
}
