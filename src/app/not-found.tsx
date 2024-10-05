import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="h-[100vh]">
        <div className="flex min-h-screen flex-col items-center mx-[10%] sm:mx-[20%] pt-28 mb-12">
        <h1 id="resources" className=" text-center pb-12 text-4xl text-logored font-semibold">
            ERROR 404 - Page Not Found
        </h1>
        <p className="text-center text-lg">
            The page you are looking for does not exist. Please use the navigation bar above to find the page you are looking for.
        </p>
    </div>
    </div>
  )
}