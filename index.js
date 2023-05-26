function showFizzBuzzResult(i, resultSpan) {
    let a = '';
    if (i % 3 == 0) {
        a += 'Fizz';
        resultSpan.innerText = 'アホ';
    }
    if (i % 5 == 0) {
        a += 'Buzz';
    }
    if (a === '') {
        a = i;
    }
    resultSpan.innerText += ' ' + a;
}

for (let i = 1; i <= 100; i++) {
    const button = document.createElement('button');
    button.innerText = i;
    button.onclick = function() {
        showFizzBuzzResult(i, resultSpan);
    };
    document.getElementById('fizzbuzz-container').appendChild(button);

    const resultSpan = document.createElement('span');
    document.getElementById('fizzbuzz-container').appendChild(resultSpan);
}
