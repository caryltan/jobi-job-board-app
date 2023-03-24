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
                            <JobListCard key={index} cardInfo={jobListing}/>
                        </>
                    )
                })
                }


            </div>
        </>
    )
}

export default JobList;