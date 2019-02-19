const player = {}

player.container = document.querySelector('.player_background')
player.video = player.container.querySelector('video')
player.play = player.container.querySelector('.player_controls img.play_icon')
player.pause = player.container.querySelector('.player_controls img.pause_icon')
player.bar = player.container.querySelector('.bar')
player.progressing_bar = player.container.querySelector('.player_controls .bar .progressing_bar')
player.previous = player.container.querySelector('.before_icon')
player.next = player.container.querySelector('.after_icon')


/*********
Play / Pause
*********/

player.play.addEventListener("click", () =>
{
    player.video.play()
    player.play.style.display = "none"
    player.pause.style.display = "inline"
})

player.pause.addEventListener("click", () =>
{
    player.video.pause()
    player.pause.style.display = "none"
    player.play.style.display = "inline"
})

/*********
Progressing_bar
*********/

player.bar.addEventListener('click', (_event) =>
{
    const mouseX = _event.clientX
    const bounding = player.bar.getBoundingClientRect()
    const ratio = (mouseX - bounding.left) / bounding.width
    const time = ratio * player.video.duration

    player.video.currentTime = time
})

const loop = () =>
{
    window.requestAnimationFrame(loop) 
    const ratio = (player.video.currentTime / player.video.duration) * 100
    player.progressing_bar.style.width = ratio + "%"
}

loop()

/*********
Next / previous buttons
*********/


player.next.addEventListener("click", () =>
{
    player.video.currentTime = player.video.currentTime + 15
})

player.previous.addEventListener("click", () =>
{
    player.video.currentTime = player.video.currentTime - 15
})


/*********
Volume
*********/
