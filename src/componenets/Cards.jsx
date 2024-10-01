function Cards({ khan, addToCard, isAddToCart, showRemoveFromCart, removeCards }) {
    const { category, images, description, price, title } = khan

    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={`${images}`}
                    alt="API Ka Issue He"
                />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {category.name}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {title}
                    </h1>
                    <p className="leading-relaxed mb-3">
                        {description}
                    </p>
                    <div
                        onClick={addToCard}
                        className="flex items-center flex-wrap cursor-pointer">
                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            {isAddToCart ? "added..." : "Add To Card"}
                            <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14" />
                                <path d="M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                    {showRemoveFromCart && (
                        <div
                            onClick={removeCards}
                            className="flex items-center flex-wrap cursor-pointer mt-3">
                            < a className=" text-red-600 inline-flex items-center md:mb-2 lg:mb-0">
                                {"Remove From Cart"}
                                <svg
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14" />
                                    <path d="M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export default Cards;