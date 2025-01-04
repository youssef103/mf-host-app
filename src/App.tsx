import React, { Suspense } from 'react';

/// Import the remote component using dynamic import
const RemoteButton = React.lazy(() => import('remoteApp/Button'));

function App() {
  return (
    <div>
      <h1>Host App</h1>
      <Suspense fallback={<div>Loading Remote Button...</div>}>
        <RemoteButton text="click remote button" />
      </Suspense>
    </div>
  );
}

export default App;
