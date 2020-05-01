module.exports = {
    extends: [
        'plugin:react/recommended',
        '@packlink/eslint-config'
    ],
    plugins: [
        'react'
    ],
    rules: {
        'react/prop-types': [2]
    },
    settings: {
        react: {
            version: require('./package.json').peerDependencies.react
        }
    }
};
