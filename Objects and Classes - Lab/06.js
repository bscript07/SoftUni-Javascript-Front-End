function solve(arr) {

    const scheduledWeekdays = {};
    const successfulMeetings = [];

    for (const el of arr) {
        const [weekday, name] = el.split(" ");

        if (scheduledWeekdays[weekday]) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            scheduledWeekdays[weekday] = name;
            successfulMeetings.push(el);
            console.log(`Scheduled for ${weekday}`);
        }
    }

    successfulMeetings.forEach(meeting => {
        const currentMeeting = meeting.split(" ");
        console.log(`${currentMeeting[0]} -> ${currentMeeting[1]}`);
    });
}