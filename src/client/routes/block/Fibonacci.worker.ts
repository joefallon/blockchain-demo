// const ctx: Worker = self as any;

function fibonacci(n: number): Promise<number> {
    return new Promise(async (resolve, reject) => {
        if(n < 2) { return resolve(n); }
        const [a, b] = await Promise.all([fibonacci(n - 2), fibonacci(n - 1)]);
        return resolve(a + b);
    });
}

// ctx.addEventListener('message', async (ev: WindowEventMap['message']) => {
//     const n = parseInt(ev.data, 10);
//     const result = await fibonacci(n);
//     ctx.postMessage(result);
// });

addEventListener('message', (ev: MessageEvent) => {
    const n = parseInt(ev.data, 10);
    fibonacci(n).then((result) => {
        postMessage(result, '*');
    });
});

postMessage('ready', '*');

// export = ctx;
