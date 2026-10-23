# Dashboard

## Overview

Dashboard is a single-page React application that provides a personal productivity interface. It features a Pomodoro timer with configurable work and break intervals, and a statistics dashboard displaying hardcoded performance metrics via bar and pie charts. The application supports light and dark theme switching using Recoil state management.

## Key Features

*   **Pomodoro Timer**: A timer component supporting three modes:
    *   **Pomodoro**: 25-minute work session.
    *   **Small Break**: 5-minute break.
    *   **Large Break**: 15-minute break.
    *   Includes Start/Stop and Reset controls.
    *   Visual feedback via a circular SVG progress indicator.
    *   Browser alert notification when a timer session completes.
*   **Statistics Dashboard**: Displays hardcoded metrics ("BrainPower", "Craziness", "Intelligence", "Time Waste") using:
    *   Summary cards with percentage values.
    *   A bar chart (using Recharts).
    *   A pie chart (using Recharts).
*   **Theme Switching**: Supports "light" and "dark" themes, managed via Recoil atoms. Components dynamically adjust styling based on the current theme.
*   **Client-Side Routing**: Uses React Router to navigate between Landing, Dashboard, and Pomodoro Timer views.

## Architecture

The application follows a standard React component architecture:

*   **Entry Point**: `src/main.jsx` initializes the React root and wraps the application in a `RecoilRoot` provider.
*   **Routing**: `src/App.jsx` defines the router configuration using `createBrowserRouter` from `react-router-dom`. It sets up routes for `/` (Landing), `/dashboard` (Dashboard), and `/pomodoro` (PomodoroTimer). A catch-all route handles 404 errors.
*   **State Management**: Recoil is used for global state, specifically for theme management (`src/atoms/ThemeAtom.jsx`).
*   **Components**:
    *   `PomodoroTimer.jsx`: Manages timer logic, state for different modes, and renders the `CircularTimer` and control `Button`s.
    *   `CircularTimer.jsx`: Renders the SVG-based circular progress bar and time display.
    *   `Dashboard.jsx`: Renders the statistics view, including `Card` components and `Graph` components.
    *   `Graph.jsx`: Contains `BarGraph` and `PieGraph` components using Recharts.
    *   `Card.jsx`: Reusable component for displaying individual statistics.
    *   `Button.jsx`: Reusable button component with theme-aware styling.
    *   `Landing.jsx`: Placeholder component for the home route.
    *   `SideBar.jsx`: Imported in `App.jsx` but **not provided** in the source files. Its implementation is unknown.

## Tech Stack

*   **Language**: JavaScript (JSX)
*   **Framework**: React 18
*   **Build Tool**: Vite 8
*   **Routing**: React Router DOM 7
*   **State Management**: Recoil
*   **Styling**: Tailwind CSS 4
*   **Charts**: Recharts
*   **Icons**: Remixicon
*   **Linting**: ESLint with React Hooks and React Refresh plugins

## Project Structure

```
Dashboard/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── atoms/
    │   └── ThemeAtom.jsx
    └── components/
        ├── Button.jsx
        ├── Card.jsx
        ├── CircularTimer.jsx
        ├── Dashboard.jsx
        ├── Graph.jsx
        ├── Landing.jsx
        └── PomodoroTimer.jsx
```

*Note: `src/components/SideBar.jsx` is imported in `App.jsx` but was not included in the provided source files.*

## Prerequisites

*   Node.js (version compatible with Vite 8 and React 18)
*   npm or compatible package manager

## Installation

1.  Navigate to the project directory:
    ```bash
    cd Dashboard
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

## Configuration

No environment variables or external configuration files are required for basic operation. The application uses hardcoded data for the dashboard statistics and fixed durations for the Pomodoro timer modes.

## Usage

1.  Start the development server:
    ```bash
    npm run dev
    ```
2.  Open the browser to the URL provided by Vite (typically `http://localhost:5173`).
3.  Navigate using the sidebar (implementation not provided) or directly via URL paths:
    *   `/`: Landing page (placeholder).
    *   `/dashboard`: Statistics dashboard.
    *   `/pomodoro`: Pomodoro timer.

### Pomodoro Timer Usage

1.  Select a mode using the buttons: "Pomodoro" (25 min), "Small Break" (5 min), or "Large Break" (15 min).
2.  Click "Start" to begin the countdown.
3.  Click "Stop" to pause the timer.
4.  Click "Reset" to reset the timer to its initial duration for the selected mode.
5.  When the timer reaches 0, a browser alert will display a message (e.g., "Break Time").

## Error Handling and Limitations

*   **Missing Component**: `SideBar.jsx` is imported in `App.jsx` but not provided. The application may fail to render or throw a module not found error if this file is missing in the actual repository.
*   **Hardcoded Data**: The dashboard statistics are hardcoded in `Dashboard.jsx` and `Graph.jsx`. There is no mechanism to update these values dynamically.
*   **Timer Implementation**: The timer uses `setInterval` and `alert()`. This may be blocked in some browser contexts or may not be ideal for production-grade applications.
*   **Theme Context**: `ThemeContext` is imported in several components (`Button.jsx`, `Card.jsx`, `Dashboard.jsx`, `Graph.jsx`, `PomodoroTimer.jsx`) but the file `src/Contexts/ThemeContext.jsx` is not provided. The application relies on Recoil's `ThemeAtom` for theme state, but the context import may cause errors if the file is missing.
*   **Font Path**: `index.css` references a font file at `/home/codes/Dashboard/src/assets/fonts/VG5000-Regular.otf`. This absolute path is likely incorrect for a web application and should be a relative path or served from the public directory.

## Security Considerations

*   No sensitive data is handled in the provided source files.
*   The application is client-side only and does not interact with external APIs or databases.

## Contributing

Contributions are welcome. Please ensure that any changes are consistent with the existing code style and that the application builds and runs without errors.

## License

No license information was found in the provided source files.