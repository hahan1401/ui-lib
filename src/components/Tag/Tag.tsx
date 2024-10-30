import { Close } from '../ui/icons/Close';

export const Tag = () => {
	return (
		<div className='leading inline-flex items-center gap-1 rounded-2xl bg-secondary px-4 py-1 text-sm text-secondary-foreground'>
			<span>Tag</span>{' '}
			<button>
				<Close className='font-semibold' />
			</button>
		</div>
	);
};
