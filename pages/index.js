import Link from 'next/link';

function HomePage () {
  return (
  <>
  <h1>The Home Page</h1>
  <ul>
    <li>
      <Link href='portfolio'>porfolio</Link>
    </li>
  </ul>
  </>
  )
};

export default HomePage;