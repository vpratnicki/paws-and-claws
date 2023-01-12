import React, { useState } from "react";
import Modal from "react-modal";
import { useMutation } from "@apollo/client";
import { ADD_PET } from "../../utils/mutations";

// modal styles
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement('#yourAppElement');

const Addpet = () => {

//   let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

//   function afterOpenModal() {
//     subtitle.style.color = '#f00';
//   }

  function closeModal() {
    setIsOpen(false);
  }

  const [formState, setFormState] = useState({
    petName: "",
    petType: "",
  });

  const [addPet, { error }] = useMutation(ADD_PET);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // add pet submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPet({
        variables: {
          petName: formState.petName,
          petType: formState.petType,
        },
      });

      console.log("Pet data =" + data);

      // clear form values
      setFormState({
        petName: "",
        petType: "",
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h2>Pets</h2>
        <button onClick={openModal}>Add Pet</button>
        <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            
      <form onSubmit={handleFormSubmit} className="form">
        <div className="form-group">
          <h3>Add a Pet:</h3>
          <label htmlFor="petName">Pet Name:</label>
          <input
            placeholder="Pet Name"
            name="petName"
            type="petName"
            id="petName"
            value={formState.petName}
            onChange={handleChange}
          />
          <label htmlFor="petType">Pet Type:</label>
          <input
            placeholder="Pet Type"
            name="petType"
            type="petType"
            id="petType"
            value={formState.petType}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {error && <div>Pet add failed</div>}
      </Modal>
    </div>
  );
};

export default Addpet;
