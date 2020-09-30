import { Validator, ValidatorOptions } from 'winr-components'
import { channel } from '@/channels/validation_channel'

export const ActiveRecordValidator: Validator = {
  validate (value: string, id: string, opts: ValidatorOptions) {
    channel.send({
      value,
      target: `#${id}`,
      ...opts
    })
  }
}