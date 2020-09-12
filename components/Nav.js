import Link from 'next/link'

export default function () {
  return (
    <nav>
      <h1>
        <Link href="/">
          <a>FirstLand</a>
        </Link>
      </h1>

      {/* <ul id="nav-links">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a href="/">About</a>
        </Link>
        <li><a href="/">Issues</a></li>
        <li><a href="/">Support</a></li>
        <li><a href="/">Contact</a></li>
      </ul> */}
    </nav>
  )
}