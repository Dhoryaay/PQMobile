# QMobile

A quantum-safe file encryption mobile app built with Expo and React Native.

## Features

- Post-quantum cryptography for file encryption
- Local file storage with optional cloud backup
- Biometric authentication
- Cross-platform (iOS and Android)
- Offline-first functionality

## Tech Stack

- Expo (React Native)
- TypeScript
- React Native Paper
- Supabase (Auth & Storage)
- OpenSSL with liboqs (CRYSTALS-Kyber, Dilithium)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

3. Update `.env` with your Supabase credentials

4. Start the development server:
   ```bash
   npm start
   ```

## Development

- `npm start` - Start the Expo development server
- `npm run ios` - Start the iOS simulator
- `npm run android` - Start the Android emulator
- `npm test` - Run tests

## Security

This app uses NIST-approved post-quantum cryptography:
- CRYSTALS-Kyber for key exchange
- AES-256 for file encryption
- Dilithium for digital signatures

## License

MIT
