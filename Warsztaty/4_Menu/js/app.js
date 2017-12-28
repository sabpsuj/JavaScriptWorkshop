document.addEventListener("DOMContentLoaded", function () {
    console.log('Działa!');

    var mainList = document.querySelectorAll('.nav>ul>li');
    console.log(mainList);

    for(var i=0; i<mainList.length; i++){
        mainList[i].addEventListener('mouseover', function (event) {
            if(this.children.length > null){
                this.firstElementChild.style.display = "block";
            }
        });
        mainList[i].addEventListener('mouseout', function (event) {
            if(this.children.length > null){
                this.firstElementChild.style.display = "none";
            }
        });
    };





});