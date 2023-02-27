interface IconProps {
  color?: string
  size?: number
}

export function Trees({ size, color }: IconProps) {
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
        d="M21.592 15.19l-1.117-1.288c.21-.155.38-.36.495-.609a1.554 1.554 0 00-.228-1.674l-.97-1.14c.143-.13.26-.288.34-.47a1.329 1.329 0 00-.249-1.45L16.1 4.47A1.482 1.482 0 0015.007 4c-.419 0-.817.172-1.09.47l-1.23 1.338 1.01 1.098 1.297-1.42L18.56 9.36h-1.71l2.674 3.352h-2.067l3.001 3.465c.076.087.051.18.03.226-.033.067-.083.104-.155.104H15.99a1.685 1.685 0 00-.401-1.316l-1.117-1.289c.209-.154.38-.36.495-.609.26-.559.172-1.198-.228-1.673l-.97-1.14c.143-.13.26-.289.339-.47a1.329 1.329 0 00-.248-1.45l-3.764-4.09A1.482 1.482 0 009.004 4c-.42 0-.816.172-1.091.47L4.15 8.559c-.368.403-.463.96-.247 1.45.08.182.195.341.338.47l-.974 1.144a1.551 1.551 0 00-.226 1.67c.115.248.286.455.495.609L2.42 15.19a1.695 1.695 0 00-.263 1.834c.277.605.859.984 1.519.984H8.26l.002 1.252a.75.75 0 001.502-.002v-1.25h4.502v1.252a.75.75 0 001.5-.002l.001-1.25h4.568c.66 0 1.242-.377 1.52-.984.253-.62.181-1.32-.263-1.833zM9.761 16.508l-.001-.696 1.275-1.275a.75.75 0 00-1.061-1.061l-.217.215-.03-3.965a.727.727 0 00-.751-.722c-.388 0-.75.338-.723.75l.002 1.441-.249-.221a.75.75 0 10-1.06 1.06l1.284 1.285.027 3.189h-4.58c-.07 0-.122-.035-.154-.106a.203.203 0 01.031-.227l3.002-3.465H4.488l2.678-3.351H5.455l3.536-3.872 3.565 3.874h-1.71l2.674 3.352h-2.068l3.002 3.465c.075.087.05.18.029.226-.032.067-.082.104-.154.104H9.76z"
      />
    </svg>
  )
}
