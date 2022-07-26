import educationData from './history/data.js'
import HistoryCard from "./history/historyCard.jsx";

const Education = educationData.map(edu => {
    return(  
    <HistoryCard key={edu.id} {...edu} /> 
    )
  })
  export default Education;