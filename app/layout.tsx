import "@styles/globals.css";

import Provider from "@components/Provider";
import { Session } from "next-auth";
import Nav from "@components/Nav";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) => {
  return (
    <html lang="en">
      <body>
        <Provider session={session}>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
