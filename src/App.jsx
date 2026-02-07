
import './App.css'
import { useState } from 'react'

function App() {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombies] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },

  ])

  function handleAddFighter(fighter) {
    if (money >= fighter.price && !team.includes(fighter)) {
      setTeam([...team, fighter])
      setMoney(money - fighter.price)

      const filteredZombies = zombieFighters.filter((zombie) => zombie.id !== fighter.id)
      setZombies(filteredZombies)
    }
  }

  function handleRemoveFighter(fighter) {
    setTeam(team.filter((member) => member.id !== fighter.id))
    setMoney(money + fighter.price)
    setZombies([...zombieFighters, fighter])
  }

  return (
    <>
      <div>
        <h1>Zombie Fighters</h1>


        <h2>Money: ${money}</h2>

        <h2 className='team-strength'>Team Strength: {team.reduce((total, fighter) => total + fighter.strength, 0)}</h2>
        {/* <h2 className='team-strength'>{team.reduce((total, fighter) => total + fighter.strength, 0)}</h2> */}

        {/* <br /><br /> */}

        <h2 className='team-agility'>Team Agility: {team.reduce((total, fighter) => total + fighter.agility, 0)}</h2>
        {/* <h2 className='team-agility'>{team.reduce((total, fighter) => total + fighter.agility, 0)}</h2> */}


        <h2 className='team'>Team</h2>
        {team.length === 0 && <p>Pick some team members</p>}
        {team.map((fighter) => (
          <div key={fighter.id} className="fighter-card">
            <img src={fighter.img} alt={fighter.name} />
            <p className='fighter-name'>{fighter.name}</p>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
          </div>
          
        ))}


        <h2>Fighters</h2>
        {zombieFighters.map((fighter) => (
          <div key={fighter.id} className="fighter-card">
            <img src={fighter.img} alt={fighter.name} />
            <p className='fighter-name'>{fighter.name}</p>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </div>
        ))}
      </div>


    </>
  )
}

export default App
