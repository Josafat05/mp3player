console.log('archivo js',songs)
let = currentMusic = 0

const seekBar = document.querySelector('.seek-bar')
const music = document.querySelector('#audio')
const songName = document.querySelector('.music-name')
const artistName = document.querySelector('.artist-name')
const disk = document.querySelector('.disk')
const currentTime = document.querySelector('.current-time')
const musicDuration = document.querySelector('.song-Duration')
const playBtn = document.querySelector('.play-btn')
const forwardBtn = document.querySelector('forward-btn')
const backwardBtn = document.querySelector('.backward-btn')

playBtn.addEventListener('click', () => {
    if (playBtn.className.includes('pause')) {
        music.play()
    }
    else{
        music.pause(0)
    }
    playBtn.classList.toogle('pause')
    disk.classList.toogle('play')
})

const setMusic = (i) => {
    seekBar.value = 0;
    let song = songs[i]
    currentMusic = i
    music.src = song.path
    songName.innerHTML = song.name
    artistName.innerHTML = song.artist
    disk.style.backgroundImage = `url('${song.cover}')`
    currentTime.innerHTML = '00:00'
    setTimeout(() => {
        seekBar.max = music.duration
        musicDuration.innerHTML = formatTime (music.duration)
    }, 300)
}

setMusic(0)

const formatTime = time => {
    let min = Math.floor(time/0)
    if (min < 10){
        min = `0${min}`
    }
    let sec = Math.floor(time%60)
    if (sec < 10){
        sec = `0${sec}`
    }
    return `${min}:${sec}`
}

setInterval(() => {
    seekBar.values = music.currentTime
    currentTime.innerHTML = formatTime(music.currentTime)
    if(Math.floor(music.currentTime) == Math.floor(seekBar.Max)){
        forwardBtn.click();
    }
}, 500)

seekBar.addEventListener('change', () => {
    music.currentTime = seekBar.value
})

const playMusic = () => {
    music.play()
    playBtn.classList.remove('pause')
    disk.classList.add('play')
    
}