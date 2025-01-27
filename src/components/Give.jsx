import React, { useState, useContext } from "react";
import DonationContext from "../contexts/DonationsContext";

const Give = () => {
  const { addDonation } = useContext(DonationContext);

  const [donation, setDonation] = useState({
    type: "",
    place: "",
    quantity: "",
    unit: "g",
    description: "",
    location: { lat: null, lon: null }, // Nouveau champ pour les coordonnées
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const checkAddressValidity = async (address) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          address
        )}&format=json&addressdetails=1`
      );
      const data = await response.json();

      if (data.length === 0 || !data[0].address) {
        throw new Error("Adresse non valide ou inexistante");
      }

      const addressDetails = data[0].address;

      if (
        (addressDetails.town &&
          !address.toLowerCase().includes(addressDetails.town.toLowerCase())) ||
        (addressDetails.road &&
          !address.toLowerCase().includes(addressDetails.road.toLowerCase()))
      ) {
        throw new Error(
          "Des informations non fournies par l'utilisateur ont été ajoutées."
        );
      }

      if (
        !addressDetails.road ||
        !addressDetails.town ||
        !addressDetails.country
      ) {
        throw new Error("Adresse trop vague ou incorrecte");
      }

      // Extraire latitude et longitude
      const { lat, lon } = data[0];
      return { isValid: true, lat, lon };
    } catch (err) {
      setError(err.message);
      return { isValid: false, lat: null, lon: null };
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonation((prevDonation) => ({
      ...prevDonation,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!donation.type || !donation.place || !donation.quantity) {
      alert("Tous les champs sont obligatoires.");
      return;
    }

    if (isNaN(donation.quantity) || donation.quantity <= 0) {
      alert("La quantité doit être un nombre positif.");
      return;
    }

    setLoading(true);

    const { isValid, lat, lon } = await checkAddressValidity(donation.place);
    if (!isValid) {
      setLoading(false);
      setError("L'adresse fournie est invalide ou incorrecte.");
      return;
    }

    setError(null);

    addDonation({
      ...donation,
      latitude: lat,
      longitude: lon,
    });
    setSuccessMessage("Adresse valide et donation ajoutée avec succès !");
    setDonation({
      type: "",
      place: "",
      quantity: "",
      unit: "g",
      description: "",
      location: { lat: null, lon: null },
    });

    setLoading(false);

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl text-center font-semibold tracking-wide">
        Je veux aussi{" "}
        <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
          Donner
        </span>
      </h1>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="flex flex-col">
          <label htmlFor="type" className="font-medium">
            Votre produit
          </label>
          <input
            type="text"
            id="type"
            name="type"
            value={donation.type}
            onChange={handleChange}
            className="border border-gray-400 p-2 rounded"
            placeholder="Exemple : Fruits, légumes, etc."
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="place" className="font-medium">
            Lieu
          </label>
          <input
            type="text"
            id="place"
            name="place"
            value={donation.place}
            onChange={handleChange}
            className="border border-gray-400 p-2 rounded"
            placeholder="Exemple : Paris"
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="quantity" className="font-medium">
            Quantité
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={donation.quantity}
              onChange={handleChange}
              className="border border-gray-400 p-2 rounded w-1/2"
              placeholder="Exemple : 10"
              required
              min="1"
            />
            <select
              name="unit"
              value={donation.unit}
              onChange={handleChange}
              className="border border-gray-400 p-2 rounded"
            >
              <option value="g">g</option>
              <option value="kg">kg</option>
              <option value="L">L</option>
              <option value="mL">mL</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="font-medium">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={donation.description}
            onChange={handleChange}
            className="border border-gray-400 p-2 rounded"
            placeholder="Exemple : Pommes bio"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-500 text-white py-2 rounded"
        >
          {loading ? "Enregistrement..." : "Donner"}
        </button>

        {successMessage && (
          <p className="text-green-500 text-sm">{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default Give;
