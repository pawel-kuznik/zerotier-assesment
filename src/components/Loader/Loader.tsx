import "./Loader.css";

/**
 *  A component to shown when loading data. The component will mount itself
 *  to the nearest positioning parent and span its whole size.
 */
export function Loader() {
    return (
        <div className="loader">
            <div className="loader-content">
                Acquiring data...
            </div>
        </div>
    );
};