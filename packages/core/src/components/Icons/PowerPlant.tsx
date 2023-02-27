interface IconProps {
  color?: string
  size?: number
}

export function PowerPlant({ size, color }: IconProps) {
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
        d="M19.98 4.805A1.012 1.012 0 0018.969 4H4.976c-.477 0-.888.337-.982.805L2.02 14.819a1 1 0 00.207.832c.19.231.446.366.747.366h8.233v2.504H8.72a.751.751 0 100 1.502h6.522a.751.751 0 000-1.502h-2.505v-2.504h8.262a1.002 1.002 0 00.982-1.197l-2-10.015zm-.692 4.202h-3.615l-.334-3.505h3.246l.703 3.505zm-5.12 0h-4.36l.334-3.505h3.69l.336 3.505zM5.386 5.502h3.246L8.3 9.007H4.686l.7-3.505zm-1 5.007h3.77l-.38 4.006H3.583l.802-4.006zm4.897 4.006l.381-4.006h4.644l.382 4.006H9.283zm6.916 0l-.382-4.006h3.772l.8 4.006H16.2z"
      />
    </svg>
  )
}
