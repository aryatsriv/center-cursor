import * as vscode from 'vscode';

export function centerCursor(): void {
    const editor = vscode.window.activeTextEditor;

    if (editor) {
        const currentPosition = editor.selection.active;

        // Get the configurable offset in lines
        const config = vscode.workspace.getConfiguration('no-neck-pain');
        const centerOffsetLines = config.get<number>('centerOffset', -3);

        const visibleRanges = editor.visibleRanges;
        if (visibleRanges.length > 0) {
            const visibleRange = visibleRanges[0];
            const viewportStartLine = visibleRange.start.line;
            const viewportEndLine = visibleRange.end.line;
            const viewportHeight = viewportEndLine - viewportStartLine;

            // Calculate where the center of the viewport should be
            const targetCenterLine = Math.floor(viewportHeight / 2);

            // Apply the offset to get the desired position in viewport
            const desiredViewportPosition = targetCenterLine - centerOffsetLines;

            // Calculate how many lines to scroll
            const currentCursorPositionInViewport = currentPosition.line - viewportStartLine;
            const linesToScroll = currentCursorPositionInViewport - desiredViewportPosition;

            console.log(`Viewport start line: ${viewportStartLine}`);
            console.log(`Viewport end line: ${viewportEndLine}`);
            console.log(`Viewport height: ${viewportHeight}`);
            console.log(`Current cursor line: ${currentPosition.line}`);
            console.log(`Current cursor position in viewport: ${currentCursorPositionInViewport}`);
            console.log(`Target center line: ${targetCenterLine}`);
            console.log(`Center offset lines: ${centerOffsetLines}`);
            console.log(`Desired viewport position: ${desiredViewportPosition}`);
            console.log(`Lines to scroll: ${linesToScroll}`);

            if (Math.abs(linesToScroll) > 0) {
                // Use the editorScroll command to scroll the viewport
                const scrollDirection = linesToScroll > 0 ? 'down' : 'up';
                const scrollAmount = Math.abs(linesToScroll);

                vscode.commands.executeCommand('editorScroll', {
                    to: scrollDirection,
                    by: 'line',
                    value: scrollAmount
                });
            }
        } else {
            // Fallback to regular center if visible ranges not available
            editor.revealRange(
                new vscode.Range(currentPosition, currentPosition),
                vscode.TextEditorRevealType.InCenter
            );
        }
    }
}
