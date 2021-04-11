import React from 'react';
import { NavBar } from "./components/NavBar";
import { Image, Users } from "./pages";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { AuthorizationContextProvider } from "./context/auth";
import { LoadImage } from "./pages/LoadImage";

function App() {

    return (
        <AuthorizationContextProvider>
            <SWRConfig value={{
                // will send another request if focus on page
                revalidateOnFocus: false,
                // we user blocks computer and opens again
                revalidateOnReconnect: false,
                revalidateOnMount: true,
                refreshInterval: 0,
                errorRetryInterval: 0,
                dedupingInterval: 0,
                refreshWhenHidden: false,
                refreshWhenOffline: false,
                shouldRetryOnError: false,
                errorRetryCount: 0,
                onErrorRetry: () => {
                    console.log("RETRY")
                },
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
                            <Route path="/load-image">
                                <LoadImage/>
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
