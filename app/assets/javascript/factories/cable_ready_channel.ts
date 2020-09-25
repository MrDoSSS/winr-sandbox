import { Cable, Channel, CreateMixin } from 'actioncable'
import CableReady from 'cable_ready'

const createChannel = (consumer: Cable, name: string, mixin?: CreateMixin): Channel => {
  const channel = consumer.subscriptions.create(name, {
    received (data: CableReady.Data) {
      if (data.cableReady) CableReady.perform(data.operations)
    },
    ...mixin
  })

  return channel
}

export { createChannel }
