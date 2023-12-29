export const throttle = function(func, ms = 1000) {
    let isThrottled = false
    return (...args) => {
        if (isThrottled) {
            return
        }
        isThrottled = true
        setTimeout(() => {
            func.call(this, ...args)
            isThrottled = false
        }, ms)
    }
}
