
const JobListCard = (cardInfo) => {
    console.log(cardInfo.cardInfo.jobListing)
    return (
        <>
            <div className="col-12 col-sm-6">
                <div className="card border-light mx-2 my-2 bg-white">
                    <div className="card-body">
                        <div className="card-text">
                            <div className="d-flex">
                                <div>
                                    <img
                                        src={cardInfo.cardInfo.jobListing.logo}
                                        alt={`${cardInfo.cardInfo.jobListing.company} logo`}
                                        className="company-icon"
                                    />
                                </div>
                                <h3>{cardInfo.cardInfo.jobListing.jobTitle}</h3>
                            </div>
                            <div className="d-flex space-content-between">
                                <div className="d-flex">
                                    <p>{cardInfo.cardInfo.jobListing.salary}</p>
                                </div>
                                <div className="d-flex">
                                    <p>{cardInfo.cardInfo.jobListing.expertise}</p>
                                </div>
                                <div className="d-flex">
                                    <p>{cardInfo.cardInfo.jobListing.location}</p>
                                </div>
                            </div>
                            <div>
                                <hr />
                            </div>
                            <div>
                                <p>{cardInfo.cardInfo.jobListing.shortOverview}</p>
                            </div>
                        </div>
                        
                            <div className="d-flex flex-row">
                                <div>
                                    <p>{cardInfo.cardInfo.jobListing.jobType}</p>
                                </div>
                                <div>
                                    <button className="btn btn-primary">Apply</button>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobListCard;