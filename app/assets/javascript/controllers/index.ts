import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'
import StimulusReflex from 'stimulus_reflex'
import { consumer } from '@/channels/consumer'
import ApplicationController from './application_controller'

const application = Application.start()
const context = require.context('controllers', true, /\_controller.ts$/)
application.load(definitionsFromContext(context))

StimulusReflex.initialize(application, { consumer, controller: ApplicationController })