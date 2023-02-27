interface IconProps {
  color?: string
  size?: number
}

export function NoImage({ size, color }: IconProps) {
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
        d="M5 21c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 013 19V5c0-.55.196-1.021.587-1.413A1.928 1.928 0 015 3h14c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v14c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0119 21H5zm0-2h14V5H5v14zm1-2h12l-3.75-5-3 4L9 13l-3 4z"
      />
    </svg>
  )
}
