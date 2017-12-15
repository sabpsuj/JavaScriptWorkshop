document.addEventListener("DOMContentLoaded", function () {
    
        var next = document.getElementById('nextPicture');
        var prev = document.getElementById('prevPicture');
        var slider = document.querySelectorAll('li.slider');
        var index = 0;
    
        console.log(next);
        console.log(prev);
        console.log(slider);
        console.log(index);
    
        slider[index].classList.add('visible');
    
        next.addEventListener('click', function(){
            slider[index].classList.remove('visible');
            index++;
            if(index>=slider.length){
                index = slider.length -1;
            }
            slider[index].classList.add('visible');
        })
        prev.addEventListener('click', function(){
            slider[index].classList.remove('visible');
            index--;
            if(index<0){
                index = index + 1;
            }
            slider[index].classList.add('visible');
        })
    
    })