import SectionTitle from "../Common/SectionTitle";

const VideoTestimonials = () => {
    const videoData = [
        {
            id: 1,
            title: "Dr. Berg erzählt von seinen Erfahrungen",
            url: "https://www.youtube.com/embed/nXFuKdzkivc", // Correct embed format
        }
        // ,
        // {
        //     id: 2,
        //     title: "Vorstellung Doc Dialog",
        //     url: "https://www.youtube.com/embed/nXFuKdzkivc", // Correct embed format
        // },
        // {
        //     id: 3,
        //     title: "Dr. Berg erzählt von seinen Erfahrungen",
        //     url: "https://www.youtube.com/embed/nXFuKdzkivc", // Correct embed format
        // }
    ];

    return (
        <section id="video-testimonials" className="py-2 md:py-10 lg:py-4">
            <div className="container">
                <SectionTitle
                    title="Was Ärzte sagen"
                    paragraph="Hören Sie, was Ärzte und ihre Teams über die Arbeit mit Doc Dialog sagen. Weitere Videos in Kürze hier zu finden"
                    center
                />

                <div className="flex justify-center">
                    {videoData.map((video) => (
                        <div key={video.id} className="w-full flex flex-col items-center sm:w-full">
                            <div className="mb-2 relative w-full" style={{ paddingBottom: '75%' }}> {/* Aspect Ratio 4:3 */}
                                {/* Centered YouTube embed iframe */}
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                                    src={video.url}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            {/* Title directly below the video */}
                            <h3 className="text-lg font-bold text-black dark:text-white text-center mt-4">
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