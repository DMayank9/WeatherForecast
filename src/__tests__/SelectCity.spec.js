import { mount } from "enzyme";
import SelectCity from "../components/SelectCity";
describe("Test select input element", () => {
  let fullDOMRenderWrapper;
  beforeEach(() => {
    fullDOMRenderWrapper = mount(<SelectCity />);
  });
  it("has two elements", () => {
    expect(fullDOMRenderWrapper.find("input").length).toEqual(1);
  });
  it("should allow to type in the enter city input field", () => {
    fullDOMRenderWrapper.find("input").simulate("change", {
      target: { value: "Delhi" },
    });
    fullDOMRenderWrapper.update();
    expect(
      fullDOMRenderWrapper.find("input").prop("value")
    ).toEqual("Delhi");
  });
  it("has a single button", () => {
    expect(fullDOMRenderWrapper.find("button").length).toEqual(1);
  });
  it("Renders Weather App", () => {
    expect(fullDOMRenderWrapper).toMatchSnapshot();
  });
});
