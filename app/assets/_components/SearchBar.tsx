import Button from "@/components/ui/Button";

export default function SearchBar(){
    return (
           <div className="bg-white rounded-lg border border-gray-200 p-4 mt-5 w-120">
                                <form className="flex gap-2 " action="/assets" method="GET">
                                    <input type="text" name="query" placeholder="Search products..."
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded focus:border-transparent" />
                                    <Button text="Search"/>
                                </form>
                            </div>
    )
}