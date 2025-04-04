import { View, StyleSheet, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Welcome() {
  const handleSignIn = () => {
    router.push('/auth/sign-in');
  };

  const handleSignUp = () => {
    router.push('/auth/sign-up');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Background icons */}
      <View style={styles.backgroundIcons}>
        {['🔐', '🔒', '🗝️', '📁', '🛡️', '🔑', '📱', '💾'].map((icon, index) => (
          <Text
            key={index}
            style={[
              styles.icon,
              {
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
                opacity: 0.2,
                transform: [{ rotate: `${Math.random() * 360}deg` }],
                fontSize: Math.random() * 16 + 20,
              },
            ]}
          >
            {icon}
          </Text>
        ))}
      </View>

      <View style={styles.content}>
        <Text variant="displayMedium" style={styles.title}>
          Welcome to
        </Text>
        <Text variant="displayLarge" style={styles.appName}>
          PQMobile
        </Text>
        <Text variant="bodyLarge" style={styles.subtitle}>
          Post-Quantum encryption for your files
        </Text>

        {/* Pagination dots */}
        <View style={styles.pagination}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={handleSignUp}
          style={styles.button}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
        >
          Create New Account
        </Button>
        <Button
          mode="outlined"
          onPress={handleSignIn}
          style={styles.secondaryButton}
          contentStyle={styles.buttonContent}
          labelStyle={styles.secondaryButtonLabel}
        >
          Sign In
        </Button>
      </View>

      <Text style={styles.footer}>
        Post-Quantum Cryptography for your mobile device
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0066cc',
    padding: 20,
    justifyContent: 'space-between',
  },
  backgroundIcons: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  icon: {
    position: 'absolute',
    color: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '300',
  },
  appName: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    color: 'white',
    textAlign: 'center',
    opacity: 0.8,
  },
  pagination: {
    flexDirection: 'row',
    marginTop: 40,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'white',
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 20,
  },
  button: {
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  buttonContent: {
    height: 56,
  },
  buttonLabel: {
    fontSize: 16,
    color: '#0066cc',
    fontWeight: 'bold',
  },
  secondaryButton: {
    borderRadius: 8,
    borderColor: 'white',
  },
  secondaryButtonLabel: {
    fontSize: 16,
    color: 'white',
  },
  footer: {
    color: 'white',
    textAlign: 'center',
    opacity: 0.7,
    marginBottom: 10,
  },
});
