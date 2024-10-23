"use client";
import SectionTitle from "../Common/SectionTitle";

const VideoTestimonials = () => {
    const videoData = [
        {
            id: 1,
            title: "Dr. Berg erzählt von seinen Erfahrungen",
            url: "https://www.youtube.com/embed/nXFuKdzkivc", // First video embed URL
            thumbnail: "/images/thumbnails/DrBerg.jpg" // Path to the thumbnail image
        },
        {
            id: 2,
            title: "Vorstellung Doc Dialog",
            url: "https://www.youtube.com/embed/XvHhcWJxmSk", // Second video embed URL
            thumbnail: "/images/thumbnails/Playlist.png" // Path to the thumbnail image
        }
    ];

    const playlistUrl = "https://www.youtube.com/playlist?list=PLTsg9q-3EH6cDZ7h5ZxE2BSD1hZXrArFE"; // Playlist URL

    return (
        <section id="video-testimonials" className="py-2 md:py-10 lg:py-4">
            <div className="container">
                <SectionTitle
                    title="Was Ärzte sagen"
                    paragraph="Hören Sie, was Ärzte und ihre Teams über die Arbeit mit Doc Dialog sagen. Weitere Videos in Kürze hier zu finden"
                    center
                />

                <div className="flex justify-center">
                    <div className="w-full flex flex-col items-center sm:w-full">
                        {/* Embed the current video */}
                        <div className="mb-2 relative w-full" style={{ paddingBottom: '75%' }}> {/* Aspect Ratio 4:3 */}
                            <iframe
                                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                                src={videoData[0].url} // Use the first video
                                title={videoData[0].title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        {/* Title below the video */}
                        <h3 className="text-lg font-bold text-black dark:text-white text-center mt-4">
                            {videoData[0].title}
                        </h3>

                        {/* Link to the full playlist */}
                        <a
                            href={playlistUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline text-center mt-6"
                        >
                            Weitere Videos
                        </a>

                        {/* Thumbnail linking to the playlist */}
                        <a
                            href={playlistUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4"
                        >
                            <img
                                src={videoData[1].thumbnail} // Correctly show the playlist thumbnail
                                alt="Thumbnail for Weitere Videos"
                                className="rounded-lg shadow-lg hover:opacity-80 transition-opacity duration-300 inner-shadow"
                                style={{ width: '100%', maxWidth: '400px' }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoTestimonials;
