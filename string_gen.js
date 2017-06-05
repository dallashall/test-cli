const stringGen = function stringGen(str) {
  return (
`${str} = function ${str}() {
  console.log('I am ${str}')
};
${str}();
`
  );
};

module.exports = stringGen;
