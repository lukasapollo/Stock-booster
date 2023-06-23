const darkModeButton = document.querySelector('#modeColor')

darkModeButton.addEventListener("change", () => {
    const _html = document.querySelector("html")
    _html.classList.toggle("darkModeColor")
})