import Image from 'next/image'
import React from 'react'

export default function ProductPage() {
    const data = [
        {
            id: 1,
            name: "jeep rubicon ",
            description: "it is a luxuorious rubicon jeepit is a luxuorious rubicon jeepit is a luxuorious rubicon jeepit is a luxuorious rubicon jeepit is a luxuorious rubicon jeep",
            price: 40000,
            contactEmail: "nathgvsk@gmail.com",
            imageUrl: "https://imgd.aeplcdn.com/664x374/n/enfqg3a_1573837.jpg?q=80",
            boost: true
        },
    ]

    return (
        <div className="px-12 py-12 max-w-7xl mx-auto min-h-screen">
            <div className="flex justify-between mb-6 lg:mb-12">
                <h2 className="text-3xl lg:text-4xl items-start uppercase">
                    {data[0].name}
                </h2>
                <a
                    href={`mailto:${data[0].contactEmail}?subject=Interested in purchasing ${data[0].name}`}
                    className="bg-orange-900 hover:bg-orange-950 text-white px-4 py-2 rounded-md hidden lg:flex"
                >
                    Contact the Seller!
                </a>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mb-4">
                <div className="flex items-center justify-center">
                    <Image
                        className="rounded-lg shadow-xl border-4 border-gray-200 p-2 lg:min-w-[40rem] lg:min-h-[30rem]"
                        width={600}
                        height={600}
                        alt={data[0].name}
                        src={(data[0].imageUrl)}
                    />
                </div>
                <div className="bg-gray-953 p-6 w-full">
                    <label className="font-bold">💰 PRICE:</label>
                    <p className="text-gray-800 text-2xl lg:text-3xl pt-4 py-6 text-center border-b-2 decoration-dotted border-dashed border-gray-800 border-opacity-15">
                        ${data[0].price}
                    </p>

                    {data[0].boost && (
                        <div className="pt-4">
                            <label className="font-bold">⭐️ PREMIUM PRODUCT:</label>
                            <p className="text-gray-800 text-2xl lg:text-3xl py-6 text-center border-b-2 decoration-dotted border-dashed border-gray-800 border-opacity-15">
                                Yes
                            </p>
                        </div>
                    )}

                    <a
                        href={`mailto:${data[0].contactEmail}`}
                        className="bg-orange-900 hover:bg-orange-950 text-white px-4 py-2 rounded-md flex lg:hidden w-full items-center justify-center my-12"
                    >
                        Contact the Seller!
                    </a>
                </div>
            </div>
            <div className="pt-6">
                <label className="font-bold pb-2 border-b-2 decoration-dotted border-dashed border-gray-800 border-opacity-15">
                    📝 DESCRIPTION:
                </label>
                <p className="text-gray-600 text-lg my-4 pt-4 pb-6 ">
                    {data[0].description}
                </p>
            </div>
        </div>

    )
}
