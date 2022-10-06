import React from 'react';
import {createRoot} from "react-dom/client";
import './styles/index.css';
import App from './App';

// Import thirdweb provider and Goerli ChainId
import {ChainId, ThirdwebProvider} from '@thirdweb-dev/react';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

const container = document.getElementById("root");
const root = createRoot(container);
// Wrap your app with the thirdweb provider
root.render(
    <React.StrictMode>
        <ThirdwebProvider desiredChainId={activeChainId}>
            <App/>
        </ThirdwebProvider>
    </React.StrictMode>
);
