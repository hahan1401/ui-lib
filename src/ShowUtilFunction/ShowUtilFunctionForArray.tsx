import { intersectionBy, uniqBy } from '@/lib';
import { CodeBlock, dracula } from 'react-code-blocks';

interface ShowUtilFunctionProps {
	input: string;
	iteratee: string;
	utilFunction: 'uniqBy' | 'intersectionBy';
	comment?: string;
}

export const ShowUtilFunctionForArray = ({ input: _input, utilFunction, iteratee, comment }: ShowUtilFunctionProps) => {
	const input = eval(_input);
	const functions: Record<typeof utilFunction, unknown> = {
		uniqBy: uniqBy,
		intersectionBy: intersectionBy,
	};

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	const output = functions[utilFunction](...(utilFunction === 'intersectionBy' ? input : [input]), eval(iteratee));
	console.log(output);
	const code = `//${comment}\nconst input = ${_input}\nconst output = ${utilFunction}(input${iteratee ? `, ${iteratee}` : ''})\nconsole.log(output)`;
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
