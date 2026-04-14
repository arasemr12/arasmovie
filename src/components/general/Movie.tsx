import { MovieSearchResult } from "@/types/movie";
import Link from "next/link";

export default function Movie({
    movie,
    ...props
}: React.ComponentProps<"div"> & { movie: MovieSearchResult }) {
    return (
        <Link href={`/${movie.media_type}/${movie.id}`} className="flex flex-col items-start relative w-full select-none cursor-pointer">
            <img className="w-full" draggable={false} src={`${movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : `/notfound.png`}`} alt="" />
            <div className="absolute w-full h-full bg-black/30 flex flex-col items-start pt-4 pl-4">
                <span className="text-3xl font-semibold">{movie?.title || movie?.name}</span>
            </div>
        </Link>
    )
}
