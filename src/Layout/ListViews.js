import React, { useState, useEffect } from "react";

// axios
import axios from "axios";

// css
import "./ListView.css";
import SubList from "./SubList";

const ListViews = () => {
  const [information, setInformation] = useState({});

  // API URL
  const URL = process.env.REACT_APP_API;

  // fetch details
  const fetchDetails = async () => {
    // axios
    const data = await axios.get(URL);
    // destructring object
    const details = data?.data?.data?.purchased_services;

    setInformation(details);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  console.log(information);
  // count the index val of items array
  let count = 0;

  let subCount = 0;

  return (
      <div className="mainList">
        <h1>purchased services</h1>
        {Object.entries(information).map((items, i) => (
          <React.Fragment key={i}>
            {/* {
              console.log( items[2]?.purchased_office_template
                ?.purchased_office_services?.description)
            } */}
            <p>{items[count + 1]?.name}</p>
            <SubList information = {information} />
          </React.Fragment>
        ))}
      </div>
  );
};

export default ListViews;
