// <div class="fullScreen">
//     <img src="./images/wrong.png">
//     <button class="close">Close</button>
//     </div>

document.addEventListener("DOMContentLoaded", function () {
    var body = document.querySelector('body');
    var list = document.querySelectorAll('li');
    var fullScreen = document.createElement('div');
    var image = document.createElement('img');
    var newButton = document.createElement('button');
    list.forEach(function (element) {
        element.addEventListener('click', function (event) {
            body.appendChild(fullScreen);
            fullScreen.classList.add('fullScreen');
            fullScreen.appendChild(image);
            image.setAttribute("src", this.firstElementChild.getAttribute("src"));
            fullScreen.appendChild(newButton);
            newButton.innerText = 'CLOSE';
            newButton.classList.add('close');
            newButton.addEventListener('click', function (event) {
                var parent = event.target.parentElement.parentElement;
                var child = event.target.parentElement;
                parent.removeChild(child);
            });
        });
    });
});
