import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, PropsWithChildren } from "react";

export const APITokenContext = createContext("");

export interface APITokenProviderProps extends PropsWithChildren {
    // nothing special, we just need children.
};

// we use react-query to make the translation between async and declarative
// approach nicer
const queryClient = new QueryClient();

/**
 *  This is a small component that provides configuration for correct API use.
 *  In essentia, it passes the API configuration to API calls made with use
 *  of functions received from the useAPI() callback. 
 */
export function APIConfigProvider({ children }: APITokenProviderProps) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
