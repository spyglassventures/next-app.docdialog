import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Bestellformular";
import bestellformularPageConfig from "@/config/bestellformularPageConfig.json";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: bestellformularPageConfig.metadata.title,
    description: bestellformularPageConfig.metadata.description,
    // other metadata
};

const BestellformularPage = () => {
    return (
        <>
            <Breadcrumb
                pageName={bestellformularPageConfig.breadcrumb.pageName}
                description={bestellformularPageConfig.breadcrumb.description}
            />

            <Contact />
        </>
    );
};

export default BestellformularPage;
