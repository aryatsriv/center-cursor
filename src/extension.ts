import * as vscode from 'vscode';
import { topCursor } from './commands/topCursor';
import { centerCursor } from './commands/centerCursor';
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const centerDisposable = vscode.commands.registerCommand('no-neck-pain.centerCursor', centerCursor);

	const topDisposable = vscode.commands.registerCommand('no-neck-pain.topCursor', topCursor);

	context.subscriptions.push(centerDisposable);
	context.subscriptions.push(topDisposable);
}

export function deactivate() { }
