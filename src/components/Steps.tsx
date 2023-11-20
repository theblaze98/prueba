import { useState } from 'react'
import { CheckmarkCircle24Filled } from '@fluentui/react-icons'

export enum statusSteps {
	CURRENT = 'current',
	COMPLETED = 'completed',
	PENDING = 'pending',
}

type Step = {
	no: number
	title: string
	status: statusSteps
}


type props = {
	steps: Step[]
}

export default function Steps({steps}: props) {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)

	window.addEventListener('resize', () => {
		setScreenWidth(window.innerWidth)
	})

	return (
		<div className='flex justify-between items-center w-11/12 max-w-4xl mx-auto text-sm text-center'>
			{steps.map(({ no, title, status }) => (
				<span
					key={no}
					className='flex justify-center items-center gap-2 max-md:flex-col'>
					{status === statusSteps.COMPLETED && (
						<CheckmarkCircle24Filled className='text-green-500' />
					)}
					{status === statusSteps.CURRENT && (
						<span className='text-zinc-300 bg-blue-500 w-6 h-6 rounded-full flex justify-center items-center font-medium'>
							{no}
						</span>
					)}
					{status === statusSteps.PENDING && (
						<span className='text-blue-500 border-blue-500 border-2 w-6 h-6 rounded-full flex justify-center items-center font-medium'>
							{no}
						</span>
					)}
					<p className='font-bold'>{screenWidth > 768 && `Step ${no}: `}</p>{' '}
					{title}
				</span>
			))}
		</div>
	)
}
