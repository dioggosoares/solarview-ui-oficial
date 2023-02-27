interface IconProps {
  color?: string
  w?: number | string
  h?: number | string
}

export function Solarview({ w = 200, h = 45, color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 200 45"
    >
      <path
        fill="#0CA082"
        d="M55.68 22.39c-.81-.3-1.84-.6-3.11-.9-1.22-.27-2.12-.54-2.71-.82-.59-.28-.89-.7-.89-1.27 0-.57.26-1.03.77-1.38.51-.35 1.31-.52 2.38-.52 1.53 0 3.07.43 4.6 1.3l1.19-2.92c-.76-.47-1.64-.84-2.66-1.09-1.01-.25-2.05-.38-3.11-.38-1.52 0-2.8.23-3.85.69-1.05.46-1.84 1.08-2.36 1.86-.52.78-.78 1.66-.78 2.62 0 1.11.29 1.99.87 2.66a5.1 5.1 0 002.08 1.45c.81.3 1.84.6 3.11.9.82.19 1.47.36 1.96.52.48.16.88.37 1.19.63.31.26.46.59.46.98 0 .54-.26.97-.78 1.29-.52.32-1.33.49-2.42.49-.98 0-1.96-.16-2.94-.47-.98-.32-1.83-.74-2.54-1.26l-1.31 2.89c.74.57 1.73 1.03 2.95 1.39 1.23.36 2.49.53 3.81.53 1.52 0 2.81-.23 3.86-.69 1.06-.46 1.85-1.08 2.38-1.86.53-.78.79-1.65.79-2.6 0-1.11-.29-1.98-.87-2.63a5.162 5.162 0 00-2.07-1.42v.01zM73.77 15.53c-1.38-.74-2.92-1.11-4.65-1.11-1.73 0-3.28.37-4.66 1.11-1.38.74-2.47 1.77-3.25 3.07-.78 1.3-1.17 2.77-1.17 4.4 0 1.63.39 3.1 1.17 4.4.78 1.3 1.87 2.33 3.25 3.07 1.38.74 2.94 1.11 4.66 1.11 1.72 0 3.27-.37 4.65-1.11a8.354 8.354 0 003.25-3.07c.79-1.3 1.19-2.77 1.19-4.4 0-1.63-.4-3.1-1.19-4.4a8.354 8.354 0 00-3.25-3.07zm-.13 10.22c-.45.81-1.07 1.43-1.86 1.89-.79.45-1.68.68-2.66.68-.98 0-1.87-.23-2.66-.68a4.83 4.83 0 01-1.86-1.89c-.45-.81-.68-1.72-.68-2.75s.23-1.94.68-2.75c.45-.81 1.07-1.43 1.86-1.89.79-.45 1.68-.68 2.66-.68.98 0 1.86.23 2.66.68a4.83 4.83 0 011.86 1.89c.45.81.68 1.72.68 2.75s-.23 1.95-.68 2.75zM83.84 14.7H80v16.6h12.16v-3.13h-8.32V14.7zM100.729 14.7l-7.19 16.6h3.82l1.22-2.83h7.75l1.21 2.83h4.15l-7.16-16.6h-3.8zm-.84 10.76l2.6-6.01 2.56 6.01h-5.16zM126.089 23.91c.59-.89.89-1.96.89-3.19s-.29-2.3-.88-3.2c-.59-.9-1.42-1.6-2.5-2.09-1.08-.49-2.36-.73-3.83-.73h-7.19v16.6h3.84v-4.62h3.53l3.2 4.62h4.13l-3.72-5.34c1.09-.47 1.93-1.16 2.53-2.05zm-3.9-1.05c-.6.51-1.48.76-2.63.76h-3.13v-5.79h3.13c1.15 0 2.03.25 2.63.75.6.5.9 1.21.9 2.15s-.3 1.63-.9 2.13z"
      />
      <path
        fill="#F7A815"
        d="M136.329 26.56l-5.05-11.86h-4.15l7.16 16.6h3.8l7.18-16.6h-3.82l-5.12 11.86zM150.459 14.7h-3.84v16.6h3.84V14.7zM156.699 24.38h6.03v-2.99h-6.03v-3.6h8.83V14.7H152.879v16.6h12.86v-3.08h-9.04v-3.84zM189.179 14.7l-3.86 11.77-3.8-11.77h-3.55l-3.92 11.67-3.74-11.67h-3.92l1.26 4.03 4.13 12.57h4.1l3.77-11.24 3.65 11.24h4.13l5.43-16.6h-3.68zM18.98 22.37s-.01-.02-.02-.03a.729.729 0 00-.53-.35c-1.88-.25-3.73-.76-5.56-1.85-2.66-1.59-2.8-3.42-1.72-5.23.71-1.19 2.26-1.67 4-1.41a.3.3 0 00.43-.27c0-.1-.05-.19-.13-.24 0 0-.03-.02-.05-.03h-.02c-3.18-1.63-6.63-1.32-7.9.82-1.35 2.27.25 5.72 3.58 7.71 2.38 1.42 4.81 1.85 7.26 1.97.57.03.94-.59.65-1.08l.01-.01z"
      />
      <path
        fill="#11799E"
        d="M38.26 13.55c-1.39-2.25-5.19-2.41-8.49-.37-2.29 1.41-3.84 3.21-5.09 5.14-.15.22-.15.51-.01.74v.01c.26.44.87.48 1.18.07.99-1.3 2.19-2.48 3.77-3.45 2.64-1.63 4.83-1.23 5.94.57.73 1.18.44 2.78-.59 4.2a.3.3 0 00.17.55c.05 0 .1-.01.14-.04 0 0 .03-.02.05-.04 0 0 .02-.01.03-.02 2.91-2.07 4.2-5.27 2.9-7.38v.02z"
      />
      <path
        fill="#F7A815"
        d="M34.81 24.53c-2.29-1.37-4.58-1.92-6.85-2.14a.716.716 0 00-.69 1.08v.02c.12.18.3.3.5.34 1.58.29 3.16.81 4.73 1.74 2.66 1.59 3.31 3.72 2.23 5.53-.71 1.19-2.26 1.67-4 1.41 0 0-.09-.04-.15-.04a.3.3 0 00-.3.3c0 .11.06.2.15.26 0 0 .01 0 .02.01.01 0 .02.01.03.02 3.19 1.64 6.64 1.33 7.92-.81 1.35-2.27-.25-5.72-3.58-7.71l-.01-.01z"
      />
      <path
        fill="#0CA082"
        d="M23.84 8.73c1.39 0 2.6 1.09 3.27 2.71.02.15.14.27.3.27.16 0 .28-.12.3-.27-.2-3.6-2.26-6.44-4.76-6.44-2.64 0-4.78 3.15-4.78 7.03 0 8.72 7.47 12.94 7.47 21.08 0 3.1-1.49 4.16-3.6 4.16-1.39 0-2.6-1.09-3.27-2.71a.297.297 0 00-.3-.28c-.16 0-.29.13-.3.28v.03c.22 3.59 2.26 6.4 4.76 6.4 2.64 0 4.78-3.15 4.78-7.03 0-8.09-7.47-12.21-7.47-20.49 0-3.1 1.49-4.75 3.6-4.75v.01z"
      />
      <path
        fill="#B84F17"
        d="M21.33 26.36v-.01a.72.72 0 00-1.21-.04c-1.11 1.64-2.46 3.13-4.36 4.3-2.64 1.63-4.32.91-5.43-.88-.73-1.18-.44-2.78.59-4.2.07-.06.12-.14.12-.24a.3.3 0 00-.43-.27s-.03.02-.05.03c-.01 0-.02.01-.03.02-2.9 2.07-4.2 5.26-2.89 7.37 1.39 2.25 5.19 2.41 8.49.37 2.44-1.51 3.96-3.55 5.22-5.75.13-.22.12-.49 0-.71l-.02.01z"
      />
      <path
        fill="#056B58"
        d="M20.22 12.93c0 .33.01.65.03.97 0-.14-.01-.28-.01-.42 0-3.1 1.49-4.75 3.6-4.75 1.39 0 2.6 1.09 3.27 2.71.02.15.14.27.3.27.16 0 .28-.12.3-.27-.13-2.29-1.01-4.27-2.28-5.41-.55-.49-1.26-.68-1.93-.59-.67.09-1.35.5-1.76 1.11-.33.49-.59 1.09-.81 1.76-.45 1.31-.71 2.9-.71 4.62z"
      />
      <path
        fill="#0E3E60"
        d="M30.03 15.41c-.28.17-.55.36-.81.54.12-.08.23-.16.35-.23 2.63-1.64 4.82-1.25 5.95.55.74 1.18.46 2.78-.56 4.21-.12.1-.15.26-.07.4.08.14.25.18.39.12 1.88-1.33 3.09-3.12 3.38-4.8.25-1.47-.92-2.81-2.41-2.86-1.68-.06-4.02.71-6.21 2.08l-.01-.01z"
      />
      <path
        fill="#C17613"
        d="M32.92 25.79c-.28-.17-.57-.32-.85-.47.12.07.25.13.37.2 2.67 1.58 3.33 3.7 2.26 5.52-.7 1.19-2.26 1.68-3.99 1.44a.293.293 0 00-.38.12c-.08.14-.04.31.08.4 2.04 1.06 4.19 1.31 5.81.79 1.42-.45 2.03-2.09 1.43-3.45-.7-1.58-2.48-3.23-4.71-4.55h-.02z"
      />
      <path
        fill="#783507"
        d="M15.63 30.69c-2.54 1.52-4.2.78-5.29-.97-.73-1.17-.46-2.78.57-4.21a.3.3 0 00.08-.41.294.294 0 00-.4-.1s0 .01-.02.01c-1.78 1.27-2.95 2.95-3.31 4.56-.35 1.61.9 3.06 2.54 3.07 1.64.01 3.77-.7 5.83-1.95z"
      />
      <path
        fill="#0CA082"
        d="M23.35 15.75c0-.6-.32-5.39-.72-5.39-.4 0-.72 4.79-.72 5.39 0 .6.32 1.09.72 1.09.4 0 .72-.49.72-1.09zM21.92 30.47c0 .6.32 5.39.72 5.39.4 0 .72-4.79.72-5.39 0-.6-.32-1.09-.72-1.09-.4 0-.72.49-.72 1.09z"
      />
      <path
        fill="#11799E"
        d="M29.38 20.07c.52-.3 4.52-2.96 4.32-3.3-.2-.34-4.51 1.76-5.03 2.06-.52.3-.78.82-.59 1.16.19.34.78.38 1.3.08z"
      />
      <path
        fill="#B84F17"
        d="M15.9 26.14c-.52.3-4.52 2.96-4.32 3.3.2.34 4.51-1.76 5.03-2.06.52-.3.78-.82.59-1.16-.19-.34-.78-.38-1.3-.08z"
      />
      <path
        fill="#F7A815"
        d="M28.43 27.7c.5.33 4.7 2.65 4.92 2.32.22-.33-3.63-3.2-4.14-3.52-.51-.32-1.09-.32-1.3.01-.21.33.02.87.53 1.19h-.01zM16.84 18.51c-.5-.33-4.7-2.65-4.92-2.32-.22.33 3.63 3.2 4.14 3.52.51.32 1.09.32 1.3-.01.21-.33-.02-.87-.53-1.19h.01z"
      />
      <path
        fill="#C17613"
        d="M13.02 20.24s.01 0 .02-.01c-.04-.02-.08-.05-.13-.08-2.67-1.58-2.82-3.4-1.75-5.22.7-1.19 2.26-1.68 3.99-1.44.14.07.31.02.4-.12a.3.3 0 00-.09-.4h-.01-.02c-1.94-.99-3.98-1.26-5.57-.83-1.59.43-2.28 2.19-1.55 3.67.75 1.54 2.48 3.12 4.63 4.39.03.02.06.03.08.05v-.01z"
      />
      <path
        fill="#056B58"
        d="M25.64 33.1c0 3.11-1.49 4.17-3.6 4.17-1.39 0-2.6-1.09-3.27-2.71a.297.297 0 00-.3-.28c-.16 0-.29.13-.3.28v.03c.13 2.18.94 4.07 2.11 5.22 1.18 1.15 3.01.82 3.95-.53.94-1.35 1.42-3.7 1.43-6.19h-.02v.01z"
      />
    </svg>
  )
}
