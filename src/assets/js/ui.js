
if (document.readyState === 'complete' || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
    onReady()
} else {
    document.addEventListener('DOMContentLoaded', onReady)
}

function onReady() {
    document.querySelectorAll('.buttons-section .btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span')
            ripple.style.left = `${e.offsetX}px`
            ripple.style.top = `${e.offsetY}px`
            this.appendChild(ripple)
            setTimeout(() => {
                ripple.remove()
            }, 500)
        })
    })
}