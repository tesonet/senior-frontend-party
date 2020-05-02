import React from "react";
import Colors from "../constants/colors";

interface IconProps {
  type: Icons;
  className?: string;
}

export enum Icons {
  password = "password",
  user = "user",
  logout = "logout"
}

const Icon: React.FC<IconProps> = ({ type, className }) => {
  switch (type) {
    case Icons.password:
      return (
        <svg
          width="14"
          height="18"
          viewBox="0 0 14 18"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.99998 4C2.99998 1.80004 4.80008 4.1008e-05 7.00013 4.1008e-05C9.19998 4.1008e-05 11.0001 1.80004 11.0001 4V7.00001H13.0001C13.5999 7.00001 14.0001 7.40004 14.0001 8.00005V17C14.0001 17.6 13.5999 18 13.0001 18H1.00002C0.399984 18 2.5034e-05 17.6 2.5034e-05 17V8.00005C2.5034e-05 7.40004 0.399984 7.00001 1.00002 7.00001H2.99998V4ZM4.99996 7.00001H9.0001V4C9.0001 2.89999 8.09986 2.00004 7.00013 2.00004C5.90001 2.00004 4.99996 2.89999 4.99996 4V7.00001ZM7.99992 11C7.99992 10.4477 7.55224 10 7.00013 10C6.44763 10 5.99995 10.4477 5.99995 11V14C5.99995 14.5523 6.44763 15 7.00013 15C7.55224 15 7.99992 14.5523 7.99992 14V11Z"
            fill="currentColor"
          />
        </svg>
      );
    case Icons.user:
      return (
        <svg
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.99996 4.99999C3.99996 2.79397 5.79388 1.00003 8.00011 1.00003C10.206 1.00003 12.0001 2.79397 12.0001 4.99999V6.00001C12.0001 8.20595 10.206 9.99997 8.00011 9.99997C5.79388 9.99997 3.99996 8.20595 3.99996 6.00001V4.99999ZM8.00011 12C9.55482 12 10.969 11.4 12.036 10.426C13.797 11 15 12.311 15 14V17H1V14C1 12.311 2.20287 11 3.96402 10.426C5.03102 11.4 6.445 12 8.00011 12Z"
            fill="currentColor"
          />
          <path
            d="M12.036 10.426L12.1909 9.95064L11.914 9.86038L11.6989 10.0567L12.036 10.426ZM15 17V17.5H15.5V17H15ZM1 17H0.5V17.5H1V17ZM3.96402 10.426L4.30111 10.0567L4.086 9.86039L3.80908 9.95063L3.96402 10.426ZM8.00011 0.500031C5.51775 0.500031 3.49996 2.51782 3.49996 4.99999H4.49996C4.49996 3.07013 6.07001 1.50003 8.00011 1.50003V0.500031ZM12.5001 4.99999C12.5001 2.51782 10.4821 0.500031 8.00011 0.500031V1.50003C9.92983 1.50003 11.5001 3.07013 11.5001 4.99999H12.5001ZM12.5001 6.00001V4.99999H11.5001V6.00001H12.5001ZM8.00011 10.5C10.4821 10.5 12.5001 8.4821 12.5001 6.00001H11.5001C11.5001 7.9298 9.92982 9.49997 8.00011 9.49997V10.5ZM3.49996 6.00001C3.49996 8.4821 5.51775 10.5 8.00011 10.5V9.49997C6.07001 9.49997 4.49996 7.9298 4.49996 6.00001H3.49996ZM3.49996 4.99999V6.00001H4.49996V4.99999H3.49996ZM11.6989 10.0567C10.7189 10.9513 9.42329 11.5 8.00011 11.5V12.5C9.68636 12.5 11.2191 11.8487 12.3731 10.7953L11.6989 10.0567ZM15.5 14C15.5 12.0335 14.0931 10.5706 12.1909 9.95064L11.881 10.9014C13.5009 11.4294 14.5 12.5885 14.5 14H15.5ZM15.5 17V14H14.5V17H15.5ZM1 17.5H15V16.5H1V17.5ZM0.5 14V17H1.5V14H0.5ZM3.80908 9.95063C1.90676 10.5706 0.5 12.0335 0.5 14H1.5C1.5 12.5884 2.49898 11.4294 4.11895 10.9014L3.80908 9.95063ZM8.00011 11.5C6.57653 11.5 5.28114 10.9513 4.30111 10.0567L3.62693 10.7953C4.78091 11.8487 6.31346 12.5 8.00011 12.5V11.5Z"
            fill={Colors.white}
          />
        </svg>
      );
    case Icons.logout:
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.99998 16H15.0001C15.6001 16 16.0001 15.5999 16.0001 15V0.999986C16.0001 0.399985 15.6001 -4.1008e-05 15.0001 -4.1008e-05H5.99998C5.40015 -4.1008e-05 5.00018 0.399985 5.00018 0.999986V4.00003H7.00016V2.00003H14.0001V14H7.00016V12H5.00018V15C5.00018 15.5999 5.40015 16 5.99998 16ZM6.49691e-05 7.99998L4 4.00003V7.00002H9.99994V9.00001H4V12L6.49691e-05 7.99998Z"
            fill="currentColor"
          />
        </svg>
      );
  }
};

export default Icon;
