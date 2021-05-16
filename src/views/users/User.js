import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { Api } from "./../../api/api";
import Loader from "./../../helper/loader";

const User = ({ match }) => {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let userId = match.params.id;

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = () => {
    setIsLoading(true);
    Api.getById(`users`, userId).then((response) => {
      setIsLoading(false);
      setUsersData(response.data);
    });
  };

  return (
    <CRow>
      <CCol lg={2}></CCol>
      <CCol lg={8}>
        <CCard>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <CCardHeader>User id: {userId}</CCardHeader>
              <CCardBody>
                <table className="table table-striped table-hover">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Full Name : </strong>
                        {usersData.full_name}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Address : </strong> {usersData.address}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Date of Birth : </strong>
                        {usersData.date_of_birth}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Role : </strong>
                        {usersData.role}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Status : </strong>
                        {usersData.status}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CCardBody>
            </>
          )}
        </CCard>
      </CCol>
    </CRow>
  );
};

export default User;
