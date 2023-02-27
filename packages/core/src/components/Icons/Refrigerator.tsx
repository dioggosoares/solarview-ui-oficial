interface IconProps {
  color?: string
  size?: number
}

export function Refrigerator({ size, color }: IconProps) {
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
        d="M15.563 1.5H7.686A3.937 3.937 0 003.75 5.438v14.437A2.625 2.625 0 006.375 22.5h10.5a2.625 2.625 0 002.625-2.625V5.437A3.938 3.938 0 0015.562 1.5zm1.968 18.375a.657.657 0 01-.656.656h-10.5a.657.657 0 01-.656-.656v-9.844h7.875v5.578a.985.985 0 001.969 0v-5.578h1.968v9.844zm0-11.813h-1.968v-1.64a.985.985 0 00-1.97 0v1.64H5.72V5.438a1.97 1.97 0 011.968-1.97h7.875a1.97 1.97 0 011.97 1.97v2.625z"
      />
    </svg>
  )
}
