export function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return(
    <svg
      {...props}
      width="24" height="24" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 1.5C10.5 0.67158 9.82844 0 9 0C8.17158 0 7.5 0.67158 7.5 1.5V2.25902C6.75608 2.27066 6.09506 2.29727 5.51283 2.35809C4.4337 2.47086 3.45542 2.71425 2.5854 3.3164C1.99181 3.72723 1.47723 4.2418 1.0664 4.8354C0.464252 5.70541 0.220861 6.6837 0.108106 7.76283C0.00907626 8.71053 0.000736511 9.86698 6.15113e-05 11.25L1.42984e-06 11.4801C1.42984e-06 11.5326 1.42984e-06 11.5853 1.42984e-06 11.6384V20.3559C-4.35702e-05 22.387 -8.84235e-05 24.062 0.178127 25.3877C0.365252 26.7794 0.773207 28.0084 1.75737 28.9926C2.74152 29.9767 3.97067 30.3848 5.36241 30.5718C6.68804 30.7502 8.36294 30.75 10.3941 30.75H19.6058C21.6369 30.75 23.312 30.7502 24.6377 30.5718C26.0294 30.3848 27.2584 29.9767 28.2426 28.9926C29.2267 28.0084 29.6347 26.7794 29.8219 25.3877C30.0001 24.062 30 22.387 30 20.3559V11.6384C30 11.5926 30 11.5468 30 11.5014V11.25C29.9992 9.86698 29.991 8.71053 29.8919 7.76283C29.7792 6.6837 29.5358 5.70541 28.9337 4.8354C28.5228 4.2418 28.0081 3.72723 27.4146 3.3164C26.5446 2.71425 25.5663 2.47086 24.4872 2.35809C23.9049 2.29727 23.244 2.27066 22.5 2.25902V1.5C22.5 0.67158 21.8285 0 21 0C20.1716 0 19.5 0.67158 19.5 1.5V2.25H10.5V1.5ZM26.9999 11.25C26.9988 9.84523 26.9894 8.85162 26.9082 8.0746C26.8209 7.24014 26.6645 6.82827 26.4668 6.5427C26.2614 6.24591 26.0042 5.98862 25.7073 5.78319C25.4217 5.58555 25.0098 5.42904 24.1753 5.34185C23.709 5.29313 23.1645 5.27023 22.5 5.25948V6C22.5 6.82842 21.8285 7.5 21 7.5C20.1716 7.5 19.5 6.82842 19.5 6V5.25H10.5V6C10.5 6.82842 9.82844 7.5 9 7.5C8.17158 7.5 7.5 6.82842 7.5 6V5.25948C6.83544 5.27023 6.291 5.29313 5.82461 5.34185C4.99014 5.42904 4.57829 5.58555 4.2927 5.78319C3.99591 5.98862 3.73862 6.24591 3.53321 6.5427C3.33555 6.82827 3.17906 7.24014 3.09186 8.0746C3.01067 8.85162 3.00122 9.84523 3.00014 11.25H26.9999ZM3 14.25V20.25C3 22.4137 3.0032 23.8855 3.15138 24.9879C3.29378 26.0469 3.54483 26.5374 3.87869 26.8713C4.21254 27.2052 4.70307 27.4563 5.76215 27.5986C6.86438 27.7468 8.33628 27.75 10.5 27.75H19.5C21.6638 27.75 23.1355 27.7468 24.2379 27.5986C25.2969 27.4563 25.7874 27.2052 26.1213 26.8713C26.4552 26.5374 26.7063 26.0469 26.8486 24.9879C26.9968 23.8855 27 22.4137 27 20.25V14.25H3Z" fill="black"/>
    </svg>
  )
}

export function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function Spinner() {
  return (
    <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center">
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
}

export function Logo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className="text-gray-100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" rx="16" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="black"
      />
    </svg>
  );
}

