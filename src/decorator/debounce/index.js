export const debounce = function(func, ms = 1000) {
    let timer = 0
    return (...args) => {
        if (timer !== 0) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.call(this, ...args)
        }, ms)
    }
}
