import { deepClone, isEqual, removeValueLess } from '@/lib';
import { CodeBlock, dracula } from 'react-code-blocks';

interface ShowUtilFunctionProps {
	input: string;
	utilFunction: 'deepClone' | 'removeValueLess' | 'isEqual';
	comment?: string;
}

export const ShowUtilFunction = ({ input: _input, utilFunction, comment }: ShowUtilFunctionProps) => {
	const input = eval(_input);
	const functions: any = {
		deepClone: deepClone,
		removeValueLess: removeValueLess,
		isEqual: isEqual,
	};
	const output = functions[utilFunction](input);
	console.log(output);
	const code = `//${comment}\nconst input = ${_input}\nconst output = ${utilFunction}(input)\nconsole.log(output)`;
	return (
		<div
			className='custom-code-block'
			style={{ height: 10 }}
		>
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
