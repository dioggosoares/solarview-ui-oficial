interface IconProps {
  color?: string
  size?: number
}

export function InstantPowerPlus({ size, color }: IconProps) {
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
        d="M5.333 3c.462 0 .834.373.834.833V6.89H4.5V3.833c0-.46.373-.833.833-.833zM12 3c.462 0 .833.373.833.833V6.89h-1.666V3.833c0-.46.371-.833.833-.833zm2.5 5c.462 0 .833.372.833.833a.831.831 0 01-.833.834h-.278v.666a5.695 5.695 0 00-1.666 1.25V9.667H4.778v2.222a3.887 3.887 0 006.153 3.163 6.217 6.217 0 00.066 1.882 5.532 5.532 0 01-1.497.448v3.396H7.833v-3.396a5.565 5.565 0 01-4.722-5.524V9.635h-.278A.813.813 0 012 8.802c0-.43.373-.833.833-.833L14.5 8zM12 15.778c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5zm5.556-2.254A.579.579 0 0017 12.97a.579.579 0 00-.556.555v1.667h-1.666a.579.579 0 00-.556.555c0 .337.25.556.556.556h1.666v1.667c0 .337.25.555.556.555a.538.538 0 00.556-.555v-1.667h1.666a.538.538 0 00.556-.556.579.579 0 00-.556-.555h-1.666v-1.667z"
      />
    </svg>
  )
}
