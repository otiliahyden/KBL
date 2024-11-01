
import { client } from '../sanity/lib/client'
import styles from '../styles/dogs.module.scss'
import Link from 'next/link'

// index.js
const Dogs = (props) => {
    const { data = [] } = props
    return data && (
        <>
            <h1 className={styles.ourDogTitle}>Våra hundar</h1>
            <div className={styles.gridContainer}>

                {data.map((item, i) => (
                    <Link href={{
                        pathname: "/dogs/[slug]",
                        query: { slug: item.slug.current }
                    }} as={`/dogs/${item.slug.current}`}
                        key={i}>
                        <div key={i} className={styles.dogTile}>
                            <div style={{ backgroundImage: `url(${item.image.asset.url})` }} className={styles.dogoImage}>
                                <h1 className={styles.dogoTitle}>
                                    {item.title}
                                </h1>
                            </div>
                        </div>
                    </Link>
                )
                )}
            </div>
        </>
    )
}
export async function getServerSideProps() {

    let data = await client.fetch(`
    *[_type == "dog" && foder != true && dead != true] {
        image{asset->{url}},
        title,
        slug
    }
    `)
    return {
        props: { data }
    }
}

export default Dogs;