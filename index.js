// 1 task

const someFn = (str) => {
    let lowerCaseStr = str.toLowerCase()
    return lowerCaseStr[0].toUpperCase() + lowerCaseStr.slice(1, str.length)
    }
    console.log(someFn('пИтЕр'))
    console.log(someFn('javaScript'))
    
    // 2 task
    
    const sayHello = (name) => {
        return name === 'Mark' ? `Hi, ${name}!` : `Hello, ${name}!`
    }
    console.log(sayHello('Oleg'))
    console.log(sayHello('Viktor'))
    console.log(sayHello('Mark'))
    
    // task 3
    
    const filterStrings = (arr, n) => {
        return arr.filter(item => item.length <= n)
    }
    
    console.log(filterStrings(['I love JS', 'some very long string', 'hell'], 9))
    console.log(filterStrings(['a', 'ab', 'abc'], 2))