// // status: (item) => (
// //   <label className="switch">
// //     <input
// //       type="checkbox"
// //       checked={item.time === 2 ? true : false}
// //       disabled={true}
// //     />
// //     <span className="slider round"></span>
// //   </label>
// // ),
// // checked={item.time === 2 ? true : false}
// // disabled={true}
// <div>
//   <DataTable
//     // title="Arnold Movies"
//     columns={columns}
//     data={reportUsData}
//   />
// </div>;
// import {
//   CCard,
//   CCardBody,
//   CCol,
//   CDataTable,
//   CHeaderNav,
//   CHeaderNavItem,
//   CHeaderNavLink,
//   CRow,
//   CButton,
//   CImg,
// } from "@coreui/react";
// import React, { useEffect, useState } from "react";
// import { useHistory, useLocation } from "react-router-dom";
// import { Api } from "./../../../api/api";
// import Loader from "./../../../helper/loader";
// import Sort from "./../../../image/sort.jpg";
// import DataTable from "react-data-table-component";
// //fields={["full_name", "time", "status"]}
// const columns = [
//   {
//     name: "Full name",
//     selector: "full_name",
//   },
//   {
//     name: "Time",
//     selector: "time",
//     sortable: true,
//   },
//   {
//     name: "Status",
//     selector: "status",
//     // cell: (row) => (
//     //   <img width="100px" height="100px" src={row.proof} alt={row.name} />
//     // ),
//     // sortable: true,
//   },
// ];

// const UserReports = () => {
//   // const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
//   // const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
//   // const [page, setPage] = useState(currentPage);

//   const [reportUsData, setReportUsData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     getUsers();
//   }, []);

//   const getUsers = () => {
//     setIsLoading(true);
//     Api.get("users/reports").then((response) => {
//       setIsLoading(false);
//       setReportUsData(response.data);
//     });
//   };

//   return (
//     <CRow>
//       <CCol xl={12}>
//         <CCard>
//           <CHeaderNav className="d-md-down-none mr-auto">
//             <CHeaderNavItem className="px-1">
//               <CHeaderNavLink to="/reportUs">Users Reports</CHeaderNavLink>
//             </CHeaderNavItem>
//             <CHeaderNavItem className="px-1">
//               <CHeaderNavLink to="/reportAs">App Reports</CHeaderNavLink>
//             </CHeaderNavItem>
//           </CHeaderNav>
//           <CButton className="button">
//             <CImg src={Sort} />
//           </CButton>
//           {isLoading ? (
//             <Loader />
//           ) : (
//             <>
//               <CCardBody className="userR">
//                 <div>
//                   <DataTable
//                     // title="Arnold Movies"
//                     columns={columns}
//                     data={reportUsData}
//                   />
//                 </div>
//               </CCardBody>
//             </>
//           )}
//         </CCard>
//       </CCol>
//     </CRow>
//   );
// };

// export default UserReports;

// scopedSlots={{
//     status: (item) => (
//       <label className="switch">
//         <input
//           type="checkbox"
//           checked={item.time === 2 ? true : false}
//           disabled={true}
//         />
//         <span className="slider round"></span>
//       </label>
//     ),
//   }}
