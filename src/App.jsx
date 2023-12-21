import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/Card'
import data from './data'

function App() {

  const cards = data.map(item => {
    return (
      <Card 
      {...item} // props object is spread here 
      key={item.id}
      />
    )
  })


  return (
    <>
    <Navbar />
    <Hero />
    <section className='cards-list'>
        {cards}
    </section>
    
     
    </>
  )
}

export default App
