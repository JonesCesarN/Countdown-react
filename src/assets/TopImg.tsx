interface Iprops {
  className: string
}

function TopImg(props: Iprops) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      fill="none"
      viewBox="0 0 1366 133"
    >
      <path
        fill="#DDDBF2"
        fillOpacity="0.26"
        fillRule="evenodd"
        d="M1366 0H0v27.65c79.008 22.282 172.154 41.985 261.729 57.816 110.49 19.528 220.252 23.447 330.636 27.388h.001c42.87 1.531 85.834 3.065 128.971 5.518 28.593 1.626 57.796 3.695 86.965 5.762 88.106 6.242 175.89 12.462 245.548 6.377 65.38-5.711 96.25-22.268 127.19-38.857 10.35-5.554 20.72-11.111 32.38-16.266 17.29-7.639 27.84-16.571 38.33-25.46 13.84-11.721 27.59-23.367 56.59-31.868 16.23-4.757 35.89-8.725 57.66-12.193V0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default TopImg;