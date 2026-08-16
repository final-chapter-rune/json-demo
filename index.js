async function init() {
    const response = await fetch('data.json');
    const data = await response.json();

    const cards = document.querySelectorAll('.card');

    const buttons = document.querySelectorAll('.switcher button');

    const labels = {
        daily: "Yesterday",
        weekly: 'Last Week',
        monthly: 'Last Month'
    };

    function render(timeframe) {
        cards.forEach((card, index) => {
            const activity = data[index];
            card.querySelector('.card-hours').textContent =
                `${activity.timeframes[timeframe].current}hrs`;
            card.querySelector('.card-previous').textContent =
                `${labels[timeframe]} - ${activity.timeframes[timeframe].previous}hrs`;
        });
    }

    buttons[0].classList.add('active');

    buttons.forEach(button => {
        button.addEventListener('click', ()=> {
            const timeframe = button.textContent.toLowerCase();
            buttons.forEach(button => {
                button.classList.remove('active');

            })
            button.classList.add('active');
            render(timeframe);
        })
    })

}

init();

