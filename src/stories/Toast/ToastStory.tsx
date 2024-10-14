import { Button, Toaster } from '../../components';
import { useToast } from '../../hooks/use-toast';
import './styles.css';

const ToastStory = ({ toastLimit, variant = 'default' }: { toastLimit?: number; variant?: 'default' | 'error' }) => {
	const { toast } = useToast({
		max: toastLimit,
	});
	return (
		<div className={`flex h-[50vh] justify-center overflow-hidden`}>
			<Toaster />
			<Button
				onClick={() => {
					toast({
						title: `title`,
						description: 'description',
						variant: variant,
					});
				}}
			>
				Show toast
			</Button>
			<Toaster />
		</div>
	);
};

export default ToastStory;
