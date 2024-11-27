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
  { label: "Fonctionnalités", href: "#" },
  { label: "Flux de travail", href: "#" },
  { label: "Tarification", href: "#" },
  { label: "Témoignages", href: "#" },
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
    title: "Consulter les annonces en toute confiance",
    description:
      "Vérifiez la disponibilité des aliments, leurs descriptions et leurs détails de péremption, afin de pouvoir choisir en toute confiance les articles qui répondent à vos besoins.",
  },
  {
    title: "Suggestions intelligentes pour réduire le gaspillage",
    description:
      "Recevez des recommandations sur les aliments que vous pourriez donner en fonction des dates de péremption, vous aidant ainsi à gérer efficacement votre garde-manger.",
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
  {
    title: "Recevez des notifications pour des aliments à proximité",
    description:
      "Recevez des alertes lorsque de nouveaux articles alimentaires sont disponibles près de chez vous, pour ne pas manquer les options fraîches de votre communauté.",
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
