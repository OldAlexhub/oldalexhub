import React, { useEffect, useState } from "react";
import axios from "axios";

const Admin = () => {
  const [tickets, setTickets] = useState([]);
  const [editTicketId, setEditTicketId] = useState(null); // Track which ticket is being edited
  const [editFormData, setEditFormData] = useState({
    price: "",
    preferedContract: "",
  }); // Form data for editing

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchTickets = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_GET_ADMIN_APP, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTickets(response.data.tickets); // Assuming the response contains the tickets data
      } catch (error) {
        console.log(error);
      }
    };

    fetchTickets();
  }, []);

  const handleEdit = (ticket) => {
    setEditTicketId(ticket._id);
    setEditFormData({
      price: ticket.price || "",
      preferedContract: ticket.preferedContract || "",
    });
  };

  const handleFormChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleSave = async (ticketId) => {
    try {
      const token = localStorage.getItem("token");
      console.log(ticketId);
      await axios.patch(
        `${process.env.REACT_APP_API_EDIT_TICKET}${ticketId}`,
        editFormData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTickets(
        tickets.map((ticket) =>
          ticket._id === ticketId ? { ...ticket, ...editFormData } : ticket
        )
      );
      setEditTicketId(null); // Exit edit mode
    } catch (error) {
      console.error(error);
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="container mt-4">
      <ul className="list-group">
        {tickets.map((ticket) => (
          <li key={ticket._id} className="list-group-item">
            <h2>Ticket Number: {ticket.ticketNumber}</h2>
            <h2>Product Inquired: {capitalizeFirstLetter(ticket.product)}</h2>
            <h5>Date Inquired: {new Date(ticket.date).toLocaleDateString()}</h5>
            <p>
              <strong>Company: </strong>
              {ticket.companyName}
            </p>
            <p>
              <strong>Phone Number: </strong>
              {ticket.phoneNumber}
            </p>
            <p>
              <strong>Email: </strong>
              {ticket.email}
            </p>

            {editTicketId === ticket._id ? (
              // Input fields for editing
              <>
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={editFormData.price}
                  onChange={handleFormChange}
                />
                <input
                  type="text"
                  name="preferedContract"
                  placeholder="Preferred Contract"
                  value={editFormData.preferedContract}
                  onChange={handleFormChange}
                />
                <button onClick={() => handleSave(ticket._id)}>
                  Save Changes
                </button>
                <button onClick={() => setEditTicketId(null)}>Cancel</button>
              </>
            ) : (
              // Display ticket details
              <>
                <p>
                  <strong>Price: </strong>
                  {ticket.price}
                </p>
                <p>
                  <strong>Preferred Contract: </strong>
                  {ticket.preferedContract}
                </p>
                <button onClick={() => handleEdit(ticket)}>Edit Ticket</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
