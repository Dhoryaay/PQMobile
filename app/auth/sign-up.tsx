import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput, Button, Text, IconButton, Checkbox } from 'react-native-paper';
import { router } from 'expo-router';
import { useAuth } from '../../src/lib/auth';
import { StatusBar } from 'expo-status-bar';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [receiveUpdates, setReceiveUpdates] = useState(false);
  const { signUp } = useAuth();

  const handleSignUp = async () => {
    if (!name) {
      setError('Please enter your name');
      return;
    }

    if (!email) {
      setError('Please enter your email');
      return;
    }

    if (!password) {
      setError('Please enter a password');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      setError('');
      setLoading(true);
      await signUp(email, password);
      router.replace('/');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    router.push('/auth/welcome');
  };

  const handleSignIn = () => {
    router.push('/auth/sign-in');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <IconButton
          icon="arrow-left"
          size={24}
          onPress={handleBack}
          style={styles.backButton}
        />
        <Text variant="headlineSmall" style={styles.headerTitle}>Sign Up</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.iconContainer}>
        <View style={styles.iconCircle}>
          <Text style={styles.vaultIcon}>🔐</Text>
        </View>
      </View>

      <Text variant="titleLarge" style={styles.title}>Set up your account</Text>
      <Text style={styles.subtitle}>Create your PQMobile account to start protecting your files with post-quantum encryption</Text>
      
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <View style={styles.formContainer}>
        <TextInput
          label="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
          mode="outlined"
          outlineColor="#ddd"
          activeOutlineColor="#0066cc"
        />

        <TextInput
          label="Email address"
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

        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          style={styles.input}
          mode="outlined"
          outlineColor="#ddd"
          activeOutlineColor="#0066cc"
        />

        <View style={styles.checkboxContainer}>
          <Checkbox
            status={receiveUpdates ? 'checked' : 'unchecked'}
            onPress={() => setReceiveUpdates(!receiveUpdates)}
            color="#0066cc"
          />
          <Text style={styles.checkboxLabel}>
            Get updates about PQMobile features, security news, and post-quantum cryptography developments
          </Text>
        </View>

        <Button
          mode="contained"
          onPress={handleSignUp}
          loading={loading}
          disabled={loading}
          style={styles.button}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
        >
          Next
        </Button>

        <Text style={styles.termsText}>
          By proceeding, you agree to the Terms of Service and Privacy Policy
        </Text>
      </View>

      <View style={styles.featureContainer}>
        <Text style={styles.featureTitle}>Try PQMobile for free</Text>
        <View style={styles.featureItem}>
          <Text style={styles.featureIcon}>✓</Text>
          <Text style={styles.featureText}>Post-Quantum encryption for all your files</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureIcon}>✓</Text>
          <Text style={styles.featureText}>Access your files across all your devices</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureIcon}>✓</Text>
          <Text style={styles.featureText}>Optional cloud backup with end-to-end encryption</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={handleSignIn}>
          <Text style={styles.linkText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingBottom: 40,
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
    marginTop: 20,
    marginBottom: 16,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e6f2ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0066cc',
  },
  vaultIcon: {
    fontSize: 30,
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
    fontSize: 14,
  },
  formContainer: {
    paddingHorizontal: 24,
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkboxLabel: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
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
  termsText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 12,
    color: '#666',
  },
  error: {
    color: '#ef4444',
    marginBottom: 16,
    textAlign: 'center',
    paddingHorizontal: 24,
  },
  featureContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureIcon: {
    color: '#0066cc',
    fontWeight: 'bold',
    marginRight: 8,
    fontSize: 16,
  },
  featureText: {
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  linkText: {
    color: '#0066cc',
    fontWeight: 'bold',
  },
});
