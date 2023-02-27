interface IconProps {
  color?: string
  size?: number
}

export function Filter({ size, color }: IconProps) {
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
        d="M14.14 5c.887 0 1.61.721 1.61 1.61 0 .406-.152.8-.465 1.097l-3.633 3.91v7.11c0 .703-.535 1.273-1.238 1.273-.285 0-.496-.074-.703-.21l-2.98-1.946a1.617 1.617 0 01-.668-1.305v-4.922L2.43 7.707A1.61 1.61 0 013.61 5h10.53zm-6.238 6.25v5.121l1.875 1.238V11.25c0-.238.125-.465.286-.637l3.468-3.738H4.217l3.47 3.738c.16.172.215.399.215.637zm13.16 6.563c.52 0 .938.418.938.937 0 .52-.418.938-.938.938h-5.625a.935.935 0 01-.937-.938c0-.52.418-.938.938-.938h5.624zM14.5 12.5c0-.52.418-.938.938-.938h5.624c.52 0 .938.418.938.938s-.418.938-.938.938h-5.625a.935.935 0 01-.937-.938zm6.563-7.188a.937.937 0 110 1.875h-3.125a.937.937 0 110-1.875h3.125z"
      />
    </svg>
  )
}
