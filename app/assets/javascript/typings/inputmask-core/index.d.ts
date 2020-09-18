declare namespace InputMaskCore {
  interface MaskParams {
    pattern: string
    formatCharacters?: {
      [key: string]: {
        validate: (char: string) => string
        transform: (char: string) => string
      }
    }
    placeholderChar?: string
    value?: string
    selection?: MaskSelection
    isRevealingMask?: boolean
  }

  interface MaskSelection {
    start: number
    end: number
  }

  interface Mask {
    input (character: string): boolean
    backspace (): boolean
    paste (input: string): boolean
    undo (): boolean
    redo (): boolean
    emptyValue: string
    selection: MaskSelection
    setSelection (selection: MaskSelection): boolean
    getValue (): string
    getRawValue (): string
    setValue (value: string): void
    setPattern (pattern: string, options?: { value: string, selection: MaskSelection }): void
    pattern: {
      isEditableIndex (index: number): boolean
      source: string
      length: number
      firstEditableIndex: number
    }
  }
}

declare const InputMaskCore: {
  new(params: InputMaskCore.MaskParams): InputMaskCore.Mask
}

declare module 'inputmask-core' {
  export = InputMaskCore
}
