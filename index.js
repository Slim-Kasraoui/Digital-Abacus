const tops = document.querySelectorAll(".top")
console.log({ tops })
const bottoms = document.querySelectorAll(".bottom")
console.log({ bottoms })

tops.forEach((top, idx) => {
  top.addEventListener("click", (e) => {
    const pebbles = e.currentTarget.querySelectorAll(".pebble")
    if (pebbles.length > 0) {
      bottoms[idx].appendChild(pebbles[0])
      const count = bottoms[idx].querySelectorAll(".pebble").length
      document.querySelector(`.counter:nth-child(${idx +1})`).innerText= count
    }
    calculate()
  })
})

bottoms.forEach((bottom, idx) => {
  bottom.addEventListener("click", (e) => {
    const pebbles = e.currentTarget.querySelectorAll(".pebble")
    if (pebbles) {
      tops[idx].appendChild(pebbles[pebbles.length -1])
      const count = bottoms[idx].querySelectorAll(".pebble").length
      document.querySelector(`.counter:nth-child(${idx +1})`).innerText= count
    }
    calculate()
  })
})

const calculate = () => {
  let result = 0
  Array.from(bottoms).reverse().forEach((bottom, idx)=> {
    const power = Math.pow(10, idx)
    result += bottom.querySelectorAll(".pebble").length * power
  })
  document.querySelector(".selected_number").textContent = result
}

const computed = document.querySelector(".selected_number")
computed.addEventListener('click', reset)

function reset () {
  bottoms.forEach((bottom, idx)=>{
    const pebbles = bottom.querySelectorAll(".pebble")
    console.log({pebbles});
    if(pebbles.length>0){
      for (let i = 0; i < pebbles.length; i++) {
        tops[idx].appendChild(pebbles[i])
      }
    }
    document.querySelector(`.counter:nth-child(${idx +1})`).innerText = 0

    document.querySelector(".selected_number").innerText = 0
  })
}