interface IconProps {
  color?: string
  size?: number
}

export function Phone({ size, color }: IconProps) {
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
        d="M20.762 14.512l-3.836-1.645a2.04 2.04 0 00-2.39.584l-1.073 1.31a11.654 11.654 0 01-4.218-4.184l1.31-1.074c.7-.571.941-1.55.587-2.385L9.488 3.232a2.051 2.051 0 00-2.338-1.18l-3.565.823A2.032 2.032 0 002 4.867C2 14.317 9.684 22 19.133 22c.96 0 1.779-.652 1.957-1.583l.823-3.568a1.982 1.982 0 00-1.151-2.337zm-.64 1.914l-.825 3.57c-.018.044-.082.129-.164.129-8.414 0-15.258-6.844-15.258-15.258 0-.082.05-.146.13-.164l3.568-.824a.174.174 0 01.195.098l1.647 3.841a.17.17 0 01-.05.198L7.462 9.543a.938.938 0 00-.248 1.139 13.363 13.363 0 006.074 6.074c.356.192.863.089 1.14-.248l1.562-1.909a.161.161 0 01.193-.044L20.02 16.2c.074.067.117.149.101.227z"
      />
    </svg>
  )
}