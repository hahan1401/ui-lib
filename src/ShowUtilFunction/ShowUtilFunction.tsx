import { deepClone, removeValueLess } from '@/lib';
import { CodeBlock, dracula } from 'react-code-blocks';

interface ShowUtilFunctionProps {
	input?: unknown;
	utilFunction: 'deepClone' | 'removeValueLess';
	comment?: string;
}

export const ShowUtilFunction = ({ input, utilFunction, comment }: ShowUtilFunctionProps) => {
	const functions: Record<typeof utilFunction, unknown> = {
		deepClone: deepClone,
		removeValueLess: removeValueLess,
	};
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
	const output = functions[utilFunction](input);
	console.log(output);
	const code = `//${comment}\nconst input = ${JSON.stringify(input)}\nconst output = removeValueLess(input)\nconsole.log(output)`;
	return (
		<div className='custom-code-block' style={{height: 10}}>
			<CodeBlock
				customStyle={{
					with: '100%',
				}}
				text={code}
				language={'javascript'}
				showLineNumbers={true}
				theme={dracula}
			/>
		</div>
	);
};
