import { NetworkList } from './components/NetworkList';
import { APIConfigProvider } from './utils'

export default function App() {
    return (
        <APIConfigProvider>
            <NetworkList/>
        </APIConfigProvider>
    );
};
