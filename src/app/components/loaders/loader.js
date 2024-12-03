"use client"

export function BlogsLoader() {
    return (
        <>
            <div>
                <h2
                    className="bg-gray-200 py-7 mb-3 opacity-50"
                    style={{ width: "40%" }}
                />
            </div>
            <div className="grid grid-cols-3 gap-5 mt-5">
                <div className="mt-3 border border-gray opacity-80">
                    <div className="bg-gray-200" style={{ height: "200px" }} />
                    <div className="p-2">
                        <h2 className="bg-gray-200 py-2 opacity-80" />
                    </div>
                </div>

                <div className="mt-3 border border-gray opacity-50">
                    <div className="bg-gray-200" style={{ height: "200px" }} />
                    <div className="p-2">
                        <h2 className="bg-gray-200 py-2 opacity-80" />
                    </div>
                </div>
                <div className="mt-3 border border-gray opacity-25">
                    <div className="bg-gray-200" style={{ height: "200px" }} />
                    <div className="p-2">
                        <h2 className="bg-gray-200 py-2 opacity-80" />
                    </div>
                </div>
                <div className="mt-3 border border-gray opacity-20">
                    <div className="bg-gray-200" style={{ height: "200px" }} />
                    <div className="p-2">
                        <h2 className="bg-gray-200 py-2 opacity-80" />
                    </div>
                </div>
                <div className="mt-3 border border-gray opacity-10">
                    <div className="bg-gray-200" style={{ height: "200px" }} />
                    <div className="p-2">
                        <h2 className="bg-gray-200 py-2 opacity-80" />
                    </div>
                </div>
            </div>
        </>
    )
}

export function SingleBlogsLoader() {
    return (
        <>
            <div className="h-[30px] bg-gray-200 mb-30 w-[150px]"  />
            <div className="w-100 relative h-[500px] border-2 border-gray-400 bg-gray-100 mt-9 rounded-md overflow-hidden" />
            <div className="text-5xl my-3 capitalize" />
            <div className="h-[30px] bg-gray-200 mb-4" />
            <div className="h-[30px] bg-gray-200 mb-4 w-[50%]" />
            <div className="h-[30px] bg-gray-200 mb-4 w-[90%]" />
            <div className="h-[30px] bg-gray-200 mb-4 w-[30%]" />
            <div className="h-[30px] bg-gray-200 mb-4 w-[70%]" />
            <div className="h-[30px] bg-gray-200 mb-4" />
            <div className="h-[30px] bg-gray-200 mb-4 w-[96%]" />
        </>
    )
}

export function CommentsLoader() {
    return (
        <>
            <div className="comments mt-9">
                <p className="bg-gray-200 h-[60px] mb-3" />
                <hr />

                <ul className="mt-6">
                    <li className="pb-4 flex opacity-100" >
                        <span className="h-[90px] w-[90px] min-w-[90px] rounded-full border-2 border-gray-200 mr-4 bg-gray-200"></span>
                        <div className="mb-2 w-[100%]">
                            <h4 className="capitalize bg-gray-200 h-[40px]" />
                            <small className="lowercase bg-gray-200 w-[300px] h-[30px]"/>
                            <p className="mb-3 mt-3 bg-gray-200 h-[40px] w-[90%]" />
                            <p className="mb-3 mt-3 bg-gray-200 h-[40px] w-[70%]" />
                            <p className="mb-3 mt-3 bg-gray-200 h-[40px] w-[20%]" />
                        </div>
                    </li>
                    <li className="pb-4 flex opacity-60" >
                        <span className="h-[90px] w-[90px] min-w-[90px] rounded-full border-2 border-gray-200 mr-4 bg-gray-200"></span>
                        <div className="mb-2 w-[100%]">
                            <h4 className="capitalize bg-gray-200 h-[40px]" />
                            <small className="lowercase bg-gray-200 w-[300px] h-[30px]"/>
                            <p className="mb-3 mt-3 bg-gray-200 h-[40px] w-[90%]" />
                            <p className="mb-3 mt-3 bg-gray-200 h-[40px] w-[70%]" />
                            <p className="mb-3 mt-3 bg-gray-200 h-[40px] w-[20%]" />
                        </div>
                    </li>
                    <li className="pb-4 flex opacity-20" >
                        <span className="h-[90px] w-[90px] min-w-[90px] rounded-full border-2 border-gray-200 mr-4 bg-gray-200"></span>
                        <div className="mb-2 w-[100%]">
                            <h4 className="capitalize bg-gray-200 h-[40px]" />
                            <small className="lowercase bg-gray-200 w-[300px] h-[30px]"/>
                            <p className="mb-3 mt-3 bg-gray-200 h-[40px] w-[90%]" />
                            <p className="mb-3 mt-3 bg-gray-200 h-[40px] w-[70%]" />
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
