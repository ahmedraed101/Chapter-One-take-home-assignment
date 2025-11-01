# Task Management App

A React Native task management app built with Expo Router featuring modern UI design and comprehensive task management functionality.

## Features

- **Task Management**: Add, complete, and delete tasks with timestamps
- **Smart Sorting**: Completed tasks automatically move to bottom
- **Progress Tracking**: Visual progress bar showing completion percentage
- **Modern UI**: Gradient header with card-based design and haptic feedback
- **Accessibility**: Full screen reader support and keyboard management

## Setup and Running Instructions

### Prerequisites
- Node.js (18+), npm/yarn, Expo CLI (optional)
- iOS Simulator, Android Emulator, or Expo Go app

### Installation
1. Clone repository and install dependencies:
   ```bash
   git clone <repository-url>
   cd task-management-app
   npm install
   ```

2. Start the app:
   ```bash
   npm start
   ```

3. Run on device:
   - iOS: Press `i` or scan QR with Camera
   - Android: Press `a` or scan QR with Expo Go
   - Web: Press `w`

## Usage

- **Add Task**: Type in input field and press + or Enter
- **Complete Task**: Tap circle or task text to toggle completion
- **Delete Task**: Tap trash icon and confirm
- **Special Instructions**: Completed tasks move to bottom automatically, view progress in header, check About tab for detailed help

## Third-Party Libraries

- **@expo/vector-icons**: Consistent iconography across platforms
- **expo-linear-gradient**: Beautiful gradient backgrounds for header
- **expo-haptics**: Haptic feedback for better user experience
- **react-native-safe-area-context**: Safe area handling for different devices
- **expo-router**: File-based routing system for navigation
- **TypeScript**: Type safety and better development experience

Built for React Native technical assessment with TypeScript, local state management, and modern mobile development practices.