import { useEffect, useState } from 'react'

const MiApi = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')

  const obtenerData = async () => {
    const url = 'https://dragonball-api.com/api/characters'
    const res = await fetch(url)
    const { items } = await res.json()
    const itemsOrdenados = items.sort((a, b) => a.name.localeCompare(b.name))
    setData(itemsOrdenados)
  }
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    obtenerData()
  }, [])

  console.log(search)

  return (
    <>
      <div className='d-flex align-items-center justify-content-center'>
        <input type='text' value={search} onChange={handleSearch} placeholder='Buscar' />
      </div>

      <div className='d-flex flex-wrap p-5'>
        {
    data
      .filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
      .map((item, index) => (
        <div className='card m-3 border border-secondary' key={index}>
          <img className='imagen card-img-top bg-light' src={item.image} />
          <div className='card-body bg-secondary'>
            <div className='cardText card-text text-light'>
              <h3>{item.name}</h3>
              <p>{item.race} - {item.gender}</p>
              <h5>Base ki</h5>
              <p>{item.ki}</p>
              <h5>Total ki</h5>
              <p>{item.maxKi}</p>
            </div>
          </div>
        </div>
      ))
   }
      </div>
    </>
  )
}

export default MiApi
