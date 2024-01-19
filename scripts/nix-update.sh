#!/usr/bin/env bash

# Shell script for updating the nix packaging
# Make sure to run a manual `git fetch upstream && git rebase upstream/main`

# git fetch upstream
# git checkout main
# git rebase upstream/main

# Also check versions before running this

nix develop . --show-trace --command $SHELL
make fe -B
git add .
nix flake check . --show-trace --all-systems

echo "Finished updating marimo derivation."
echo "Remember to commit and push to make available through flake github:Benni-Math/marimo."
echo "Then, run nix flake lock --update-input marimo in your project to pull in changes."