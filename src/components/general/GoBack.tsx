import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function GoBack(){
    return(
        <Link href={"/"}><Button variant={"ghost"}><ArrowLeft />Go Back</Button></Link>
    )
}