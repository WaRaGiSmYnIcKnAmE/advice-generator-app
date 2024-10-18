update_advice();

const refresh_button = document.getElementById('refresh-button');

refresh_button.addEventListener('click', () => update_advice());

function update_advice() {
    fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {
        let advice_info = data['slip'];
        document.getElementById('advice-number').innerText = advice_info['id'];
        document.getElementById('advice-text').innerText = advice_info['advice']
    })
}