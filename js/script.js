const open_btns = document.querySelectorAll('button[data-modal]')
const close_btns = document.querySelectorAll('[data-close]')
const modal = document.querySelector('.modal')

open_btns.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.add('show', 'fade')
    }
})
close_btns.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.remove('show', 'fade')
    }
})


// slider

const slides = document.querySelectorAll('.offer__slide')
const next_btn = document.querySelector('.offer__slider-next')
const prev_btn = document.querySelector('.offer__slider-prev')

let total = document.querySelector('#total')
let totalJs = slides.length
let current = document.querySelector('#current')
let currentJs = 1

let slideIndex = 0



if (totalJs) {
    total.innerHTML = totalJs
}

slideShow(slideIndex)

function slideShow(n) {

    if (n === slides.length) {
        slideIndex = 0
    }

    if (n < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach(slide => slide.classList.add('hide', 'fade'))
    slides[slideIndex].classList.remove('hide')

    if (slideIndex + 1 <= 9) {
        current.innerHTML = '0' + (slideIndex + 1)
    } else {
        current.innerHTML = slideIndex + 1
    }
}

next_btn.onclick = () => {
    slideIndex++
    slideShow(slideIndex)
}

prev_btn.onclick = () => {
    slideIndex--
    slideShow(slideIndex)
}


const tabs = document.querySelectorAll('.tabcontent')
const tabBtns = document.querySelectorAll('.tabheader__item')

let btnIndex = 0

tabs.forEach(itm => itm.classList.add("hide" ,"fade"))
    tabs[btnIndex].classList.remove('hide')
    tabBtns[btnIndex].classList.add('tabheader__item_active')

tabBtns.forEach((btn, idx) => {
        btn.onclick = () => {
            btnIndex = idx
            tabs.forEach(tab => tab.classList.add('hide'))
            tabBtns.forEach(btn => btn.classList.remove('tabheader__item_active'))
            tabs[btnIndex].classList.remove('hide')
            tabBtns[btnIndex].classList.add('tabheader__item_active')
        }
 })


 // timer
const deadline = "2024-05-09 00:00"
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();
getRemainingTime(deadline)
function getRemainingTime(endTime) {
    let day = document.querySelector("#days")
let hour = document.querySelector('#hours')
let min = document.querySelector('#minutes')
let sec = document.querySelector('#seconds')



    const t = Date.parse(endTime) - Date.parse(new Date()) 
    const days =  Math.floor((t / 1000) / 60 / 60 / 24)
    const hours =  Math.floor((t / 1000) / 60 / 60 % 24)
    const minutes =  Math.floor((t / 1000) / 60 % 60)
    const seconds =  Math.floor((t / 1000) % 60)

    return{
        t,
        days,
        hours,
        minutes,
        seconds
    }
    console.log(days, hours, minutes, seconds);

    // days.innerHTML = day
    // hours.innerHTML = hour
    // min.innerHTML = minute
    // sec.innerText = second

    

}
function setTimer(endTime, selector) {
    let t = document.getElementById(selector)
    let days = document.querySelector("#days")
    let hours = document.querySelector("#hours")
    let minutes = document.querySelector("#minutes")
    let seconds = document.querySelector("#seconds")
    let interval = setInterval(updateTimer, 1000)

    

    function updateTimer() {
        let remainingTime = getRemainingTime(endTime)
        
        
        days.innerHTML = remainingTime.days
        hours.innerHTML = remainingTime.hours
        minutes.innerHTML = remainingTime.minutes
        seconds.innerHTML = remainingTime.seconds

        if (remainingTime.t <= 0) {
            clearInterval(interval)
            days.innerHTML = 0
            hours.innerHTML = 0
            minutes.innerHTML = 0
            seconds.innerHTML = 0
            jsConfetti.addConfetti({
                emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    }).     then(() => jsConfetti.addConfetti())
        }
    }
}

setTimer(deadline, '.timer')





button.addEventListener('click', () => {
   
})