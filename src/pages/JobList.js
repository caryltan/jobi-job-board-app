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

    return (
        <>
            <header class="bg-brand-light">
                <NavBar />
                <div>
                    <h1>Job listing</h1>
                    <p>We deliver blazing fast & striking work solutions</p>
                </div>
                <div class="col-8 pb-5 pt-3">
                    <div class="input-group mb-3">
                        <div class="col-4">
                            <input type="text" class="form-control" aria-label="Text input with dropdown button" />
                        </div>
                        <div class="dropdown col-4">
                            <button class="btn btn-white dropdown-toggle w-100" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Design & Development</a></li>
                                <li><a class="dropdown-item" href="#">Customer Marketing & Sales</a></li>
                                <li><a class="dropdown-item" href="#">Business Marketing</a></li>
                            </ul>
                        </div>
                        <button type="button" class="btn btn-primary col-2">
                            Search
                        </button>
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