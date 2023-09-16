import React from "react";
import { Path, Svg } from "react-native-svg";

const Eur = ({ size, color = "red", stroke }) => (
	<Svg
		width={size || "48"}
		height={size || "48"}
		viewBox="0 0 48 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<Path
			stroke={stroke || color}
			strokeWidth="0.5"
			d="M36.1429 36.5804L37.0804 40.8393C37.1339 41.0536 37.1071 41.2545 37 41.442C36.8929 41.6295 36.7411 41.7589 36.5446 41.8304L36.4107 41.8571C36.3393 41.8929 36.2455 41.9241 36.1295 41.9509C36.0134 41.9777 35.8705 42.0179 35.7009 42.0714C35.5313 42.125 35.3393 42.1741 35.125 42.2188C34.9107 42.2634 34.683 42.308 34.442 42.3527C34.2009 42.3973 33.933 42.442 33.6384 42.4866C33.3438 42.5313 33.0446 42.5714 32.7411 42.6071C32.4375 42.6429 32.1116 42.6696 31.7634 42.6875C31.4152 42.7054 31.0714 42.7143 30.7321 42.7143C26.5536 42.7143 22.9018 41.5491 19.7768 39.2188C16.6518 36.8884 14.5268 33.75 13.4018 29.8036H10.8571C10.625 29.8036 10.4241 29.7188 10.2545 29.5491C10.0848 29.3795 10 29.1786 10 28.9464V25.9196C10 25.6875 10.0848 25.4866 10.2545 25.317C10.4241 25.1473 10.625 25.0625 10.8571 25.0625H12.625C12.5893 24.0446 12.5982 23.1071 12.6518 22.25H10.8571C10.6071 22.25 10.4018 22.1696 10.2411 22.0089C10.0804 21.8482 10 21.6429 10 21.3929V18.3393C10 18.0893 10.0804 17.8839 10.2411 17.7232C10.4018 17.5625 10.6071 17.4821 10.8571 17.4821H13.4821C14.6786 13.7321 16.8527 10.7143 20.0045 8.42857C23.1563 6.14286 26.7321 5 30.7321 5C32.5536 5 34.2857 5.20536 35.9286 5.61607C36.125 5.66964 36.3036 5.80357 36.4643 6.01786C36.5714 6.21429 36.5982 6.42857 36.5446 6.66071L35.3929 10.9196C35.3393 11.1518 35.2143 11.3259 35.0179 11.442C34.8214 11.558 34.6071 11.5804 34.375 11.5089L34.2679 11.4821C34.1964 11.4643 34.0938 11.442 33.9598 11.4152L33.4911 11.3214L32.8884 11.2277L32.192 11.1473L31.4152 11.0804L30.625 11.0536C28.375 11.0536 26.3571 11.625 24.5714 12.7679C22.7857 13.9107 21.4464 15.4821 20.5536 17.4821H33.0893C33.375 17.4821 33.5982 17.5893 33.7589 17.8036C33.9375 18.0179 34 18.25 33.9464 18.5L33.3036 21.5536C33.2143 22.0179 32.9286 22.25 32.4464 22.25H19.375C19.3214 22.9107 19.3214 23.8482 19.375 25.0625H31.6696C31.9375 25.0625 32.1607 25.1696 32.3393 25.3839C32.5 25.5982 32.5536 25.8393 32.5 26.1071L31.8571 29.1071C31.8214 29.3036 31.7232 29.4688 31.5625 29.6027C31.4018 29.7366 31.2232 29.8036 31.0268 29.8036H20.6607C21.5179 31.8929 22.8527 33.5491 24.6652 34.7723C26.4777 35.9955 28.5179 36.6071 30.7857 36.6071C31.1071 36.6071 31.4286 36.5938 31.75 36.567C32.0714 36.5402 32.3705 36.5089 32.6473 36.4732C32.9241 36.4375 33.1875 36.3973 33.4375 36.3527C33.6875 36.308 33.9063 36.2634 34.0938 36.2188C34.2813 36.1741 34.4464 36.1339 34.5893 36.0982L34.9107 36.0179L35.0446 35.9643C35.2768 35.875 35.5089 35.8929 35.7411 36.0179C35.9554 36.1429 36.0893 36.3304 36.1429 36.5804Z"
			fill={color}
		/>
	</Svg>
);

export default Eur;
