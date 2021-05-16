import {
  CCard,
  CCardBody,
  CCol,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CRow,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "src/scss/toggle.scss";
import { Api } from "./../../../api/api";
import Loader from "./../../../helper/loader";

const AppReports = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userRsData, setUserRsData] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    setIsLoading(true);
    Api.get("reports/app").then((response) => {
      setIsLoading(false);
      setUserRsData(response.data);
    });
  };
  const columns = [
    {
      name: "Name user",
      selector: "full_name",
    },
    {
      name: "Content",
      selector: "content",
      wrap: true,
      format: (row) => `${row.content.slice(0, 500)}...`,
    },
    {
      name: "Proof",
      selector: "proof",
      cell: (row) => (
        <img width="100px" height="100px" src={row.proof} alt={row.name} />
      ),
      center: true,
    },
    {
      name: "Time",
      selector: "created_at",
      sortable: true,
      // right: true,
    },
  ];

  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CHeaderNav className="d-md-down-none mr-auto">
            <CHeaderNavItem className="px-1">
              <CHeaderNavLink to="/reportUs">Users Report</CHeaderNavLink>
            </CHeaderNavItem>
            <CHeaderNavItem className="px-1">
              <CHeaderNavLink to="/reportAs">Apps Report</CHeaderNavLink>
            </CHeaderNavItem>
          </CHeaderNav>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <CCardBody className="appR">
                <div>
                  <DataTable columns={columns} data={userRsData} />
                </div>
              </CCardBody>
            </>
          )}
        </CCard>
      </CCol>
    </CRow>
  );
};

export default AppReports;
