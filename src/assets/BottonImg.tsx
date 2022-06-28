interface Iprops {
  className: string
}

function BottonImg(props: Iprops) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      fill="none"
      viewBox="0 0 1366 229"
    >
      <path
        fill="#DDDBF2"
        fillOpacity="0.26"
        fillRule="evenodd"
        d="M1366 176.569c-18.5-3.829-36.92-7.596-55.01-11.296-32.72-6.692-64.39-13.169-93.6-19.411-106.87-22.838-218.524-35.272-331.45-47.847-61.011-6.794-122.395-13.63-183.598-22.17-61.506-8.582-124.485-20.74-187.026-32.813C395.552 19.913 277.395-2.896 174.259.301 75.035 3.376 42.972 29.551 10.284 56.236 6.888 59.01 3.485 61.787 0 64.546V229h1366v-52.431z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default BottonImg;