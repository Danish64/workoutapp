import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  const isLoaded = useCachedResources();
  const colorScheme = useColorScheme();

  return (
    isLoaded ?
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme}/>
        <StatusBar style="auto" />
      </SafeAreaProvider> 
    : null
  );
}

