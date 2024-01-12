import React from 'react'
import s from './statisticCard.module.css'
type Props = {
	stat: string
	title: string
}

const StatisticCard = ({ stat, title }: Props) => {
	return (
		<div className='flex flex-col text-center justify-center'>
			<span data-text={stat} className={s.stat} />
			<p className='text-base font-semibold'>{title}</p>
		</div>
	)
}

export default StatisticCard
