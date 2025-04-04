import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TextInput, Button, Text, IconButton } from 'react-native-paper';
import { router } from 'expo-router';
import { useAuth } from '../../src/lib/auth';
import { StatusBar } from 'expo-status-bar';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { signIn } = useAuth();

  const handleSignIn = async () => {
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      setError('');
      setLoading(true);
      await signIn(email, password);
      router.replace('/');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = () => {
    router.push('/auth/sign-up');
  };

  const handleBack = () => {
    router.push('/auth/welcome');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <IconButton
          icon="arrow-left"
          size={24}
          onPress={handleBack}
          style={styles.backButton}
        />
        <Text variant="headlineSmall" style={styles.headerTitle}>Sign In</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.iconContainer}>
        <View style={styles.iconCircle}>
          <Text style={styles.lockIcon}>🔒</Text>
        </View>
      </View>

      <Text variant="titleLarge" style={styles.title}>Secure sign-in</Text>
      <Text style={styles.subtitle}>Access your post-quantum encrypted files with your credentials</Text>
      
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <View style={styles.formContainer}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.input}
          mode="outlined"
          outlineColor="#ddd"
          activeOutlineColor="#0066cc"
        />

        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          mode="outlined"
          outlineColor="#ddd"
          activeOutlineColor="#0066cc"
        />

        <Button
          mode="contained"
          onPress={handleSignIn}
          loading={loading}
          disabled={loading}
          style={styles.button}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
        >
          Sign In
        </Button>
      </View>

      <View style={styles.footer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.linkText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingTop: 16,
  },
  headerTitle: {
    fontWeight: 'bold',
  },
  backButton: {
    margin: 0,
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e6f2ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0066cc',
  },
  lockIcon: {
    fontSize: 36,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 40,
    color: '#666',
  },
  formContainer: {
    paddingHorizontal: 24,
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 8,
    borderRadius: 8,
    backgroundColor: '#0066cc',
  },
  buttonContent: {
    height: 48,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    color: '#ef4444',
    marginBottom: 16,
    textAlign: 'center',
    paddingHorizontal: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
  },
  linkText: {
    color: '#0066cc',
    fontWeight: 'bold',
  },
});
