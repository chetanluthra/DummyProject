import { useEffect, useState } from "react";
import ObjectCards from "../Cards/ObjectCards";
import NavBar from "../Navbar/NavBar";
import { getCardsData, filterCardData } from "./helper";
import { Spinner } from "react-bootstrap";
import Filter from "../Filter/Filter"


function MainComponent() {
  const [keyCards, setKeyCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    getAllCards();
  }, []);

  const deleteCard = (id) => {
    const filterCards = keyCards.filter((card) => card.id !== id);
    console.log(filterCards, id);
    setKeyCards(filterCards);
  };

  const getAllCards = async () => {
    try {
      const data = await getCardsData();
      if(data){
        setKeyCards(data.data);
        setFilterData(data.data)
      }
      setLoading(false);
    } catch (err) {
      setKeyCards([]);
      setLoading(false)
    }
  };

  const getFilterCards = async (category) => {
    setLoading(true)
    if(category ==="all"){
      getAllCards();
    }
    else if(category === "3" ){
      const filterCards = filterData.filter((card) => card.category ==="women's clothing");
      setKeyCards(filterCards);
      setLoading(false)
    }
    else if(category === "4" ){
      const filterCards = filterData.filter((card) => card.category ==="men's clothing");
      setKeyCards(filterCards);
      setLoading(false)
    }
    else {
      try {
        const data = await filterCardData(category);
        if(data){
          setKeyCards(data.data);
        }
        setLoading(false);
      } catch (err) {
        setKeyCards([]);
        setLoading(false)

      }
    }
  };

  return (
    <>
      <NavBar />
      <Filter  filterData={getFilterCards}/>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <div className="container">
          {keyCards && keyCards.length > 0 ? (
            <div className="row">
              {keyCards.map((i) => (
                <ObjectCards cards={i} deleteCard={deleteCard} key={i.id} />
              ))}
            </div>
          ) : (
            <h1>No Cards Yet</h1>
          )}
        </div>
      )}
    </>
  );
}

export default MainComponent;
