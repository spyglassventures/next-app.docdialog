import SectionTitle from "../Common/SectionTitle";

const VideoTestimonials = () => {
    const videoData = [
        {
            id: 1,
            title: "Dr. Müller spart Zeit mit Doc Dialog",
            url: "https://www.youtube.com/embed/HKYOhHY3N7E", // Correct embed format
        },
        {
            id: 2,
            title: "Vorstellung Doc Dialog",
            url: "https://www.youtube.com/embed/x2adIhJ7kAE", // Correct embed format
        },
        {
            id: 3,
            title: "Dr. Berg nutzt die Differentialsdiagnosefunktion",
            url: "https://www.youtube.com/embed/oGDl1WRx0RE", // Correct embed format
        }
    ];

    return (
        <section id="video-testimonials" className="py-2 md:py-10 lg:py-4">
            <div className="container">
                <SectionTitle
                    title="Was Ärzte sagen"
                    paragraph="Hören Sie, was Ärzte und ihre Teams über die Arbeit mit Doc Dialog sagen."
                    center
                />

                <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                    {videoData.map((video) => (
                        <div key={video.id} className="w-full">
                            <div className="video-wrapper mb-2">
                                {/* Use YouTube embed iframe */}
                                <iframe
                                    className="w-full rounded-lg shadow-lg"
                                    width="100%"
                                    height="315"
                                    src={video.url}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <h3 className="text-lg font-bold text-black dark:text-white">
                                {video.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoTestimonials;
