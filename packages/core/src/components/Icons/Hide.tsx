interface IconProps {
  color?: string
  size?: number
}

export function Hide({ size, color }: IconProps) {
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
        d="M6.71 6.899C8.093 5.821 9.868 5 12 5c2.525 0 4.547 1.151 6.019 2.519 1.462 1.356 2.44 2.953 2.903 4.097a.994.994 0 010 .768c-.419 1.01-1.26 2.431-2.497 3.7l3.287 2.575a.75.75 0 01-.925 1.181l-18.5-14.5a.75.75 0 11.926-1.18l3.496 2.739zm1.221.96L9.37 8.984a4 4 0 016.187 4.85l1.681 1.319c1.047-1.066 1.822-2.306 2.22-3.153a11.273 11.273 0 00-2.46-3.384C15.712 7.425 14.037 6.472 12 6.472c-1.578 0-2.966.582-4.069 1.387zm6.41 5.022c.103-.275.159-.572.159-.91 0-1.352-1.119-2.5-2.5-2.5-.022 0-.04.029-.09.029.068.16.09.328.09.472 0 .347-.075.647-.206.912l2.546 1.997zm.293 4.072l1.31 1.031A8.215 8.215 0 0112 19c-2.525 0-4.547-1.15-6.019-2.519-1.462-1.384-2.44-2.981-2.904-4.097a1 1 0 010-.768c.298-.716.807-1.641 1.52-2.57l1.178.929a10.03 10.03 0 00-1.23 1.997c.424.965 1.255 2.293 2.458 3.412C8.287 16.574 9.963 17.5 12 17.5c.96 0 1.837-.206 2.634-.547zM8 11.972c0-.063.003-.15.01-.238l1.752 1.382a2.39 2.39 0 001.675 1.293l1.757 1.41c-.379.09-.779.18-1.222.18-2.181 0-4-1.79-4-4.027H8z"
      />
    </svg>
  )
}
