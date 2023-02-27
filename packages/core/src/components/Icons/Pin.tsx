interface IconProps {
  color?: string
  size?: number
}

export function Pin({ size, color }: IconProps) {
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
        d="M12.926 21.312C14.93 18.86 19.5 12.919 19.5 9.582c0-4.048-3.36-7.332-7.5-7.332-4.14 0-7.5 3.284-7.5 7.331 0 3.338 4.57 9.28 6.574 11.73.48.585 1.371.585 1.852 0zM12 12.025c-1.379 0-2.5-1.096-2.5-2.444 0-1.347 1.121-2.443 2.5-2.443s2.5 1.096 2.5 2.443c0 1.348-1.121 2.444-2.5 2.444z"
      />
    </svg>
  )
}
