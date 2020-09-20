import CableReady from 'cable_ready'
import { consumer } from './consumer'

const channel = consumer.subscriptions.create('ValidationChannel', {
  received (data) {
    if (data.cableReady) CableReady.perform(data.operations)
  }
})

export { channel }