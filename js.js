const all = document.getElementById("span1"),
    death = document.getElementById("span2"),
    recovered = document.getElementById("span3"),
    new_case = document.getElementById("span4");
function counter(elment, start, end, duration) {
    let current = start;
    let increment = 0;
    if (end > start) {
        increment = 1;
    } else { increment = -1 }
    let timer = setInterval(function () {
        current += increment;
        elment.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, duration);
};
counter(all, 6397150 , 6397294, 80);
counter(death, 383740, 383872, 80);
counter(recovered, 3192500, 3193304, 20);
counter(new_case, 93000, 93246, 50);
