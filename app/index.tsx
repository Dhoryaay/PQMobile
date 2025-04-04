import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useAuth } from '../src/lib/auth';
import { router } from 'expo-router';

export default function Home() {
  const { signOut, session } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.replace('/auth/sign-in');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleUploadFile = () => {
    // TODO: Implement file upload
    console.log('Upload file');
  };

  const handleViewFiles = () => {
    // TODO: Implement file viewing
    console.log('View files');
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Welcome to PQMobile</Text>
      <Text variant="bodyLarge" style={styles.subtitle}>
        Post-Quantum file encryption for your mobile device
      </Text>
      
      <Text variant="bodyMedium" style={styles.email}>
        Signed in as: {session?.user?.email}
      </Text>

      <View style={styles.buttonContainer}>
        <Button 
          mode="contained" 
          onPress={handleUploadFile}
          style={styles.button}
        >
          Upload File
        </Button>
        
        <Button 
          mode="outlined" 
          onPress={handleViewFiles}
          style={styles.button}
        >
          View Files
        </Button>

        <Button 
          mode="outlined" 
          onPress={handleSignOut}
          style={[styles.button, styles.signOutButton]}
        >
          Sign Out
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  subtitle: {
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  email: {
    marginBottom: 24,
    opacity: 0.7,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
  },
  button: {
    marginBottom: 12,
  },
  signOutButton: {
    marginTop: 24,
    backgroundColor: '#fee2e2',
  },
});
