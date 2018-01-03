// const workerpool = require('workerpool');

function fibonacciWithPromise(n: number): Promise<number> {
    return new Promise(async (resolve, reject) => {
        if(n < 2) { return resolve(n); }
        const [a, b] = await Promise.all([fibonacciWithPromise(n - 2), fibonacciWithPromise(n - 1)]);
        return resolve(a + b);
    });
}

async function fibonacci(n: number): Promise<number> {
    const result = await fibonacciWithPromise(n);
    return result;
}


export = fibonacciWithPromise;