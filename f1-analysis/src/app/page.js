"use client";
import Chart from 'chart.js/auto';
import { useState } from 'react'
import { Line } from 'react-chartjs-2';
import { advancedDriverData } from './data';

const allDriverData = {
    'Max Verstappen':[0, 25, 0, 26, 26, 25, 15, 25, 25, 6, 19, 25, 25, 26, 26, 25, 6, 25, 25, 25, 8, 25],
    'Sergio Perez':[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    'Charles Leclerc': [26, 19, 26, 8, 18, 0, 12, 0, 10, 12, 25, 0, 8, 8, 15, 18, 18, 15, 15, 8, 12, 18],
    'Carlos Sainz': [18, 15, 0, 0, 15, 12, 18, 0, 19, 25, 0, 11, 12, 15, 4, 12, 15, 0, 0, 10, 15, 12],
    'George Russell': [12, 10, 15, 12, 10, 15, 10, 15, 12, 0, 12, 15, 15, 12, 18, 15, 0, 4, 11, 13, 26, 10],
    'Lewis Hamilton': [15, 1, 12, 0, 8, 10, 4, 12, 15, 16, 15, 18, 19, 0, 12, 10, 2, 10, 18, 18, 18, 0],
    'Esteban Ocon': [6, 8, 6, 0, 4, 6, 0, 1, 8, 0, 10, 4, 2, 6, 2, 0, 0, 12, 0, 4, 4, 6],
    'Pierre Gasly': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    'Lando Norris': [0, 6, 10, 15, 0, 4, 9, 2, 0, 8, 6, 6, 6, 0, 6, 6, 12, 1, 8, 2, 0, 9],
    'Oscar Piastri': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    'Nico Hulkenburg': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    'Kevin Magnussen':  [10, 2, 0, 2, 0, 0, 0, 0, 0, 1, 4, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
    'Yuki Tsunoda': [4, 0, 0, 6, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    'Daniel Riciardo': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    'Valterri Bottas': [8, 0, 4, 10, 6, 8, 2, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
    'Zhou Guanyu': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    'Fernando Alonso': [2, 0, 0, 0, 0, 2, 6, 6, 2, 10, 1, 8, 4, 10, 8, 0, 0, 6, 6, 0, 10, 0],
    'Lance Stroll': [0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 8, 0, 0, 0, 1, 4],
    'Logan Sergeant': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    'Alex Albon': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    '':[]

  }


const chartOptions = {
  scales: {
    y: {
      max: 450,
      beginAtZero: true,
    },
  },
};


// This function renders the home page

export default function Home() {
  const [driver, setDriver] = useState(" ");
  const [driverinfo, setDriverinfo] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
    datasets: [
      {
        label: driver,
        data: allDriverData[driver]
      }
    ]
  })

  const [team, setTeam] = useState("");
  
  const changeDriver = (e) => {
    const selectedDriver = e.target.value
    setDriver(selectedDriver)
    console.log(driver)
    let cPoints = []
    let points = advancedDriverData[selectedDriver].race_finishes

    setDriverinfo([
      selectedDriver, 
      advancedDriverData[selectedDriver].race_wins, 
      advancedDriverData[selectedDriver].podium, 
      advancedDriverData[selectedDriver].fastest_lap, 
      advancedDriverData[selectedDriver].average, 


    ])

    cPoints.push(points[0])
    for (let index = 1; index < points.length; index++) {
      cPoints.push(cPoints[index - 1] + points[index])
    }

    console.log(cPoints)
    console.log(driverinfo)

    setChartData({
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
      datasets: [
        {
          label:selectedDriver,
          data:cPoints,
          fill: true,
          backgroundColor: '#A7D5F9'
        }
      ]
    })
  }

  const changeTeam = (e) => {
    const newTeam = e.target.value;
    setTeam(newTeam)
    console.log(newTeam)
  }

  return (
    <div className='font-sans bg-[#cbd5e1]'>
      <nav class="justify-center">
            <ol class="rounded-full p-5 text-xl justify-center">
                <li class="Compare"><a href="#education">Drivers</a></li>
                <li class="projects"><a href="#project">Team Performance</a></li>
                <li class="contact">Compare Drivers</li>
            </ol>
      </nav>
      <h1 className='text-4xl p-5 text-center bg-[#cffafe]'>A Comprehensive F1 analysis for 2023</h1>
      <div className='flex'>
        <h1 className='mx-10 my-4 p-3 flex-2 bg-[#67e8f9] rounded'>Choose your driver</h1>
        <div className='flex-1'>
          <select className='mx-10 my-4 p-3' value={driver} onChange={changeDriver}>
            <option value=" "></option>
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
        </div>
      </div>

      {/* // This is the graph and the details on the right of the graph */}
      <div className='flex'>
        <div className='flex-1 mx-20 p-10 flex-1'>
          <Line data={chartData} options={chartOptions}/>
        </div>
        <div className='flex-1 text-3xl py-10 my-5 font-medium'>
            <p className='py-3'>Driver: {driver}</p>
            <p className='py-3'>Race Wins: {driverinfo[1]}</p>
            <p className='py-3'>Podium: {driverinfo[2]}</p>
            <p className='py-3'>Fastest Lap: {driverinfo[3]}</p>
            <p className='py-3'>Average: {driverinfo[4]}</p>
        </div>
      </div>

      {/* // Team Performance */}

      <div>
        <select value={team} onChange={changeTeam}>
          <option>Red Bull</option>
          <option>Mercedes</option>
          <option>Ferrari</option>
          <option>McLaren</option>
          <option>Alpine</option>
          <option>Haas</option>
          <option>Alfa Romeo</option>
          <option>AlphaTauri</option>
          <option>Aston Martin</option>
          <option>Williams</option>
        </select>
      </div>
      <div className='flex-1 mx-20 p-10 flex-1'>
          <Line data={chartData} options={chartOptions}/>
      </div>


    </div>
  )
}
