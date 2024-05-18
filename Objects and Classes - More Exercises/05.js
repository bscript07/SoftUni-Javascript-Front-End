function solve(arr) {
    const storeRegister = {};

    for (const str of arr) {
        const elements = str.split(' ');
        const name = elements[2].slice(0, elements[2].length - 1);
        const grade = Number(elements[4].slice(0, elements[4].length - 1));
        const average = Number(elements[elements.length - 1]);

        if (average >= 3) {

            if (!storeRegister.hasOwnProperty(grade)) {
                storeRegister[grade] = {
                    studentName: [name],
                    gradeAverage: [average]
                }
            } else {
                storeRegister[grade].studentName.push(name);
                storeRegister[grade].gradeAverage.push(average);
            }
        }
    }

    for (const totalGrade in storeRegister) {
        const currentStudent = storeRegister[totalGrade];
        console.log(`${Number(totalGrade) + 1} Grade`);
        console.log(`List of students: ${currentStudent.studentName.join(', ')}`);
        const totalAverage = currentStudent.gradeAverage.reduce((a, b) => a + b) / currentStudent.gradeAverage.length;
        console.log(`Average annual score from last year: ${totalAverage.toFixed(2)}`);
        console.log(' ');
    }
}