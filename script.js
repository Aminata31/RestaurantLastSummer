document.addEventListener('DOMContentLoaded', () => {
    // On récupère le formulaire
    const reservationForm = document.querySelector('form');

    if (reservationForm) {
        reservationForm.addEventListener('submit', (event) => {
            // 1. On empêche le rechargement de la page
            event.preventDefault();

            // 2. On récupère le nom (optionnel, pour personnaliser le message)
            // Si tu as un champ 'nom', on peut dire "Merci [Nom] !"
            
            // 3. On crée une alerte stylisée
            alert("✨ Réservation réussie !\n\nMerci d'avoir choisi Last Summer. Nous avons bien reçu votre demande et nous vous contacterons très prochainement pour confirmer votre table au Sine-Saloum.");

            // 4. On réinitialise le formulaire (il se vide tout seul)
            reservationForm.reset();
        });
    }
});
