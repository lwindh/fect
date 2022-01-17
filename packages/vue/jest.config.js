module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/lib/', '/es/'],
  collectCoverageFrom: [
    'components/**/*.{js,jsx,ts,tsx,vue}',
    '!components/utils/**',
    '!components/index.ts',
    '!components/**/type.ts',
    '!components/**/style.ts',
    '!components/**/interface.ts',
    '!components/back-top/**'
  ],
  collectCoverage: true,
  preset: '@fect-ui/cli/lib/config',
  testTimeout: 20000
}
