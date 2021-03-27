import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux";

import RootNavigator from "./src/navigation";
import store, { persistor } from "./src/store";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <RootNavigator />
          <StatusBar style="auto" />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  )
}
