import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import sampleData from './Data/data.json';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const ClientDashboard = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(formattedDate);
  }, []);

  const barChartData = {
    labels: sampleData.labels,
    datasets: [{
      label: 'Most Popular Medicines',
      data: sampleData.values,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }],
  };

  const pieChartData1 = {
    labels: sampleData.pieLabels1,
    datasets: [{
      data: sampleData.pieValues1,
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    }],
  };

  const pieChartData2 = {
    labels: sampleData.pieLabels2,
    datasets: [{
      data: sampleData.pieValues2,
      backgroundColor: ['#4BC0C0', '#9966FF', '#FF9F40'],
    }],
  };

  return (
    <div className='p-5'>
      <div className="py-4 text-xl font-bold">{currentDate}</div>

      <div className='flex flex-row justify-start items-center gap-16'>
        <div className='bg-green-200 w-72 h-52 rounded-2xl flex flex-col items-center justify-start p-5'>
          <p className='font-semibold text-xl'>Average Price Change</p>
          <p className='font-extrabold text-4xl pt-10'>2.5%</p>
        </div>
        <div className='bg-blue-200 w-72 h-52 rounded-2xl flex items-center justify-center'>
          <p>Card 1</p>
        </div>
        <div className='bg-red-200 w-72 h-52 rounded-2xl flex items-center justify-center'>
          <p>Card 1</p>
        </div>
        <div className='bg-yellow-200 w-72 h-52 rounded-2xl flex items-center justify-center hover:scale-110 duration-500'>
          <p>Card 1</p>
        </div>
      </div>

      <div className='mt-10'>
        <h2 className='text-lg font-bold mb-4'>Bar Chart</h2>
        <Bar data={barChartData} />
      </div>

      <div className='mt-10 flex justify-center items-center gap-40 '>
        <div>
          <h2 className='text-lg font-bold mb-4'>Pie Chart 1</h2>
          <Pie data={pieChartData1} />
        </div>
        <div>
          <h2 className='text-lg font-bold mb-4'>Pie Chart 2</h2>
          <Pie data={pieChartData2} />
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
