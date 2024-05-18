function solve(arr) {
    const armiesLeader = [];
    const armies = {};

    for (const el of arr) {
        if (el.includes('arrives')) {
            const index = el.indexOf('arrives');
            const leader = el.slice(0, index).trim();

            if (!armies.hasOwnProperty(leader)) {
                armies[leader] = {
                    armiesName: {},
                    armiesCount: 0
                }
            };

            armiesLeader.push(leader);
        } else if (el.includes('defeated')) {
            const index = el.indexOf('defeated');
            const leader = el.slice(0, index).trim();
            const indexOfLeader = armiesLeader.indexOf(leader);

            if (armies.hasOwnProperty(leader)) {
                delete armies[leader];
                armiesLeader.splice(indexOfLeader, 1);
            }

        } else if (el.includes(':')) {
            const [leader, army] = el.split(': ');
            const [armyName, armyCount] = army.split(', ');

            if (armies.hasOwnProperty(leader)) {
                if (!armies[leader].armiesName.hasOwnProperty(armyName)) {
                    armies[leader].armiesName[armyName] = Number(armyCount);
                    armies[leader].armiesCount += Number(armyCount);
                }
            }

        } else if (el.includes('+')) {
            const [armyName, armyCount] = el.split(' + ');
            armiesLeader.forEach(leader => {
                for (const army in armies[leader]) {
                    if (armies[leader][army].hasOwnProperty(armyName)) {
                        armies[leader].armiesName[armyName] += Number(armyCount);
                        armies[leader].armiesCount += Number(armyCount);
                    }
                }
            });
        }
    }

    Object.entries(armies)
        .sort((a, b) => b[1].armiesCount - a[1].armiesCount)
        .forEach(army => {
            console.log(`${army[0]}: ${army[1].armiesCount}`);

            Object.entries(army[1].armiesName)
                .sort((a, b) => b[1] - a[1])
                .forEach(armyName => {
                    console.log(`>>> ${armyName[0]} - ${armyName[1]}`);
                });
        });

}