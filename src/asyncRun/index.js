export const asyncRun = (() => {
    if (typeof queueMicrotask === 'function') {
        return (func) => {
            queueMicrotask(func)
        }
    }
    else if (typeof Promise !== 'undefined') {
        return (func) => {
            Promise.resolve().then(func)
        }
    }
    else if (typeof window.MutationObserver !== 'undefined') {
        return (func) => {
            const node = document.createTextNode("0")
            const observer = new MutationObserver(func)
            observer.observe(node, {
                characterData: true,
            })
            node.nodeValue = "1"
        }
    }
    else {
        return (func) => {
            setTimeout(func)
        }
    }
})()
