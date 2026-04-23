import { ApiResponse } from "@/types/api";
import { MovieSearchResult } from "@/types/movie";
import { Metadata } from "next";
import WatchFrame from "@/components/general/WatchFrame";
import BannerAds from "@/components/general/BannerAds";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tv/${id}`);

    let json: ApiResponse<{ result: MovieSearchResult, iframeURL: string }> = await res.json();

    return {
        title: "Aras Movies - " + (json.data?.result?.original_name || json.data?.result?.original_title),
        openGraph: {
            title: "Aras Movies - " + (json.data?.result?.original_name || json.data?.result?.original_title),
            description: json.data?.result?.overview,
            type:"website",
        },
        description: json.data?.result?.overview,
    };
};

export default async function Movie({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tv/${id}`);

    let json: ApiResponse<{ result: MovieSearchResult, iframeURL: string }> = await res.json();

    if (!json.data) return (<></>);

    return (
        <div className="w-full h-auto flex flex-col items-center">
            <div className="lg:w-2/3 w-full h-auto flex flex-col items-start pt-32 gap-3">
                <WatchFrame title={json.data.result?.title || json.data.result?.name} overview={json.data.result?.overview} iframeUrl={json.data.iframeURL}/>
                <BannerAds/>
            </div>
        </div>
    );
}
