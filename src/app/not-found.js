import Link from "next/link";

export default function NotFound() {
    return (
        <div className="p-4 bg-red-200 text-center">
            <h2 className="text-3xl mb-3">Not Found</h2>
            <p className="mb-3">Could not find requested resource</p>
            <Link className="p-2 bg-emerald-700 text-white mt-6 rounded-sm" href="/">Return Home</Link>
        </div>
    );
}
