const urlParamsToObject = paramsText => {
  // Ex.: /Item=Sowrd-of-Fire Item2=Shield-of-Darkness
  const formatedText = `{"${paramsText['*']
    .replaceAll('=', '":"')
    .replaceAll(' ', '","')
    .replaceAll('-', ' ')}"}`;
  const object = JSON.parse(formatedText);
  return object;
};

export { urlParamsToObject };
