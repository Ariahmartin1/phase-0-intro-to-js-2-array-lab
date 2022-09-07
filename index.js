// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){ 
    return cats.push("Ralph")
}

function destructivelyPrependCat (){
    return cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}

function destructivelyRemoveFirstCat(){
    return cats.shift()
}

function appendCat(){
    const cats1 = [...cats, "Broom"]
    return cats1
}

function prependCat(){
    const cats2 = ["Arnold", ...cats]
    return cats2
}

function removeLastCat() {
    return cats.slice(0,-1)
}

function removeFirstCat(){
    return cats.slice(1)
}