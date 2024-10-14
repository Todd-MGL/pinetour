import * as React from "react";
export const HeaderLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={42}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      stroke="#fff"
      strokeWidth={0.2}
      d="m5.494 20.54.001.001c.794.443 1.68.664 2.658.664 1.076 0 2.04-.242 2.891-.727a5.268 5.268 0 0 0 2.032-2.011c.49-.858.734-1.855.734-2.99 0-1.12-.243-2.111-.734-2.968a5.085 5.085 0 0 0-2.032-2.012c-.85-.486-1.815-.727-2.891-.727-.991 0-1.885.22-2.68.664a4.628 4.628 0 0 0-1.526 1.374V9.875H2.304v15.299H4.01V19.232c.41.538.904.975 1.484 1.309ZM16.68 21v.1h1.707V9.875H16.68V21Zm8.653-10.523a4.139 4.139 0 0 0-1.314 1.17V9.875H22.377V21.1H24.083v-5.896c0-.828.153-1.525.455-2.095a3.158 3.158 0 0 1 1.316-1.324h.001c.577-.313 1.253-.471 2.031-.471 1.041 0 1.833.295 2.389.872l.001.002c.569.563.862 1.408.862 2.554V21.1H32.844v-6.505c0-1.075-.2-1.976-.607-2.695a3.686 3.686 0 0 0-1.655-1.595c-.695-.358-1.502-.535-2.42-.535-1.09 0-2.034.234-2.83.707Zm13.106 10.001c.894.486 1.93.727 3.103.727.903 0 1.729-.156 2.478-.47a4.86 4.86 0 0 0 1.905-1.372l.055-.065-.057-.065-.848-.966-.076-.086-.075.086c-.414.479-.91.833-1.489 1.065a4.823 4.823 0 0 1-1.85.35c-.849 0-1.603-.172-2.266-.513a4.003 4.003 0 0 1-1.53-1.454 4.128 4.128 0 0 1-.515-1.676h9.353V15.717c.014-.086.021-.166.021-.24 0-1.12-.236-2.11-.712-2.967a5.021 5.021 0 0 0-1.968-2.013c-.823-.485-1.767-.727-2.829-.727-1.049 0-2 .25-2.85.749a5.357 5.357 0 0 0-1.988 2.01v.001c-.477.857-.713 1.84-.713 2.947 0 1.108.25 2.098.755 2.97a5.491 5.491 0 0 0 2.096 2.031Zm6.559-5.752h-7.715a4.168 4.168 0 0 1 .465-1.533c.331-.614.792-1.09 1.383-1.43l-.05-.087.05.087c.592-.34 1.26-.512 2.008-.512.762 0 1.43.171 2.007.511a3.61 3.61 0 0 1 1.363 1.431l.001.003c.262.457.425.966.488 1.53Zm-34.88 4.444c-.605.34-1.295.512-2.071.512-.776 0-1.473-.171-2.093-.512a3.933 3.933 0 0 1-1.447-1.474c-.344-.64-.518-1.38-.518-2.219 0-.84.174-1.571.518-2.198.359-.629.841-1.12 1.447-1.474.62-.355 1.317-.533 2.093-.533s1.465.178 2.07.532c.607.355 1.09.846 1.449 1.476.358.626.538 1.358.538 2.197s-.18 1.578-.538 2.219a3.934 3.934 0 0 1-1.448 1.474Zm6.57-11.875c.233.23.52.344.856.344.348 0 .637-.113.857-.345.23-.23.346-.514.346-.847 0-.321-.117-.593-.35-.808a1.213 1.213 0 0 0-.853-.321c-.336 0-.622.114-.854.343-.232.215-.349.486-.349.807 0 .321.117.599.348.827Z"
    />
    <path
      fill="#fff"
      stroke="#fff"
      strokeWidth={0.2}
      d="M2.355 23.94h-.1v2.435H.261V27.815h1.994v6.577c0 1.04.289 1.86.878 2.444.59.584 1.425.87 2.489.87.448 0 .882-.065 1.302-.194.436-.13.81-.333 1.12-.61l.056-.05-.034-.068-.53-1.071-.057-.116-.098.084c-.418.36-.945.543-1.59.543-.602 0-1.054-.169-1.37-.494-.302-.326-.46-.795-.46-1.422v-6.494h3.394V26.375H3.961V23.94H2.355Zm9.553 13.038h.002c.878.486 1.864.727 2.954.727 1.104 0 2.097-.241 2.976-.726v-.001a5.377 5.377 0 0 0 2.053-2.032c.505-.87.756-1.861.756-2.969 0-1.121-.251-2.112-.756-2.97a5.23 5.23 0 0 0-2.053-2.01c-.866-.486-1.858-.727-2.976-.727-1.104 0-2.09.242-2.955.727a5.423 5.423 0 0 0-2.052 2.01l.086.051-.086-.05c-.506.857-.757 1.848-.757 2.97 0 1.107.252 2.097.756 2.968a5.581 5.581 0 0 0 2.052 2.032Zm6.475-2.782a3.779 3.779 0 0 1-1.427 1.474c-.605.34-1.301.512-2.092.512-.762 0-1.445-.171-2.05-.512a3.934 3.934 0 0 1-1.448-1.474c-.358-.641-.538-1.38-.538-2.219 0-.854.18-1.592.538-2.218a3.779 3.779 0 0 1 1.447-1.454h.001c.606-.355 1.295-.533 2.071-.533.776 0 1.466.178 2.07.532l.002.001c.606.34 1.08.824 1.425 1.452l.001.002c.358.626.539 1.364.539 2.218 0 .84-.181 1.578-.54 2.22Zm5.62 1.357v.001A3.903 3.903 0 0 0 25.7 37.17c.724.358 1.567.535 2.527.535 1.005 0 1.886-.228 2.64-.686a4.228 4.228 0 0 0 1.269-1.192V37.6H33.778V26.375H32.072v5.875c0 .828-.153 1.532-.455 2.117l-.001.002a3.034 3.034 0 0 1-1.274 1.342c-.548.299-1.203.45-1.967.45-1.041 0-1.84-.288-2.41-.852-.556-.577-.841-1.437-.841-2.597v-6.337h-1.707v6.505c0 1.062.193 1.954.585 2.673ZM37.775 37.5v.1h1.707v-5.728c0-1.285.328-2.258.969-2.934.643-.69 1.533-1.04 2.685-1.04a.61.61 0 0 1 .146.018l.012.003H43.575V26.27h-.1c-1.102 0-2.033.227-2.787.686-.532.314-.955.73-1.27 1.25v-1.83H37.775V37.5Z"
    />
    <path
      fill="#18BA51"
      d="M46.536 37.605c-.31 0-.58-.112-.806-.336a1.147 1.147 0 0 1-.318-.819c0-.336.106-.609.318-.819.227-.21.495-.315.806-.315.311 0 .573.105.785.315.226.21.34.483.34.82 0 .322-.114.594-.34.818a1.038 1.038 0 0 1-.785.336Z"
    />
  </svg>
);
