import React from 'react'
import StatisticCard from './statisticCard/statisticCard'

const Statistics = () => {
	return (
		<div className='flex items-center flex-wrap lg:px-[150px] sm:px-[5%] max-sm:px-[5%] justify-center sm:gap-44 max-sm:hidden'>
			<StatisticCard stat='12K+' title='Project Complete' />
			<StatisticCard stat='7K+' title='Happy Clients' />
			<StatisticCard stat='10+' title='Years Experience' />
			<StatisticCard stat='270' title='Win Awards' />
		</div>
	)
}

export default Statistics
