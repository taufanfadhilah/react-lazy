import React, {lazy, Suspense} from "react";
import Loading from './Loading'

const Users = lazy(() => import('./Users'))

function App() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-12 text-center mb-3">
          <h3>User List</h3>
          <hr />
        </div>
        <Suspense fallback={<Loading />}>
          <Users />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
