"use client";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, XCircleIcon } from "lucide-react";
import { SubmitEvent, useEffect, useState } from "react";
import { toast } from "sonner";
import { setSecret } from "./actions";
import { useRouter } from "next/navigation";

export default function IndexLoginForm() {
    const [password, setPassword] = useState<string>("");
    const router = useRouter();

    const login = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            let res = await fetch("/api/auth", {
                method: "POST",
                body: JSON.stringify({
                    secret: password
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            let json = await res.json();
            if (!json.success) throw Error(json.message || "Invalid credentials!");

            setSecret(password);
            router.push("/");
        } catch (error) {
            let err = "Unhandled error!";

            if (error instanceof Error) err = error.message;

            toast(err, {
                position: "top-right",
                closeButton: true,
                icon: <XCircleIcon />,
            });
        }
    };

    return (
        <form className="w-full max-w-sm flex flex-col items-start gap-3" onSubmit={login}>
            <Input className="w-full max-w-sm" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button type="submit">Login</Button>
        </form>
    )
}