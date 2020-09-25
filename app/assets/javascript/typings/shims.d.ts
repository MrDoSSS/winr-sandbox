declare module '@rails/actioncable' {
  import actioncable from 'actioncable'
  export = actioncable
}

declare module 'cable_ready' {
  namespace CableReady {
    type Operations = {
      name: {
        selector: string
        element: string
      }[]
    }

    export type Data = {
      operations: Operations
      cableReady: boolean
    }

    export function perform (operations: Operations): void
  }

  export = CableReady
}

declare module 'stimulus_reflex' {
  import { Controller, Application, ControllerConstructor } from 'stimulus'

  namespace StimulusReflex {
    export function register (controller: Controller): void
    export function initialize (app: Application, config: { consumer?: ActionCable.Cable, controller: ControllerConstructor, debug?: boolean }): void
  }

  export = StimulusReflex
}