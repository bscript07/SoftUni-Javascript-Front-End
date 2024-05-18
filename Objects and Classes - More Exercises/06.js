function solve(storage, arr) {

    const obj = {
        'Browser Name': storage['Browser Name'],
        'Open Tabs': [...storage['Open Tabs']],
        'Recently Closed': [...storage['Recently Closed']],
        'Browser Logs': [...storage['Browser Logs']],
    };

    for (const cmd of arr) {
        const data = cmd.split(' ');
        const currentCommand = data[0];
        const site = data[1];

        currentCommand === 'Open' ? openTab(storage, site) : null;
        currentCommand === 'Close' ? closeTab(storage, site) : null;
        cmd === 'Clear History and Cache' ? deleteObject(storage) : null;

    }

    console.log(storage['Browser Name']);
    console.log(`Open Tabs: ${storage['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${storage['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${storage['Browser Logs'].join(', ')}`);

    function openTab(obj, site) {
        obj['Open Tabs'].push(site);
        browserLogs(storage, 'Open ' + site);
    }

    function browserLogs(obj, command) {
        obj['Browser Logs'].push(command)
    }

    function closeTab(obj, site) {
        if (obj['Open Tabs'].includes(site)) {
            let index = obj['Open Tabs'].findIndex(x => x === site);
            let result = obj['Open Tabs'].splice(index, 1);
            obj['Recently Closed'].push(result[0]);
            browserLogs(storage, 'Close ' + site);
        }
    };

    function deleteObject(obj) {
        obj['Open Tabs'] = [];
        obj['Recently Closed'] = [];
        obj['Browser Logs'] = [];
    }
}