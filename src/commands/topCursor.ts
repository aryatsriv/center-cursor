import * as vscode from 'vscode';

export function topCursor(): void {
    const editor = vscode.window.activeTextEditor;

    if (editor) {
        const currentPosition = editor.selection.active;

        // Then reveal the cursor line at the top of the viewport
        editor.revealRange(
            new vscode.Range(currentPosition, currentPosition),
            vscode.TextEditorRevealType.AtTop
        );
    }
}
