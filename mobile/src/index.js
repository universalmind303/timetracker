// @flow
import React from 'react'
import type { Node } from 'react'

import {
  View,
  Dimensions,
  Text,
  StyleSheet,
} from 'react-native'


import {
  NativeRouter as Router,
  Route,
  Link,
} from 'react-router-native'


const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  demo: {
    alignSelf: 'center',
    paddingTop: height * 0.5
  },
  demoText: {
    fontSize: 27,
  }
})
/*
 Main entrypoint for app.
 */
const App = (): Node => (
  <View style={styles.container}>
    <Router >
      <View>
        <Route
          exact
          path="/"
          component={(): Node => (
            <View style={styles.demo}>
              <Link to="/device/apt-143-lock">
                <Text style={styles.demoText}>Start Demo</Text>
              </Link>
            </View>
          )}
        />
      </View>
    </Router>
  </View>
)

export default App
