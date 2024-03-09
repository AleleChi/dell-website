import statImage from './assests/dell-build-main.png'



function  Stat () {

    const stats = [
        {
            data: "2008",
            title: "Year Founded"
        },
        {
            data: "700+",
            title: "Students in 2022"
        },
        {
            data: "70",
            title: "Staffing"
        },
        {
            data: "3000+",
            title: "Alumni"
        },
      
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
                <div className="sm:hidden lg:block lg:max-w-xl">
                    <img src={statImage} className="rounded-lg" alt="school building" />
                </div>
                <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
                    <div className="max-w-2xl">
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                           Our Statistics Show Our Level of Competence
                        </h3>
                        <p className="mt-3 max-w-xl">
                            Each year, our students score high in national and internation exams.
                        </p>
                    </div>
                    <div className="flex-none mt-6 md:mt-0 lg:mt-6">
                        <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
                            {
                                stats.map((item, idx) => (
                                    <li key={idx} className="">
                                        <h4 className="text-4xl text-green-600 font-semibold">{item.data}</h4>
                                        <p className="mt-3 font-medium">{item.title}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stat;