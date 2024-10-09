export const Article = ({ title, subtitle, time, text }) => {
    return (
        <article className="text-center">
            <h1 className="text-2xl font-semibold">{ title }</h1>
            <p className="text-3xl font-light">{ subtitle }</p>
            { time && <p className="text-3xl font-light">{ time }</p> }
            { text && <p className="text-lg font-light w-[340px]">{ text }</p> }
        </article>
    )
}
