import main_photo from './images/Main_page.jpg'

export default function Content() {
    return (
        <section className={'Content'} style={{backgroundImage: `url(${main_photo})`}}>

            <div className={'ContentText'}>
                <h1>Aperture Studios</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                    tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
                    vitae
                    erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                    tristique
                    posuere.
                </p>
            </div>

        </section>
    )
}