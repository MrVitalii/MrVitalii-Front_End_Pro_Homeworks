const students = [
    {
        id: 10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        id: 11,
        name: 'John Doe',
        marks: [9, 8, 7, 6, 7]
    },
    {
        id: 12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        id: 13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    }
]


const averageSmithsMark = students.find(student => student.id === 10) ["marks"].reduce
(function (previousValue, currentValue) {
    return currentValue + previousValue / students[0].marks.length
}, 0)

const averageDoesMark = students.find(student => student.id === 11) ["marks"].reduce
(function (previousValue, currentValue) {
    return currentValue + previousValue / students[1].marks.length
}, 0)

const averageAndersonMark = students.find(student => student.id === 12) ["marks"].reduce
(function (previousValue, currentValue) {
    return currentValue + previousValue / students[2].marks.length
}, 0)

const averageZorgsMark = students.find(student => student.id === 13) ["marks"].reduce
(function (previousValue, currentValue) {
    return currentValue + previousValue / students[3].marks.length
}, 0)

const averageStudentMark = averageSmithsMark + averageDoesMark + averageAndersonMark + averageZorgsMark

console.log(averageStudentMark/students.length)























