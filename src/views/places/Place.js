import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Api } from "./../../api/api";
const Place = ({ match }) => {
  // use history =
  const [isLoading, setIsLoading] = useState(false);
  const [place, setPlace] = useState({});
  const [id, setId] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();

    let name = e.target[0].value;
    let address = e.target[1].value;
    let body = { name: name, address: address };

    Api.post("places/" + id, body).then((response) => {
      setIsLoading(false);
      alert("Update successfully");
      // history.push("/places");
      console.log(response);
    });
  };
  const getById = () => {
    let currentId = Number(match.params.id);
    setId(currentId);
    setIsLoading(true);
    Api.getById("places", currentId).then((response) => {
      setIsLoading(false);
      setPlace(response.data);
      console.log(response);
    });
  };
  useEffect(() => {
    getById();
  }, []);

  return (
    <div className="Update">
      <div className="headerUpdate">
        <h2>Edit Place</h2>
      </div>
      <form onSubmit={(e) => submitForm(e)} className="form">
        <label>Name:</label> &emsp;
        <input
          type="text"
          name="name"
          defaultValue={place.name}
          className="editName"
        />
        <br />
        <div className="editAddress">
          <label>Address: </label>&ensp;
          <input type="text" name="address" defaultValue={place.address} />
        </div>
        <div className="buttonUpdate">
          <input type="submit" name="name" value="Update Place" />
        </div>
      </form>
    </div>
  );
};

export default withRouter(Place);
