/// <reference types="next" />
/// <reference types="next/types/global" />

type ThenArg<T> = T extends PromiseLike<infer U> ? U : T
type GetProps<T extends (...args: any) => any> = ThenArg<
  ReturnType<T>
> extends { props: infer U }
  ? U
  : never

declare module NodeJS {
  interface Global {
    fetch: any
  }
}

declare module '@ui-devtools/tailwind' {
  // import { Socket as PhoenixSocket } from 'phoenix'
  // …
  export const Devtools = React.FC
}

declare module 'sourcebit-target-next' {
  export const sourcebitDataClient = any
}

declare module 'sourcebit-target-next/with-remote-data-updates' {
  export const withRemoteDataUpdates = any
}
