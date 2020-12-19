import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css';
import '../styles/index.css'
import '../styles/Resultados.css'
import '../styles/regimenes.css';
import '../styles/solicitud.css';
import Layout from "../components/Layout";
import React from "react";
import { Provider } from 'react-redux';
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
import TagManager from 'react-gtm-module'
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {

    useEffect(() => {
        const tagManagerArgs = {
            gtmId: process.env.NEXT_PUBLIC_GTM_ID
        }

        if (process.browser) {
            TagManager.initialize(tagManagerArgs);
        }
        
    });

    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>

    )
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
