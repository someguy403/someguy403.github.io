#!/usr/bin/env sh

set -e

npm run build

cd dist

echo > .nojekyll

git init
git checkout -B deploy
git add -A
git commit -m 'deploy'

git push -u origin deploy

cd -