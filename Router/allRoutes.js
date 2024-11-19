import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La Galerie", "/pages/galerie.html", []),
    new Route("/contact", "Contact", "/pages/contact.html", []),
    new Route("/habitats", "Habitats", "/pages/habitats.html", []),
    new Route("/horaires", "Horaires", "/pages/horaires.html", []),
    new Route("/services", "Services", "/pages/services.html", []),
    new Route("/votreavis", "Votreavis", "/pages/votreavis.html", []),
    new Route("/account", "Account", "/pages/account.html", []),
    new Route("/editpassword", "Editpassword", "/pages/editpassword.html", []),
    new Route("/signup", "Signup", "/pages/signup.html", []),
    new Route("/signin", "Signin", "/pages/signin.html", []),
    new Route("/animaux", "Animaux", "/pages/animaux.html", []),
    new Route("/savane", "Savane", "/pages/habitats/savane.html", []),
    new Route("/jungle", "Jungle", "/pages/habitats/jungle.html", []),
    new Route("/marais", "Marais", "/pages/habitats/marais.html", []),
    new Route("/marais", "Marais", "/pages/habitats/marais.html", []),
    new Route("/lion", "Lion", "/pages/habitats/savane/lion.html", []),
    new Route("/elephant", "Elephant", "/pages/habitats/savane/elephant.html", []),
    new Route("/girafe", "Girafe", "/pages/habitats/savane/girafe.html", []),
    new Route("/jaguar", "Jaguar", "/pages/habitats/jungle/jaguar.html", []),
    new Route("/gorille", "Gorrile", "/pages/habitats/jungle/gorille.html", []),
    new Route("/paresseux", "Paresseux", "/pages/habitats/jungle/paresseux.html", []),
    new Route("/crocodile", "Crocodile", "/pages/habitats/marais/crocodile.html", []),
    new Route("/hippopotame", "Hippopotame", "/pages/habitats/marais/hippopotame.html", []),
    new Route("/loutre", "Loutre", "/pages/habitats/marais/loutre.html", []),

];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";