import React from "react";

const SvgIcon = props => {
  switch (props.icon) {
    case "USERNAME":
      return (
        <svg
          className={props.className}
          xmlns="http://www.w3.org/2000/svg"
          width="16px"
          height="16px"
        >
          <path
            fillRule="evenodd"
            fill="rgb(204, 204, 204)"
            d="M0.000,16.000 L0.000,13.000 C0.000,11.311 1.203,10.000 2.964,9.426 C4.031,10.400 5.445,11.000 7.000,11.000 C8.555,11.000 9.969,10.400 11.036,9.426 C12.797,10.000 14.000,11.311 14.000,13.000 L14.000,16.000 L0.000,16.000 ZM7.000,9.000 C4.794,9.000 3.000,7.206 3.000,5.000 L3.000,4.000 C3.000,1.794 4.794,0.000 7.000,0.000 C9.206,0.000 11.000,1.794 11.000,4.000 L11.000,5.000 C11.000,7.206 9.206,9.000 7.000,9.000 Z"
          />
        </svg>
      );
    case "PASSWORD":
      return (
        <svg
          className={props.className}
          xmlns="http://www.w3.org/2000/svg"
          width="16px"
          height="16px"
        >
          <path
            fillRule="evenodd"
            fill="rgb(204, 204, 204)"
            d="M13.000,18.000 L1.000,18.000 C0.400,18.000 0.000,17.600 0.000,17.000 L0.000,8.000 C0.000,7.400 0.400,7.000 1.000,7.000 L3.000,7.000 L3.000,4.000 C3.000,1.800 4.800,0.000 7.000,0.000 C9.200,0.000 11.000,1.800 11.000,4.000 L11.000,7.000 L13.000,7.000 C13.600,7.000 14.000,7.400 14.000,8.000 L14.000,17.000 C14.000,17.600 13.600,18.000 13.000,18.000 ZM6.000,14.000 C6.000,14.552 6.448,15.000 7.000,15.000 C7.552,15.000 8.000,14.552 8.000,14.000 L8.000,11.000 C8.000,10.448 7.552,10.000 7.000,10.000 C6.448,10.000 6.000,10.448 6.000,11.000 L6.000,14.000 ZM9.000,4.000 C9.000,2.900 8.100,2.000 7.000,2.000 C5.900,2.000 5.000,2.900 5.000,4.000 L5.000,7.000 L9.000,7.000 L9.000,4.000 Z"
          />
        </svg>
      );
    case "LOGOUT":
      return (
        <svg className={props.className} width="16px" height="16px">
          <path
            fillRule="evenodd"
            fill="rgb(47, 50, 84)"
            d="M15.000,16.000 L6.000,16.000 C5.400,16.000 5.000,15.600 5.000,15.000 L5.000,12.000 L7.000,12.000 L7.000,14.000 L14.000,14.000 L14.000,2.000 L7.000,2.000 L7.000,4.000 L5.000,4.000 L5.000,1.000 C5.000,0.400 5.400,-0.000 6.000,-0.000 L15.000,-0.000 C15.600,-0.000 16.000,0.400 16.000,1.000 L16.000,15.000 C16.000,15.600 15.600,16.000 15.000,16.000 ZM10.000,9.000 L4.000,9.000 L4.000,12.000 L0.000,8.000 L4.000,4.000 L4.000,7.000 L10.000,7.000 L10.000,9.000 Z"
          />
        </svg>
      );
    default:
      return;
  }
};

export default SvgIcon;
