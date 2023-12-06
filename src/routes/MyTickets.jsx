import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const MyTickets = () => {
  const [myTickets, setMyTickets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        const response = await axios.get(
          `${process.env.REACT_APP_GET_MY_TICKET}?userId=${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setMyTickets(response.data.myTickets); // Update according to actual response structure
      } catch (error) {
        console.error(error);
        setError("Failed to fetch ticket data");
      }
    };

    fetchTickets();
  }, []);

  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>;
  }

  if (myTickets.length === 0) {
    return <div className="container mt-4">No tickets to display.</div>;
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="container mt-4">
      <ul className="list-group">
        {myTickets.map((ticket) => (
          <li key={ticket._id} className="list-group-item">
            <h2>Product Inquired: {capitalizeFirstLetter(ticket.product)}</h2>
            <h5>Ticket Number: {ticket.ticketNumber}</h5>
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
            <p>
              <strong>Price: </strong>
              {ticket.price}
            </p>
            <p>
              <strong>Preferred Contract: </strong>
              {ticket.preferedContract}
            </p>
            <h6>
              Price and Preferred contact will appear once ticket is approved!
            </h6>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyTickets;
