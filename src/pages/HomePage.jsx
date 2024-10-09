import { Article, Button, CardImage, FamilyCard, Gift, Mail } from "../components"

export const HomePage = () => {
    return (
        <section className="bg-[#F4F0ED]">
            <div className="h-screen w-full flex items-end justify-center bg-[url('/img/Inicio_GRISBET_DSC_5744.jpg')] bg-cover bg-center xl:bg-top relative">
                <div className="text-white text-center relative z-10 mb-10 xl:mb-28">
                    <h1 className="cormorant-garamond text-[100px] leading-[.8] xl:leading-normal xl:text-[120px] font-bold drop-shadow-xl mb-10 xl:m-0">Grisbet & Jorge</h1>
                    <p className="text-xl xl:text-3xl font-light">
                        de una amistad sincera a un amor<br className="xl:hidden"/> duradero, <br/>
                        nos llena de alegría anunciar que vamos<br className="xl:hidden"/> a casarnos.
                    </p>
                </div>
                <div className="absolute w-full h-[400px] bg-gradient-to-t from-[#3C2E1D] to-transparent bottom-0 hidden xl:block"></div>
                <div className="absolute w-full xl:hidden">
                    <div className="w-full h-[200px] bg-gradient-to-t from-[#57442E] to-transparent "></div>
                    <div className="w-full h-[200px] bg-[#57442E]"></div>
                </div>
            </div>

            <div className="container m-auto flex flex-col xl:flex-row items-center justify-center py-10 px-5 xl:px-0">
                <div className="bg-[url('/img/section-2.jpg')] xl:bg-none bg-center h-[538px] xl:h-auto w-full xl:w-auto">
                    <img src="/img/section-2.jpg" className="hidden xl:block"/>
                </div>
                <div className="bg-white flex flex-col items-center text-center xl:w-[640px] pt-10 pb-20 xl:pt-20 xl:pb-28 xl:px-20 px-3">
                    <h1 className="cormorant-garamond text-[#4D504A] text-[50px] font-bold">Grisbet & Jorge</h1>
                    <div className="border border-[#707070] w-16 mb-8 mt-3"></div>
                    <p className="text-[#7A7A7A] text-xl xl:text-2xl font-light">
                        Tras años compartiendo risas, secretos y sueños, 
                        hemos encontrado en el otro no solo a nuestro 
                        mejor amigo, sino a nuestra media naranja.
                    </p>
                </div>
            </div>

            <div className="h-screen w-full bg-[url('/img/section-3-mobile-GRISBET_DSC_5818.jpg')] xl:bg-[url('/img/section-3-GRISBET_DSC_5818.jpg')] xl:bg-cover bg-center xl:bg-top">
                <div className="h-full w-full flex items-center justify-center bg-[#3C3527]/60">
                    <p className="relative z-10 text-xl xl:text-[40px] xl:leading-tight text-center text-[#F4F0ED] font-light mt-20">
                        Acompáñanos a celebrar este<br className="xl:hidden"/> hermoso capítulo lleno de<br className="hidden xl:block"/> amor y<br className="xl:hidden"/> compromiso.
                    </p>
                </div>
            </div>

            <div className="container m-auto py-20 relative">
                <div className="xl:w-[1150px] m-auto flex flex-col xl:flex-row xl:h-[645px] px-5 xl:p-0">
                    <div className="relative z-10 xl:translate-x-5">
                        <FamilyCard 
                            title="PADRES"
                            custom="bg-[#D3D3D3]"
                            woman={{
                                mother: 'Griselda Monroy Ortiz',
                                father: 'Norberto Ayala Murgía'
                            }}
                            man={{
                                mother: 'Hipólita Mancilla Serratos',
                                father: 'Jorge Humberto Gómez Real'
                            }}
                        />
                    </div>
                    <div className="xl:flex items-end relative z-20 xl:-translate-x-5">
                        <FamilyCard 
                            title="PADRINOS"
                            custom="bg-white"
                            woman={{
                                mother: 'Griselda Monroy Ortiz',
                                father: 'Norberto Ayala Murgía'
                            }}
                            man={{
                                mother: 'María Luisa Ayala Murguía',
                                father: 'Ernesto Araujo'
                            }}
                        />

                    </div>
                </div>
            </div>

            <div className="h-screen w-full bg-[url('/img/nogueras_iglesia.jpg')] xl:bg-[url('/img/nogueras_iglesia_.jpg')] bg-cover bg-bottom">
                <div className="h-full w-full flex flex-col items-center justify-center gap-16 xl:gap-32 bg-[#3C3527]/60 text-[#F4F0ED]">
                    <Article 
                        title="Fecha"
                        subtitle={(<>28 de Diciembre de<br className="xl:hidden"/> 2024</>)}
                    />
                    <Article
                        title="Ceremonia Religiosa"
                        subtitle="Santuario San Juan Pablo II"
                        time="6:00 PM"
                        text="(Turquesa #54, Residencial Esmeralda Nte., 28017, Colima, Col.)"
                    />
                    <Article
                        title="Recepción"
                        subtitle='Hacienda "Los Torres"'
                        time="8:00 PM"
                        text="(Melchor Ocampo #14, Centro, 28970, Villa de Álvarez, Col.)"
                    />
                </div>
            </div>

            <div className="py-10 xl:py-20 flex flex-col xl:flex-row justify-center items-center xl:items-start gap-16 xl:gap-36">
                <CardImage img="/img/carta-GRISBET_DSC_5778.jpg" rotation="-rotate-12 order-2 xl:order-1" />
                <div className="flex flex-col justify-center gap-10 xl:gap-36 order-1 xl:order-2">
                    <div>
                        <Mail className="m-auto xl:hidden" width={288} height={248} />
                        <Mail className="m-auto hidden xl:block" />
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xl text-[#84847C] font-medium mb-5">Agradecemos su confirmación</p>
                        <div className="flex flex-col xl:flex-row gap-5 xl:gap-14">
                            <Button text="Asistiré" />
                            <Button text="No Asistiré" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16 xl:py-32 flex flex-col xl:flex-row justify-center gap-36 bg-white">
                <article className="text-center text-[#84847C] text-xl font-medium flex flex-col gap-20">
                    <div>
                        <h1 className="cormorant-garamond text-[#4D504A] text-[50px] font-bold">Mesa De Regalos</h1>
                        <div className="border border-[#707070] w-16 mx-auto mb-7 mt-9"></div>
                        <p className="text-[26px]">Tu presencia es nuestro mejor<br/> regalo.</p>
                    </div>

                    <div>
                        <p>Si deseas hacernos un obsequio especial, hemos<br className="hidden xl:block"/> dispuesto una mesa de regalos en</p>
                        <p className="text-6xl mt-8">LA MARINA</p>
                        <p>Evento MR:2555</p>
                    </div>

                    <div className="xl:hidden">
                        <CardImage img="/img/regalo-GRISBET_DSC_5816.jpg" rotation="rotate-12 mx-auto" />
                    </div>
                    
                    <div>
                        <p>También puedes optar por un obsequio en efectivo<br className="hidden xl:block"/> en sobre, que será recibido con mucho cariño durante la<br className="hidden xl:block"/> celebración.</p>
                        <Gift className="mx-auto mt-2" />
                    </div>
                </article>
                <div className="hidden xl:block">
                    <CardImage img="/img/regalo-GRISBET_DSC_5816.jpg" rotation="rotate-12" />
                </div>
            </div>

            <div className="h-[276px] xl:h-screen w-full bg-[url('/img/final-GRISBET_DSC_5881.jpg')] bg-cover bg-center"></div>

            <div className="w-full bg-white cormorant-garamond text-[#5C5C5C] text-[50px] xl:text-[70px] font-bold text-center py-5">
                <h1>Grisbet & Jorge</h1>
            </div>
        </section>
    )
}
