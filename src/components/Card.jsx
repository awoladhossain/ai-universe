/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Modal from "./Modal";
import SingleData from "./SingleData";

const Card = ({ data, showall }) => {

    const [uniqId, setUniqId] = useState(null)
    
    const [singleData, setSingleData] = useState({})
    
    useEffect(() => {
        console.log("hello from useeffect");
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqId}`)
            .then((res) => res.json())
            .then((data) => setSingleData(data.data))
    }, [uniqId])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 rounded-3xl my-6">
            {
                data.slice(0, showall? 12:6).map((singleCardData) => {
                    return <SingleData key={singleCardData.id} singleCardData={singleCardData} setUniqId={setUniqId}></SingleData>
                })
            }
            <Modal singleData={singleData}></Modal>
        </div>
    );
};

export default Card;