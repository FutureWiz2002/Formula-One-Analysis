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
      data:  [26, 19, 26, 8, 18, 0, 12, 0, 10, 12, 25, 0, 8, 8, 15, 18, 18, 15, 15, 8, 12, 18]
    },
    {
      label: 'Carlos Sainz',
      data: [18, 15, 0, 0, 15, 12, 18, 0, 19, 25, 0, 11, 12, 15, 4, 12, 15, 0, 0, 10, 15, 12]
    },
    {
      label: 'George Rusell',
      data: [12, 10, 15, 12, 10, 15, 10, 15, 12, 0, 12, 15, 15, 12, 18, 15, 0, 4, 11, 13, 26, 10]
    },
    {
      label: 'Lewis Hamilton',
      data: [15, 1, 12, 0, 8, 10, 4, 12, 15, 16, 15, 18, 19, 0, 12, 10, 2, 10, 18, 18, 18, 0] 
    },
    {
      label: 'Esteban Ocon',
      data: [6, 8, 6, 0, 4, 6, 0, 1, 8, 0, 10, 4, 2, 6, 2, 0, 0, 12, 0, 4, 4, 6]
    },
    {
      label: 'Pierre Gasly',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    },
    {
      label: 'Lando Norris',
      data: [0, 6, 10, 15, 0, 4, 9, 2, 0, 8, 6, 6, 6, 0, 6, 6, 12, 1, 8, 2, 0, 9]
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
      data:  [10, 2, 0, 2, 0, 0, 0, 0, 0, 1, 4, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0]
    },
    {
      label: 'Yuki Tsunoda',
      data: [4, 0, 0, 6, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
    },
    {
      label: 'Daniel Riciardo',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    },
    {
      label: 'Valterri Bottas',
      data: [8, 0, 4, 10, 6, 8, 2, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0]
    },
    {
      label: 'Zhou Guanyu',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    },{
      label: 'Fernanado Alonso',
      data: [2, 0, 0, 0, 0, 2, 6, 6, 2, 10, 1, 8, 4, 10, 8, 0, 0, 6, 6, 0, 10, 0]
    },{
      label: 'Lance Stroll',
      data: [0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 8, 0, 0, 0, 1, 4]
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
