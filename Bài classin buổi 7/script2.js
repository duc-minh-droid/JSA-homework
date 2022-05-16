// Câu 1
const equation = (a,b) => {

    return (`
        Cho phương trình: y = ${a}x + ${b}
        <=> x = ${-b/a}
    `)
}

console.log(equation(2,1))

// Câu 2
const isosceles = (a,b) => {
    let c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2))

    let h = Math.sqrt(Math.pow(a,2) * Math.pow(b,2)) / Math.sqrt(Math.pow(a,2) + Math.pow(b,2))

    let angle1 = Math.round(Math.asin(b/c) * 57.2957795)
    let angle2 = Math.round(Math.acos(b/c) * 57.2957795)
    
    return ({
        'Cạnh huyền': c + ' cm',
        'Đường cao': h + ' cm',
        'Góc trên': angle1 + ' độ',
        'Góc dưới': angle2 + ' độ'
    })
}

console.log(isosceles(3,4))






