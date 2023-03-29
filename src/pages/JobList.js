import { auth } from "../utils/FirebaseConfig";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ref, onValue, remove } from "firebase/database";

import JobListCard from "../components/JobListCard";
import NavBarDark from "../components/NavBarDark";
import SearchBar from "../components/SearchBar";
import HamburgerIcon from "../assets/hamburger.svg"
import FilterIcon from "../assets/filter-icon.svg";

const JobList = () => {

    const [jobListData, setJobListData] = useState();
    const [dbState, setDbState] = useState();


    useEffect(() => {
        const dbRef = ref(auth);
        setDbState(auth);

        onValue(dbRef, (response) => {
            const newState = [];
            const dataResponse = response.val();

            for (let key in dataResponse) {
                newState.push({ key: key, jobListing: dataResponse[key] });
            }
            setJobListData(newState);
        }
        )
    }, [dbState]);

    // const handleSortListings = (e) => {
    //     console.log(e.target.value)
    // }

    return (
        <>
            <div className="bg-brand-ultra-light">
                <header className="bg-brand-dark pt-4">
                    <NavBarDark />
                    <div className="d-flex flex-column pt-4">
                        <div className="d-flex justify-content-center">
                            <div className="d-flex flex-column">
                                <div>
                                    <h1 className="text-center text-white">Job Listings</h1>
                                </div>
                                <div>
                                    <p className="text-center text-white">We deliver blazing fast & striking work solutions</p>
                                </div>
                            </div>
                        </div>
                        <SearchBar />
                    </div>
                </header>

                <div className="wrapper-80">
                    <div className="d-flex justify-content-between my-5 flex-column flex-md-row">
                        <div className="d-flex flex-row my-2">
                            <div className="d-flex me-4">
                                <button type="button d-flex align-items-center" className="btn btn-primary">
                                    <img src={FilterIcon} alt="Filter listings icon" className="mb-1 me-2"/>Filter
                                </button>
                            </div >
                            <div className="d-flex align-items-center">
                                {jobListData &&
                                    <p className="mb-0">All <strong>{jobListData.length}</strong> jobs found</p>}
                            </div>
                        </div>
                        <div className="d-flex align-items-center my-2">
                            <label htmlFor="sortListings" className="me-3">Sort:</label>
                            <div className="dropdown">

                                <select
                                    className="form-select rounded form-control"
                                    aria-label="category selection"
                                    id="sortListings"
                                    // onChange={handleSortListings}
                                >
                                    <option value="Latest">Latest</option>
                                    <option value="Oldest">Oldest</option>
                                </select>
                            </div>
                            <button className="btn btn-primary ms-3"><img src={HamburgerIcon} alt="" /></button>
                        </div>
                    </div>

                    <div className="row pb-5">
                        {jobListData && [...jobListData].reverse().map((jobListing, index) => {
                            return (
                                
                                <>
                                    <JobListCard
                                        key={index}
                                        cardInfo={jobListing}
                                    />
                                </>
                            )
                        })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default JobList;