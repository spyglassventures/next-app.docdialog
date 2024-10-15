import SectionTitle from "../Common/SectionTitle";

const Benefits = () => {
    const benefitsData = [
        {
            id: 1,
            value: "Fr. 50'000",
            description: "Wertschöpfung pro Jahr pro Praxis",
        },
        {
            id: 2,
            value: "30 Minuten",
            description: "Zeitersparnis pro Tag pro Arzt in Vollzeit",
        },
        {
            id: 3,
            value: "5+ Aufgaben",
            description: "werden direkt an das MPA-Team delegierbar – ohne zusätzlichen Aufwand",
        },
    ];

    return (
        <section id="benefits" className="py-6 md:py-10 lg:py-18">
            <div className="container">
                <SectionTitle title="Warum Doc Dialog?" paragraph="" center />

                <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3">
                    {benefitsData.map((benefit) => (
                        <div key={benefit.id} className="text-center">
                            <h3 className="text-4xl font-bold text-primary mb-2">
                                {benefit.value}
                            </h3>
                            <p className="text-base font-medium text-body-color">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
