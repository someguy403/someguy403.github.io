#!/usr/bin/env sh

set -e

npm run build

cd dist

echo > .nojeckyll

git init
git checkout -B main
git add -A
git commit -m 'deploy'

git push -f git@github.com:someguy403/someguy403.github.io.git main

cd -