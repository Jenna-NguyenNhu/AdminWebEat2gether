import { CCard, CCol, CRow } from "@coreui/react";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import { Api } from "./../../api/api";
import Loader from "./../../helper/loader";
import { Link } from "react-router-dom";

const TextField = styled.input`
  height: 32px;
  width: 250px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;
  border: 3px solid #bbbff5;
  &:hover {
    cursor: pointer;
  }
`;
const FilterComponent = ({ filterText, onFilter }) => (
  <>
    <TextField
      id="search"
      className=" wrap searchTerm"
      type="text"
      placeholder="What are you looking for?"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
  </>
);

const columns = [
  {
    name: "Name",
    selector: "name",
  },
  {
    name: "Register date",
    selector: "registered",
  },
  {
    name: "Role",
    selector: "role",
  },
  {
    name: "Status",
    selector: "status",
  },
  {
    cell: (row) => (
      <button
        href={"users/" + row.id}
        block
        color="primary"
        className="showButton"
      >
        <Link to={"users/" + row.id} className="a">
          Show
        </Link>
      </button>
    ),
  },
];

const BasicTable = () => {
  const [filterText, setFilterText] = React.useState("");
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );
  const filteredItems = usersData.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = () => {
    setIsLoading(true);
    Api.get("users").then((response) => {
      setIsLoading(false);
      setUsersData(response.data);
    });
  };
  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <CRow>
      <CCol lg={2}></CCol>
      <CCol xl={8}>
        <CCard>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <DataTable
                title="Users List"
                columns={columns}
                data={filteredItems}
                pagination
                paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                selectableRows
              />
            </>
          )}
        </CCard>
      </CCol>
    </CRow>
  );
};
export default BasicTable;
