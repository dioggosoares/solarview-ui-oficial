interface IconProps {
  color?: string
  size?: number
}

export function ArrowDown({ size, color }: IconProps) {
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
        d="M21.657 8.913L12.81 17.39c-.296.25-.574.352-.81.352-.236 0-.554-.103-.768-.31L2.343 8.913c-.444-.42-.459-1.166-.033-1.569a1.105 1.105 0 011.57-.033L12 15.094l8.12-7.778a1.106 1.106 0 011.57.034c.425.397.412 1.142-.033 1.563z"
      />
    </svg>
  )
}
