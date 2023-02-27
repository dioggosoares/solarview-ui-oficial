interface IconProps {
  color?: string
  size?: number
}

export function DownloadInvoice({ size, color }: IconProps) {
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
        d="M12.438 15.363v-3.988a.938.938 0 00-1.876 0v3.988l-1.558-1.527c-.149-.184-.387-.274-.629-.274s-.48.09-.663.274a.937.937 0 000 1.326l3.125 3.125a.937.937 0 001.326 0l3.125-3.125a.937.937 0 10-1.326-1.326l-1.524 1.527zm5.832-9.715l-2.916-2.916A2.512 2.512 0 0013.586 2H6.5A2.5 2.5 0 004 4.5v15A2.5 2.5 0 006.5 22h10c1.375 0 2.5-1.125 2.5-2.5V7.414c0-.66-.262-1.297-.73-1.766zM17.125 19.5c0 .345-.28.625-.625.625h-10a.625.625 0 01-.624-.625L5.875 4.505c0-.345.28-.625.625-.625h6.25V7c0 .69.56 1.25 1.25 1.25h3.09V19.5h.035z"
      />
    </svg>
  )
}
