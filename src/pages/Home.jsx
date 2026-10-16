import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen">
{/* Hero section */}
<section className="bg-red-50 px-6 py-20 text-center">
<h1 className="text-4xl font-bold text-gray-900">
Every Donation Can Save a Life
</h1>

    <p className="mx-auto mt-4 max-w-2xl text-gray-600">
      STEMDonor connects people who need blood with people
      willing to donate. Together, we can make a difference.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link
        to="/blood-requests/create"
        className="rounded-lg bg-red-600 px-6 py-3 text-white hover:bg-red-700"
      >
        Request Blood
      </Link>

      <Link
        to="/donations/create"
        className="rounded-lg border border-red-600 px-6 py-3 text-red-600 hover:bg-red-100"
      >
        Offer Donation
      </Link>
    </div>
  </section>

  {/* Features section */}
  <section className="px-6 py-16">
    <h2 className="text-center text-3xl font-bold">
      How STEMDonor Helps
    </h2>

    <div className="mx-auto mt-10 grid max-w-5xl gap-8 md:grid-cols-3">
      <div className="rounded-xl border p-6">
        <h3 className="text-xl font-semibold">Request Blood</h3>
        <p className="mt-3 text-gray-600">
          Create a blood request when you or someone else needs blood.
        </p>
      </div>

      <div className="rounded-xl border p-6">
        <h3 className="text-xl font-semibold">Offer Donation</h3>
        <p className="mt-3 text-gray-600">
          Register your willingness to donate and help someone in need.
        </p>
      </div>

      <div className="rounded-xl border p-6">
        <h3 className="text-xl font-semibold">Find Matches</h3>
        <p className="mt-3 text-gray-600">
          Connect compatible blood requests with available donors.
        </p>
      </div>
    </div>
  </section>
</div>
  )
}

export default Home
