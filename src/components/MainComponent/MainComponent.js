import { useEffect, useState } from "react";
import ObjectCards from "../Cards/ObjectCards";
import NavBar from "../Navbar/NavBar";
import { getCardsData } from './helper';
import { Spinner } from "react-bootstrap";

function MainComponent() {
    const [keyCards, setKeyCards] = useState([])
    const [loading, setLoading] =  useState(true)
    useEffect(() => {
        getAllCards()
    },[])

    const deleteCard = async (id) => {
      const filterCards = keyCards.filter((card)=> card.id !== id)
      console.log(filterCards,id)
      setKeyCards(filterCards)
    }
    
    const getAllCards = async() => {
        try{
            const data = await getCardsData();
            setKeyCards(data.data)
            setLoading(false)
        }
        catch(err){
            setKeyCards([]);
        }
    }
    
  return (
    <>
     <NavBar />
      {loading? <Spinner animation="border" /> 
      :
      <div className="container">
        {keyCards && keyCards.length > 0 ? <div className="row">
          {keyCards.map((i) => (
            <ObjectCards cards={i} deleteCard={deleteCard} key={i.id} />
          ))}
        </div>:
        <h1>No Cards Yet</h1>
        }
      </div>}
    </>
  )
}

export default MainComponent