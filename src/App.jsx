import "./App.css";
import { AuthProvider } from "./contextApi/AuthContext";

import PrivatePublic from "./routing/PrivatePublic";

function App() {
  return (
    <>
   {/* usage of provider */}
      <AuthProvider>
        <PrivatePublic />
      </AuthProvider>
    </>
  );
}

export default App;
