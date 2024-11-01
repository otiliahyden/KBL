import CTA from "./cta"
import CTABlock from "./ctaBlock"
import Gallery from "./gallery"
import Hero from "./hero"
import NewsFeed from './newsFeed'
import TextWithIllustration from "./textWithIllustration"
import Reviews from "./reviews"



const PageBuilder = (props) => {
    const renderPageSection = (type, data) => {
        switch (type) {
            case 'hero':
                return <Hero data={data} />
            case 'callToActionBlock':
                return <CTABlock data={data} />
            case 'gallery':
                return <Gallery data={data} />
            case 'newsFeed':
                return <NewsFeed data={data} />
            case 'reviewFeed':
                return <Reviews data={data} />
            case 'textWithIllustration':
                return <TextWithIllustration data={data} />
            case 'callToAction':
                return <CTA data={data} />
            default: <> </>
        }
    }

    return (
        <>
            {props.data && props.data.map((item) => (renderPageSection(item._type, item)))}
        </>
    )
}
export default PageBuilder