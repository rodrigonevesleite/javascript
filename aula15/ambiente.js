let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posiçoes`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
/*
for (var pos = 0; pos < num.length; pos ++) {
    console.log(`A posiçao ${pos} tem o valor ${num[pos]}`)
}*/

for (let pos in num) {
    console.log(num[pos])
}