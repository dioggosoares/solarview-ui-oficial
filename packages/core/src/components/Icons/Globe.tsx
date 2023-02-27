interface IconProps {
  color?: string
  size?: number
}

export function Globe({ size, color }: IconProps) {
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
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10 8.125A8.124 8.124 0 0020.125 12 8.124 8.124 0 0012 3.875 8.124 8.124 0 003.875 12 8.124 8.124 0 0012 20.125zm6.031-8.152l-.66-1.98a1.254 1.254 0 01.723-1.556l2.031-.812.625 5.625-1.836-.457a1.26 1.26 0 01-.883-.82zM4.62 10.18l-.745-1.305L4.5 7l3.125-3.125 4.063-1.25.812 1.423a1.25 1.25 0 01-.137 1.433l-.613.718a1.248 1.248 0 00-.012 1.614l.532.632a.75.75 0 01.046.895.75.75 0 01-.855.293l-.941-.301a1.004 1.004 0 00-.797.059l-.235.113a.795.795 0 00-.039 1.394l1.348.774c.379.215.808.293 1.207.293h1.719c.496 0 .976.234 1.328.586l.148.148c.352.352.551.832.551 1.328v.32c0 .676-.36 1.298-.945 1.63l-.36.207c-.566.324-.984.82-1.164 1.484l-.058.21a1.87 1.87 0 01-1.282 1.282c-.597.172-1.226-.277-1.226-.898v-1.188c0-.43-.207-.82-.625-1.012-.348-.19-.625-.582-.625-1.011v-1.559c0-.699-.426-1.312-1.133-1.504l-2.227-.644A2.502 2.502 0 014.62 10.18z"
      />
    </svg>
  )
}
