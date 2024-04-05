# Copyright 2024 Marimo. All rights reserved.
from __future__ import annotations

import subprocess

from marimo._runtime.packages.module_name_to_pypi_name import (
    module_name_to_pypi_name,
)
from marimo._runtime.packages.package_manager import (
    CanonicalizingPackageManager,
)
from marimo._utils.platform import is_pyodide


class PypiPackageManager(CanonicalizingPackageManager):
    def _construct_module_name_mapping(self) -> dict[str, str]:
        return module_name_to_pypi_name()


class PipPackageManager(PypiPackageManager):
    name = "pip"

    async def install(self, package: str) -> bool:
        return subprocess.run(["pip", "install", package]).returncode == 0


class MicropipPackageManager(PypiPackageManager):
    name = "micropip"

    def is_manager_installed(self) -> bool:
        return is_pyodide()

    async def install(self, package: str) -> bool:
        assert is_pyodide()
        import micropip  # type: ignore

        try:
            await micropip.install(package)
            return True
        except ValueError:
            return False


class UvPackageManager(PypiPackageManager):
    name = "uv"

    async def install(self, package: str) -> bool:
        return (
            subprocess.run(["uv", "pip", "install", package]).returncode == 0
        )


class RyePackageManager(PypiPackageManager):
    name = "rye"

    async def install(self, package: str) -> bool:
        return subprocess.run(["rye", "add", package]).returncode == 0


class PoetryPackageManager(PypiPackageManager):
    name = "poetry"

    async def install(self, package: str) -> bool:
        return subprocess.run(["poetry", "add", package]).returncode == 0
