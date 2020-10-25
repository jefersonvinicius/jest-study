function sum(...values: number[]) {
    return values.reduce((prev, current) => {
        return prev + current;
    }, 0);
}
