// On attend que la page soit complètement chargée
document.addEventListener('DOMContentLoaded', function() {
    
    // On récupère notre formulaire et la boîte qui le contient
    const formulaire = document.getElementById('formReservation');
    const conteneur = document.getElementById('conteneurFormulaire');

    // On vérifie qu'on est bien sur la page qui contient le formulaire
    if (formulaire) {
        
        // On écoute le moment où l'utilisateur clique sur "Confirmer"
        formulaire.addEventListener('submit', function(evenement) {
            
            // 1. On bloque l'envoi classique qui recharge la page
            evenement.preventDefault(); 

            // 2. On crée notre message de succès avec un joli style
            const messageSucces = `
                <div style="text-align: center; padding: 2rem 0; animation: fadeIn 0.5s ease-in;">
                    <h2 style="color: #E67E22; font-family: 'Playfair Display', serif; font-size: 2rem; margin-bottom: 1rem;">
                        Réservation Confirmée !
                    </h2>
                    <p style="color: #2C3E50; font-size: 1.1rem; line-height: 1.6;">
                        Merci beaucoup ! Nous avons bien reçu votre demande.<br>
                        Nous vous attendons avec impatience pour vous faire découvrir les saveurs du Sine Saloum.
                    </p>
                </div>
            `;

            // 3. On remplace tout le contenu de la boîte par ce message
            conteneur.innerHTML = messageSucces;
        });
    }
});
