import { HTMLAttributes } from "react";

export const Close = (props: HTMLAttributes<SVGElement>) => {
	return (
		<svg
			width='1em'
			height='1em'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M7 17L16.8995 7.10051'
				stroke='currentColor'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M7 7.00001L16.8995 16.8995'
				stroke='currentColor'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};
