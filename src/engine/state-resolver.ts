export class StateResolver {
    constructor(...args: any) { }

    static resolve<TStateOpts, TConstructor extends { new (state: TStateOpts): InstanceType<TConstructor> }>(
        stateOpts: TStateOpts,
        Ctor: TConstructor
    ) {
        return new Ctor(stateOpts);
    }
}
