import VerifiedIcon from "../assets/verified-icon.svg";
import NonVerifiedIcon from "../assets/non-verified-icon.svg";
import { ReactComponent as BookmarkIcon } from '../assets/bookmark.svg';
import { ReactComponent as BookmarkIconActive } from '../assets/bookmark-active.svg';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import JobPageIndv from "../pages/JobPageIndv";

const JobListCard = (cardInfo, index) => {
    const [isVerified, setIsVerified] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [jobInfo, setJobInfo] = useState();

    useEffect(() => {
        const newArray = cardInfo.cardInfo.jobListing.verifiedListing;
        setIsVerified(newArray);
        const storedJobInfo = cardInfo.cardInfo.jobListing;
        setJobInfo(storedJobInfo);
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
                            <div className="col-12 d-flex job-card-heading">
                                <div className="col-2 col-lg-1 col-xl-2 d-flex justify-content-center justify-content-sm-start">
                                    <img
                                        src={cardInfo.cardInfo.jobListing.logo}
                                        alt={`${cardInfo.cardInfo.jobListing.company} logo`}
                                        className="company-icon my-2"
                                    />
                                </div>
                                <div className="col-10 col-lg-11 col-xl-10">
                                    <div className="d-flex col-12 justify-content-sm-between flex-column flex-sm-row">
                                        <div className="d-flex justify-content-center justify-content-sm-start">
                                            <h4 className="text-center text-sm-start my-2">{cardInfo.cardInfo.jobListing.jobTitle}</h4>
                                        </div>
                                        <div className="d-flex justify-content-center justify-content-sm-start my-2">
                                            {isActive ?
                                                (<BookmarkIconActive onClick={handleActiveClick} className="bookmark" />)
                                                :

                                                (<BookmarkIcon onClick={handleInactiveClick} className="bookmark" />)
                                            }
                                        </div>
                                    </div>


                                    <div className="d-flex justify-content-between col-12 col-md-10 col-lg-8 col-xl-10 job-card-sub-heading my-2">
                                        <div className="d-flex justify-content-center justify-content-sm-start">
                                            <p className="text-muted sub-heading text-center">{cardInfo.cardInfo.jobListing.salary}</p>
                                        </div>
                                        <div className="d-flex justify-content-center justify-content-sm-start">
                                            <p className="text-muted sub-heading text-center">{cardInfo.cardInfo.jobListing.expertise}</p>
                                        </div>
                                        <div className="d-flex justify-content-center justify-content-sm-start">
                                            <p className="text-muted sub-heading text-center">{cardInfo.cardInfo.jobListing.location}</p>
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
                                <p className="text-center text-sm-start">{cardInfo.cardInfo.jobListing.shortOverview}</p>
                            </div>
                            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between">

                                {isVerified ?
                                    (
                                        <div className="d-flex align-items-center flex-column flex-sm-row">
                                            <div className="d-flex align-items-center">
                                                <img src={VerifiedIcon} alt="Verified checkmark icon" className="social-icon my-1" />
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <p className="mb-0 px-2 my-1"><strong>Verified Client</strong></p>
                                            </div>
                                            <div className="d-flex align-items-center px-5">
                                                <p className="mb-0 my-2">{cardInfo.cardInfo.jobListing.jobType}</p>
                                            </div>
                                        </div>
                                    ) :
                                    (
                                        <div className="d-flex align-items-center flex-column flex-sm-row">
                                            <div className="d-flex align-items-center">
                                                <img src={NonVerifiedIcon} alt="Non-Verified greyed out checkmark icon my-1" className="social-icon" />
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <p className="mb-0 text-muted px-2 my-1">Non-Verified Client</p>
                                            </div>
                                            <div className="d-flex align-items-center px-5">
                                                <p className="mb-0 my-2">{cardInfo.cardInfo.jobListing.jobType}</p>
                                            </div>
                                        </div>
                                    )
                                }
                                <div className="d-flex align-items-center my-2">
                                    <Link
                                        className="btn btn-primary"
                                        to={`/job-listings/${cardInfo.cardInfo.jobListing.id}`}
                                        state={ jobInfo }
                                        key={index}
                                    >
                                        Apply
                                    </Link>

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