// @flow
import React from 'react'
import type { Node } from 'react'

import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import styles from './styles'

type Props = {
  history: {
    goBack: Node
  }
}
// Renders details about the company
function Login({ history: { goBack } }: Props): Node {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.row}>
          <Text style={styles.title}> Login </Text>
          <TouchableOpacity style={styles.link} onPress={goBack} />
        </View>
      </View>
      <Text>
        Login
      </Text>
    </View>
  )
}
export default Login
