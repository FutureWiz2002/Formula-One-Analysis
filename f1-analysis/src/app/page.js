"use client";
import { driverData } from './data'
// import { BarChart } from './components/BarChart'
import Chart from 'chart.js/auto';
import { useState } from 'react'
import { Line } from 'react-chartjs-2';


export default function Home() {

  return (
    <div>
      <p>A Comprehensive F1 analysis for 2023</p>
      <select>
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
      <Line
        datasetIdKey='id'
        data={{
          labels: ['Jun', 'Jul', 'Aug'],
          datasets: [
            {
              id: 1,
              label: '',
              data: [5, 6, 7],
            },
            {
              id: 2,
              label: '',
              data: [3, 2, 1],
            },
          ],
  }}
/>
    </div>
  )
}
