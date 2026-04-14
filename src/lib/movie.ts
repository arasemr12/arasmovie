import { getSecret } from "@/app/actions";
import { ApiResponse } from "@/types/api";
import { MovieSearchResult } from "@/types/movie";

export const searchMovies = async (q: string): Promise<MovieSearchResult[]> => {
    let secret = await getSecret();
    
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/search?q=${q}`,{
        headers:{
            Authorization:secret || ""
        }
    });

    let json:ApiResponse<{results:MovieSearchResult[]}> = await res.json();

    return json.data?.results || [];
};
