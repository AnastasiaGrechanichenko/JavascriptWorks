//task 1 
function checkNumbers(first,second) {
    if (first > second) {
        return 1 
    } else if (first < second) {
        return -1 
    } else if (first == second) {
        return 0 
    }
}

const result1 = checkNumbers(10,20);
console.log(result1)

//task 2 
function countFactorial(number) {
    if (number === 0 || number === 1) {
        return 1 
    }

    return number*countFactorial(number-1);

}

const result2 = countFactorial(3);
console.log(result2)

//task3
function joinNumbers(num1,num2,num3) {
    return (num1.toString() + num2.toString()+num3.toString())
}

const result3 = joinNumbers(1,4,9);
console.log(result3)

//task4
function countSquare(length,width) {
if (width==null) {
    return length**2
} else 
    return (length*width)
}
const result4 = countSquare(10)
console.log(result4)
const result44 = countSquare(10,20)
console.log(result44)

//task5

function definePerfect(num) {
    let summa = 0

    for (let i = 1; i <=num/2;i++) {
        if (num % i === 0) {
            summa +=i
        }
    }
    return summa === num
}

const result5 = definePerfect(6);
console.log(result5);
const result55 = definePerfect(5);
console.log(result55);


//task 6 
function logPerfect(minimum,maximum) {
    const perfectNumbers = []
    for (let n = minimum; n <= maximum;n++) {
        if (definePerfect(n)) {
            perfectNumbers.push(n);

        }
    }
    return perfectNumbers
}

const result6 = logPerfect(1,50)
console.log(result6)

//task 7 
function showTime(hours,minutes,seconds) {
    hours = hours ?? "00";
    minutes = minutes ?? "00";
    seconds  = seconds ?? "00";


    hours = String(hours).padStart(2,'0');
    minutes = String(minutes).padStart(2,'0');
    seconds = String(seconds).padStart(2,'0');

    return `${hours}:${minutes}:${seconds}`;

}
const result71 = showTime(10,2)
console.log(result71)

//task 8 
function convertToSeconds(hours,minutes,seconds) {
    m_convert= Number(minutes) * 60  
    h_convert= Number(hours) * 3600
    total = m_convert+h_convert + Number(seconds)

    return total

}

const result8 = convertToSeconds(10,12,6)
console.log(result8)

//task 9 

function secondToFormat(total) {
    const hours = Math.floor(total/3600);
    const leftHours = total % 3600;
    const minutes = Math.floor(leftHours/60);
    const seconds = leftHours % 60;

    const h = String(hours).padStart(2,'0')
    const m = String(minutes).padStart(2,'0')
    const s = String(seconds).padStart(2,'0')

    return `${h}:${m}:${s}`
}

console.log(secondToFormat(3001))
console.log(secondToFormat(200))

//task 10 
function countDifference (h1,m1,s1,h2,m2,s2) {
    const sec1 = convertToSeconds(h1,m1,s1);
    const sec2 = convertToSeconds(h2,m2,s2);
    const difference = Math.abs(sec1 - sec2);
    return secondToFormat(difference)

}

console.log(countDifference(11,7,6,4,25,16));

