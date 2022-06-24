const id = document.getElementById('id')

function debounce(callback, timer) {
    let flag = false

    return function(...args) {
        if (flag) clearTimeout(flag)
        flag = setTimeout(() => {
            callback(...args)
            flag = false
        }, timer)
    }
}

id.addEventListener('keyup', debounce((e) => {console.log(e.target.value)}, 1000))