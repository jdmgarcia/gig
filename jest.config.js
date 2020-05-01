module.exports = {
    moduleNameMapper: {
        '\\.(scss|css|less)$': 'identity-obj-proxy',
        '^@components': '<rootDir>/src/components',
        '^@components/(.*)': '<rootDir>/src/components/$1',
        '@components/(.*)': '<rootDir>/src/components/$1',
        '^@styles': '<rootDir>/src/styles',
        '^@styles/(.*)': '<rootDir>/src/styles/$1',
        '@mocks': '<rootDir>/src/tests/__mocks__/components',
        '@mocks/(.*)': '<rootDir>/src/tests/__mocks__/components/$1',
    },
    transform: {
        '^.+\\.jsx?$': 'babel7-jest',
        '.(ts|tsx)': 'ts-jest',
    },
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupFiles: ['<rootDir>/src/tests/setup.js'],
    coverageDirectory: '<rootDir>/.reports/jest/coverage',
    collectCoverage: !process.argv.includes('--watch'),
    collectCoverageFrom: [
        'src/**/*.{js,tsx}',
        '!**/node_modules/**',
    ],
    coverageReporters: ['lcov', 'text', 'html'],
    testPathIgnorePatterns: ['/node_modules/', '/lib/'],
    testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json']
};
