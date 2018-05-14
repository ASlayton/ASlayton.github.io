const buildFunFact = () => {
  let domString = '';
  domString += `<h1>Random Fun Fact About Me:</h1>`;
  domString += `<p>When I was a kid, we had gotten my mom a pair of Madagascar Hissing Cockroaches as a joke present. She had the opposite reaction than we expected and before long, had 82 pet cockroaches.</p>`;
  domString += `<img src='/images/cockroach.jpg' alt='Madagascar Hissing Cockroach'>`;

  return domString;
};

module.exports = {
  buildFunFact,
};
