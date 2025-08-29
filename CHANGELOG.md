# Change Log

All notable changes to the "center-cursor" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [1.0.1] - 2025-08-28

### Added

-   Initial release of Center Cursor extension
-   Command `center-cursor.centerCursor` to move cursor to center of editor viewport
-   Keyboard shortcut `Ctrl+I` to trigger center cursor functionality
-   Command palette integration for "Center Cursor" command

### Features

-   Moves cursor to the center of the currently visible editor area
-   Works with any text file or editor
-   Simple and lightweight implementation using VS Code's built-in `cursorMove` API
