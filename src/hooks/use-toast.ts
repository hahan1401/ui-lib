import { ToastActionElement, ToastProps } from '@/components';
import { isEmpty } from '@/lib';
import { CSSProperties, useEffect, useState } from 'react';

const TOAST_LIMIT = 3;
const TOAST_REMOVE_DELAY = 100;

type ToasterToast = ToastProps & {
	id: string;
	title?: React.ReactNode;
	description?: React.ReactNode;
	action?: ToastActionElement;
	position?: {
		x?: number | string;
		y?: number | string;
	};
};

export const actionTypes = {
	ADD_TOAST: 'ADD_TOAST',
	DISMISS_TOAST: 'DISMISS_TOAST',
	REMOVE_TOAST: 'REMOVE_TOAST',
} as const;

let count = 0;

function genId() {
	count = (count + 1) % Number.MAX_SAFE_INTEGER;
	return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
	| {
			type: ActionType['ADD_TOAST'];
			toast: ToasterToast;
	  }
	| {
			type: ActionType['DISMISS_TOAST'];
			toastId?: ToasterToast['id'];
	  }
	| {
			type: ActionType['REMOVE_TOAST'];
			toastId?: ToasterToast['id'];
	  };

export interface ToastViewPortMeta {
	position?: Pick<CSSProperties, 'top' | 'left' | 'bottom' | 'right'>;
	max?: number;
}

interface State {
	toasts: ToasterToast[];
	meta?: ToastViewPortMeta;
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
	if (toastTimeouts.has(toastId)) {
		return;
	}

	const timeout = setTimeout(() => {
		toastTimeouts.delete(toastId);
		dispatch({
			type: 'REMOVE_TOAST',
			toastId: toastId,
		});
	}, TOAST_REMOVE_DELAY);

	toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
	const toastLimit = state.meta?.max ?? TOAST_LIMIT;
	switch (action.type) {
		case 'ADD_TOAST':
			return {
				...state,
				meta: memoryState.meta,
				toasts: (() => {
					const _toasts = [action.toast, ...state.toasts].slice(0, toastLimit + 1);
					if (_toasts.length === toastLimit + 1) {
						_toasts[toastLimit].open = false;
					}
					return [..._toasts];
				})(),
			};

		case 'DISMISS_TOAST': {
			const { toastId } = action;

			// ! Side effects ! - This could be extracted into a dismissToast() action,
			// but I'll keep it here for simplicity
			if (toastId) {
				addToRemoveQueue(toastId);
			} else {
				state.toasts.forEach((toast) => {
					addToRemoveQueue(toast.id);
				});
			}

			return {
				...state,
				toasts: state.toasts.map((t) =>
					t.id === toastId || toastId === undefined
						? {
								...t,
								open: false,
							}
						: t,
				),
			};
		}
		case 'REMOVE_TOAST':
			if (action.toastId === undefined) {
				return {
					...state,
					toasts: [],
				};
			}
			return {
				...state,
				toasts: state.toasts.filter((t) => t.id !== action.toastId),
			};
	}
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

function dispatch(action: Action) {
	memoryState = reducer(memoryState, action);
	listeners.forEach((listener) => {
		listener(memoryState);
	});
}

type Toast = Omit<ToasterToast, 'id'>;

function toast({ ...props }: Toast) {
	const id = genId();
	const dismiss = () => dispatch({ type: 'DISMISS_TOAST', toastId: id });

	dispatch({
		type: 'ADD_TOAST',
		toast: {
			...props,
			id,
			open: true,
			onOpenChange: (open) => {
				if (!open) dismiss();
			},
		},
	});

	return {
		id: id,
		dismiss,
	};
}

function useToast(meta?: State['meta']) {
	if (!isEmpty(meta)) {
		memoryState = { ...memoryState, meta: meta };
	}
	const [state, setState] = useState<State>(memoryState);

	useEffect(() => {
		listeners.push(setState);
		return () => {
			const index = listeners.indexOf(setState);
			if (index > -1) {
				listeners.splice(index, 1);
			}
		};
	}, [state]);

	return {
		...state,
		toast,
		dismiss: (toastId?: string) => dispatch({ type: 'DISMISS_TOAST', toastId }),
	};
}

export { toast, useToast };
