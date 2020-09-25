import CableReady from 'cable_ready'
import { consumer } from './consumer'

const channel = consumer.subscriptions.create('ValidationChannel', {
  received (data: CableReady.Data) {
    if (data.cableReady) CableReady.perform(data.operations)
  },
})

export { channel }
