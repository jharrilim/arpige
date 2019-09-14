export class StateResolver {
    static resolve<TStateOpts, TConstructor>(
        state: TStateOpts,
        ctor: new (opts: TStateOpts) => TConstructor
    ) {
        return new ctor(state);
    }
}
