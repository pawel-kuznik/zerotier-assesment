import { Suspense } from "react";
import { Loader } from "../Loader";
import { List } from "./List";

/**
 *  The component to show list of all networks current account has access to.
 */
export function NetworkList() {

    return (
        <Suspense fallback={(<Loader/>)}>
            <List/>
        </Suspense>
    );
};