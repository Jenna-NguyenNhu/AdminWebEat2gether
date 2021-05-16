import React, { useEffect, useState } from "react";
import { CWidgetDropdown, CRow, CCol } from "@coreui/react";
import "src/scss/dashboard.scss";
import { Api } from "./../../api/api";
import Loader from "./../../helper/loader";
import DataTable from "react-data-table-component";

const WidgetsDropdown = () => {
  const [userS, setUserS] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const columns = [
    {
      name: "User",
      selector: "number_of_users",
    },
  ];

  const getUserS = () => {
    setIsLoading(true);
    Api.get("gendersStatistics").then((response) => {
      setIsLoading(false);
      setUserS(response.data);
    });
  };
  useEffect(() => {
    getUserS();
  }, []);

  return (
    <CRow>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CCol lg="6">
            <CWidgetDropdown className="usersS" color="gradient-info">
              {/* <DataTable className="statistic" columns={columns} data={userS} /> */}
            </CWidgetDropdown>
          </CCol>
          <CCol sm="6" lg="6">
            <CWidgetDropdown
              className="placeS"
              color="gradient-warning"
              header="Place"
              text="214.501"
            ></CWidgetDropdown>
          </CCol>
        </>
      )}
    </CRow>
  );
};

export default WidgetsDropdown;
