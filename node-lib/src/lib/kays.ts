const stopIteration = Symbol("stopIteration");
const matched =

  function rethrow(v: unknown): v is typeof stopIteration {
    if (v !== stopIteration) throw v;
    return true;
  };

class Kays<T> {
  private readonly sym = Symbol("KaysValue");

  constructor(private readonly v: T) {
  }

  static wrap = <T>(v: T) => () => {

  };

  start() {
    return 1;
  }

  number(): this | null {
    return this.matchU<number>(v => typeof v === 'number');
  }

  match(predicate: (v: T) => boolean): this | null {
    return predicate(this.v) ? this : null;
  }

  match2<T, V = T>(predicate: (v: V) => boolean): this is Kays<T> {
    const p: (v: unknown) => v is X = predicate as any;
    return p(this.v);
  }

  matchU<X>(predicate: (v: unknown) => boolean, action?: (v: X) => void): this | null {
    const p: (v: unknown) => v is X = predicate as any;
    if (p(this.v)) {
      action && action(this.v);
      return this;
    }
    return null;
  }

  guard() {

  }
}
}

function kaysConsumer2() {
  // const x = Kays.wrap(1);
  switch (new Kays(2)) {
    case 1:

  }

}

function kaysConsumer() {
  const v = new Kays(1);
  switch (v) {
    case v.number():
      break;
    case v.matchU<{ a: 1 }>((x) => true, y => {
      console.log(y.a);
    }):
      break;

    case v.match2(m=>m > 3):
  }

}
