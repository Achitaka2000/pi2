import React, { useState, useContext, useEffect } from "react";
import DonationsContext from "../contexts/DonationsContext";

const Main = () => {
  const { donations } = useContext(DonationsContext);
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [mapCenter, setMapCenter] = useState({
    lat: 48.8588443, // Latitude de Rueil (par exemple)
    lon: 2.2172394, // Longitude de Rueil (par exemple)
  });
  const [zoomLevel, setZoomLevel] = useState(16);

  const handleSelect = (donation) => {
    if (selectedDonation?.id === donation.id) {
      setSelectedDonation(null);
      // Restaure la position centrée si aucune donation n'est sélectionnée
      setMapCenter({ lat: 48.8588443, lon: 2.2172394 });
      setZoomLevel(16); // Reviens à un niveau de zoom par défaut
    } else {
      setSelectedDonation(donation);
      // Déplace la carte sur la donation sélectionnée
      setMapCenter({
        lat: parseFloat(donation.latitude),
        lon: parseFloat(donation.longitude),
      });
      setZoomLevel(16); // Niveau de zoom par défaut
    }
  };

  const getDonationAddress = (donation) => {
    return donation.latitude && donation.longitude
      ? `${donation.latitude}, ${donation.longitude}`
      : "Adresse non disponible";
  };

  // Vue statique pour la carte
  const staticMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=2.165%2C48.876%2C2.178%2C48.879&layer=mapnik&zoom=16`;

  // Générer l'URL de la carte dynamique
  const donationMapUrl = selectedDonation
    ? selectedDonation.latitude && selectedDonation.longitude
      ? `https://www.openstreetmap.org/export/embed.html?bbox=${
          parseFloat(selectedDonation.longitude) - 0.01
        }%2C${parseFloat(selectedDonation.latitude) - 0.01}%2C${
          parseFloat(selectedDonation.longitude) + 0.01
        }%2C${
          parseFloat(selectedDonation.latitude) + 0.01
        }&layer=mapnik&zoom=16&marker=${parseFloat(
          selectedDonation.latitude
        )}%2C${parseFloat(selectedDonation.longitude)}`
      : staticMapUrl
    : staticMapUrl;

  // Logs pour le débogage
  useEffect(() => {
    console.log("Selected Donation:", selectedDonation);
  }, [selectedDonation, donationMapUrl]);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center tracking-wide">
        Vous aussi, agissez
        <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
          {" "}
          contre le Gaspillage
        </span>
      </h1>

      <div className="flex items-start mt-6 justify-between">
        <div className="flex flex-col w-1/2 search">
          <h1 className="text-xl pb-5 font-semibold">
            Les opportunités autour de moi à ne pas manquer :
          </h1>

          <div className="donations-list mt-4 overflow-y-scroll h-80">
            {donations.map((donation) => (
              <div
                key={donation.id}
                className={`donation-item p-2 border-b border-gray-300 rounded ${
                  selectedDonation?.id === donation.id ? "bg-gray-200" : ""
                }`}
                onClick={() => handleSelect(donation)}
              >
                <div className="flex justify-between">
                  <span className="w-1/4">{donation.type}</span>
                  <span className="w-2/4 mr-5">{donation.place}</span>
                  <span className="w-1/4 text-center">
                    {donation.quantity} {donation.unit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-1/2 ml-5 p-10 map">
          {/* OpenStreetMap intégré via iframe */}
          <div className="map-container">
            <iframe
              title="OpenStreetMap"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: "0" }}
              src={donationMapUrl} // Dynamique en fonction de la donation sélectionnée
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>

          {/* Affichage de l'adresse de la donation */}
          {selectedDonation && (
            <div className="mt-4 text-center">
              <h2 className="text-xl font-semibold">
                Adresse de la donation :
              </h2>
              <p>{getDonationAddress(selectedDonation)}</p>
              <p className="pt-5">{selectedDonation.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
