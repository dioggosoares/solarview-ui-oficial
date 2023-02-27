interface IconProps {
  color?: string
  size?: number
}

export function Mail({ size, color }: IconProps) {
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
        d="M4.5 6c-.344 0-.625.3-.625.667v.92l6.738 5.9a2.08 2.08 0 002.778 0l6.734-5.9v-.92c0-.367-.281-.667-.625-.667h-15zm-.625 4.175v7.158c0 .367.281.667.625.667h15c.344 0 .625-.3.625-.667v-7.158l-5.547 4.858c-1.5 1.313-3.66 1.313-5.156 0l-5.547-4.858zM2 6.667C2 5.196 3.121 4 4.5 4h15C20.879 4 22 5.196 22 6.667v10.666C22 18.804 20.879 20 19.5 20h-15C3.121 20 2 18.804 2 17.333V6.667z"
      />
    </svg>
  )
}
