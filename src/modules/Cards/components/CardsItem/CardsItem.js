import {useState} from "react";
import BaseCard from "../../../../components/BaseCard/BaseCard";
import MainCard from "../../../../components/MainCard/MainCard";
import useCardsStore from "../../store/store";


const CardsItem = ({id,name,age,job,city,select,deleteCard}) => {
    const {updateCard} = useCardsStore()
    const [editMode, setEditMode] = useState(false)

    if (!editMode) {
        return <BaseCard id={id}
                         name={name}
                         select={select}
                         updateCard={updateCard}
                         openMode={()=>setEditMode(true)}

        />
    }

    return <MainCard id={id}
                     name={name}
                     age={age}
                     job={job}
                     city={city}
                     deleteCard={()=>deleteCard(id)}
                     closeCard={()=>setEditMode(false)}
    />
}

export default CardsItem