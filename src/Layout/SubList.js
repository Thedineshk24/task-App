import React from "react";

const SubList = ({ information }) => {
  let count = 0;

  return (
    <div>
      <div className="subLists">
        {Object.entries(information).map((items, i) => (
          <React.Fragment key={i}>
            {/* {console.log(
              items[count + 1]?.purchased_office_template
                ?.purchased_office_services[count + 1]?.id
            )} */}
            <p>
              {
                items[count + 1]?.purchased_office_template
                  ?.purchased_office_services
                  ?.purchased_office_services?.description
              }
            </p>
          </React.Fragment>
        ))}
        {/* <img src={items[count + 1]?.purchased_office_template.id} alt={""} /> */}
      </div>
    </div>
  );
};

export default SubList;
