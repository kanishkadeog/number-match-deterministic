# Number Match Puzzle – Deterministic Difficulty System

## Overview
This project implements a classic Number Match Puzzle Game using a deterministic difficulty system instead of RNG.

## Key Features
- Deterministic board seeding (always solvable)
- Sawtooth difficulty curve with relief levels
- Rescue mechanic for frustrated players
- Controlled Add Row logic
- Match rules: same number or sum to 10
- Diagonal, vertical, horizontal & wrap-around matches
- Expo compatible (Web & Android)
- Written in TypeScript

## Tech Stack
- React Native
- Expo Router
- TypeScript

## How to Run
```bash
npm install
npx expo start

```
### OPTION 2: APK FILE (ANDROID)
### Build APK
```bash
npx expo prebuild
npx expo run:android
```
or
```bash
npx expo build:android
```
