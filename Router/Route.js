export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}

/*
[] - tout le monde peut y accéder
 [disconnected] ->  Réserver aux utilsateurs déconnectés
 ["client"] -> Réserver aux utilsateurs  avec le role client
  ["admin"] -> Réserver aux utilsateurs  avec le role admin
  ["client", "admin"] -> Réserver aux utilsateurs  avec le role client ou admin