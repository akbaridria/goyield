interface PropsIcon {
  customClass: string;
}

export const Arrow = ({ customClass }: PropsIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={customClass}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  );
};

export const Benefit1 = ({ customClass }: PropsIcon) => {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={customClass}
    >
      <path
        d="M3.125 43.75H9.375V40.625H3.125V9.375H14.9902L21.2402 15.625H40.625V28.125H43.75V15.625C43.75 15.2018 43.6686 14.8031 43.5059 14.4287C43.3431 14.0544 43.1152 13.7207 42.8223 13.4277C42.5293 13.1348 42.1956 12.9069 41.8213 12.7441C41.4469 12.5814 41.0482 12.5 40.625 12.5H22.5098L17.1875 7.17773C17.0573 7.01497 16.9027 6.87663 16.7236 6.7627C16.5446 6.64876 16.3574 6.55924 16.1621 6.49414C15.9668 6.39648 15.7715 6.33138 15.5762 6.29883C15.3809 6.26628 15.1855 6.25 14.9902 6.25H3.125C2.70182 6.25 2.30306 6.33138 1.92871 6.49414C1.55436 6.6569 1.2207 6.88477 0.927734 7.17773C0.634766 7.4707 0.406901 7.80436 0.244141 8.17871C0.0813802 8.55306 0 8.95182 0 9.375V40.625C0 41.0482 0.0813802 41.4469 0.244141 41.8213C0.406901 42.1956 0.634766 42.5293 0.927734 42.8223C1.2207 43.1152 1.55436 43.3431 1.92871 43.5059C2.30306 43.6686 2.70182 43.75 3.125 43.75ZM23.4375 32.8125H12.5V21.875H23.4375V32.8125ZM15.625 29.6875H20.3125V25H15.625V29.6875ZM23.4375 46.875H12.5V35.9375H23.4375V46.875ZM15.625 43.75H20.3125V39.0625H15.625V43.75ZM26.5625 32.8125H37.5V21.875H26.5625V32.8125ZM34.375 29.6875H29.6875V25H34.375V29.6875ZM37.5 46.875H26.5625V35.9375H37.5V46.875ZM29.6875 43.75H34.375V39.0625H29.6875V43.75Z"
        fill="url(#paint0_linear_1_963)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_963"
          x1="4.05265e-07"
          y1="6.25"
          x2="48.9653"
          y2="39.1016"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2600FC" />
          <stop offset="1" stopColor="#FF00EA" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const Benefit2 = ({ customClass }: PropsIcon) => {
  return (
    <svg
      viewBox="0 0 51 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={customClass}
    >
      <g clipPath="url(#clip0_1_972)">
        <path
          d="M10.2005 6.83598C11.9909 5.63155 13.9277 4.71195 16.0111 4.07719C18.0944 3.44242 20.2103 3.12504 22.3587 3.12504C23.8236 3.12504 25.2559 3.27152 26.6556 3.56449C28.0553 3.82491 29.4144 4.23181 30.7327 4.7852C32.0511 5.33858 33.3125 6.0059 34.5169 6.78715C35.6888 7.60095 36.7956 8.51241 37.8372 9.52152C38.8464 10.5632 39.7578 11.67 40.5716 12.8418C41.3529 14.0463 42.0202 15.3077 42.5736 16.626C43.127 17.9444 43.5339 19.3034 43.7943 20.7032C44.0872 22.1029 44.2337 23.5352 44.2337 25C44.2337 27.1485 43.9163 29.2644 43.2816 31.3477C42.6468 33.431 41.7272 35.3679 40.5228 37.1582C39.3509 38.9486 37.9268 40.5274 36.2503 41.8946C34.5739 43.2618 32.7266 44.3685 30.7083 45.2149C28.7227 46.0287 26.6556 46.5414 24.5072 46.753C22.3587 46.9646 20.2266 46.8588 18.1107 46.4356C15.9622 46.0124 13.9359 45.2963 12.0316 44.2872C10.1273 43.278 8.41016 42.0085 6.88021 40.4786C5.35026 38.9486 4.08073 37.2315 3.07161 35.3272C2.0625 33.4229 1.34635 31.3965 0.923177 29.2481C0.5 27.1322 0.394206 25 0.605794 22.8516C0.817383 20.7032 1.33008 18.6361 2.14388 16.6504C2.99023 14.6322 4.09701 12.7849 5.46419 11.1084C6.83138 9.43201 8.41016 8.00785 10.2005 6.83598ZM11.9583 40.5762C13.4883 41.6179 15.1403 42.4073 16.9144 42.9444C18.6885 43.4815 20.5033 43.75 22.3587 43.75C24.8327 43.75 27.2253 43.278 29.5365 42.334C31.8477 41.39 33.8822 40.0391 35.64 38.2813C37.3978 36.5235 38.7487 34.489 39.6927 32.1778C40.6367 29.8666 41.1087 27.474 41.1087 25C41.1087 23.1446 40.8402 21.3298 40.3031 19.5557C39.766 17.7816 38.9766 16.1296 37.9349 14.5996C36.9258 13.0371 35.7051 11.67 34.2728 10.4981C32.8405 9.32621 31.2617 8.3822 29.5365 7.66606C27.8112 6.94991 26.029 6.50232 24.1898 6.32328C22.3506 6.14425 20.5195 6.23376 18.6966 6.59184C16.8737 6.94991 15.1484 7.5684 13.5208 8.44731C11.8932 9.32621 10.4121 10.4167 9.07747 11.7188C7.77539 13.0534 6.6849 14.5345 5.80599 16.1621C4.92708 17.7898 4.30859 19.515 3.95052 21.3379C3.59245 23.1608 3.50293 24.9919 3.68197 26.8311C3.861 28.6703 4.30859 30.4525 5.02474 32.1778C5.74089 33.903 6.6849 35.4818 7.85677 36.9141C9.02865 38.3464 10.3958 39.5671 11.9583 40.5762ZM11.4212 25.6348L19.2337 33.4473L33.2962 19.3848L31.099 17.1875L19.2337 29.0528L13.6185 23.4375L11.4212 25.6348Z"
          fill="url(#paint0_linear_1_972)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1_972"
          x1="0.5"
          y1="3.12504"
          x2="51.6335"
          y2="34.9809"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2600FC" />
          <stop offset="1" stopColor="#FF00EA" />
        </linearGradient>
        <clipPath id="clip0_1_972">
          <rect
            width="50"
            height="50"
            fill="white"
            transform="matrix(1 0 0 -1 0.5 50)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Benefit3 = ({ customClass }: PropsIcon) => {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={customClass}
    >
      <path
        d="M26.5625 7.8125H31.25C31.6732 7.8125 32.0719 7.89388 32.4463 8.05664C32.8206 8.2194 33.1543 8.44727 33.4473 8.74023C33.7402 9.0332 33.9681 9.36686 34.1309 9.74121C34.2936 10.1156 34.375 10.5143 34.375 10.9375V18.75H31.25V10.9375H26.5625V15.625H7.8125V10.9375H3.125V43.75H17.1875V46.875H3.125C2.70182 46.875 2.30306 46.7936 1.92871 46.6309C1.55436 46.4681 1.2207 46.2402 0.927734 45.9473C0.634766 45.6543 0.406901 45.3206 0.244141 44.9463C0.0813802 44.5719 0 44.1732 0 43.75V10.9375C0 10.5143 0.0813802 10.1156 0.244141 9.74121C0.406901 9.36686 0.634766 9.0332 0.927734 8.74023C1.2207 8.44727 1.55436 8.2194 1.92871 8.05664C2.30306 7.89388 2.70182 7.8125 3.125 7.8125H7.8125V6.25C7.8125 5.82682 7.89388 5.42806 8.05664 5.05371C8.2194 4.67936 8.44727 4.3457 8.74023 4.05273C9.0332 3.75977 9.36686 3.5319 9.74121 3.36914C10.1156 3.20638 10.5143 3.125 10.9375 3.125H23.4375C23.8607 3.125 24.2594 3.20638 24.6338 3.36914C25.0081 3.5319 25.3418 3.75977 25.6348 4.05273C25.9277 4.3457 26.1556 4.67936 26.3184 5.05371C26.4811 5.42806 26.5625 5.82682 26.5625 6.25V7.8125ZM10.9375 12.5H23.4375V6.25H10.9375V12.5ZM37.9395 26.7578C38.2975 27.4414 38.5742 28.1657 38.7695 28.9307C38.9648 29.6956 39.0625 30.4688 39.0625 31.25C39.0625 31.901 38.9974 32.5521 38.8672 33.2031C38.737 33.8542 38.5254 34.4727 38.2324 35.0586C37.972 35.6771 37.6465 36.2467 37.2559 36.7676C36.8652 37.2884 36.4258 37.7767 35.9375 38.2324V50L29.6875 47.0215L23.4375 50V38.2324C22.8516 37.7116 22.3389 37.1257 21.8994 36.4746C21.46 35.8236 21.11 35.1237 20.8496 34.375C20.5892 33.6589 20.4264 32.9102 20.3613 32.1289C20.2962 31.3477 20.3125 30.5664 20.4102 29.7852C20.5404 29.0039 20.7601 28.2552 21.0693 27.5391C21.3786 26.8229 21.7773 26.1556 22.2656 25.5371C22.7214 24.9186 23.2585 24.3652 23.877 23.877C24.4954 23.3887 25.1628 22.9818 25.8789 22.6562C26.5951 22.3307 27.3356 22.1029 28.1006 21.9727C28.8656 21.8424 29.6387 21.8099 30.4199 21.875C31.2012 21.9401 31.9661 22.1029 32.7148 22.3633C33.4635 22.6237 34.1634 22.9655 34.8145 23.3887C35.4655 23.8118 36.0514 24.3083 36.5723 24.8779C37.0931 25.4476 37.5488 26.0742 37.9395 26.7578ZM29.6875 43.6035L32.8125 45.0684V40.0879C31.8034 40.446 30.7617 40.625 29.6875 40.625C28.6133 40.625 27.5716 40.446 26.5625 40.0879V45.0684L29.6875 43.6035ZM26.2207 36.4258C26.7415 36.7839 27.2949 37.0524 27.8809 37.2314C28.4668 37.4105 29.069 37.5 29.6875 37.5C30.5013 37.5 31.2907 37.3372 32.0557 37.0117C32.8206 36.6862 33.4961 36.2305 34.082 35.6445C34.668 35.0586 35.1237 34.3831 35.4492 33.6182C35.7747 32.8532 35.9375 32.0638 35.9375 31.25C35.9375 30.6315 35.848 30.0293 35.6689 29.4434C35.4899 28.8574 35.2214 28.304 34.8633 27.7832C34.5378 27.2624 34.139 26.8066 33.667 26.416C33.195 26.0254 32.666 25.7161 32.0801 25.4883C31.4941 25.2279 30.9001 25.0732 30.2979 25.0244C29.6956 24.9756 29.0853 25 28.4668 25.0977C27.8483 25.2279 27.2705 25.4395 26.7334 25.7324C26.1963 26.0254 25.6999 26.3997 25.2441 26.8555C24.821 27.2786 24.4629 27.7588 24.1699 28.2959C23.877 28.833 23.6654 29.4108 23.5352 30.0293C23.4375 30.6478 23.4131 31.2581 23.4619 31.8604C23.5107 32.4626 23.6654 33.0566 23.9258 33.6426C24.1536 34.2285 24.4629 34.7575 24.8535 35.2295C25.2441 35.7015 25.6999 36.1003 26.2207 36.4258Z"
        fill="url(#paint0_linear_1_981)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_981"
          x1="3.61844e-07"
          y1="3.125"
          x2="49.9384"
          y2="29.0511"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2600FC" />
          <stop offset="1" stopColor="#FF00EA" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const Benefit4 = ({ customClass }: PropsIcon) => {
  return (
    <svg
      viewBox="0 0 51 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={customClass}
    >
      <g clipPath="url(#clip0_1_990)">
        <path
          d="M13.3418 14.5508C12.821 14.9089 12.2676 15.1774 11.6816 15.3564C11.0957 15.5355 10.4935 15.625 9.875 15.625C9.0612 15.625 8.26367 15.4704 7.48242 15.1611C6.70117 14.8519 6.01758 14.4043 5.43164 13.8184C4.8457 13.2324 4.39811 12.5488 4.08887 11.7676C3.77962 10.9863 3.625 10.1888 3.625 9.375C3.625 8.75651 3.71452 8.1543 3.89355 7.56836C4.07259 6.98242 4.34115 6.42904 4.69922 5.9082C5.02474 5.38737 5.4235 4.93164 5.89551 4.54102C6.36751 4.15039 6.89648 3.84115 7.48242 3.61328C8.06836 3.35286 8.66243 3.19824 9.26465 3.14941C9.86686 3.10059 10.4772 3.125 11.0957 3.22266C11.7142 3.35286 12.292 3.56445 12.8291 3.85742C13.3662 4.15039 13.8626 4.50846 14.3184 4.93164C14.7415 5.38737 15.0996 5.88379 15.3926 6.4209C15.6855 6.95801 15.8971 7.53581 16.0273 8.1543C16.125 8.77279 16.1494 9.38314 16.1006 9.98535C16.0518 10.5876 15.8971 11.1816 15.6367 11.7676C15.4089 12.3535 15.0996 12.8825 14.709 13.3545C14.3184 13.8265 13.8626 14.2253 13.3418 14.5508ZM11.6328 6.78711C11.3724 6.62435 11.0876 6.49414 10.7783 6.39648C10.4691 6.29883 10.168 6.25 9.875 6.25C9.45182 6.25 9.05306 6.33138 8.67871 6.49414C8.30436 6.6569 7.9707 6.88477 7.67773 7.17773C7.38477 7.4707 7.1569 7.80436 6.99414 8.17871C6.83138 8.55306 6.75 8.95182 6.75 9.375C6.75 9.66797 6.79883 9.96908 6.89648 10.2783C6.99414 10.5876 7.12435 10.8724 7.28711 11.1328C7.44987 11.3607 7.65332 11.5723 7.89746 11.7676C8.1416 11.9629 8.41016 12.1257 8.70312 12.2559C8.96354 12.3861 9.24837 12.4674 9.55762 12.5C9.86686 12.5326 10.168 12.5163 10.4609 12.4512C10.7865 12.3861 11.0876 12.2803 11.3643 12.1338C11.641 11.9873 11.877 11.8001 12.0723 11.5723C12.3001 11.377 12.4873 11.141 12.6338 10.8643C12.7803 10.5876 12.8861 10.2865 12.9512 9.96094C13.0163 9.66797 13.0326 9.36686 13 9.05762C12.9674 8.74837 12.8861 8.46354 12.7559 8.20312C12.6257 7.91016 12.4629 7.6416 12.2676 7.39746C12.0723 7.15332 11.8607 6.94987 11.6328 6.78711ZM34.875 18.75V17.1875C34.875 16.6667 34.8262 16.154 34.7285 15.6494C34.6309 15.1449 34.4844 14.6647 34.2891 14.209C34.0938 13.7207 33.8496 13.265 33.5566 12.8418C33.2637 12.4186 32.9382 12.028 32.5801 11.6699C32.222 11.3118 31.8314 10.9863 31.4082 10.6934C30.985 10.4004 30.5293 10.1562 30.041 9.96094C29.5853 9.76562 29.1051 9.61914 28.6006 9.52148C28.096 9.42383 27.5833 9.375 27.0625 9.375H22.375V6.25H27.0625C28.5273 6.25 29.9271 6.52669 31.2617 7.08008C32.5964 7.63346 33.7682 8.43099 34.7773 9.47266C35.819 10.4818 36.6165 11.6536 37.1699 12.9883C37.7233 14.3229 38 15.7227 38 17.1875V18.75H34.875ZM6.75 31.25V32.8125C6.75 33.8542 6.94531 34.8551 7.33594 35.8154C7.72656 36.7757 8.29622 37.6139 9.04492 38.3301C9.76107 39.0788 10.5993 39.6484 11.5596 40.0391C12.5199 40.4297 13.5208 40.625 14.5625 40.625H19.25V43.75H14.5625C13.0977 43.75 11.6979 43.4733 10.3633 42.9199C9.02865 42.3665 7.85677 41.569 6.84766 40.5273C5.80599 39.5182 5.00846 38.3464 4.45508 37.0117C3.90169 35.6771 3.625 34.2773 3.625 32.8125V31.25H6.75ZM14.5625 17.1875H5.1875C4.56901 17.1875 3.97493 17.3096 3.40527 17.5537C2.83561 17.7979 2.32292 18.1315 1.86719 18.5547C1.44401 19.0104 1.11035 19.5231 0.866211 20.0928C0.62207 20.6624 0.5 21.2565 0.5 21.875V25H3.625V21.875C3.625 21.6797 3.66569 21.4844 3.74707 21.2891C3.82845 21.0938 3.93424 20.9147 4.06445 20.752C4.22721 20.6217 4.40625 20.516 4.60156 20.4346C4.79688 20.3532 4.99219 20.3125 5.1875 20.3125H14.5625C14.7578 20.3125 14.9531 20.3532 15.1484 20.4346C15.3438 20.516 15.5228 20.6217 15.6855 20.752C15.8158 20.9147 15.9215 21.0938 16.0029 21.2891C16.0843 21.4844 16.125 21.6797 16.125 21.875V25H19.25V21.875C19.25 21.2565 19.1279 20.6624 18.8838 20.0928C18.6396 19.5231 18.306 19.0104 17.8828 18.5547C17.4271 18.1315 16.9144 17.7979 16.3447 17.5537C15.7751 17.3096 15.181 17.1875 14.5625 17.1875ZM30.1875 39.0625C29.569 39.0625 28.9749 39.1846 28.4053 39.4287C27.8356 39.6729 27.3229 40.0065 26.8672 40.4297C26.444 40.8854 26.1104 41.3981 25.8662 41.9678C25.6221 42.5374 25.5 43.1315 25.5 43.75V46.875H28.625V43.75C28.625 43.5547 28.6657 43.3594 28.7471 43.1641C28.8285 42.9688 28.9342 42.7897 29.0645 42.627C29.2272 42.4967 29.4062 42.391 29.6016 42.3096C29.7969 42.2282 29.9922 42.1875 30.1875 42.1875H39.5625C39.7578 42.1875 39.9531 42.2282 40.1484 42.3096C40.3438 42.391 40.5228 42.4967 40.6855 42.627C40.8158 42.7897 40.9215 42.9688 41.0029 43.1641C41.0843 43.3594 41.125 43.5547 41.125 43.75V46.875H44.25V43.75C44.25 43.1315 44.1279 42.5374 43.8838 41.9678C43.6396 41.3981 43.306 40.8854 42.8828 40.4297C42.4271 40.0065 41.9144 39.6729 41.3447 39.4287C40.7751 39.1846 40.181 39.0625 39.5625 39.0625H30.1875ZM29.6992 34.7168C29.3411 34.196 29.0726 33.6426 28.8936 33.0566C28.7145 32.4707 28.625 31.8685 28.625 31.25C28.625 30.4362 28.7796 29.6387 29.0889 28.8574C29.3981 28.0762 29.8457 27.3926 30.4316 26.8066C31.0176 26.2207 31.7012 25.7731 32.4824 25.4639C33.2637 25.1546 34.0612 25 34.875 25C35.4935 25 36.0957 25.0895 36.6816 25.2686C37.2676 25.4476 37.821 25.7161 38.3418 26.0742C38.8626 26.3997 39.3184 26.7985 39.709 27.2705C40.0996 27.7425 40.4089 28.2715 40.6367 28.8574C40.8971 29.4434 41.0518 30.0374 41.1006 30.6396C41.1494 31.2419 41.125 31.8522 41.0273 32.4707C40.8971 33.0892 40.6855 33.667 40.3926 34.2041C40.0996 34.7412 39.7415 35.2376 39.3184 35.6934C38.8626 36.1165 38.3662 36.4746 37.8291 36.7676C37.292 37.0605 36.7142 37.2721 36.0957 37.4023C35.4772 37.5 34.8669 37.5244 34.2646 37.4756C33.6624 37.4268 33.0684 37.2721 32.4824 37.0117C31.8965 36.7839 31.3675 36.4746 30.8955 36.084C30.4235 35.6934 30.0247 35.2376 29.6992 34.7168ZM37.4629 33.0078C37.6257 32.7474 37.7559 32.4626 37.8535 32.1533C37.9512 31.8441 38 31.543 38 31.25C38 30.8268 37.9186 30.4281 37.7559 30.0537C37.5931 29.6794 37.3652 29.3457 37.0723 29.0527C36.7793 28.7598 36.4456 28.5319 36.0713 28.3691C35.6969 28.2064 35.2982 28.125 34.875 28.125C34.582 28.125 34.2809 28.1738 33.9717 28.2715C33.6624 28.3691 33.3776 28.4993 33.1172 28.6621C32.8893 28.8249 32.6777 29.0283 32.4824 29.2725C32.2871 29.5166 32.1243 29.7852 31.9941 30.0781C31.8639 30.3385 31.7826 30.6234 31.75 30.9326C31.7174 31.2419 31.7337 31.543 31.7988 31.8359C31.8639 32.1615 31.9697 32.4626 32.1162 32.7393C32.2627 33.016 32.4499 33.252 32.6777 33.4473C32.873 33.6751 33.109 33.8623 33.3857 34.0088C33.6624 34.1553 33.9635 34.2611 34.2891 34.3262C34.582 34.3913 34.8831 34.4076 35.1924 34.375C35.5016 34.3424 35.7865 34.2611 36.0469 34.1309C36.3398 34.0007 36.6084 33.8379 36.8525 33.6426C37.0967 33.4473 37.3001 33.2357 37.4629 33.0078Z"
          fill="url(#paint0_linear_1_990)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1_990"
          x1="0.5"
          y1="3.125"
          x2="51.6526"
          y2="34.9928"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2600FC" />
          <stop offset="1" stopColor="#FF00EA" />
        </linearGradient>
        <clipPath id="clip0_1_990">
          <rect
            width="50"
            height="50"
            fill="white"
            transform="matrix(1 0 0 -1 0.5 50)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Chevron = ({ customClass }: PropsIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={customClass}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};

export const Hamburger = ({ customClass }: PropsIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={customClass}
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M80 160h352M80 256h352M80 352h352"
      />
    </svg>
  );
};

export const XMark = ({ customClass }: PropsIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={customClass}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

interface PropsSampleNFT {
  background: string
  color: string
  customClass: string
}
export const NftSample = ({ customClass, background, color }: PropsSampleNFT) => {
  return (
    <svg
      id="visual"
      viewBox="0 0 900 900"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={customClass}
    >
      <rect x="0" y="0" width="900" height="900" fill={background}></rect>
      <g transform="translate(463.18757131074915 468.0514499067544)">
        <path
          d="M198.4 -228.2C243.5 -153.2 257.3 -76.6 271.8 14.5C286.3 105.6 301.5 211.2 256.4 273.5C211.2 335.9 105.6 354.9 26.3 328.6C-53 302.4 -106.1 230.7 -167.7 168.4C-229.4 106.1 -299.7 53 -311.1 -11.4C-322.6 -75.9 -275.1 -151.8 -213.5 -226.8C-151.8 -301.8 -75.9 -375.9 0.4 -376.2C76.6 -376.6 153.2 -303.2 198.4 -228.2"
          fill={color}
        ></path>
      </g>
    </svg>
  );
};
