import { Controller } from 'stimulus'
import StimulusReflex from 'stimulus_reflex'

export default class extends Controller {
  connect (): void {
    StimulusReflex.register(this)
  }
}
