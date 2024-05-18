function solve(database) {
    const courses = {};

    for (const line of database) {
        if (line.includes(':')) {
            const [courseName, capacity] = line.split(':').map(item => item.trim());

            if (!courses.hasOwnProperty(courseName)) {
                courses[courseName] = {
                    capacity: Number(capacity),
                    students: []
                }
            } else {
                courses[courseName].capacity += Number(capacity);
            }
        } else if (line.includes('joins')) {
            const regex = /(.+)\[(\d+)\] with email (.+) joins (.+)/;
            const [, username, credits, email, courseName] = line.match(regex);

            if (courses.hasOwnProperty(courseName) && courses[courseName].students.length < courses[courseName].capacity) {
                courses[courseName].students.push({
                    username,
                    credits: Number(credits),
                    email
                });
            }
        }
    }
    const sortingCourses = Object.entries(courses)
        .sort((a, b) => b[1].students.length - a[1].students.length);

    for (const [courseName, courseData] of sortingCourses) {
        const placesLeft = courseData.capacity - courseData.students.length;
        console.log(`${courseName}: ${placesLeft} places left`);

        const sortedStudents = courseData.students.sort((a, b) => b.credits - a.credits);

        for (const student of sortedStudents) {
            console.log(`--- ${student.credits}: ${student.username}, ${student.email}`);
        }
    }
}