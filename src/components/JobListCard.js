import VerifiedIcon from "../assets/verified-icon.svg";
import NonVerifiedIcon from "../assets/non-verified-icon.svg";
import { useState, useEffect } from "react";

const JobListCard = (cardInfo, verified) => {
    // console.log(cardInfo.cardInfo.jobListing.verifiedListing)
    console.log(verified)
    const [isVerified, setIsVerified] = useState([]);

    useEffect(() => {
        const newArray = cardInfo.cardInfo.jobListing.verifiedListing

        setIsVerified(newArray)
    })

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
                                <div>
                                    <div>
                                        <h4>{cardInfo.cardInfo.jobListing.jobTitle}</h4>
                                    </div>
                                    <div className="d-flex">
                                        <div className="d-flex">
                                            <p className="text-muted">{cardInfo.cardInfo.jobListing.salary}</p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="text-muted">{cardInfo.cardInfo.jobListing.expertise}</p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="text-muted">{cardInfo.cardInfo.jobListing.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <hr />
                            </div>
                            <div>
                                <p>{cardInfo.cardInfo.jobListing.shortOverview}</p>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center justify-content-between">

                            {isVerified ?
                                (
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex align-items-center">
                                            <img src={VerifiedIcon} alt="Verified checkmark icon" className="social-icon" />
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <p className="mb-0"><strong>Verified Client</strong></p>
                                        </div>
                                        <div className="d-flex align-items-center px-5">
                                            <p className="mb-0">{cardInfo.cardInfo.jobListing.jobType}</p>
                                        </div>
                                    </div>
                                ) :
                                (
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex align-items-center">
                                            <img src={NonVerifiedIcon} alt="Non-Verified greyed out checkmark icon" className="social-icon" />
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <p className="mb-0 text-muted">Non-Verified Client</p>
                                        </div>
                                        <div className="d-flex align-items-center px-5">
                                            <p className="mb-0">{cardInfo.cardInfo.jobListing.jobType}</p>
                                        </div>
                                    </div>
                                )
                            }


                            <div className="d-flex align-items-center">
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