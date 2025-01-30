import {
  Package,
  MapPin,
  CheckCircle,
  Clock,
  Users,
  ChartLine,
} from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Notre démarche", href: "notre-demarche" },
  { label: "Actualités", href: "actualites" },
  { label: "Nos partenaires", href: "nos-partenaires" },
  { label: "Mon compte", href: "mon-compte" },
  { label: "Contacts", href: "contacts" },
  { label: "FAQ", href: "faq" },
];

export const donations = [
  {
    id: 1,
    place: "Supermarché",
    type: "Haricots en conserve",
    quantity: "50g",
    description:
      "5 boîtes de haricots en conserve de la marque XYZ, achetées le 01/10/2023, en très bon état et non périssables jusqu'au 01/10/2025.",
  },
  {
    id: 2,
    place: "Boulangerie",
    type: "Pain",
    quantity: "100g",
    description:
      "10 pains frais du jour, idéal pour les sandwiches et les toasts, à consommer de préférence avant le 05/10/2023.",
  },
  {
    id: 3,
    place: "Marché fermier",
    type: "Légumes frais",
    quantity: "250g",
    description:
      "Un assortiment de légumes frais, incluant des carottes, des tomates et des poivrons, récoltés le 02/10/2023.",
  },
  {
    id: 4,
    place: "Épicerie",
    type: "Riz",
    quantity: "500g",
    description:
      "Riz blanc de haute qualité, parfait pour les plats principaux et les accompagnements, acheté le 01/09/2023, non périssable jusqu'au 01/09/2024.",
  },
  {
    id: 5,
    place: "Ferme laitière",
    type: "Lait",
    quantity: "300cL",
    description:
      "Lait frais entier, idéal pour la consommation directe ou pour cuisiner, à consommer de préférence avant le 10/10/2023.",
  },
  {
    id: 6,
    place: "Verger",
    type: "Pommes",
    quantity: "200g",
    description:
      "Pommes croquantes et juteuses, parfaites pour les collations ou les desserts, récoltées le 01/10/2023.",
  },
  {
    id: 7,
    place: "Marché aux poissons",
    type: "Saumon",
    quantity: "150g",
    description:
      "Saumon frais, excellent pour les grillades ou les sushis, pêché le 03/10/2023.",
  },
  {
    id: 8,
    place: "Boucherie",
    type: "Poulet",
    quantity: "400g",
    description:
      "Poulet frais, prêt à être cuisiné pour divers plats, à consommer de préférence avant le 07/10/2023.",
  },
  {
    id: 9,
    place: "Supermarché",
    type: "Pâtes",
    quantity: "350g",
    description:
      "Pâtes de différentes formes, parfaites pour les repas rapides et faciles, achetées le 01/09/2023, non périssables jusqu'au 01/09/2024.",
  },
  {
    id: 10,
    place: "Boulangerie",
    type: "Pâtisseries",
    quantity: "120g",
    description:
      "Assortiment de pâtisseries fraîches, incluant des croissants et des pains au chocolat, à consommer de préférence avant le 05/10/2023.",
  },
  {
    id: 11,
    place: "Marché fermier",
    type: "Tomates",
    quantity: "180g",
    description:
      "Tomates mûres et juteuses, idéales pour les salades et les sauces, récoltées le 02/10/2023.",
  },
  {
    id: 12,
    place: "Épicerie",
    type: "Farine",
    quantity: "220g",
    description:
      "Farine tout usage, parfaite pour la pâtisserie et la cuisine, achetée le 01/09/2023, non périssable jusqu'au 01/09/2024.",
  },
  {
    id: 13,
    place: "Ferme laitière",
    type: "Fromage",
    quantity: "250g",
    description:
      "Fromage artisanal, idéal pour les plateaux de fromages et les recettes, à consommer de préférence avant le 15/10/2023.",
  },
  {
    id: 14,
    place: "Verger",
    type: "Oranges",
    quantity: "300g",
    description:
      "Oranges fraîches et juteuses, parfaites pour les jus et les collations, récoltées le 01/10/2023.",
  },
  {
    id: 15,
    place: "Marché aux poissons",
    type: "Thon",
    quantity: "100g",
    description:
      "Thon frais, excellent pour les sushis ou les steaks de thon, pêché le 03/10/2023.",
  },
  {
    id: 16,
    place: "Boucherie",
    type: "Bœuf",
    quantity: "450g",
    description:
      "Bœuf frais, prêt à être cuisiné pour divers plats, à consommer de préférence avant le 07/10/2023.",
  },
  {
    id: 17,
    place: "Supermarché",
    type: "Céréales",
    quantity: "280g",
    description:
      "Céréales variées, parfaites pour les petits déjeuners rapides, achetées le 01/09/2023, non périssables jusqu'au 01/09/2024.",
  },
  {
    id: 18,
    place: "Boulangerie",
    type: "Bagels",
    quantity: "80g",
    description:
      "Bagels frais, parfaits pour les petits déjeuners et les collations, à consommer de préférence avant le 05/10/2023.",
  },
  {
    id: 19,
    place: "Marché fermier",
    type: "Carottes",
    quantity: "150g",
    description:
      "Carottes croquantes, idéales pour les salades et les plats cuisinés, récoltées le 02/10/2023.",
  },
  {
    id: 20,
    place: "Épicerie",
    type: "Sucre",
    quantity: "200g",
    description:
      "Sucre blanc, parfait pour la pâtisserie et la cuisine, acheté le 01/09/2023, non périssable jusqu'au 01/09/2024.",
  },
];
export const testimonials = [
  {
    user: "Sarah Thompson",
    location: "Membre de la communauté, Brooklyn",
    image: user1,
    text: "Grâce à cette plateforme, j'ai pu partager des aliments supplémentaires avec mes voisins. C'est formidable de contribuer à réduire le gaspillage tout en me connectant avec ma communauté !",
  },
  {
    user: "Carlos Martinez",
    location: "Donateur, San Francisco",
    image: user2,
    text: "J'adore la facilité avec laquelle je peux répertorier des aliments excédentaires. C'est gratifiant de savoir que ce que je partage profite à ceux qui en ont besoin au lieu de finir à la poubelle.",
  },
  {
    user: "Amina Khan",
    location: "Bénéficiaire, Chicago",
    image: user3,
    text: "Cette plateforme m'a été d'une grande aide. En tant qu'étudiante, j'apprécie de pouvoir trouver de la nourriture à proximité, surtout quand mon budget est limité. C'est une véritable aubaine !",
  },
  {
    user: "Liam Chen",
    location: "Organisateur communautaire, Seattle",
    image: user4,
    text: "L'application de partage alimentaire aide notre communauté à réduire le gaspillage et à utiliser des aliments parfaitement comestibles. C'est incroyable de voir l'impact dans notre région.",
  },
  {
    user: "Priya Patel",
    location: "Donatrice, Austin",
    image: user5,
    text: "Cette plateforme a rendu facile le don de produits alimentaires en surplus au lieu de les jeter. C'est formidable de savoir que d'autres peuvent en profiter.",
  },
  {
    user: "Marcus Lee",
    location: "Bénévole, New York",
    image: user6,
    text: "Je suis reconnaissant de faire partie de cet effort communautaire. L'application relie les personnes dans le besoin avec celles qui ont un surplus, créant un véritable sentiment de soutien.",
  },
];

