interface IconProps {
  color?: string
  size?: number
}

export function Medal({ size, color }: IconProps) {
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
        d="M18.07 14.188c.32-.206.665-.491.924-.903.413-.713.372-1.432.348-1.863l-.003-.048.019-.028c.24-.397.607-1.006.607-1.846 0-.84-.401-1.449-.64-1.813a2.178 2.178 0 00-.019-.027l.003-.048c.024-.43.065-1.15-.348-1.863-.415-.718-1.063-1.044-1.45-1.238l-.037-.019-.018-.037c-.194-.386-.52-1.034-1.239-1.45-.422-.244-.9-.362-1.466-.362-.13 0-.263.006-.396.014l-.049.002-.028-.018C13.95 2.401 13.34 2 12.5 2c-.84 0-1.45.401-1.813.64-.007.007-.02.013-.027.019l-.047-.003a7.837 7.837 0 00-.398-.014c-.565 0-1.044.118-1.466.362-.718.416-1.044 1.064-1.238 1.45a4.058 4.058 0 00-.019.037l-.037.018c-.386.195-1.034.52-1.45 1.239-.413.713-.373 1.432-.348 1.861l.003.048-.019.03C5.401 8.052 5 8.66 5 9.5s.401 1.449.641 1.813c.006.007.012.019.018.027l-.003.047c-.024.43-.065 1.148.348 1.863.267.461.627.752.955.958l-1.892 4.715a.937.937 0 001.055 1.265l1.765-.353.837 1.651a.928.928 0 00.874.513.926.926 0 00.83-.581L12.21 17h.611l1.75 4.418c.14.344.459.566.83.581.012-.034-.007.001.04.001a.926.926 0 00.833-.513l.838-1.652 1.765.353a.939.939 0 001.055-1.266l-1.863-4.735zm-.699-1.876c-.237.41-.88.514-1.213.847-.332.332-.436.975-.846 1.212-.153.089-.335.11-.528.11-.192 0-.394-.021-.587-.021-.125 0-.246.009-.358.039-.444.118-.855.626-1.339.626s-.895-.506-1.34-.625c-.113-.031-.234-.074-.36-.074-.192 0-.394.022-.586.022-.193 0-.375-.022-.528-.111-.409-.204-.514-.845-.846-1.177-.332-.332-.975-.437-1.212-.848-.234-.402-.005-1.011-.128-1.472-.119-.445-.625-.856-.625-1.34 0-.484.506-.895.625-1.34.124-.462-.106-1.07.128-1.474.238-.409.88-.514 1.213-.846.333-.332.437-.975.846-1.212.153-.089.336-.11.528-.11s.394.021.588.021c.124 0 .245-.009.357-.039.445-.12.856-.625 1.34-.625.484 0 .895.506 1.34.625.113.03.234.04.359.04.193 0 .395-.022.587-.022.192 0 .375.022.528.11.41.237.513.88.846 1.213.332.333.975.437 1.212.846.234.404.005 1.012.128 1.473.121.445.625.856.625 1.34 0 .484-.506.895-.625 1.34-.125.46.105 1.07-.129 1.473zM12.5 7a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
      />
    </svg>
  )
}