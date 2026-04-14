import { cookies } from "next/headers";
import IndexLoginForm from "./indexLoginForm";
import Home from "./home";
import { ApiResponse } from "@/types/api";
import { MovieSearchResult } from "@/types/movie";
import { searchMovies } from "@/lib/movie";

export default async function Index() {
  let coo = await cookies();
  let secret = coo.get("secret");

  let auth = false;

  let initalmovies:MovieSearchResult[] = [];

  if(secret?.value){
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth`,{
      method:"POST",
      body:JSON.stringify({
        secret:secret.value
      }),
      headers:{
        "Content-Type":"application/json"
      }
    });

    let json = await res.json();

    if(!json.success) return;

    let movies = await searchMovies("gilmore girls");
    initalmovies = movies;

    auth = true;
  }

  if(auth) return <Home initalMovies={initalmovies}/>

  return (
    <div className="w-full h-auto flex flex-col items-center">
      <div className="lg:w-2/3 w-full h-auto flex flex-col items-start gap-3 pt-32">
        <IndexLoginForm/>
      </div>
    </div>
  );
}
