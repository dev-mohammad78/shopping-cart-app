import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

function NotFoundPage() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center px-4 mb-10">
      <div className="text-center max-w-lg">
        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-black text-[var(--primary)]">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-[var(--text-muted)] mt-3 leading-7">
          Sorry, the page you're looking for doesn't exist or may have been
          moved.
        </p>

        {/* Buttons */}
        <div className="mt-8">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[var(--primary)] text-[var(--text-white)] hover:opacity-90 transition"
          >
            <IoHomeOutline />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
