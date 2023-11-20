import { Rating } from '@mui/material'
import {
	CheckmarkStarburst24Filled,
	Checkmark24Regular,
} from '@fluentui/react-icons'
import Navbar from './components/Navbar'
import Steps, { statusSteps } from './components/Steps'

import userAvatar from './assets/user_avatar.svg'
import productImg from './assets/product.svg'
import productSmallImg from './assets/product_small.svg'

export default function App() {
	const steps = [
		{
			no: 1,
			title: 'Cart Review',
			status: statusSteps.COMPLETED,
		},
		{
			no: 2,
			title: 'Checkout',
			status: statusSteps.COMPLETED,
		},
		{
			no: 3,
			title: 'Special Offer',
			status: statusSteps.CURRENT,
		},
		{
			no: 4,
			title: 'Confirmation',
			status: statusSteps.PENDING,
		},
	]

	return (
		<>
			<Navbar />

			<div className='my-5'>
				<h3 className='text-4xl text-center font-medium mb-4'>
					Wait! your order in progress.
				</h3>
				<span className='text-lg text-center block'>
					Lorem ipsum dolor sit amet, consectetur adipiscing
				</span>
			</div>

			<Steps steps={steps} />

			<section className='w-11/12 max-w-4xl mx-auto grid grid-cols-2 gap-10 my-8 max-md:grid-cols-1'>
				<div className='col-start-1 col-end-2 max-md:hidden'>
					<figure>
						<img
							src={productImg}
							alt='product_img'
						/>
					</figure>
					<div className='bg-white rounded-lg mt-4 shadow-md shadow-slate-500/5 px-4 py-2 flex flex-wrap gap-4'>
						<figure className='rounded-full w-1/12'>
							<img
								src={userAvatar}
								alt='user'
								className='w-full'
							/>
						</figure>
						<div>
							<Rating
								value={4}
								readOnly
								size='small'
							/>
							<h4 className='font-medium flex items-center'>
								Kevin T.
								<span className='text-sm text-green-500 font-regular ml-2'>
									<CheckmarkStarburst24Filled /> Verified Costumer
								</span>
							</h4>
						</div>
						<p>
							“As soon as the Clarifions arrived I put one in my bedroom. This
							was late in the afternoon. When I went to the bedroom in the
							evening it smelled clean. When I went to bed I felt I could
							breathe better. Wonderful.”
						</p>
					</div>
				</div>
				<div className='col-start-2 col-end-3'>
					<h1 className='text-3xl font-medium'>
						<span className='text-blue-500'>ONE TIME ONLY</span> special price
						for 6 extra Clarifion for only $14 each
						<span className='text-blue-500'>($84.00 total!)</span>
					</h1>
					<div className='flex mt-5 gap-2'>
						<figure className='bg-blue-500 rounded-2xl basis-1/5 max-md:basis-1/2'>
							<img
								src={productSmallImg}
								alt='small_product'
								className='h-full'
							/>
						</figure>
						<div className='flex justify-between basis-4/5 flex-wrap'>
							<h2>Clarifion Air Ionizer</h2>
							<div className='flex gap-2'>
								<span className='line-through tetx-slate-300 opacity-50'>
									$180
								</span>
								<span className='text-blue-500'>$84</span>
							</div>
							<Rating
								value={5}
								readOnly
								size='small'
								className='w-full'
							/>
							<span className='flex items-center gap-2 before:w-3 before:h-3 before:bg-blue-500 before:rounded-full relative text-slate-500 text-sm'>
								12 left in Stock
							</span>
							<p className='text-sm'>
								Simply plug a Clarifion into any standard outlet and replace
								bulky, expensive air purifiers with a simple.
							</p>
						</div>
					</div>
					<div className='flex flex-col my-5 gap-4'>
						<span>
							<Checkmark24Regular className='text-blue-500' /> Negative Ion
							Technology may help with allergens
						</span>
						<span>
							<Checkmark24Regular className='text-blue-500' /> Designed for air
							rejuvenation
						</span>
						<span>
							<Checkmark24Regular className='text-blue-500' /> Perfect for every
							room in all types of places.
						</span>
					</div>
					<div className='bg-blue-500/25 flex gap-4 p-4 rounded items-center'>
						<span className='text-zinc-300 flex w-7 h-7 items-center justify-center bg-blue-500 rounded-full'>
							%
						</span>
						<h5 className='text-sm text-slate-500/80'>
							Save <span className='text-blue-500'>53%</span> and get{' '}
							<span className='text-blue-500'>6 extra Clarifision</span> for
							only <span className='text-blue-500'>$14 Each.</span>
						</h5>
					</div>
				</div>
			</section>
		</>
	)
}
