export const delay = function(func, ms = 1000) {
    return (...args) => {
        setTimeout(() => {
            func.call(this, ...args)
        }, ms)
    }
}
