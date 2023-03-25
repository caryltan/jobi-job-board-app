import { auth } from "../utils/FirebaseConfig";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ref, onValue, remove } from "firebase/database";

import JobListCard from "../components/JobListCard";
import NavBar from "../components/Navbar";

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

    const handleCategoryChange = (e) => {
        console.log(e.target.value)
    }

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <>
            <header className="bg-brand-light">
                <NavBar />

                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-center">
                        <div className="d-flex flex-column">
                            <div>
                                <h1 className="text-center">Job listing</h1>
                            </div>
                            <div>
                                <p className="text-center">We deliver blazing fast & striking work solutions</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 pb-5 pt-3">
                        <div className="d-flex">
                            <form className="input-group mb-4 justify-content-center">
                                <div className="col-3">
                                    <div className="form-floating">
                                        <input type="search" class="form-control rounded-0" id="searchBar" onChange={handleChange} />
                                        <label for="searchBar">What are you looking for?</label>
                                    </div>
                                </div>
                                <div className="dropdown col-3">
                                    <div className="form-floating">
                                        <select
                                            className="form-select rounded-0 form-control"
                                            aria-label="category selection"
                                            id="categorySelect"
                                            onChange={handleCategoryChange}
                                        >
                                            <option value="All Categories">All Categories</option>
                                            <option value="Design & Development">Design & Development</option>
                                            <option value="Customer Marketing & Sales">Customer Marketing & Sales</option>
                                            <option value="Business Marketing">Businesss Marketing</option>
                                        </select>
                                        <label for="categorySelect">Category</label>
                                    </div>
                                </div>

                                <button type="button" className="btn btn-primary rounded-0">
                                    Search
                                </button>

                            </form>
                        </div>
                    </div>
                </div>


            </header>

            <div className="wrapper">
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
        </>
    )
}

export default JobList;