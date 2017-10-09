type TAdUnit = {};

type TParameters = [string, string | number][];

interface ISelector {
  get(): TAdUnit
}

export class Selector implements ISelector {
  adUnit: TAdUnit;
  constructor(common: TAdUnit) {
    this.adUnit = common;
  }
  get(): TAdUnit {
    return this.adUnit;
  }
}

export class SelectorDecorator implements ISelector {
  protected decoratedSelector: ISelector;
  constructor(decoratedSelector: ISelector) {
    this.decoratedSelector = decoratedSelector;
  }
  get(): TAdUnit {
    return this.decoratedSelector.get();
  }
}

export class AddInSelector extends SelectorDecorator {
  adUnit: TAdUnit;
  constructor(decoratorSelector: ISelector) {
    super(decoratorSelector);
  }
  private addParameters(parameters: TParameters): {
    
  }
}






class SelectorMaker {
  adUnit: TAdUnit = {};
  constructor(common: TAdUnit = {}) {
    this.adUnit = common;
  }
  generate(parameters: TParameters = []): TAdUnit {
    if ( parameters !== [] ) {
      parameters.map( (e) => {
        this.adUnit[e[0]] = e[1];
      });
    }
    return this.adUnit;
  }
}

export default SelectorMaker;