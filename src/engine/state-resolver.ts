export class StateResolver {
    static resolve<TStateOpts, TConstructor extends new(state: TStateOpts) => TConstructor>(
        state: TStateOpts,
        ctor: new (opts: TStateOpts) => TConstructor
    ) {
        return new ctor(state);
    }
}
