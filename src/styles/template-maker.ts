const SelectorDecorator = (sourceSelector: {}, additionalParameters: {}): {} => {
  let selector: {} = sourceSelector;
  const parameters: {} = additionalParameters;
  for ( let item in parameters ) {
    selector[item] = parameters[item];
  }
  return selector;
};

export default SelectorDecorator;