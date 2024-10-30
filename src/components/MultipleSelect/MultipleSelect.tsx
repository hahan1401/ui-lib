import { useState } from 'react';
import { Input } from '../Input';
import { Tag } from '../Tag';

const VALUES = new Array(8).fill(0)

export const MultipleSelect = () => {
	const [value, setValue] = useState(VALUES);
	return (
		<div>
			<div className='flex flex-wrap gap-2 border px-2 py-1'>
				{value.map(() => (
					<Tag />
				))}
				<div className='grow'>
					<Input className='min-w-20 shrink border-0 outline-none' />
				</div>
			</div>
		</div>
	);
};
