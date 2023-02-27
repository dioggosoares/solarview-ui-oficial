interface IconProps {
  color?: string
  size?: number
}

export function Alert({ size, color }: IconProps) {
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
        d="M21.777 18.028L13.45 3.82A1.656 1.656 0 0012.007 3c-.562 0-1.124.273-1.48.82L2.207 18.028c-.605 1.089.193 2.459 1.477 2.459h16.651c1.279 0 2.08-1.366 1.443-2.46zm-17.71.585l7.905-13.552 7.974 13.552H4.066zm7.94-3.704a1.227 1.227 0 100 2.455 1.227 1.227 0 000-2.455zm-.937-5.976v3.747a.937.937 0 001.874 0V8.933a.937.937 0 00-1.874 0z"
      />
    </svg>
  )
}
