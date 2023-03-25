import { auth } from "../utils/FirebaseConfig";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ref, onValue, remove } from "firebase/database";

import JobListCard from "../components/JobListCard";
import NavBar from "../components/Navbar";
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
            console.log(dataResponse)
        }
        )
    }, []);

    const handleSortListings = (e) => {
        console.log(e.target.value)
    }

    return (
        <>
        <div className="bg-brand-ultra-light">
            <header className="bg-brand-light">
                <NavBar />
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-center">
                        <div className="d-flex flex-column">
                            <div>
                                <h1 className="text-center">Job Listings</h1>
                            </div>
                            <div>
                                <p className="text-center">We deliver blazing fast & striking work solutions</p>
                            </div>
                        </div>
                    </div>
                    <SearchBar />
                </div>
            </header>

            <div className="wrapper">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                        <button type="button d-flex align-items-center" className="btn btn-primary">
                            <img src={FilterIcon} alt="Filter listings icon" />Filter
                        </button>
                        <div>
                            {jobListData &&
                            <p>All <strong>{jobListData.length}</strong> jobs found</p>}
                        </div>
                    </div>
                    <div className="d-flex">
                        <label for="sortListings">Sort:</label>
                        <div className="dropdown">

                            <select
                                className="form-select rounded form-control"
                                aria-label="category selection"
                                id="sortListings"
                                onChange={handleSortListings}
                            >
                                <option value="All Categories">Latest</option>
                                <option value="Design & Development">Oldest</option>
                            </select>
                        </div>
                        <button className="btn btn-primary"><img src={HamburgerIcon} alt="" /></button>
                    </div>
                </div>

                <div className="row">
                    {jobListData && [...jobListData].reverse().map((jobListing, index) => {
                        console.log(jobListing)
                        return (
                            <>
                                <JobListCard key={index} cardInfo={jobListing} />
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