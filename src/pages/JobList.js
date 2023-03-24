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
    
        //   for (let key in dataResponse) {
        //     newState.push({ key: key, poll: dataResponse[key] });
        //   }
        //   setJobListData(newState);
          console.log(dataResponse)
        }
        )
      }, []);

      
    return (
        <>
        <NavBar />
        </>
    )
}

export default JobList;