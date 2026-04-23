"use client";
import Movie from "@/components/general/Movie";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { MovieSearchResult } from "@/types/movie";
import { SubmitEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { searchMovies } from "@/lib/movie";
import { toast } from "sonner";
import BannerAds from "@/components/general/BannerAds";

export default function Home({ initalMovies }: { initalMovies: MovieSearchResult[] }) {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<MovieSearchResult[]>(initalMovies);

  const router = useRouter();

  const handleSearch = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      let re = await searchMovies(search);

      setResults(re);
      setLoading(false);
    } catch (error) {
      let errorMessage = "Unknown error";

      if(error instanceof Error){
        errorMessage = error?.message || "Unknown error";
      };

      toast(errorMessage);
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-auto flex flex-col items-center">
      <div className="lg:w-2/3 w-full h-auto flex flex-col items-center pt-32">
        <span className="text-4xl font-bold">Aras Movies</span>
        <span className="text-lg mb-8">Discover the latest movies and TV shows</span>
        <form onSubmit={handleSearch} className="w-full max-w-md mb-8">
          <ButtonGroup className="w-full max-w-md">
            <Input placeholder="Search for a movie or TV show" className="w-full max-w-md" value={search} onChange={(e) => setSearch(e.target.value)} />
            <Button type="submit" variant="outline">Search</Button>
          </ButtonGroup>
        </form>
        <div className="flex flex-row items-center justify-between gap-3 w-full max-w-md mb-4">
          <span>holeder00@proton.me</span>
        </div>
        {loading ? (<>
          <Spinner />
        </>) : (
          <div className="w-full grid lg:grid-cols-4 grid-cols-1 gap-3">
            {results.map((movie) => (
              <Movie key={movie?.id || Math.random()} movie={movie} />
            ))}
          </div>
        )}
        <BannerAds/>
      </div>
    </div>
  );
}
