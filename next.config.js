module.exports = {
    env: {
        firebaseServerKey: "AAAALb4Cpms:APA91bF6fXvR1rEeMWUr2RWJJ-spN73rNlBeL_dy709oR1wrhwo8zSPoOiE2IvOJ5GdOQYYYZFTiKBpU_RO4jbYA30wab8M_nBYA5cazqGM-xcQXPzphgw2nAwqUCIPHu_7bJB2dUZHn"
    },
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