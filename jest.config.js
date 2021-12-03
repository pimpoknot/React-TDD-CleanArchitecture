module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
        '<RootDir>/src/**/*.{ts,tsx}'
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    transform: {
        '.+\\.ts$': 'ts-jest'
    }
}