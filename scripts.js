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

function averageStudentMark(studentId) {
    const student = students.find(student => student.id === studentId);

    let averageMark = student["marks"].reduce
    (function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0)

    averageMark /= student.marks.length;

    return averageMark;
}

function averageGroupMark() {
    let averageMark = students.reduce
    (function (accumulator, currentValue) {
        return accumulator + averageStudentMark(currentValue.id);
    }, 0)

    averageMark /= students.length;

    return averageMark;
}

const averageGroupMarkValue = averageGroupMark();

alert(`averageGroupMarkValue  = ${averageGroupMarkValue}`)
























