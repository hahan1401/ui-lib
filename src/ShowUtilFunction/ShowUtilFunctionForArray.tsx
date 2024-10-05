import { uniqBy } from '@/lib';
import { CodeBlock, dracula } from 'react-code-blocks';

interface ShowUtilFunctionProps {
	input: string;
	iteratee: string;
	utilFunction: 'uniqBy';
	comment?: string;
}

export const ShowUtilFunctionForArray = ({ input: _input, utilFunction, iteratee, comment }: ShowUtilFunctionProps) => {
	const input = eval(_input)
	const functions: Record<typeof utilFunction, <T>(input: Array<T>, iteratee: (item: T) => unknown) => T[]> = {
		uniqBy: uniqBy,
	};
	const output = functions[utilFunction](input, eval(iteratee));
	console.log(output);
	const code = `//${comment}\nconst input = ${_input}\nconst output = ${utilFunction}(input, ${iteratee})\nconsole.log(output)`;
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
