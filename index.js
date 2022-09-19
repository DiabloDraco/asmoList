let arr = ['Bahrom Ilamanovich' , 'Murod Abdujabborovich' , 'Javohir Sharobidinovich' , 'Barno Yuldashevna' , 'Grigoriy Borisovich' , 'Malika Axmadjonovna' , 'Suhrob Xamrakulov' , 'Evelina Koldarova' , 'Xalitov Imil Ilnurovich' , 'Shahrizoda Bahodirovna']

// Just for test
// let num = [0 , 1 , 2, 3 , 4 ,5 ,6 ,7 , 8 , 9]


let elList = document.querySelector(".list__wrapper")

let t = arr.sort(()=>Math.random()-0.5)


function render() {
    for (let i = 0; i < t.length; i++) {
        let div = document.createElement("div")
        div.classList.add("item")
        div.textContent = t[i]
        elList.appendChild(div)
    }
}

render()