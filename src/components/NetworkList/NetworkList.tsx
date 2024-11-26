import { Suspense } from "react";
import { Loader } from "../Loader";
import { List } from "./List";

export function NetworkList() {

    return (
        <Suspense fallback={(<Loader/>)}>
            <List/>
        </Suspense>
    );
};