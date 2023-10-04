'use client'
import { FC } from 'react'
import { faker } from '@faker-js/faker'

import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
}
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

const data = {
  labels,
  datasets: [],
}

const Charts: FC = () => {
  return (
    <>
      <div className='lg:mx-auto max-w-4xl'>
        <Bar options={options} data={data} />
      </div>
    </>
  )
}

export default Charts
