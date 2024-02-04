
//left - 37
//right - 39
// up - 38
// down - 40


// document.addEventListener('keydown', (e) => {
    
    // if(e.key == 'ArrowLeft'){
    //     console.log('Left')
    //     pacManEl.classList.remove('right')
    //     pacManEl.classList.add('left')
    // }else if(e.key == 'ArrowRight'){
    //     console.log('Right')
    //     pacManEl.classList.remove('left')
    //     pacManEl.classList.add('right')
    // }else if(e.key == 'ArrowUp'){
    //     console.log('Up')
    // }else if(e.key == 'ArrowDown'){
    //     console.log('down')
    // }
// })

// reference
// 1 = <div class="wall"></div> 
// 2 = <div class="coin"></div> 
// 3 = <div class="ground"></div>
// 7 = <div class="pacman"></div>

// We'll be using arrays of arrays such that first element of the array will be representing the first row

var map = [ 
    [1,1,1,1,1,1,1,1,1,1,1,1,1], 
    [1,2,2,2,2,2,1,2,2,2,2,2,1], 
    [1,2,1,1,1,2,1,2,1,1,1,2,1], 
    [1,2,1,2,2,2,2,2,2,2,1,2,1], 
    [1,2,2,2,1,1,7,1,1,2,2,2,1], 
    [1,2,1,2,2,2,2,2,2,2,1,2,1], 
    [1,2,1,1,2,2,1,2,2,1,1,2,1], 
    [1,2,2,2,2,2,1,2,2,2,2,2,1], 
    [1,1,1,1,1,1,1,1,1,1,1,1,1]
]

let backgroundImage 

//we don't want our pacman to go through this entire range to find them so we'll create another
//variable called pacman that will be an object containing the correct position!
var pacman = {
    x:6,
    y:4    //y is top to bottom where it is
}

var score = 0

//so every time we'll move the pacman we'll be using this information to move it
// console.log(document)

// function here is set of some instructions

function drawWorld(add){
    document.getElementById('world').innerHTML = ''
    for(let y=0 ; y<map.length; y=y+1){
        // console.log(map[y])
        for(let x=0 ; x<map[y].length ; x++){
            // console.log(map[y][x])
            if(map[y][x] === 1){
                document.getElementById('world').innerHTML += '<div class="wall"></div>'
            }
            else if(map[y][x] === 2){
                document.getElementById('world').innerHTML += '<div class="coin"></div>'
            }
            else if(map[y][x] === 3){
                document.getElementById('world').innerHTML += '<div class="ground"></div>'
            }
            else if(map[y][x] === 7){
                document.getElementById('world').innerHTML += `<div class="pacman ${add}" id="pacman"></div>`
            }
        }
        document.getElementById('world').innerHTML += '<br>'
    }
}

drawWorld()//invoking the function

document.addEventListener('DOMContentLoaded', () => {
    let pacManEl = document.getElementById('pacman')
    
    if(pacManEl){
        document.onkeydown = (e) => {
            // pacManEl.classList.remove('left', 'right', 'up', 'down');
            // console.log(e)
            if(e.key == 'ArrowLeft'){
                console.log('Left key pressed');
                //left
                if(map[pacman.y][pacman.x - 1] !== 1){
                    if(map[pacman.y][pacman.x - 1] === 2){
                        score = score + 10
                        scoreboard()
                    }
                    map[pacman.y][pacman.x] = 3
                    pacman.x = pacman.x - 1
                    map[pacman.y][pacman.x] = 7
                    drawWorld('left')
                    // backgroundImage = "url('./assets/pac-man-left.jpeg')"
                }
                // pacManEl.classList.remove('right');
                // pacManEl.classList.add('left');
            }
            else if(e.key == 'ArrowRight'){
                //right
                console.log('Right key pressed');
                if(map[pacman.y][pacman.x + 1] !== 1){
                    if(map[pacman.y][pacman.x + 1] === 2){
                        score = score + 10
                        scoreboard()
                    }
                    map[pacman.y][pacman.x] = 3
                    pacman.x = pacman.x + 1
                    map[pacman.y][pacman.x] = 7
                    drawWorld('right')
                    
                    // backgroundImage = "url('./assets/pac-man-right.jpeg')"
                }
                // pacManEl.classList.remove('left');
                // pacManEl.classList.add('right');
            }
            else if(e.key == 'ArrowUp'){
                console.log(pacManEl)
                // up
                console.log('Up key pressed');
                if(map[pacman.y-1][pacman.x] !== 1){
                    if(map[pacman.y - 1][pacman.x] === 2){
                        score = score + 10
                        scoreboard()
                    }
                    map[pacman.y][pacman.x] = 3
                    pacman.y = pacman.y - 1
                    map[pacman.y][pacman.x] = 7
                    // pacManEl.classList.remove('pacman');
                    // pacManEl.classList.add('up');
                    drawWorld('up')
                    // backgroundImage = "url('./assets/pac-man-up.jpeg')"
                    
                }
                
                console.log()
            }
            else if(e.key == 'ArrowDown'){
               // down
               console.log('Down key pressed');
               if(map[pacman.y+1][pacman.x] !== 1){
                if(map[pacman.y + 1][pacman.x] === 2){
                    score = score + 10
                    scoreboard()
                }   
                     map[pacman.y][pacman.x] = 3
                    pacman.y = pacman.y + 1
                    map[pacman.y][pacman.x] = 7
                    drawWorld('down')  
                // backgroundImage = "url('./assets/pac-man-down.jpeg')"
                // pacManEl.classList.remove('up');
                // pacManEl.classList.add('down');
            }
          }
            // pacManEl.style.background = backgroundImage
            // console.log(e.key)
        }
        
    }else {
        console.error("Element with ID 'pacman' not found");
    }
})



function scoreboard(){
    document.getElementById('score').textContent = `CURRENT SCORE: ${score}`
    if(score === 540){
        document.getElementById('score').textContent = 'YOU WON!'
    }
}

