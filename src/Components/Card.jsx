



const Card = (props) => {

    let badgeText 
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card-wrapper">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-image" src={props.coverImg} alt="Image of an Activity" />
            <div className="card-text">
                <div className="card-firstLine">
                    <img src="star.png" alt=" small image of a red star" />
                    <p className="blackText">{props.rating} </p>
                    <p className="greyText"> ({props.stats.reviewCount}) &#8226; {props.location}</p>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / person</p>

            </div>
            

        </div>
    )
}

export default Card