import React from "react";

import Layout from "src/components/layout";
import Cards from "../cards";

const App: React.FC = () => (
    <Layout>
        <Cards cardsCount={6} />
    </Layout>
);

export default App;
