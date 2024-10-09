export const FamilyCard = ({ title, custom = 'bg-[#D3D3D3]', woman, man }) => {
    return (
        <div className={`py-14 xl:px-36 w-full xl:w-[575px] h-max ${ custom } flex flex-col items-center`}>
            <h1 className="cormorant-garamond text-[#4D504A] text-[55px] font-bold">{ title }</h1>
            <div className="border border-[#707070] w-24 mb-10 mt-2"></div>
            <div className="text-2xl text-[#84847C] text-center font-medium">
                <p>{ woman.mother }</p>
                <p>{ woman.father }</p>
                <p>&</p>
                <p>{ man.mother }</p>
                <p>{ man.father }</p>
            </div>
        </div>
    )
}
