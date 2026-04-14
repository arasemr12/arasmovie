"use client";
import Movie from "@/components/general/Movie";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { ApiResponse } from "@/types/api";
import { MovieSearchResult } from "@/types/movie";
import { SubmitEvent, useEffect, useRef, useState } from "react";
import { getSecret, setSecret } from "./actions";
import { useRouter } from "next/navigation";
import { searchMovies } from "@/lib/movie";

export default function Home({initalMovies}: {initalMovies:MovieSearchResult[]}) {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [results,setResults] = useState<MovieSearchResult[]>(initalMovies);

  const router = useRouter();

  const password = useRef<string>("");

  const logout = () => {
    setSecret("");
    router.push("/");
  };

  const handleSearch = async(e?: SubmitEvent<HTMLFormElement>) => {
    setLoading(true);
    if(e) e.preventDefault();
    
    try {

      let re = await searchMovies(search);

      setResults(re);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async() => {
        let p = await getSecret();
        password.current = p || "";

        //handleSearch();
    })();
    /*if(!p) return;

    password.current = p;
    handleSearch();*/
  },[]);

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
        <div className="flex flex-row items-center justify-between gap-3 w-full max-w-md mb-8">
            <Button onClick={logout} variant={"destructive"}>Logout</Button>
        </div>
        {loading ? (<>
          <Spinner/>
        </>) : (
          <div className="w-full grid lg:grid-cols-4 grid-cols-1 gap-3">
            {results.map((movie) => (
              <Movie key={movie.id || Math.random()} movie={movie}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
