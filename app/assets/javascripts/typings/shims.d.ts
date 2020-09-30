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

declare module '@rails/ujs' {
  namespace ujs {
    export function start (): void
  }

  export = ujs
}