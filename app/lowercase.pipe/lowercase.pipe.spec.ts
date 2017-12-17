import { LowercasePipe } from './lowercase.pipe';

describe('LowercasePipe', () => {
  const pipe : LowercasePipe = new LowercasePipe();

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it("should convert a string to lowercase", () => {
    let str = "Hello World!";
    expect(pipe.transform(str)).toEqual("hello world!");
  });
});
