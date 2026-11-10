function readPackage(pkg) {
  if (pkg.dependencies && pkg.dependencies['magic-string']) {
    pkg.dependencies['magic-string'] = '0.30.21';
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage
  }
};

