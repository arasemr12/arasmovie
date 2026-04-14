import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { ApiResponse } from "@/types/api";
import { MovieSearchResult } from "@/types/movie";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { cookies } from 'next/headers'

export default async function Movie({ params }: { params: Promise<{ id: string }> }) {
    const cookieStore = await cookies();
    const secret = cookieStore.get('secret');
    
    const { id } = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tv/${id}`,{
        headers:{
            Authorization:secret?.value || ""
        }
    });

    let json: ApiResponse<{result:MovieSearchResult,iframeURL:string}> = await res.json();

    if(!json.data) return (<></>);

    return (
        <div className="w-full h-auto flex flex-col items-center">
            <div className="lg:w-2/3 w-full h-auto flex flex-col items-start pt-32 gap-3">
                <Link href={"/"}><Button variant={"ghost"}><ArrowLeft/>Go Back</Button></Link>
                <span className="text-3xl font-semibold">{json.data.result?.title || json.data.result?.name}</span>
                <span className="">{json.data.result?.overview}</span>
                <iframe className="w-full h-auto aspect-video" src={json.data.iframeURL} frameBorder={0} referrerPolicy="origin" allowFullScreen></iframe>
                <span>{JSON.stringify(json)}</span>
            </div>
        </div>
    );
}
