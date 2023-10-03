import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex justify-center items-center">
            {/* https://www.react-fast-marquee.com/ */}
            <div className="btn btn-error text-white">Breaking News</div>
            <Marquee pauseOnHover={true} speed={100}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BreakingNews;

