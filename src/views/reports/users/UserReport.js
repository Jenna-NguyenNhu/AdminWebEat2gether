import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { Api } from "./../../../api/api";
import Loader from "./../../../helper/loader";

const UserReport = ({ match }) => {
  const [userRData, setUserRData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let userRId = match.params.id;

  const getUserById = () => {
    setIsLoading(true);
    Api.getById(`users/reports`, userRId).then((response) => {
      setIsLoading(false);
      setUserRData(response.data);
      console.log(userRData.reports);
    });
  };

  useEffect(() => {
    getUserById();
  }, []);

  //

  return (
    <CRow>
      <CCol lg={2}></CCol>
      <CCol lg={8}>
        <CCard>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <CCardHeader>User Report id: {userRId}</CCardHeader>
              <CCardBody>
                <table className="table table-striped table-hover">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Name : </strong>
                        {userRData.full_name}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Time : </strong>
                        {userRData.time}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Status: </strong>
                        {userRData.status}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CCardBody>
            </>
          )}
        </CCard>
        <table>
          {userRData.reports ? (
            <div className="container">
              {userRData.reports.map((item, key) => (
                <div key={key} className="thumbnail">
                  <div className="caption">
                    <p className="if">
                      <p>{item.content}</p>
                      <img src={item.proof} width="100px" height="100px" />
                      <p>{item.created_at}</p>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </table>
      </CCol>
    </CRow>
  );
};

export default UserReport;
