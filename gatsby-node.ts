exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({ fromPath: '/nowhere', toPath: '/', isPermanent: true });
};
