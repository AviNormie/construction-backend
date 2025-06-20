const types = [
  'feat', // Commits, that adds or remove a new feature
  'fix', // Commits, that fixes a bug
  'refactor', // Commits, that rewrite/restructure your code, however does not change any API behaviour
  'style', // Commits, that do not affect the meaning (white-space, formatting, missing semi-colons, etc)
  'test', // Commits, that add missing tests or correcting existing tests
  'docs', // Commits, that affect documentation only
  'build', // Commits, that affect build components like build tool, ci pipeline, dependencies, project version, ...
  'ops', // Commits, that affect operational components like infrastructure, deployment, backup, recovery, ...
  'chore', // Miscellaneous commits e.g. modifying .gitignore
];

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', types],
    'subject-min-length': [2, 'always', 3],
  },
};
