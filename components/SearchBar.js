import Link from 'next/link'

export default function (props) {
  return (
    <div className="search-bar">
      <input type="text" onChange={props.onChange} />
      <button>
        {/* <Link href="/search">
          <a>Search</a>
        </Link> */}
        Search
      </button>
    </div>
  )
}