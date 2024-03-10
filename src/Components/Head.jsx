import { Link, Element } from 'react-scroll';

const Head = () => {
    return (
        <Element name="head">
            <div className="flex flex-col py-20 text-9xl text-black bg-blue-100 max-md:text-4xl">
                <div className="mt-80 w-full bg-zinc-300 min-h-[400px] max-md:mt-10 max-md:max-w-full" />
                <div className="self-end mt-40 mr-40 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
                    Brazilian Feijoada
                </div>
            </div>
        </Element>
    )
}

export default Head;