module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: '/testNotes',
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'path/to/some/dir'
            }
        }
    }
}