#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run docs:build

# navigate into the build output directory
cd docs/.vitepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:BePlayable/beplayable.github.io.git gh-pages
cd -