import { consumer } from './consumer'
import { createChannel } from '@/factories/cable_ready_channel'

const channel = createChannel(consumer, 'SessionChannel')

export { channel }
