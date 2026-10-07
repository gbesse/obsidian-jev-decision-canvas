import { Editor, MarkdownView, Notice, Plugin } from 'obsidian';
import { fakeResponse, parseDecisionBlock, renderResultBlock, tally } from './core.js';

export default class JevDecisionCanvasPlugin extends Plugin {
  async onload() {
    this.addCommand({ id: 'replay-active-decision', name: 'Replay decision in active note', editorCallback: async (editor: Editor, view: MarkdownView) => {
      try {
        const note=editor.getValue(); const decision=parseDecisionBlock(note); const response=fakeResponse(decision);
        editor.replaceRange(renderResultBlock(decision,tally(decision,response)),editor.getCursor('to'));new Notice('Offline fixture replayed');
      } catch(error){new Notice(error instanceof Error?error.message:String(error));}
    }});
  }
}
