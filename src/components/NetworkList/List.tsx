import { useNetworks } from "../../utils";
import { NetworkItem } from "./NetworkItem";
import "./List.css";

/**
 *  A component that renders the actual list of networks. This component throws
 *  a promise when it's still in "fetching" state. It has to be wrapped with
 *  <Suspense>.
 */
export function List() {

    const networks = useNetworks() 
        .filter(n => !!n.id);

    return (
        <div className="networklist-list">
            {networks.map(n => <NetworkItem key={n.id} network={n}/>)}
        </div>
    );  
};