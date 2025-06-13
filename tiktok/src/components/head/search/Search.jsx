import "./search.css"

const Search = () => {
    return <div className={"search"}>
        <form>
            <input type={"text"} placeholder={"搜索"} />
            <div className={"split-line"}></div>

            <label>
                <div>
                    <span className="iconfont icon-search"></span>
                </div>
                <input type={"submit"} className="search-submit" value="搜索" />
            </label>
        </form>
    </div>
}
export default Search