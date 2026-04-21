document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("✨ C'EST RÉUSSI ! \n\nVotre demande a été envoyée. L'équipe de Last Summer vous contactera très vite.");
            form.reset();
        });
    }
});
