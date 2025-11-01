# Task Management App

A simple React Native task management app built with Expo Router.

## Features

- Add, complete, and delete tasks
- Track creation and completion dates
- Clean interface with haptic feedback
- Progress counter and accessibility support

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the app**
   ```bash
   npm start
   ```

3. **Run on device**
   - iOS: Press `i` or scan QR code with Camera
   - Android: Press `a` or scan QR code with Expo Go
   - Web: Press `w`

## Usage

- **Add Task**: Type in the input field and press + or Enter
- **Complete Task**: Tap the circle or task text
- **Delete Task**: Tap the trash icon and confirm

## Tech Stack

- React Native with Expo SDK 54
- TypeScript for type safety
- Local state management (no persistence)
- @expo/vector-icons for UI icons

## Project Structure

```
app/
├── (tabs)/           # Tab navigation
├── components/       # Reusable components
└── types/           # TypeScript interfaces
```

Built for React Native technical assessment.