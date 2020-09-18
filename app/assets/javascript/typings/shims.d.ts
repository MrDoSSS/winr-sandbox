declare module '@rails/actioncable' {
  import actioncable from 'actioncable'
  export = actioncable
}

declare module '@rails/activestorage' {
  import activestorage from 'activestorage'
  export = activestorage
}

declare module '@rails/ujs' {
  namespace ujs {
    export function start (): void
  }

  export = ujs
}