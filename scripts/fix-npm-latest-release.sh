#!/bin/bash

# This script is used to fix the latest release of all packages in the monorepo.
# It adds the `latest` dist-tag to the specified version of each package.

# Usage (from the root of the repository): ./scripts/fix-npm-latest-release.sh <version>
# Example: ./scripts/fix-npm-latest-release.sh 1.0.0-beta.1

echo "registry=https://registry.npmjs.org/" >> .npmrc
echo "//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}" >> .npmrc

for i in ./packages/*;
do
  package=${i/\.\/packages\//};
  echo "📦 Processing package: @italia/$package@$1";
  npm dist-tag add @italia/$package@$1 latest
done
