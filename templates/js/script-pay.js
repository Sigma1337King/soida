const cardModal = document.getElementById('cardModal');
    const visaRadio = document.getElementById('visa');
    const closeButton = document.querySelector('.close');

    visaRadio.addEventListener('change', () => {
        if (visaRadio.checked) {
            cardModal.style.display = 'block';
        } else {
            cardModal.style.display = 'none';
        }
    });

    closeButton.addEventListener('click', () => {
        cardModal.style.display = 'none';
    });