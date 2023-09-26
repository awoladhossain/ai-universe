/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Header from "./components/Header";


const App = () => {
  const [data, setData] = useState([])
  const [showall, setShowAll] = useState(false)

  const handleShowAll = () => {
    setShowAll(true);
  }

  const handleSortDate = () => {
  const sortDate = data.sort((a, b) => { 
      return new Date(a.published_in) - new Date(b.published_in)
  });
    setData([...data,setData])
  }


  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
      const resData = await res.json()
      setData(resData.data.tools)
    }
    loadData();
  }, [])

  return (
    <>
      <Header />
      <span onClick={handleSortDate}> <Button>Sort By Date</Button> </span>
      <Card data={data} showall={showall}></Card>
      {!showall &&
        <span onClick={handleShowAll}><Button>Sell All</Button></span>
      }
    </>
  );
};

export default App;