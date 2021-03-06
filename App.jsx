import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import FlashMessage from 'react-native-flash-message'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import messaging from '@react-native-firebase/messaging'

import Routes from '@configs/routes'
import { persistor, store } from '@configs/store'
import { requestUserPermission } from '@utils/grantedNotification'

import '@configs/translations/initTranslation'

export default function App() {
    useEffect(() => {
        SplashScreen.hide()
        requestUserPermission()

        messaging().setBackgroundMessageHandler(remoteMessage => {
            alert(
                'Notification caused app to open from background state:',
                remoteMessage.notification,
            )
            // navigation.navigate(remoteMessage.data.type);
        })

        messaging().onMessage(mess => {
            alert('from onMessage ', mess)
        })
    }, [])

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Routes />
                <FlashMessage position="top" />
            </PersistGate>
        </Provider>
    )
}
