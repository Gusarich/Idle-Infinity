generator_first = {
    'amount': new ExpantaNum(0),
    'mult': new ExpantaNum(1)
}
generator_last = {
    'index': new ExpantaNum(1),
    'amount': new ExpantaNum(1),
    'mult': new ExpantaNum(1)
}

score = {
    'a': new ExpantaNum(0),
    'b': new ExpantaNum(0),
}

window.onload = () => {
    last_tick = Date.now()
    tick_count = new ExpantaNum(0)
    tick()
    document.getElementById("hideAll").style.display = "none";
    setInterval(tick, 50)
}
