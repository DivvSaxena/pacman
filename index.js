
//left - 37
//right - 39
// up - 38
// down - 40
const pacManEl = document.getElementById('pacman')

document.addEventListener('keydown', (e) => {
    
    if(e.key == 'ArrowLeft'){
        console.log('Left')
        pacManEl.classList.remove('right')
        pacManEl.classList.add('left')
    }else if(e.key == 'ArrowRight'){
        console.log('Right')
        pacManEl.classList.remove('left')
        pacManEl.classList.add('right')
    }else if(e.key == 'ArrowUp'){
        console.log('Up')
    }else if(e.key == 'ArrowDown'){
        console.log('down')
    }
})