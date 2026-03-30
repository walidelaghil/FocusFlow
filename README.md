# FocusFlow Desktop
Electron + React implementation of the FocusFlow PRD (Agenda Setup, Dynamic Bar collapsed/expanded, and Nudge overtime overlay).

## Zero-install browser prototype
Open [focusflow_browser_prototype.html](/Users/w.elaghil/Documents/Personal/FocusFlow/focusflow_browser_prototype.html) directly in Chrome or Edge.

This path requires no `node`, `npm`, Electron, or local server. It reproduces the meeting setup, floating bar, expanded state, timer progression, overtime state, and nudge overlay in one self-contained HTML file.

## GitHub Codespaces path
If your laptop is managed and cannot install development tools, use GitHub Codespaces instead.

1. Put this folder in a GitHub repository.
2. In GitHub, open the repository page.
3. Click `Code`.
4. Open the `Codespaces` tab.
5. Click `Create codespace on main`.
6. Wait for the environment to finish setup. The repo includes [.devcontainer/devcontainer.json](/Users/w.elaghil/Documents/Personal/FocusFlow/.devcontainer/devcontainer.json), so Codespaces will install Node and run `npm install` automatically.
7. In the Codespaces terminal, run `npm run dev`.

Use this path for the real Electron app work. Use the browser prototype when you need a zero-install fallback immediately.

## Stack
- Electron
- React + Vite
- Tailwind CSS v3
- Framer Motion
- Zustand
- dnd-kit (agenda row reordering)

## Run
1. Install Node.js 20+.
2. Install dependencies:
  - `npm install`
3. Start development app:
  - `npm run dev`

## Package installers
1. Add app icons:
  - `build/icon.icns` for macOS
  - `build/icon.ico` for Windows
2. Build unpacked app:
  - `npm run pack`
3. Build installers:
  - `npm run dist` (all configured for current OS)
  - `npm run dist:mac` (macOS targets)
  - `npm run dist:win` (Windows targets)
4. Output files are generated in `release/`.

## Behavior
- Setup window opens centered with editable/reorderable agenda rows.
- `Enter Flow` morphs into top-centered floating bar.
- Hover expands the bar with upcoming topics + controls.
- Click the active bar area to pause/resume.
- On final-item overtime, a dedicated fullscreen nudge window appears.
- Nudge actions:
  - `Wrap Up`: reset to setup.
  - `Add 5 min`: adds 5 minutes and dismisses nudge.

## Main files
- `electron/main.js`: frameless windows, always-on-top behavior, nudge window lifecycle, IPC.
- `electron/preload.cjs`: secure renderer bridge.
- `src/state/meetingStore.js`: meeting/timer state machine.
- `src/components/AgendaSetup.jsx`: setup form + drag reorder.
- `src/components/DynamicBar.jsx`: collapsed/expanded dynamic bar.
- `src/components/NudgeOverlay.jsx`: overtime overlay UI.
