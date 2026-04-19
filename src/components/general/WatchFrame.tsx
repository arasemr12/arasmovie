import { MovieSearchResult } from "@/types/movie";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

export default function WatchFrame({
    title,
    overview,
    iframeUrl,
    ...props
}: React.ComponentProps<"div"> & { title: string, overview:string, iframeUrl: string }) {
    return (
        <div className="flex flex-col items-start gap-3 w-full h-auto" {...props}>
            <Link href={"/"}><Button variant={"ghost"}><ArrowLeft />Go Back</Button></Link>
            <span className="text-3xl font-semibold">{title}</span>
            <span className="">{overview}</span>
            <iframe className="w-full h-auto aspect-video" src={iframeUrl} frameBorder={0} referrerPolicy="origin" allowFullScreen></iframe>
            <span>holeder00@proton.me</span>
        </div>
    )
}
