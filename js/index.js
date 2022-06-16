

var list = document.querySelectorAll('.list li a');
list.forEach(function (item) {
    item.addEventListener('click', (e) => {
        localStorage.setItem('urlName', e.target.classList)
    })
})


