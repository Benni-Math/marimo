# Copyright 2024 Marimo. All rights reserved.
from __future__ import annotations

import abc
import shutil


class PackageManager(abc.ABC):
    """Interface for a package manager that can install packages."""

    name: str

    @abc.abstractmethod
    def module_to_package(self, module_name: str) -> str:
        """Canonicalizes a module name to a package name."""
        ...

    @abc.abstractmethod
    def package_to_module(self, package_name: str) -> str:
        """Canonicalizes a package name to a module name."""
        ...

    def is_manager_installed(self) -> bool:
        """Is the package manager is installed on the user machine?"""
        return shutil.which(self.name) is not None

    @abc.abstractmethod
    async def install(self, package: str) -> bool:
        """Attempt to install a package that makes this module available.

        Returns True if installation succeeded, else False.
        """
        ...
