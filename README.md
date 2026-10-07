# Jev Decision Canvas for Obsidian

Replay a declared decision against the exact contents of an Obsidian note. Options and criteria live in a fenced `jev-decision` JSON block; Jev selects finite option IDs; code computes the ranking and appends a durable result callout.

```bash
npm ci
npm run check
```

Copy `main.js`, `manifest.json` and `styles.css` into `.obsidian/plugins/jev-decision-canvas/`, enable the plugin, open `examples/launch-decision.md`, then run **Jev Decision Canvas: Replay decision in active note**. Version `0.1.0` runs an explicit offline fixture and needs no credential.

Version 0.1.0 deliberately does not edit options, invent evidence, auto-apply a decision, or make a network request. A future live provider must use a user-controlled gateway rather than place a provider key in a vault.

Independent community plugin. MIT licensed.
