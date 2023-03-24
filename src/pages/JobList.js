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
            <NavBar />
            <div className="row">
                {jobListData && [...jobListData].reverse().map((jobListing, index) => {
                    console.log(jobListing)
                    return (
                        <>
                            <div className="col-12 col-sm-6">
                                <div className="card border-light mx-2 my-2">
                                    <div className="card-body">
                                        <div className="card-text">
                                            <h3>{jobListing.jobListing.company}</h3>
                                            {/* <img src={Rating} alt="Rating Star 5/5" /> */}
                                            <p>"This is absolutely unique and clean and what I'm looking for. Also, the code quality is great!"</p>
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
                })
                }


            </div>
        </>
    )
}

export default JobList;