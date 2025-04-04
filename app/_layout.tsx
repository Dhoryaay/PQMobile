import { Slot, Stack, useSegments, useRouter } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider, useAuth } from '../src/lib/auth';
import { useEffect } from 'react';
import { LoadingScreen } from '../src/components/LoadingScreen';

function useProtectedRoute(session: any) {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === 'auth';
    
    // Add a small delay to ensure the component is mounted
    const redirectTimeout = setTimeout(() => {
      if (!session && !inAuthGroup) {
        router.replace('/auth/welcome');
      } else if (session && inAuthGroup && segments[1] !== 'welcome') {
        router.replace('/');
      }
    }, 100);
    
    return () => clearTimeout(redirectTimeout);
  }, [session, segments, router]);
}

function RootLayoutNav() {
  const { session, loading } = useAuth();
  
  // Only apply protected route logic after initial loading
  if (!loading) {
    useProtectedRoute(session);
  }

  if (loading) {
    return <LoadingScreen />;
  }

  return <Slot />;
}

export default function RootLayout() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <AuthProvider>
          <RootLayoutNav />
        </AuthProvider>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
