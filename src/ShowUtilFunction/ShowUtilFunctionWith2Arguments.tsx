import { isEqual } from '@/lib';
import { CodeBlock, dracula } from 'react-code-blocks';

interface ShowUtilFunctionWith2ArgumentsProps {
	input1: string;
	input2: string;
	utilFunction: 'isEqual';
	comment?: string;
}

export const ShowUtilFunctionWith2Arguments = ({
	input1: _input1,
	input2: _input2,
	utilFunction,
	comment,
}: ShowUtilFunctionWith2ArgumentsProps) => {
	const input1 = eval(_input1);
	const input2 = eval(_input2);
	const functions: any = {
		isEqual: isEqual,
	};
	const output = functions[utilFunction](input1, input2);
	console.log(output);
	const code = `//${comment}\nconst input1 = ${_input1}\nconst input2 = ${_input2}\nconst output = ${utilFunction}(input1, input2)\nconsole.log(output)`;
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
