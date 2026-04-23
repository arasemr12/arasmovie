import { GitBranch, GitBranchIcon, GitBranchMinus, GitCommit, GitFork, Mail } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export const Icon = ({icon:IconComponent,...props}:{icon:any}) => {
    return(
        <div className="size-12 rounded-full bg-gray-900 relative" {...props}>
            <IconComponent className="absolute size-6 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"/>
        </div>
    )
};

export default function Footer() {
    return (
        <div className="w-full flex flex-col items-center mt-8 p-4 gap-12 bg-zinc-950">
            <div className="w-full lg:w-2/3 flex lg:flex-row flex-col-reverse gap-5 items-center justify-between">
                <div className="flex flex-col items-start gap-3 lg:w-1/2 w-full">
                    <div className="flex flex-row items-center gap-3 font-semibold">
                        <Icon icon={Mail}></Icon>
                        <span>holeder00@proton.me</span>
                    </div>
                    <div className="flex flex-row items-center gap-3 font-semibold">
                        <Icon icon={FaGithub}></Icon>
                        <span>arasemr12</span>
                    </div>
                </div>
                <div className="flex flex-col items-start lg:w-1/2 w-full">
                    <span className="text-xl font-semibold">Aras Movies</span>
                    <span className="mb-4">Discover the latest movies and TV shows</span>
                    <Link className="font-semibold" href={"/privacy-policy"}>Privacy Policy</Link>
                    <Link className="font-semibold" href={"/terms-of-service"}>Terms of Service</Link>
                </div>
            </div>
            <div className="w-full flex flex-col items-center font-semibold">
                <a target="_blank" href={"https://github.com/arasemr12"}>Made by arasemr1234 with ❤️</a>
            </div>
        </div>
    )
}
