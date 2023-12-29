export const createBem = (block, namespace) => {
    let base = [namespace, block].filter((item) => item)
    const name = base.map((item) => item.split("-").map(([firstChar, ...rest]) => `${firstChar.toUpperCase()}${rest.join("")}`).join("")).join("")
    base = base.join("-")
    const bem = (element, modifier) => {
        const modifiers = []
        const results = [base]
        if (element) {
            if (Array.isArray(element)) {
                modifiers.push(...element)
            }
            else {
                results.push(element)
            }
            if (modifier) {
                if (Array.isArray(modifier)) {
                    modifiers.push(...modifier)
                }
                else {
                    modifiers.push(modifier)
                }
            }
        }
        const className = results.join("__")
        return [
            className,
            ...modifiers.map((modifier) => `${className}--${modifier}`),
        ]
    }
    return {
        name,
        bem,
    }
}
