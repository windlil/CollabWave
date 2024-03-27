import { HashRouter } from "./router";
import BaseLayout from "./layouts/base-layout";

const App = () => {
  return (
    <>
      <BaseLayout>
        <HashRouter />
      </BaseLayout>
    </>
  );
};

export default App;
