module.exports = {
  '*.js': ['prettier --write', 'eslint --fix', 'git add'],
  '*.{json,css}': ['prettier --write', 'git add'],
};
