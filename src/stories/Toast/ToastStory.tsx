import { Button, Toaster } from '../../components';
import { useToast } from '../../hooks/use-toast';
import './styles.css';

const ToastStory = ({ toastLimit }: { toastLimit?: number }) => {
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
