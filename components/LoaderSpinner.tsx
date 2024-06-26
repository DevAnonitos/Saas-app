import React from "react";
import { Loader } from "lucide-react";

const LoaderSpinner = () => {
    return (
        <div className="flex h-screen w-full">
            <Loader className="animate-spin text-black" size={30} />
        </div>
    );
};

export default LoaderSpinner;