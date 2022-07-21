import React, {useState} from 'react';
import Card from './Card/card';
import cardData from './Card/cardData';

const Programs = () => {

   
    let cards = cardData.map((i => i));
    const [list, setList] = useState(cards);

    let CardElement = list.map((cards) => {
        return <Card cards={cards} />;
    });

    const filters = (searchName)=>{
        let lList = [...list];
        if(searchName===""){
          setList(cards);
        }else{
          let filterdData = lList.filter((i)=>i.title.includes(searchName));
          setList(filterdData);
        } 
      }

    return (
        <div className = 'programs'>
            <div>
            <input className= "search" aria-label='Search' type="text" placeholder="   Search ..." onChange={(e)=>filters(e.target.value)}/>
            </div>
            <div className= "media-scroller">
                <div className="wrapper media-element">
                    {CardElement}
                </div>
            </div>
        </div>
    )
}

export default Programs
