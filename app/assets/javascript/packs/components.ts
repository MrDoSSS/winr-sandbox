import { defineCustomElements, addValidator } from 'winr-components'
import { ActiveRecordValidator } from '@/validators/active_record'

addValidator('ActiveRecord', ActiveRecordValidator)

defineCustomElements()
