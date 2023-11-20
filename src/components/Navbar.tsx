import {
	CheckmarkStarburst20Regular,
	VehicleTruckProfile20Regular,
	Heart20Regular,
	ArrowSyncCheckmark20Regular,
} from '@fluentui/react-icons'
import logo from '@/assets/logo.png'
import McAfeeLogo from '@/assets/mcafee-logo.svg'
import NortonLogo from '@/assets/norton_by_symantec.png'

const headers: { title: string; icon: JSX.Element }[] = [
	{
		title: '30-DAY SATISFACTION GUARANTEE',
		icon: <CheckmarkStarburst20Regular />,
	},
	{
		title: 'FREE DELIVERY ON ORDERS OVER $40.00',
		icon: <VehicleTruckProfile20Regular />,
	},
	{
		title: '50.000+ HAPPY CUSTOMERS',
		icon: <Heart20Regular />,
	},
	{
		title: '100% MONEY BACK GUARANTEE',
		icon: <ArrowSyncCheckmark20Regular />,
	},
]

export default function Navbar() {
	return (
		<nav className='w-full shadow-md shadow-slate-500/5 bg-white'>
			<div className='bg-slate-800 w-full py-2 px-8 flex justify-between items-center'>
				{headers.map(({ title, icon }, index) => (
					<span
						key={index}
						className='text-xxs text-slate-50 flex items-center gap-2'>
						{icon} {title}
					</span>
				))}
			</div>
			<div className='flex justify-between items-center px-20 max-sm:px-3'>
				<figure className='w-1/4 max-w-[200px] max-md:w-1/2'>
					<img
						src={logo}
						alt='logo'
						className='w-full'
					/>
				</figure>
				<div className='w-1/3 flex justify-end items-center gap-2 max-md:w-1/2'>
					<figure className='basis-1/4 max-md:basis-1/2'>
						<img
							src={McAfeeLogo}
							alt='McAfeeLogo'
							className='w-full'
						/>
					</figure>
					<figure className='basis-1/4 max-md:basis-1/2'>
						<img
							src={NortonLogo}
							alt='NortonLogo'
							className='w-full'
						/>
					</figure>
				</div>
			</div>
		</nav>
	)
}
