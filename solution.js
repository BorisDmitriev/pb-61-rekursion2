const factorial = f => {
    if( f === 0) return 1;
    return f * factorial(f-1)
}

console.log(factorial(5));
