const fs = require('fs');

function getDirectoriesToSort() {
  const ignoredSortingDirectories = [
    '.git',
    '.next',
    '.vscode',
    'node_modules',
  ];
  return getDirectories(process.cwd()).filter(
    (f) => !ignoredSortingDirectories.includes(f),
  );
}

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + '/' + file).isDirectory();
  });
}

module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['import'],
  rules: {
    'import/order': [
      2,
      {
        groups: [
          'external',
          'builtin',
          'internal',
          'sibling',
          'parent',
          'index',
        ],
        pathGroups: [
          ...getDirectoriesToSort().map((singleDir) => ({
            pattern: `${singleDir}/**`,
            group: 'internal',
          })),
          {
            pattern: 'env',
            group: 'internal',
          },
          {
            pattern: 'theme',
            group: 'internal',
          },
          {
            pattern: 'public/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
