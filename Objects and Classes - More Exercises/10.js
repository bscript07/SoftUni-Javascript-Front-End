function solve(lines) {
    const database = { userList: [], articleList: [], comments: {} };

    for (const line of lines) {
        if (line.split(' ').length === 2) {
            const [command, item] = line.split(' ');

            if (command === 'user') {
                if (!database.userList.includes(item)) {
                    database.userList.push(item);
                }
            } else if (command === 'article') {
                if (!database.articleList.includes(item)) {
                    database.articleList.push(item);
                }
            }
        } else {
            const [username, article, title, content] = line
                .replace(' posts on ', '&')
                .replace(': ', '&')
                .replace(', ', '&')
                .split('&');

            if (database.userList.includes(username) && database.articleList.includes(article)) {
                if (!database.comments.hasOwnProperty(article)) {
                    database.comments[article] = [{
                        [username]: `--- From user ${username}: ${title} - ${content}`
                    }];
                } else {
                    database.comments[article].push({ [username]: `--- From user ${username}: ${title} - ${content}` });
                }
            }
        }
    }

    const sortedComments = Object.entries(database["comments"])
        .sort((a, b) => b[1].length - a[1].length);

    for (const [name, comments] of sortedComments) {
        console.log(`Comments on ${name}`);

        for (const commentItem of comments.sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]))) {
            const [user, comment] = Object.entries(commentItem)[0];
            console.log(comment);
        }
    }
}