import '../styles/historyCard.css'
let imgs = 'https://i.pinimg.com/originals/e6/d0/ff/e6d0ffbed19f9affd52e80ea4ff2d0fb.jpg'

function HistoryCard(props) {
    return (
        <div className="history-Container">
            <div className='sub'>

            
            <img src={props.imageURL} alt={"library"} className='pic' />
            <div className='card-right'>
                <div className='card-location'>
               
                    <p className='loc-name'>
                        <img src="https://www.citypng.com/public/uploads/preview/red-gps-location-symbol-icon-hd-png-116369431412wisxxt5bl.png" width='15px'/>
                        {props.location}
                        <a className='loc-link' href={props.mapsURL} target="_blank">View on Google maps</a></p>
                   
                </div>
                <div className='card-body'>
                    <h1>{props.name}</h1>
                    <h4>{props.startDate}  -  {props.endDate}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HistoryCard;