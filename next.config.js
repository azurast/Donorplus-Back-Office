module.exports = {
    async headers() {
        return [
            {
                source: '/about',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*',
                    },
                ],
            },
        ]
    },
}