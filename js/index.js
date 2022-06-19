
var list = document.querySelectorAll('.list li a');
list.forEach(function (item) {

    item.addEventListener('click', (e) => {
        console.log(e.currentTarget)
        localStorage.setItem('urlName', e.currentTarget.classList)

    })
})




