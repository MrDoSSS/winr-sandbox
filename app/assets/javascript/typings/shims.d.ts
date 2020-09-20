declare module '@rails/actioncable' {
  import actioncable from 'actioncable'
  export = actioncable
}

declare module 'cable_ready' {
  namespace CableReady {
    type operations = {
      [key: string]: object
    }

    export function perform (operations: operations): void
  }

  export = CableReady
}