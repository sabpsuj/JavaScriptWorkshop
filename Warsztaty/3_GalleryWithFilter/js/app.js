document.addEventListener("DOMContentLoaded", function () {

    var images = document.querySelectorAll('img');
    var hideButton = document.getElementById('hideButton');
    var showButton = document.getElementById('showButton');
    var tagInput = document.getElementById('tagInput');

    console.log(images);
    console.log(hideButton);
    console.log(showButton);
    console.log(tagInput);

    showButton.addEventListener('click', function (e) {
        var placeholderText = tagInput.value;
        images.forEach(function (element) {
            var arr = element.getAttribute('data-tag');
            var tagArr = arr.split(',');
            for (i = 0; i < tagArr.length; i++)
                if (placeholderText === tagArr[i]) {
                element.classList.remove('invisible');
            }else{
                element.classList.add('invisible');
                }
        });
    });

    hideButton.addEventListener('click', function (e) {
        var placeholderText = tagInput.value;
        images.forEach(function (element) {
            var arr = element.getAttribute('data-tag');
            var tagArr = arr.split(',');
            for (i = 0; i < tagArr.length; i++) {
                if (placeholderText === tagArr[i]) {
                    element.classList.add('invisible');
                }else{
                    element.classList.remove('invisible');
                }
            }
        });
    });

});

