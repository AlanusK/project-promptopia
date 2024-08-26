import "@styles/globals.css";

import Provider from "@components/Provider";
import Nav from "@components/Nav";
import { Suspense } from "react";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Suspense fallback={<p>Loading...</p>}>
            <div className="main">
              <div className="gradient" />
            </div>

            <main className="app">
              <Nav />

              {children}
            </main>
          </Suspense>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
