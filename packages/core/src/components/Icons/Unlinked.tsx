interface IconProps {
  color?: string
  size?: number
}

export function Unlinked({ size, color }: IconProps) {
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
        d="M7.803 7.756a4.494 4.494 0 015.962.353c1.354 1.353 1.644 3.372.913 5.038l1.425 1.115 2.972-2.971a2.995 2.995 0 00-4.09-4.373l-.194.166a.749.749 0 01-.988-1.128l.194-.168a4.493 4.493 0 016.137.205 4.494 4.494 0 010 6.357l-2.843 2.844 4.421 3.465a.75.75 0 01-.925 1.181l-18.5-14.5a.75.75 0 11.926-1.18l4.59 3.596zm1.231.966l4.413 3.46a2.996 2.996 0 00-.744-3.013c-.994-.997-2.544-1.144-3.669-.447zm1.2 7.168a4.473 4.473 0 01-1.31-3.434l1.695 1.335c.143.378.372.734.675 1.04.459.485 1.096.769 1.725.85l1.697 1.338a4.505 4.505 0 01-4.482-1.128zm-4.59-6.018l1.187.934-1.905 1.903a2.997 2.997 0 000 4.238c1.115 1.087 2.905 1.175 4.09.137l.193-.168a.75.75 0 01.987 1.128l-.193.168a4.492 4.492 0 01-6.138-.206c-1.755-1.753-1.755-4.628 0-6.356l1.779-1.778z"
      />
    </svg>
  )
}
