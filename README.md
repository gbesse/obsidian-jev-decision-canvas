# Jev Decision Canvas for Obsidian

Replay a declared decision against the exact contents of an Obsidian note. Options and criteria live in a fenced `jev-decision` JSON block; Jev selects finite option IDs; code computes the ranking and appends a durable result callout.

```bash
npm ci
npm run check
```

Copy `main.js`, `manifest.json` and `styles.css` into `.obsidian/plugins/jev-decision-canvas/`, enable the plugin, open `examples/launch-decision.md`, then run **Jev Decision Canvas: Replay decision in active note**. Version `0.1.0` runs an explicit offline fixture and needs no credential.

Version 0.1.0 deliberately does not edit options, invent evidence, auto-apply a decision, or make a network request. A future live provider must use a user-controlled gateway rather than place a provider key in a vault.

Independent community plugin. MIT licensed.


## 2026-11-05 — FR / EN / ES

FR : Un classement ex æquo affiche désormais « Ex æquo / Tie / Empate » au lieu de désigner la première option comme gagnante. `rankingTies(ranking)` expose les options en tête et `uniqueWinner:null` en cas d’égalité exacte ; pas de nouveau départage automatique.

EN: Tied rankings now display “Ex æquo / Tie / Empate” instead of naming the first option winner. `rankingTies(ranking)` exposes top options and `uniqueWinner:null` on exact ties; no automatic tiebreak.

ES: Clasificaciones empatadas muestran « Ex æquo / Tie / Empate » en vez de declarar ganadora la primera opción. `rankingTies(ranking)` expone opciones líderes y `uniqueWinner:null` con empate exacto; sin desempate automático.
