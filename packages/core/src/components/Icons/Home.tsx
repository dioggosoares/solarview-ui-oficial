interface IconProps {
  color?: string
  size?: number
}

export function Home({ size, color }: IconProps) {
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
        d="M11.462 3.198a.83.83 0 011.076 0l5.573 4.73V4.943c0-.46.372-.864.834-.864.461 0 .833.404.833.864V9.34l1.927 1.636a.832.832 0 11-1.076 1.27l-.851-.722V18A2.777 2.777 0 0117 20.778H7A2.777 2.777 0 014.222 18v-6.476l-.85.723a.833.833 0 01-1.078-1.271l9.168-7.778zM5.889 10.11v7.89A1.11 1.11 0 007 19.11h1.667v-5.278c0-.767.621-1.389 1.389-1.389h3.889c.767 0 1.388.622 1.388 1.39v5.277H17a1.11 1.11 0 001.111-1.11v-7.89l-6.11-5.185-6.112 5.185zm4.444 4v5h3.334v-5h-3.334z"
      />
    </svg>
  )
}