export const features = [
  {
    icon: <Package />,
    text: "Liste facile des articles",
    description:
      "Répertoriez rapidement les articles alimentaires en surplus de votre garde-manger ou de votre réfrigérateur, pour que les autres membres de votre communauté puissent voir ce qui est disponible.",
  },
  {
    icon: <MapPin />,
    text: "Disponibilité basée sur la localisation",
    description:
      "Trouvez des articles alimentaires près de chez vous grâce à la recherche et aux filtres basés sur la localisation, ce qui rend l'accès aux ressources alimentaires locales plus pratique.",
  },
  {
    icon: <CheckCircle />,
    text: "Profils de donateurs vérifiés",
    description:
      "Consultez des profils vérifiés des personnes offrant des aliments, vous assurant ainsi de savoir à qui vous vous adressez pour des échanges sûrs et fiables.",
  },
  {
    icon: <Clock />,
    text: "Mises à jour en temps réel",
    description:
      "Recevez des notifications sur les nouveaux articles alimentaires disponibles et ceux qui approchent de leur date de péremption, pour agir rapidement et éviter le gaspillage.",
  },
  {
    icon: <Users />,
    text: "Engagement communautaire",
    description:
      "Engagez-vous avec d'autres membres, partagez des conseils et rejoignez des initiatives communautaires pour réduire le gaspillage alimentaire dans votre quartier.",
  },
  {
    icon: <ChartLine />,
    text: "Tableau de bord",
    description:
      "Suivez la quantité de gaspillage alimentaire évitée et voyez votre contribution personnelle à la réduction du gaspillage dans la communauté.",
  },
];

export const checklistItems = [
  {
    title: "Répertorier facilement les aliments excédentaires",
    description:
      "Ajoutez rapidement des articles alimentaires excédentaires de votre cuisine, les rendant disponibles pour que les autres les trouvent et contribuent à réduire le gaspillage.",
  },
  {
    title: "Partager des aliments en quelques minutes",
    description:
      "Répertoriez et partagez des aliments excédentaires avec la communauté en quelques clics, contribuant instantanément à la réduction du gaspillage.",
  },
  {
    title: "Suivre votre impact alimentaire",
    description:
      "Voyez combien de gaspillage alimentaire vous avez contribué à prévenir, créant un impact positif dans votre communauté et pour l'environnement.",
  },
];

export const pricingOptions = [
  {
    title: "Gratuit",
    price: "0 $",
    features: [
      "Partage de tableau privé",
      "5 Go de stockage",
      "Analytique Web",
      "Mode privé",
    ],
  },
  {
    title: "Pro",
    price: "10 $",
    features: [
      "Partage de tableau privé",
      "10 Go de stockage",
      "Analytique Web (Avancé)",
      "Mode privé",
    ],
  },
  {
    title: "Entreprise",
    price: "200 $",
    features: [
      "Partage de tableau privé",
      "Stockage illimité",
      "Réseau haute performance",
      "Mode privé",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Commencer" },
  { href: "#", text: "Comment répertorier des aliments" },
  { href: "#", text: "Directives pour un partage sécurisé" },
  { href: "#", text: "Conseils pour réduire le gaspillage alimentaire" },
  { href: "#", text: "FAQ" },
];

export const platformLinks = [
  { href: "#", text: "Comment ça marche" },
  { href: "#", text: "Annonces alimentaires à proximité" },
  { href: "#", text: "Conseils de sécurité alimentaire" },
  { href: "#", text: "Télécharger l'application mobile" },
  { href: "#", text: "Statistiques d'impact" },
];

export const communityLinks = [
  { href: "#", text: "Opportunités de bénévolat" },
  { href: "#", text: "Collectes alimentaires locales" },
  { href: "#", text: "Événements communautaires" },
  { href: "#", text: "Histoires de réussite" },
  { href: "#", text: "Rejoignez notre communauté" },
];
