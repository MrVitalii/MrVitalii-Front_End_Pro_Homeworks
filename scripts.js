function pow(num, degree) {
    if (degree === 1) {
        return num
    } else {
        return num * pow(num, degree - 1)
    }
}

console.log(pow(7, 3))

// pow(num 7, degree 3) = 7 * pow(7, degree 3 - 1)
// pow(num 7, degree 2) = 7 * pow(7, degree 2 - 1)
// pow(num 7, degree 1) = return degree = num (7)
// return num 7 * num 7 * num 7 = 343







