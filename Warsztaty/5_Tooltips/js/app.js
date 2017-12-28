/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener("DOMContentLoaded", function () {
    var tooltip1 = document.querySelector('span.tooltip:first-of-type');
    var tooltip2 = document.querySelector('span.tooltip:nth-of-type(2)');
    var tooltip3 = document.querySelector('span.tooltip:last-of-type');
    var tooltipText = document.createElement('span');

    tooltip1.addEventListener('mouseover', function (event) {
        tooltip1.appendChild(tooltipText);
        tooltipText.innerText = tooltip1.dataset.text;
        tooltipText.classList.add('tooltipText');
    });
    tooltip1.addEventListener('mouseout', function (event) {
        tooltip1.removeChild(tooltipText);
    });

    tooltip2.addEventListener('mouseover', function (event) {
        tooltip2.appendChild(tooltipText);
        tooltipText.innerText = tooltip2.dataset.text;
        tooltipText.classList.add('tooltipText');
    });
    tooltip2.addEventListener('mouseout', function (event) {
        tooltip2.removeChild(tooltipText);
    });

    tooltip3.addEventListener('mouseover', function (event) {
        tooltip3.appendChild(tooltipText);
        tooltipText.innerText = tooltip3.dataset.text;
        tooltipText.classList.add('tooltipText');
    });
    tooltip3.addEventListener('mouseout', function (event) {
        tooltip3.removeChild(tooltipText);
    });
});