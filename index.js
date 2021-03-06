function destructivelyAppendKitten(name){
    kittens.push(name)
    return kittens
}

function destructivelyPrependKitten(name){
    kittens.unshift(name)
    return kittens
}

function destructivelyRemoveLastKitten(){
    kittens.pop()
    return kittens
}

function destructivelyRemoveFirstKitten(){
    kittens.shift()
    return kittens
}

function appendKitten(name){
    var newKittens = kittens.slice()
    newKittens.push(name)
    return newKittens
}

function prependKitten(name){
    var newKittens = kittens.slice()
    newKittens.unshift(name)
    return newKittens
}

function removeLastKitten(){
    var newKittens = kittens.slice()
    newKittens.pop(name)
    return newKittens
}

function removeFirstKitten(){
    var newKittens = kittens.slice()
    newKittens.shift(name)
    return newKittens
}