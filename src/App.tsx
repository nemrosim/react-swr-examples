import React from 'react';
import { NavBar } from "./components/NavBar";
import { Image, Users } from "./pages";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { AuthorizationContextProvider } from "./context/auth";

function App() {

    return (
        <AuthorizationContextProvider>
            <SWRConfig value={{
                onError: (error, key) => {
                    console.log('Global error handler', {error, key})
                    if (error.status !== 403 && error.status !== 404) {
                        // We can send the error to Sentry,
                        // or show a notification UI.
                    }
                }
            }}>
                <Router>
                    <NavBar/>
                    <div className="container">
                        <Switch>
                            <Route path="/users">
                                <Users/>
                            </Route>
                            <Route path="/image">
                                <Image/>
                            </Route>
                            <Route path="/">
                                <div>
                                    Home
                                </div>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </SWRConfig>
        </AuthorizationContextProvider>
    );
}

export default App;
