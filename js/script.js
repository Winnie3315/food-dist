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


// calc

const genderBtns = document.querySelectorAll('#gender .calculating__choose-item')
const inputs = document.querySelectorAll('.calculating__choose_medium input')
const act_btns = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')
const result_view = document.querySelector('#result')
const mistake = document.querySelector(".calculating__result")

const user = {
    gender: "woman",

}

let genderIdx = 0
genderBtns.forEach((btn,idx) => {
    btn.onclick = () => {
        const g = btn.getAttribute('data-gender')

        user.gender = g

        genderBtns[genderIdx].classList.remove('calculating__choose-item_active')   
        btn.classList.add('calculating__choose-item_active')   

        genderIdx = idx
    }
})


inputs.forEach(inp => {
    inp.oninput = () => {
        user[inp.name] = inp.value
    }
})
let calculating__result = document.querySelector('calculating__result')
let calc_btn_idx = 1

let result

act_btns.forEach((btn, idx) => {
    btn.onclick = () => {
        const act = +btn.getAttribute('data-act')
        if (user.weight <= 0 || user.height <= 0 || user.age <= 0 )  {
            alert("Заполните все данные")
            return
        }

        act_btns[calc_btn_idx].classList.remove('calculating__choose-item_active')
        btn.classList.add('calculating__choose-item_active')

        if (user.gender === 'woman') {
            result = 655.1 + (9.563 * user.weight) + (1.85 * user.height) - (4.676 * user.age)
            result_view.innerHTML = Math.round(result * act)
        } else {
            result = 66.5 + (13.75 * user.weight) + (5.003 * user.height) - (6.775 * user.age)
            result_view.innerHTML = Math.round(result * act)
        }

        if (isNaN(result)) {
            result_view.innerHTML = "Ошибка"
            alert("заполните все данные")
        }

        calc_btn_idx = idx
    };
})


// Для женщин: 655,1 + (9,563 × вес в кг) + (1,85 × рост в см) - (4,676 × возраст в годах);
// Для мужчин: 66,5 + (13,75 × вес в кг) + (5,003 × рост в см) - (6,775 × возраст в годах).
// fsds




