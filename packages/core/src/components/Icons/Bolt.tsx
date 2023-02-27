interface IconProps {
  color?: string
  size?: number
}

export function Bolt({ size, color }: IconProps) {
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
        d="M15.316 2c.746 0 1.286.713 1.082 1.43l-2.093 7.32h3.332c.754 0 1.363.61 1.363 1.363 0 .403-.176.782-.48 1.043L8.41 21.734a1.122 1.122 0 01-1.807-1.164l2.092-7.32H5.318a1.317 1.317 0 01-.857-2.32L14.59 2.27c.203-.174.46-.27.726-.27zm-1.41 3.32l-7.08 6.055h3.112c.292 0 .57.137.75.371.175.238.23.543.152.824L9.09 18.7l7.156-6.075h-3.183a.945.945 0 01-.75-.371.957.957 0 01-.153-.824l1.746-6.11z"
      />
    </svg>
  )
}
