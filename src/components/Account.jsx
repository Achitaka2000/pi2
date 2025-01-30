import React, { useState, useContext } from "react";
import { Line, Pie } from "react-chartjs-2";
import DonationsContext from "../contexts/DonationsContext";

import Chart from "chart.js/auto";

const Account = () => {
  const [donation, setDonation] = useState({ amount: "", date: "" });
  const { co2Saved, donations } = useContext(DonationsContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonation((prevDonation) => ({
      ...prevDonation,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(donation);
  };

  // Mock Data
  const savedDonations = [
    { id: 1, amount: 20, date: "2023-10-01" },
    { id: 2, amount: 15, date: "2023-09-25" },
    { id: 3, amount: 10, date: "2023-09-20" },
  ];

  const myDonations = [
    { id: 1, amount: 50, date: "2023-10-01" },
    { id: 2, amount: 30, date: "2023-09-25" },
    { id: 3, amount: 25, date: "2023-09-20" },
  ];

  const stats = {
    kgSaved: 120,
    transactions: 12,
    co2Equivalent: 240,
  };

  // Chart Data
  const donationData = {
    labels: myDonations.map((donation) => donation.date),
    datasets: [
      {
        label: "My Donations (€)",
        data: myDonations.map((donation) => donation.amount),
        fill: false,
        backgroundColor: "rgba(75, 192, 75, 0.4)",
        borderColor: "rgba(75, 192, 75, 1)",
        tension: 0.4,
      },
    ],
  };

  const co2Data = {
    labels: ["CO2 Saved", "CO2 Remaining"],
    datasets: [
      {
        label: "CO2 Impact",
        data: [stats.co2Equivalent, 1000 - stats.co2Equivalent],
        backgroundColor: ["rgba(75, 192, 75, 0.6)", "rgba(192, 75, 75, 0.6)"],
        borderColor: ["rgba(75, 192, 75, 1)", "rgba(192, 75, 75, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-semibold text-center mb-6">Mon Compte</h1>

      {/* Statistics Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Statistiques</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-100 p-4 rounded-md text-center shadow">
            <p className="text-lg font-medium">Kg Sauvés</p>
            <p className="text-3xl font-bold">{stats.kgSaved}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-md text-center shadow">
            <p className="text-lg font-medium">Transactions</p>
            <p className="text-3xl font-bold">{stats.transactions}</p>
          </div>
          <div className="bg-orange-100 p-4 rounded-md text-center shadow">
            <p className="text-lg font-medium">CO2 Équivalent (kg)</p>
            <p className="text-3xl font-bold">{co2Saved.toFixed(3)}</p>
          </div>
        </div>
      </section>

      {/* Donations List Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dons Sauvegardés</h2>
        <ul className="list-disc pl-6">
          {savedDonations.map((donation) => (
            <li key={donation.id}>
              <strong>{donation.date}:</strong> {donation.amount}€
            </li>
          ))}
        </ul>
      </section>

      {/* Graphs Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Visualisation des Dons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-4 shadow rounded-md">
            <h3 className="text-lg font-medium mb-2">Dons au Fil du Temps</h3>
            <Line data={donationData} />
          </div>
          <div className="bg-white p-4 shadow rounded-md">
            <h3 className="text-lg font-medium mb-2">Impact CO2</h3>
            <Pie data={co2Data} />
          </div>
        </div>
      </section>

      {/* Add Donation Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ajouter un Don</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-6 rounded-md shadow space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Montant (€)
            </label>
            <input
              type="number"
              name="amount"
              value={donation.amount}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={donation.date}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
          >
            Ajouter
          </button>
        </form>
      </section>
    </div>
  );
};

export default Account;
