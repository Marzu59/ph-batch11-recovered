const college = {
    name: 'vnc',
    class: ['11', '12', '13'],
    events: ['science fair', 'bijoy debosh', '21 feb'],
    unique:{
        color: 'blue',
        result: {
            gpa: 5,
            merit:'top'
        }
    }
}

// console.log(college.unique.color)

college.unique.result.merit = 'last'
console.log(college.unique.result.merit)

college.events[1] = '5aug'

console.log(college.events[1])

delete college.class;
console.log(college)