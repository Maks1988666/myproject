window.addEventListener("DOMContentLoaded", function(event) {
    const langElement = document.querySelector('.lang-chooser__curent')
    const langElementOther = document.querySelector('.lang-chooser__other')

    langElement.addEventListener('click', () => {
        langElementOther.classList.toggle('open')
    })
});