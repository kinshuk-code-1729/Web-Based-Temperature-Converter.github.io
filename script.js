let input = document.getElementById("input")
let output = document.getElementById("answer")
console.log(input)
let convert = function(){
    let value = input.value
    let ans = (value * 1.8) + 32;
    console.log(ans)
    output.innerHTML=ans
}