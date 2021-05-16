import React, { useState } from "react";

const AddPlaceForm = (props) => {
  const initialFormState = { id: null, name: "", place: "" };
  const [place, setPlace] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setPlace({ ...place, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!place.name || !place.place) return;
        props.addUser(place);
        setPlace(initialFormState);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={place.name}
        onChange={handleInputChange}
      />
      <label>Place</label>
      <input
        type="text"
        name="place"
        value={place.place}
        onChange={handleInputChange}
      />
      <button>Add new place</button>
    </form>
  );
};

export default AddPlaceForm;
