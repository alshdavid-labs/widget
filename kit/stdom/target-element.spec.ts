import { escapeElementSelector } from './target-element';

describe('targetElement', () => {

  it('should correctly escape invalid selectors', () => {

    expect(escapeElementSelector('div#321.123')).toBe('div#\\33 21.\\31 23');

  });

  it('should not escape valid selectors', () => {

    expect(escapeElementSelector('div#a321.a123')).toBe('div#a321.a123');

  });

  it('should not escape valid selectors', () => {

    expect(escapeElementSelector('[id=\'44_3f97b1db0e5f44ab85a7a50b63da7258-b\']')).toBe('[id=\'44_3f97b1db0e5f44ab85a7a50b63da7258-b\']');

  });

});
