# Zoo Arcadia

Bienvenue sur le projet Zoo Arcadia. Ce projet est un site web qui utilise Bootstrap pour le style, un système de routage personnalisé pour naviguer entre les pages, et du SCSS pour les styles personnalisés.

## Structure du projet

Voici la structure du projet :
# Installation
1. git clone https://github.com/kevin43-sys/ecf_studi.git
 
2. Installez les dépendances :
    npm install

3. Installation Bootstrap
    npm i bootstrap@5.3.3
    spécifier dans le fichier `index.html` la ligne de code :
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">

## Utilisation

Pour lancer le projet, ouvrez le fichier `index.html` dans votre navigateur.
Il faut avoir extension php server pour le lancer


## Routage

Le système de routage est défini dans le dossier `Router`. Les routes sont configurées dans le fichier [Router/allRoutes.js](Router/allRoutes.js) et gérées par le fichier [Router/router.js](Router/router.js).

## Exemple de route

```javascript
new Route("/savane", "Savane", "/pages/habitats/savane.html", []);
```

## Scss

## Exemple de Scss

"
@import url("/node_modules/bootstrap-icons/font/bootstrap-icons.css");
@import 'custom';
body {
  background-color: #f8f9fa;
}

.navbar {
  background-color: #343a40;
}
"
## Pour les couleurs

_custom.scss

$primary: #0c4691;
$secondary: #B6AC97;
$dark: #346812;
$black: #242922;
$white: #F4F4F4;
$brown: #1a9320;
$green: #179933;

$font-family-sans-serif: "Montserrat", sans-serif !default;

@import "../node_modules/bootstrap/scss/bootstrap";