"use client"
import React, { useState } from 'react';
import { getJson } from 'serpapi';

const Flights = () => {
  const [departureId, setDepartureId] = useState("");
  const [arrivalId, setArrivalId] = useState("");
  const [outboundDate, setOutboundDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [currency, setCurrency] = useState("");
  const [language, setLanguage] = useState("");
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const json = await getJson({
        engine: "google_flights",
        departure_id: departureId,
        arrival_id: arrivalId,
        outbound_date: outboundDate,
        return_date: returnDate,
        currency: currency,
        hl: language,
        api_key: "0e7b5ab030a0ca3a7f829c917f12235ff7a7ceb58418382fd856caabccbfef36"
      });
      console.log(json);
      console.log(departureId);
        console.log(arrivalId);
        console.log(language)
      setError('');
    } catch (error) {
      console.error("Error fetching data:", error);
      console.log(departureId);
  console.log(arrivalId);
  console.log(language)
      setError('Failed to fetch data. Please check your inputs and try again.');
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="departureId">Departure ID</label>
        <input type="text" onChange={(e) => setDepartureId(e.target.value)} />
      </div>
      <div>
        <label htmlFor="arrivalId">Arrival ID</label>
        <input type="text" onChange={(e) => setArrivalId(e.target.value)} />
      </div>
      <div>
        <label htmlFor="outboundDate">Outbound Date</label>
        <input type="text" onChange={(e) => setOutboundDate(e.target.value)} />
      </div>
      <div>
        <label htmlFor="returnDate">Return Date</label>
        <input type="text" onChange={(e) => setReturnDate(e.target.value)} />
      </div>
      <div>
        <label htmlFor="currency">Currency</label>
        <input type="text" onChange={(e) => setCurrency(e.target.value)} />
      </div>
      <div>
        <label htmlFor="language">Language</label>
        <input type="text" onChange={(e) => setLanguage(e.target.value)} />
      </div>
      <button onClick={fetchData}>Fetch Data</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Flights;
