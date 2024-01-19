{
  inputs = {
    nixpkgs.url = "nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";

    pyproject-nix = {
      url = "github:nix-community/pyproject.nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = { self, nixpkgs, flake-utils, pyproject-nix, ... }@inputs:
    let
      # Read pyproject.toml
      pyproject = pyproject-nix.lib.project.loadPyproject { projectRoot = ./.; };
    in
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };

        python = pkgs.python3;
        requirements = pyproject.renderers.withPackages { inherit python; };
        pythonEnv = python.withPackages requirements;

        pythonDist = pyproject.renderers.buildPythonPackage { inherit python; };
      in
      {
        packages.default = python.pkgs.buildPythonPackage (pythonDist // {
          # TODO: Update this to the latest before building, see ./marimo/__init__.py
          version = "0.1.78";
        });

        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            pythonEnv
            nodejs
            corepack
          ];
        };

      }
    ) // {
      overlays.default = final: prev: { marimo = self.packages.${final.system}.default; };
    };
}