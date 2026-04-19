import Home from "./home";
import { MovieSearchResult } from "@/types/movie";
import { searchMovies } from "@/lib/movie";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aras Movies",
  description: "Discover the latest movies and TV shows",
  openGraph:{
    title:"Aras Movies",
    description: "Discover the latest movies and TV shows",
    type:"website",
  },
};

export default async function Index() {
  let movies = await searchMovies("gilmore girls");
  let initalmovies:MovieSearchResult[] = movies;

  return (<Home initalMovies={initalmovies}/>);
}
