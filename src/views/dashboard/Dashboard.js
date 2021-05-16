import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CHeader,
  CRow,
} from "@coreui/react";
import React, { lazy, useEffect, useState } from "react";
import { Api } from "src/api/api.js";
import Loader from "src/helper/loader.js";

const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [placesData, setPlacesData] = useState([]);
  const getPlaces = () => {
    setIsLoading(true);
    Api.get("places").then((response) => {
      setIsLoading(false);
      setPlacesData(response.data);
    });
  };

  useEffect(() => {
    getPlaces();
  }, []);
  return (
    <div>
    <>
      <WidgetsDropdown />
      <CRow>
        <CCol xl={12}>
          <CCard className="place">
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <CHeader>Notifications {" & "} Sales</CHeader>
                <CCardBody className="notification">
                  <CDataTable
                    className="fixed"
                    items={placesData}
                    fields={[
                      { key: "name", _classes: "font-weight-bold" },
                      "Notification",
                      "Activity",
                    ]}
                    hover
                    striped
                  />
                </CCardBody>
              </>
            )}
          </CCard>
        </CCol>
      </CRow>
      <br />
    </>
    </div>
  );
};

export default Dashboard;
