'use client'
export default function GlobalError() {
  return (
    <html lang="en">
      <body className="flex items-center justify-center min-h-screen bg-white">
        <div className="mx-auto my-16 flex max-w-xl flex-col gap-2 min-h-[50vh] text-center">
          <h2 className="text-2xl font-bold">Error!</h2>
          <p className="my-2 text-lg">
            Uh-oh! Looks like something broke. Give it another go or return to the homepage.
          </p>
          <div className="flex gap-4 mt-4">
            <button
              className="bg-black rounded-lg px-6 py-3 text-white font-semibold text-md flex items-center justify-center"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
            <button
              className="bg-black rounded-lg px-6 py-3 text-white font-semibold text-md flex items-center justify-center"
              onClick={() => window.location.href = '/'}
            >
              Go to Home Page
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
