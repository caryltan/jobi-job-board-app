
const JobListCard = (cardInfo) => {
    console.log(cardInfo.cardInfo.jobListing)
    return (
        <>
            <div className="col-12 col-sm-6">
                <div className="card border-light mx-2 my-2 bg-light">
                    <div className="card-body">
                        <div className="card-text">
                            <h3>{cardInfo.cardInfo.jobListing.company}</h3>
                            {/* <img src={Rating} alt="Rating Star 5/5" /> */}
                            <p>{cardInfo.cardInfo.jobListing.description}</p>
                        </div>
                        <div className="card-footer bg-transparent">
                            <div className="d-flex flex-row">
                                <div className="pe-3">
                                    {/* <img src={ProfileImg} alt="Headshot of user profile" /> */}
                                </div>
                                <div>
                                    <h4>Zubayer Al Hasan</h4>
                                    <p className="text-muted">Canada</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobListCard;