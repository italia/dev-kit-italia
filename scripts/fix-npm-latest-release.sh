#!/bin/bash

# This script is used to fix the latest release of all packages in the monorepo.
# It adds the `latest` dist-tag to the specified version of each package.

# Usage (from the root of the repository): ./scripts/fix-npm-latest-release.sh

echo "registry=https://registry.npmjs.org/" >> .npmrc
echo "//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}" >> .npmrc

for i in ./packages/*;
do
  package=${i/\.\/packages\//};
  PKG_NAME=$(node -p -e "require('./$i/package.json').name")
  PKG_VERSION=$(node -p -e "require('./$i/package.json').version")
  echo "📦 Processing package: $PKG_NAME@$PKG_VERSION";
  npm dist-tag add $PKG_NAME@$PKG_VERSION latest
done
