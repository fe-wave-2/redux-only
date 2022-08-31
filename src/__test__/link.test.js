import Link from "../components/Link";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(<Link page="http://facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
