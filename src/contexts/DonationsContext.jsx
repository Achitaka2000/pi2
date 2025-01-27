import React, { createContext, useState, useEffect } from "react";

const DonationsContext = createContext();

export const DonationsProvider = ({ children }) => {
  const [donations, setDonations] = useState(() => {
    const savedDonations = localStorage.getItem("donations");
    return savedDonations
      ? JSON.parse(savedDonations)
      : [
          {
            id: 1,
            type: "Fruits",
            place: "Paris",
            quantity: 10,
            description: "Pommes bio",
          },
          {
            id: 2,
            type: "Légumes",
            place: "Lyon",
            quantity: 5,
            description: "Carottes fraîches",
          },
        ];
  });

  const [co2Saved, setCo2Saved] = useState(() => {
    const savedCo2 = localStorage.getItem("co2Saved");
    return savedCo2 ? JSON.parse(savedCo2) : 0;
  });

  const productCO2 = {
    lentilles: 0.58,
    poireau: 0.61,
    pomme: 0.41,
    "pain type baguette": 0.78,
    "sucre blanc": 0.75,
    fromage: 6.69,
    poulet: 4.56,
    "jus de fruit": 1.01,
    "pomme de terre": 0.71,
    oignon: 0.42,
    poire: 0.39,
    pâte: 1.98,
    "café soluble": 1.53,
    beurre: 7.94,
    porc: 6.68,
    soda: 0.53,
    "patate douce": 0.33,
    ail: 0.38,
    clémentine: 1.3,
    "huile d'olive": 1.63,
    "café moulu": 8.54,
    lait: 1.27,
    bœuf: 29,
    "eau plate": 0.32,
    fèves: 0.86,
    carotte: 0.4,
    "pêche/nectarine": 0.6,
    vinaigre: 0.96,
    "chocolat au lait/noir": 15.85,
    yaourt: 1.89,
    charcuterie: 13.6,
    vin: 1.4,
    "haricots rouges": 0.86,
    courgette: 0.5,
    abricot: 1.45,
    poivre: 9.4,
    tofu: 1.56,
    saumon: 5.55,
    "poisson blanc": 12,
    quinoa: 5.85,
    concombre: 0.51,
    banane: 0.91,
    œuf: 1.88,
    miel: 1.57,
    compote: 1.1,
    "poisson gras": 2.45,
    "petits pois": 0.72,
    "chou-fleur": 0.72,
    framboise: 1.55,
    "sauce tomate": 1.46,
    muesli: 2.55,
    "crème dessert/mousse": 2.15,
    crevettes: 20.4,
    brocoli: 0.95,
    raisin: 0.51,
    moutarde: 1.59,
    "biscuit sec": 3.59,
    rillettes: 5.89,
    poivron: 0.72,
    mangue: 4.86,
    "pain de mie": 1.55,
    "extrait de vanille": 4.38,
    "fruits de mer": 5.33,
    radis: 0.38,
    citron: 0.76,
    "huile combinée": 2.5,
    dinde: 4.56,
    champignon: 6.17,
    kiwi: 1,
    asperge: 1.64,
    orange: 0.68,
    echalote: 0.39,
    melon: 0.98,
    "haricot vert": 0.45,
    pastèque: 0.68,
    avocat: 1.55,
    riz: 2.01,
    "farine de blé": 0.79,
    céréales: 3.4,
    "pâtes industrielles": 3.07,
    "poitrine de dinde": 4.56,
  };

  useEffect(() => {
    localStorage.setItem("donations", JSON.stringify(donations));
  }, [donations]);

  useEffect(() => {
    localStorage.setItem("co2Saved", JSON.stringify(co2Saved));
  }, [co2Saved]);

  const addDonation = (newDonation) => {
    setDonations((prevDonations) => {
      const updatedDonations = [
        ...prevDonations,
        { id: prevDonations.length + 1, ...newDonation },
      ];
      return updatedDonations;
    });

    const normalizedType = newDonation.type.toLowerCase();
    const co2Index = productCO2[normalizedType] || 0;
    console.log(co2Index);

    let quantityInKg = newDonation.quantity;

    // Par exemple, si l'unité est "g" pour grammes, on divise par 1000
    if (newDonation.unit === "g") {
      quantityInKg = quantityInKg / 1000;
    }

    const co2ForDonation = co2Index * quantityInKg;

    setCo2Saved((prevCo2Saved) => prevCo2Saved + co2ForDonation);
  };

  return (
    <DonationsContext.Provider value={{ donations, addDonation, co2Saved }}>
      {children}
    </DonationsContext.Provider>
  );
};

export default DonationsContext;
