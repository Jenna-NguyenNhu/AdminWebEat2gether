import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CImg,
  CRow,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Api } from "./../../../api/api";
import Loader from "./../../../helper/loader";
import { Link } from "react-router-dom";

const UserReports = () => {
  const [reportUsData, setReportUsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const columns = [
    {
      name: "Full name",
      selector: "full_name",
    },
    {
      name: "Time",
      selector: "time",
      sortable: true,
    },
    {
      name: "Status",
      cell: (row, key) => (
        <label className="switch">
          <input
            type="checkbox"
            defaultChecked={row.status === "Banned" ? true : false}
            onClick={(e) => switchToggle(key, row.status)}
          />
          <span className="slider round"></span>
        </label>
      ),
    },
    {
      cell: (row) => (
        <button
          href={"reportUs/" + row.id}
          block
          color="primary"
          className="showButton"
        >
          <Link to={"reportUs/" + row.id} className="a">
            Show
          </Link>
        </button>
      ),
    },
  ];

  useEffect(() => {
    getUsers();
  }, []);

  const switchToggle = (key, status) => {
    // API
    console.log(key, status);
  };

  const getUsers = () => {
    setIsLoading(true);
    Api.get("users/reports").then((response) => {
      setIsLoading(false);
      setReportUsData(response.data);
    });
  };
  // const condition = () => {
  //   // var checkbox
  //   if (([type = "checkbox"] = checked)) {
  //     // status: {"activity" => "block"};
  //   }
  // };

  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CHeaderNav className="d-md-down-none mr-auto">
            <CHeaderNavItem className="px-1">
              <CHeaderNavLink to="/reportUs">Users Reports</CHeaderNavLink>
            </CHeaderNavItem>
            <CHeaderNavItem className="px-1">
              <CHeaderNavLink to="/reportAs">App Reports</CHeaderNavLink>
            </CHeaderNavItem>
          </CHeaderNav>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <CCardBody className="userR">
                <div>
                  <DataTable columns={columns} data={reportUsData} />
                </div>
              </CCardBody>
            </>
          )}
        </CCard>
      </CCol>
    </CRow>
  );
};

export default UserReports;
