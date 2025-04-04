import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { router } from 'expo-router';

export default function AuthLayout() {
  // Redirect to welcome screen when entering auth group
  useEffect(() => {
    // Check if we're at the root of the auth group and redirect to welcome
    if (router.canGoBack() === false) {
      router.replace('/auth/welcome');
    }
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    />
  );
}
