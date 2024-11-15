
export default function Newsletter() {
  return (
    <div>
      <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
      <p className="text-gray-400 mb-4">
        Subscribe to our newsletter for tips, news and exclusive offers!
      </p>
      <form className="space-y-2">
        <div className="flex">
          <input
            type="email"
            placeholder="Your email address"
            className="bg-gray-800 text-gray-300 px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="bg-red-600 text-white px-4 py-2 rounded-r-lg hover:bg-red-700 transition-colors"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  )
}
