
export default function SearchBar(){
    return (
           <div className="bg-white rounded-lg border border-gray-200 p-4 mt-5 max-w-120">
                                <form className="flex gap-2 " action="/assets" method="GET">
                                    <input type="text" name="query" placeholder="Search products..."
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded text-sm md:text-base focus:border-transparent" />
                                    <button className={`bg-blue-accent-500 text-light-500 px-3 md:px-8 py-2 rounded-lg cursor-pointer hover:font-semibold`}>Search</button>
                        
                                </form>
                            </div>
    )
}