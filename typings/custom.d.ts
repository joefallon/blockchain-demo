declare module "worker-loader!*" {
    class WebpackWorker extends Worker {
        constructor();
    }
    export = WebpackWorker;
}

declare module "file-loader?name=[name].js!*" {
    const value: string;
    export = value;
}