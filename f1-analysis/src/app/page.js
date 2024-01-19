"use client";
import { driverData } from './data'
// import { BarChart } from './components/BarChart'
import Chart from 'chart.js/auto';
import { useState } from 'react'
import { Line } from 'react-chartjs-2';

const dataSet = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
  datasets: [
    {
      label: 'Max Verstappen',
      data: [0, 25, 0, 26, 26, 25, 15, 25, 25, 6, 19, 25, 25, 26, 26, 25, 6, 25, 25, 25, 8, 25]
    },
    {
      label: 'Sergio Perez',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    },
    {
      label: 'Charles Leclerc',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    },
    {
      label: 'Carlos Sainz',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    },
    {
      label: 'George Rusell',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    },
    {
      label: 'Lewis Hamilton',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    },
    {
      label: 'Esteban Ocon',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    },
    {
      label: 'Pierre Gasly',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    },
    {
      label: 'Lando Norris',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    },
    {
      label: 'Oscar Piastri',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    },
    {
      label: 'Nico Hulkenburg',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    },
    {
      label: 'Kevin Magnussen',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    },
    {
      label: 'Yuki Tsunoda',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    },
    {
      label: 'Daniel Riciardo',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    },
    {
      label: 'Valterri Bottas',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    },
    {
      label: 'Zhou Guanyu',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    },{
      label: 'Fernanado Alonso',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    },{
      label: 'Lance Stroll',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    },{
      label: 'Logan Sergeant',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    },
    {
      label: 'Alex Albon',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    },
  ],
};


export default function Home() {
  const [driverData, setDriverData] = useState('');
  
  const changeDriverData = (e) => {
    setDriverData(e.target.value)
    console.log(driverData)
  }


  return (
    <div>
      <p>A Comprehensive F1 analysis for 2023</p>
      <select value={driverData} onChange={changeDriverData}>
         <option value="Max Verstappen">Max Verstappen</option>
         <option value="Sergio Perez">Sergio</option>
         <option value="Charles Leclerc">Charles Leclerc</option>
         <option value="Carlos Sainz">Carlos Sainz</option>
         <option value="George Russell">George Russell</option>
         <option value="Lewis Hamilton">Lewis Hamilton</option>
         <option value="Esteban Ocon">Esteban Ocon</option>
         <option value="Pierre Gasly">Pierre Gasly</option>
         <option value="Lando Norris">Lando Norris</option>
         <option value="Oscar Piastri">Oscar Piastri</option>
         <option value="Nico Hulkenberg">Nico Hulkenberg</option>
         <option value="Kevin Magnussen">Kevin Magnussen</option>
         <option value="Yuki Tsunoda">Yuki Tsunoda</option>
         <option value="Daniel Riciardo">Daniel Riciardo</option>
         <option value="Valterri Bottas">Valterri Bottas</option>
         <option value="Zhou Guanyu">Zhou Guanyu</option>
         <option value="Fernando Alonso">Fernando Alonso</option>
         <option value="Lance Stroll">Lance Stroll</option>
         <option value="Logan Sergeant">Logan Sergeant</option>
         <option value="Alex Albon">Alex Albon</option>
      </select>
      <div className='h-90 w-90'>
        <Line
          // datasetIdKey='id'
          data={dataSet}    />
      </div>
      <p>{driverData}</p>
    </div>
  )
}
