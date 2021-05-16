import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Api } from "./../../api/api";
import Loader from "./../../helper/loader";
import Swal from "sweetalert2";

const Places = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [placesData, setPlacesData] = useState([]);

  const getPlaces = () => {
    setIsLoading(true);
    Api.get("places").then((response) => {
      setIsLoading(false);
      setPlacesData(response.data);
    });
  };

  const deletePlace = (id) => {
    //

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
          setPlacesData(placesData.filter((place) => place.id !== id));
          Api.delete("places", id).then((response) => {
            setIsLoading(false);
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
    //
  };

  // const showDetail = () => {};

  useEffect(() => {
    getPlaces();
  }, []);

  const columns = [
    {
      name: "Name",
      selector: "name",
      // sortable: true,
    },
    {
      name: "Address",
      selector: "address",
    },

    {
      name: "Edit",
      cell: (row) => (
        <CButton
          href={"places/" + row.id}
          block
          color="primary"
          className="showButton"
        >
          <Link to={"places/" + row.id} className="a">
            Edit
          </Link>
        </CButton>
      ),
    },
    {
      name: "Delete",
      cell: (row) => (
        <CButton
          onClick={(e) => deletePlace(row.id)}
          href=""
          block
          color="danger"
          className="showButtons"
        >
          Delete
        </CButton>
      ),
    },
  ];

  return (
    //{isLoading && <div id="loader"></div>}
    <CRow>
      <CCol lg={2}></CCol>
      <CCol xl={8}>
        <CCard className="place">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {" "}
              <CCardHeader>Places</CCardHeader>
              <CCardBody className="place">
                <div>
                  <DataTable columns={columns} data={placesData} />
                </div>
              </CCardBody>
            </>
          )}
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Places;
