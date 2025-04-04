# QuantumMobile (QMobile) Development Plan

## Project Overview  
QuantumMobile (QMobile) is a cross-platform mobile app that encrypts local files using NIST-approved post-quantum cryptography (PQC). Users can securely store, manage, and decrypt files offline, with optional cloud backup via Supabase Storage.  

**Target Audience**: Professionals, privacy advocates, and small businesses needing secure file storage.  
**Unique Value Proposition**: Quantum-safe encryption for local files with seamless cloud integration.  
**Platforms**: iOS and Android.  

---

## Tech Stack  
- **Framework**: Expo (React Native)  
- **Language**: TypeScript  
- **Navigation**: Expo Router  
- **UI Library**: React Native Paper  
- **PQC Library**: OpenSSL with liboqs (CRYSTALS-Kyber, Dilithium)  
- **Backend/Auth**: Supabase (authentication, storage, real-time sync)  
- **Key Storage**: React Native Keychain (hardware-backed storage)  
- **Testing**: Jest with React Native Testing Library  
- **Deployment**: Expo Go (development), EAS (production), GitHub Actions (CI/CD)  
- **Hosting**: GitHub Pages

---

## Expo Setup  
- **Base Configuration**: Initialize project, configure Metro bundler.  
- **Dependencies**: Install core libraries (Supabase, React Native Paper, Expo FileSystem, React Native Keychain).  
- **PQC Integration**: Eject to bare workflow for OpenSSL/liboqs.  
- **Environment Variables**: Store Supabase credentials securely.  

---

## Authentication Flow  
- **Sign-in/Sign-up**: Email/password or OAuth (Google/GitHub) via Supabase Auth.  
- **Session Management**: Persist auth state with secure storage.  
- **Biometric Lock**: Optional Face ID/Touch ID for app access.  
- **Error Handling**: User-friendly error messages via toast notifications.  

---

## Core Features  

### File Encryption  
- **Hybrid PQC Encryption**: CRYSTALS-Kyber for key exchange, AES-256 for file encryption.  
- **Local Storage**: Save encrypted files using Expo FileSystem.  
- **Metadata Protection**: Encrypt metadata before storing.  
- **Chunking**: Process large files in 1MB chunks for efficiency.  

### File Management  
- **Gallery View**: List encrypted files with metadata (React Native Paper Cards).  
- **Gesture Actions**: Swipe to delete/rename files.  
- **Offline Access**: Works fully without internet.  

### Cloud Sync (Optional)  
- **Backup/Restore**: Upload PQC-encrypted files to Supabase Storage.  
- **Real-time Sync**: Sync metadata changes across devices.  
- **End-to-End Encryption**: Ensure Supabase only stores encrypted data.  
- **Conflict Resolution**: Implement version control for updates.  

### Security  
- **Key Management**: Store PQC keys in hardware-backed storage.  
- **Auto-Lock**: Lock app after 5 minutes of inactivity.  
- **Data Integrity**: Sign encrypted files with Dilithium for integrity verification.  

### Settings  
- **Algorithm Selection**: Default to Kyber/AES hybrid, with advanced options.  
- **Dark Mode**: Theming via React Native Paper.  
- **Cloud Sync Toggle**: Allow users to enable/disable cloud sync.  

---

## Mobile Considerations  
- **Performance**: Optimize with Web Workers, benchmark on low-end devices.  
- **Permissions**: Request file access gracefully with explanations.  
- **User Feedback**: Use toast notifications and progress indicators.  
- **Battery Efficiency**: Minimize background processing.  

---

## Testing  
- **Unit Tests**: Verify encryption/decryption logic, file chunking.  
- **Integration Tests**: Test UI flows, Supabase sync.  
- **Security Tests**: Ensure key storage security and end-to-end encryption.  
- **Device Testing**: Validate performance on low-end devices (iPhone 8, budget Androids).  

---

## Deployment  
- **Development**: Use Expo Go for rapid testing.  
- **Production**: Build via EAS, submit to app stores.  
- **CI/CD**: Automate testing and builds with GitHub Actions.  
- **Beta Testing**: Release via TestFlight (iOS) and Google Play Beta.  
- **Monitoring**: Use expo-sentry for crash and performance tracking.  

---

## Development Timeline  
- **Week 1-2**: Expo setup, TypeScript config, Supabase integration, basic UI.  
- **Week 3-4**: PQC implementation, hybrid encryption, local storage.  
- **Week 5-6**: File management, offline access, error handling.  
- **Week 7-8**: Cloud sync, real-time sync, encryption verification.  
- **Week 9-10**: Security features, app settings, onboarding.  
- **Week 11-12**: Testing, optimization, beta testing.  
- **Week 13**: Deployment, post-launch monitoring.  

---

## Success Metrics  
- **Security**: 100% of encrypted files remain undecryptable without keys.  
- **Performance**: Encrypt/decrypt 1GB file in <10s on mid-range devices.  
- **User Adoption**: 500 beta users within 3 months.  
- **Reliability**: 99.9% uptime, no crashes during encryption/decryption.  

---

## Risks & Mitigations  
- **PQC Integration Complexity** → Test early, document process.  
- **Performance on Low-End Devices** → Use hybrid encryption, optimize with Web Workers.  
- **User Confusion with PQC** → Simplify UI, provide onboarding tutorial.  
- **Supabase Security Concerns** → Ensure end-to-end encryption, encrypt metadata.  
