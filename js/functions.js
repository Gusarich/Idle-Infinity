function normalize (n) {
    if (n.lt('1e6')) return n.floor().toFixed(0);
    if (n.lt('e1e6')) return n.toExponential(0).replace('+', '');
    if (n.lt('eeeee1')) return n.toFixed(1);
    n = n.toHyperE();
    if (n.includes('.')) {
        n = n.split('.');
        n = n[0] + n[1].slice(n[1].indexOf('#'));
    }
    return n;
}

function setText (id, text) {
    document.getElementById(id).innerText = text
}

function pascalTriangle (k, n) {
    k = new ExpantaNum(k)
    n = new ExpantaNum(n)
    if (k.gte(n)) return new ExpantaNum(0)
    return n.fact().div(k.fact().mul(n.minus(k).fact())).round()
}

function purchaseGenerator () {
    let price = ExpantaNum.pow(10, generator_last.index.mul(1))
    if (score.a.gte(price)) {
        score.a = score.a.minus(price)
        generator_last.index = generator_last.index.plus(1)
        tick_count = new ExpantaNum(0.001)
    }
}

function tick () {
    time = Date.now()
    t = new ExpantaNum(time - last_tick)
    last_tick = time
    tick_count = tick_count.plus(t)
    score.a = score.a.plus(generator_first.amount.mul(generator_first.mult).round().div(t))
    generator_first.amount = pascalTriangle(generator_last.index, tick_count.div(1000))

    setText('score-first-number', normalize(score.a))
}
