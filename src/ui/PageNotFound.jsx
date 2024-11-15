import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-white md:text-4x">Somethings missing.</p>
        
        <Link to="/">
  <button className="inline-flex text-white bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
    Back to Homepage
  </button>
</Link>
        </div>
      </div>
    </section>
  )
}
