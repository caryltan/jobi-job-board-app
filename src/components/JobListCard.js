import VerifiedIcon from "../assets/verified-icon.svg";
import NonVerifiedIcon from "../assets/non-verified-icon.svg";
import { ReactComponent as BookmarkIcon } from '../assets/bookmark.svg';
import { ReactComponent as BookmarkIconActive } from '../assets/bookmark-active.svg';
import { useState, useEffect } from "react";

const JobListCard = (cardInfo) => {
    const [isVerified, setIsVerified] = useState([]);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const newArray = cardInfo.cardInfo.jobListing.verifiedListing
        setIsVerified(newArray)
    })

    const handleClick = () => {
        setIsActive(false)
    }

    const handleActiveClick = () => {
        setIsActive(false)
    }

    const handleInactiveClick = () => {
        setIsActive(true)
    }

    return (
        <>
            <div className="col-12 col-xl-6">
                <div className="card border-0 d-flex align-items-center justify-content-center mx-3 my-4 bg-white">
                    <div className="card-body py-4 px-4 job-card">
                        <div className="card-text">
                            <div className="col-12 d-flex">
                                <div className="col-2">
                                    <img
                                        src={cardInfo.cardInfo.jobListing.logo}
                                        alt={`${cardInfo.cardInfo.jobListing.company} logo`}
                                        className="company-icon"
                                    />
                                </div>
                                <div className="col-10">
                                    <div className="d-flex col-12 justify-content-between">
                                        <h4>{cardInfo.cardInfo.jobListing.jobTitle}</h4>

                                        {isActive ?
                                            (<BookmarkIconActive onClick={handleActiveClick} className="bookmark"/>)
                                            :

                                            (<BookmarkIcon onClick={handleInactiveClick} className="bookmark"/>)
                                        }

                                    </div>
                                    <div className="d-flex justify-content-between col-6 col-xl-8 flex-row flex-xl-column flex-xxl-row ">
                                        <div className="d-flex">
                                            <p className="text-muted sub-heading">{cardInfo.cardInfo.jobListing.salary}</p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="text-muted sub-heading">{cardInfo.cardInfo.jobListing.expertise}</p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="text-muted sub-heading">{cardInfo.cardInfo.jobListing.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <hr />
                            </div>
                        </div>

                        <div className="d-flex flex-column inner-card justify-content-between">
                            <div>
                                <p>{cardInfo.cardInfo.jobListing.shortOverview}</p>
                            </div>
                            <div className="d-flex flex-row align-items-center justify-content-between">

                                {isVerified ?
                                    (
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex align-items-center">
                                                <img src={VerifiedIcon} alt="Verified checkmark icon" className="social-icon" />
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <p className="mb-0 px-2"><strong>Verified Client</strong></p>
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
                                                <p className="mb-0 text-muted px-2">Non-Verified Client</p>
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
            </div>
        </>
    )
}

export default JobListCard;