// Sélection de la zone de dessin
const canvas = document.getElementById("art");
const ctx = canvas.getContext("2d");

// Fonction pour obtenir la position de la souris
function getMousePos(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

// Fonction pour dessiner lors du mouvement de la souris
function mouseMove(e) {
  const mousePos = getMousePos(e);
  ctx.lineTo(mousePos.x, mousePos.y);
  ctx.stroke();
  ctx.strokeStyle = "salmon"; // Couleur du trait
  ctx.lineWidth = 10; // Largeur du trait
}

// Gestion des événements de souris
canvas.addEventListener("mousedown", (e) => {
  e.preventDefault(); // Empêche le comportement par défaut du navigateur
  const mousePos = getMousePos(e);
  ctx.beginPath(); // Commence un nouveau chemin de dessin
  ctx.moveTo(mousePos.x, mousePos.y); // Déplace le pointeur de dessin à la position initiale

  canvas.addEventListener("mousemove", mouseMove); // Ajoute l'écouteur d'événement pour le mouvement de la souris

  canvas.addEventListener("mouseup", () => {
    // Ajoute l'écouteur d'événement pour le relâchement du clic
    canvas.removeEventListener("mousemove", mouseMove); // Supprime l'écouteur d'événement pour le mouvement de la souris
  });
});

// Réinitialisation du canvas
reset.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Efface tout le contenu du canvas
});

// Voici une explication détaillée du code :
// La première ligne sélectionne l'élément canvas avec l'ID "art" et la deuxième ligne crée un contexte de rendu 2D pour pouvoir dessiner dessus.
// La fonction getMousePos calcule la position de la souris par rapport au canvas en utilisant les coordonnées de l'événement de souris et la position du canvas dans la fenêtre du navigateur.
// La fonction mouseMove dessine une ligne depuis la dernière position de la souris jusqu'à la nouvelle position, en définissant la couleur et la largeur du trait.
// Un écouteur d'événement est ajouté pour le clic de souris sur le canvas (mousedown). Lorsque l'utilisateur clique, un nouveau chemin de dessin est commencé à la position initiale de la souris.
// Lorsque la souris est déplacée (mousemove), la fonction mouseMove est appelée pour dessiner une ligne.
// Lorsque le clic de souris est relâché (mouseup), l'écouteur d'événement pour le mouvement de la souris est supprimé, ce qui empêche de continuer à dessiner.
// Un écouteur d'événement est ajouté pour le clic sur un élément HTML avec l'ID "reset" (probablement un bouton). Lorsque cet élément est cliqué, la méthode clearRect est appelée pour effacer tout le contenu du canvas.
